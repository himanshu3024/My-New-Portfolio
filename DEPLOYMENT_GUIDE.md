# 🚀 Portfolio Enhancement Deployment Guide

## 📋 Overview
This guide will help you deploy the enhanced portfolio with Azure Functions backend for the contact form and all the technical improvements.

## 🛠️ Prerequisites
- Azure Subscription
- Azure CLI installed
- Node.js 18+ installed
- SendGrid account (free tier available)

## 📧 Azure Functions Setup

### 1. Create Azure Function App

```bash
# Login to Azure
az login

# Create Resource Group
az group create --name portfolio-backend-rg --location eastus

# Create Storage Account
az storage account create --name portfoliobackendstorage --resource-group portfolio-backend-rg --location eastus --sku Standard_LRS

# Create Function App
az functionapp create --resource-group portfolio-backend-rg --consumption-plan-location eastus --runtime node --runtime-version 18 --functions-version 4 --name portfolio-contact-api --storage-account portfoliobackendstorage --os-type Linux
```

### 2. Configure SendGrid Integration

1. **Create SendGrid Account:**
   - Go to [SendGrid](https://sendgrid.com/) and create a free account
   - Verify your domain or use single sender verification

2. **Get API Key:**
   - Navigate to Settings > API Keys
   - Create a new API Key with "Mail Send" permissions
   - Copy the API key

3. **Configure Azure Function:**
```bash
# Set SendGrid API Key
az functionapp config appsettings set --name portfolio-contact-api --resource-group portfolio-backend-rg --settings SendGridApiKey="YOUR_SENDGRID_API_KEY"

# Set environment variables
az functionapp config appsettings set --name portfolio-contact-api --resource-group portfolio-backend-rg --settings NODE_ENV="production"
```

### 3. Deploy Azure Functions

```bash
# Navigate to Azure Functions directory
cd azure-functions

# Install dependencies
npm install

# Deploy to Azure
func azure functionapp publish portfolio-contact-api
```

### 4. Update Frontend Configuration

Update the contact form to use the Azure Function:

```typescript
// In components/contact-section.tsx, update the API URL:
const AZURE_FUNCTION_URL = "https://portfolio-contact-api.azurewebsites.net/api/contact";
```

## 🔧 Environment Configuration

### 1. Create Environment Variables

Create a `.env.local` file in your project root:

```env
# Azure Function URL
NEXT_PUBLIC_AZURE_FUNCTION_URL=https://portfolio-contact-api.azurewebsites.net/api/contact

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CLARITY_ID=your-microsoft-clarity-id

# SEO Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

### 2. Update SEO Configuration

In `app/layout.tsx`, update the verification codes:

```typescript
verification: {
  google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "your-google-verification-code",
  // ... other verification codes
},
```

## 📊 Analytics Setup

### 1. Google Analytics 4

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to your environment variables

### 2. Microsoft Clarity

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Create a new project
3. Get your Clarity ID
4. Add to your environment variables

### 3. Add Analytics Component

Create `components/analytics.tsx`:

```typescript
"use client"

import Script from "next/script"

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      
      {clarityId && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  )
}
```

Add to your layout:

```typescript
import { Analytics } from "@/components/analytics"

// In the body, after ThemeProvider:
<Analytics />
```

## 🧪 Testing Setup

### 1. Install Testing Dependencies

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

### 2. Create Jest Configuration

Create `jest.config.js`:

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

### 3. Create Jest Setup

Create `jest.setup.js`:

```javascript
import '@testing-library/jest-dom'
```

### 4. Add Test Scripts

Update `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 5. Create Sample Tests

Create `__tests__/components/contact-form.test.tsx`:

```typescript
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactSection from '@/components/contact-section'

describe('Contact Form', () => {
  it('renders contact form', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(<ContactSection />)
    const submitButton = screen.getByRole('button', { name: /send message/i })
    
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/all fields are required/i)).toBeInTheDocument()
    })
  })
})
```

## 🚀 Deployment Steps

### 1. Build and Deploy Frontend

```bash
# Build the application
npm run build

# Deploy to Azure Static Web Apps
# (Use your existing deployment method)
```

### 2. Test the Integration

1. Test the contact form locally
2. Verify Azure Function is working
3. Check email delivery
4. Test analytics tracking

### 3. Monitor and Optimize

1. Set up Azure Application Insights for the Function App
2. Monitor email delivery rates
3. Track portfolio analytics
4. Optimize performance based on metrics

## 🔒 Security Considerations

1. **CORS Configuration:** The Azure Function is configured to allow all origins for development. For production, restrict to your domain.

2. **Rate Limiting:** Consider implementing rate limiting on the Azure Function to prevent spam.

3. **Input Validation:** The function includes basic validation, but consider adding more robust validation.

4. **API Key Security:** Store SendGrid API key in Azure Key Vault for production.

## 📈 Performance Optimization

1. **Image Optimization:** Ensure all images are optimized and use Next.js Image component
2. **Code Splitting:** Next.js automatically handles code splitting
3. **Caching:** Configure proper caching headers for static assets
4. **CDN:** Use Azure CDN for global content delivery

## 🆘 Troubleshooting

### Common Issues:

1. **CORS Errors:** Check Azure Function CORS settings
2. **Email Not Sending:** Verify SendGrid API key and domain verification
3. **Function Not Deploying:** Check Azure CLI login and permissions
4. **Analytics Not Working:** Verify environment variables are set correctly

### Support Resources:

- [Azure Functions Documentation](https://docs.microsoft.com/en-us/azure/azure-functions/)
- [SendGrid Documentation](https://sendgrid.com/docs/)
- [Next.js Documentation](https://nextjs.org/docs)

## ✅ Checklist

- [ ] Azure Function App created and deployed
- [ ] SendGrid account configured
- [ ] Environment variables set
- [ ] Analytics configured
- [ ] Tests written and passing
- [ ] Contact form tested
- [ ] SEO optimization complete
- [ ] Performance optimized
- [ ] Security measures implemented

---

**Need Help?** If you encounter any issues during deployment, check the troubleshooting section or reach out for support. 