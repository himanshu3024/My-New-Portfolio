# Environment Variables Setup for Production

## The Problem
Your contact form works locally but not in production because environment variables (API keys) are not set on the deployed server.

## Solutions by Platform

### 1. Vercel (Most Common for Next.js)

#### Option A: Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   ```
   Name: RESEND_API_KEY
   Value: re_your_resend_api_key_here
   Environment: Production, Preview, Development
   ```
5. Redeploy your project

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variable
vercel env add RESEND_API_KEY

# Redeploy
vercel --prod
```

### 2. Netlify

#### Option A: Netlify Dashboard
1. Go to [app.netlify.com](https://app.netlify.com)
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add:
   ```
   Key: RESEND_API_KEY
   Value: re_your_resend_api_key_here
   ```
5. Redeploy

#### Option B: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Add environment variable
netlify env:set RESEND_API_KEY re_your_resend_api_key_here

# Redeploy
netlify deploy --prod
```

### 3. Railway

1. Go to [railway.app](https://railway.app)
2. Select your project
3. Go to **Variables** tab
4. Add:
   ```
   RESEND_API_KEY=re_your_resend_api_key_here
   ```
5. Redeploy

### 4. Render

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Select your service
3. Go to **Environment** tab
4. Add:
   ```
   Key: RESEND_API_KEY
   Value: re_your_resend_api_key_here
   ```
5. Redeploy

### 5. DigitalOcean App Platform

1. Go to [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
2. Select your app
3. Go to **Settings** → **Environment Variables**
4. Add:
   ```
   RESEND_API_KEY=re_your_resend_api_key_here
   ```
5. Redeploy

## Quick Test

After setting environment variables:

1. **Redeploy your site**
2. **Test the contact form** on your live site
3. **Check the console logs** (if available) or your email
4. **Look for**: `✅ Email sent successfully via Resend`

## Troubleshooting

### If it still doesn't work:

1. **Check deployment logs** for errors
2. **Verify API key** is correct
3. **Test API key** locally first
4. **Check Resend dashboard** for email delivery status

### Common Issues:

- **API key not set**: Environment variable missing
- **Wrong API key**: Invalid or expired key
- **Rate limiting**: Too many requests
- **Domain restrictions**: Resend free tier limitations

## Security Notes

- ✅ **Never commit API keys** to GitHub
- ✅ **Use environment variables** in production
- ✅ **Rotate keys** regularly
- ✅ **Monitor usage** in Resend dashboard 