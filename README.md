
# Smart Harvest - Tax Loss Harvesting Application

Smart Harvest is a comprehensive tax harvesting application designed to help investors optimize their tax strategies through automated analysis and educational resources.

## Project Info

**URL**: https://lovable.dev/projects/3a62dde4-6bac-4bc8-aee8-e3b90d89d92f

## Features

- Dashboard with portfolio performance metrics
- Interactive tax loss harvesting opportunities
- Educational resources on tax optimization
- Tax analysis tools with customizable settings
- Dark/light mode with system preference support

## Publishing to GitHub

To publish this project to GitHub:

1. **Create a new GitHub repository**:
   - Go to [GitHub](https://github.com) and sign in to your account
   - Click the "+" icon in the top-right corner and select "New repository"
   - Name your repository (e.g., "smart-harvest")
   - Choose public or private visibility
   - Click "Create repository"

2. **Export from Lovable to GitHub**:
   - In your Lovable project, click on the "Share" button in the top-right corner
   - Select "Export to GitHub"
   - Follow the instructions to connect your GitHub account if not already connected
   - Select the repository you created
   - Confirm the export

3. **Clone the repository locally**:
   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   npm install
   npm run dev
   ```

## Deploying as a Web Application

You can deploy this app as a web application using one of the following methods:

### Option 1: Deploy via Lovable

1. Open your project in [Lovable](https://lovable.dev/projects/3a62dde4-6bac-4bc8-aee8-e3b90d89d92f)
2. Click on "Share" → "Publish"
3. Follow the instructions to publish your application

### Option 2: Deploy to Vercel, Netlify, or similar platforms

1. Connect your GitHub repository to your preferred hosting platform
2. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy the application

## Building for Android

To build and publish this application for Android devices:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Android Studio](https://developer.android.com/studio) installed
- JDK 11 or higher

### Step 1: Add Capacitor to your project

```sh
# Install Capacitor core packages
npm install @capacitor/core @capacitor/android
npm install -D @capacitor/cli

# Initialize Capacitor configuration
npx cap init "SmartHarvest" "app.smartharvest.com" --web-dir=dist
```

### Step 2: Build your web application

```sh
npm run build
```

### Step 3: Add Android platform and synchronize

```sh
npx cap add android
npx cap sync
```

### Step 4: Open in Android Studio

```sh
npx cap open android
```

### Step 5: Configure Android app settings

In Android Studio:
1. Update the app icon in `android/app/src/main/res/`
2. Modify `AndroidManifest.xml` if needed
3. Update version in `android/app/build.gradle`

### Step 6: Build and test

1. Connect an Android device or use an emulator
2. Click "Run" in Android Studio
3. Test your application thoroughly

### Step 7: Generate signed APK/Bundle for Google Play

1. In Android Studio, go to Build → Generate Signed Bundle/APK
2. Create a new keystore or use an existing one
3. Follow the instructions to generate your release build
4. The resulting APK/Bundle can be uploaded to Google Play Console

## Custom Domain Setup

If you want to connect a custom domain to your Lovable app:
1. Navigate to Project → Settings → Domains in Lovable
2. Click "Connect Domain"
3. Follow the DNS configuration instructions

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

[MIT License](LICENSE)
