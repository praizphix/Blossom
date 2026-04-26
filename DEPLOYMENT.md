# Deployment Guide - Blossom High School Website

## Prerequisites
- Node.js 18+ installed
- Supabase account and project set up
- Vercel account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Firebase Configuration (Optional - if using Firebase)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Site Configuration
VITE_SITE_URL=https://your-domain.vercel.app
VITE_WHATSAPP_NUMBER=+234XXXXXXXXXX
```

## Database Setup

1. Log in to your Supabase dashboard
2. Go to SQL Editor
3. Run the SQL script from `supabase-setup.sql`
4. Verify that all 5 tables are created:
   - contacts
   - applications
   - newsletter_subscribers
   - news
   - gallery

## Deploying to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variables from your `.env` file
7. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts to link/create project
# Add environment variables when prompted

# For production deployment
vercel --prod
```

## Environment Variables in Vercel

Add these in your Vercel project settings → Environment Variables:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `VITE_SITE_URL` - Your production URL (e.g., https://blossom.vercel.app)
- `VITE_WHATSAPP_NUMBER` - School WhatsApp contact number

## Post-Deployment Checklist

- [ ] Test all forms (Contact, Admissions, Newsletter)
- [ ] Verify Supabase connection is working
- [ ] Check that images load correctly
- [ ] Test navigation across all pages
- [ ] Verify responsive design on mobile devices
- [ ] Test WhatsApp button functionality
- [ ] Check browser console for any errors
- [ ] Verify RLS policies are working (public can submit, can't read)

## Troubleshooting

### Forms not submitting
- Check Supabase RLS policies are enabled
- Verify environment variables are set correctly in Vercel
- Check browser console for CORS errors

### Images not loading
- Ensure images are in the `src/assets/images/` directory
- Check that image imports are correct
- Verify Vercel build completed successfully

### Build errors
- Run `npm run build` locally to test
- Check for any TypeScript/ESLint errors
- Ensure all dependencies are in package.json

## Local Development

```bash
# Install dependencies
npm install

# Copy .env.example to .env and fill in values
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
Blossom/
├── src/
│   ├── assets/images/     # Local images
│   ├── components/        # React components
│   ├── data/             # Static data
│   ├── layouts/          # Layout components
│   ├── pages/            # Route pages
│   ├── services/         # Database services
│   └── utils/            # Helper functions
├── public/               # Static assets
├── .env                  # Environment variables (not in git)
├── .env.example          # Template for environment variables
├── vercel.json           # Vercel configuration
└── supabase-setup.sql    # Database schema
```

## Support

For issues or questions:
- Check the GitHub repository issues
- Review Vercel deployment logs
- Check Supabase logs for database errors
