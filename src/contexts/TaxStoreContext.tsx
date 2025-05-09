
import React, { createContext, useContext, useState } from 'react';
import { Asset, HarvestOpportunity } from '@/data/types';
import { toast } from "sonner";

interface TaxStoreContextType {
  portfolioValue: number;
  harvestOpportunities: number;
  potentialSavings: number;
  ytdTaxImpact: number;
  harvestedOpportunities: string[];
  harvestOpportunity: (opportunityId: string, assetName: string, savings: number) => void;
}

const initialValues = {
  portfolioValue: 125350,
  harvestOpportunities: 5,
  potentialSavings: 1240,
  ytdTaxImpact: 850,
  harvestedOpportunities: [],
};

const TaxStoreContext = createContext<TaxStoreContextType | undefined>(undefined);

export const TaxStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolioValue, setPortfolioValue] = useState(initialValues.portfolioValue);
  const [harvestOpportunities, setHarvestOpportunities] = useState(initialValues.harvestOpportunities);
  const [potentialSavings, setPotentialSavings] = useState(initialValues.potentialSavings);
  const [ytdTaxImpact, setYtdTaxImpact] = useState(initialValues.ytdTaxImpact);
  const [harvestedOpportunities, setHarvestedOpportunities] = useState<string[]>(initialValues.harvestedOpportunities);

  const harvestOpportunity = (opportunityId: string, assetName: string, savings: number) => {
    if (harvestedOpportunities.includes(opportunityId)) {
      return; // Already harvested
    }

    // Update harvested opportunities list
    setHarvestedOpportunities([...harvestedOpportunities, opportunityId]);
    
    // Update portfolio statistics
    setHarvestOpportunities(prev => Math.max(0, prev - 1));
    setPotentialSavings(prev => Math.max(0, prev - savings));
    setYtdTaxImpact(prev => prev + savings);
    
    // Portfolio value might slightly increase due to optimized tax position
    const smallIncrease = Math.round(savings * 0.05); // Small increase based on tax savings
    setPortfolioValue(prev => prev + smallIncrease);
    
    // Notify user of the changes
    toast.success(`Successfully harvested tax losses for ${assetName}`, {
      description: `You saved $${savings.toLocaleString()} in taxes!`,
      duration: 5000,
    });
  };

  return (
    <TaxStoreContext.Provider 
      value={{ 
        portfolioValue, 
        harvestOpportunities, 
        potentialSavings, 
        ytdTaxImpact,
        harvestedOpportunities,
        harvestOpportunity 
      }}
    >
      {children}
    </TaxStoreContext.Provider>
  );
};

export const useTaxStore = () => {
  const context = useContext(TaxStoreContext);
  if (context === undefined) {
    throw new Error('useTaxStore must be used within a TaxStoreProvider');
  }
  return context;
};
