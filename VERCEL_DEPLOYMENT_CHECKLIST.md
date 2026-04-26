# Vercel Deployment Checklist

## ✅ Pre-Deployment Setup (Complete)

All the following items have been completed and pushed to GitHub:

- [x] Supabase database configured with 5 tables
- [x] Contact form integrated with Supabase
- [x] Admissions form integrated with Supabase
- [x] Newsletter subscription in Footer
- [x] Environment variables configured in `.env`
- [x] Nigerian student images added to hero sections
- [x] Animations implemented across all pages
- [x] Image optimization with lazy loading
- [x] SEO meta tags on all 11 pages
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Structured data (JSON-LD) in index.html
- [x] Contact email (info@bhsibadan.ng) in form messages
- [x] All changes committed and pushed to GitHub

## 🚀 Deploying to Vercel

### Step 1: Connect GitHub Repository

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Find and select your **Blossom** repository
5. Click **"Import"**

### Step 2: Configure Project Settings

**Framework Preset:** Vite  
**Root Directory:** `./` (leave as default)  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Install Command:** `npm install`

### Step 3: Add Environment Variables

Click on **"Environment Variables"** and add these:

```
VITE_SUPABASE_URL=https://wsmfaqctmylzahgqrfqx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzbWZhcWN0bXlsemFoZ3FyZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxODI2NjcsImV4cCI6MjA5Mjc1ODY2N30.iGCC4EmUXT0eXAEGiE1VDWccte1qrQjz7mZXtNPieU4
VITE_SITE_URL=https://www.bhsibadan.ng
VITE_CONTACT_EMAIL=info@bhsibadan.ng
VITE_WHATSAPP_NUMBER=+2348027585609
```

**Important:** Set these for **Production**, **Preview**, and **Development** environments.

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (2-3 minutes)
3. You'll get a deployment URL like `blossom-xyz.vercel.app`

### Step 5: Configure Custom Domain

1. Go to your Vercel project → **Settings** → **Domains**
2. Add your domain: `www.bhsibadan.ng`
3. Follow DNS configuration instructions from Vercel
4. Add these DNS records at your domain registrar:

**For www.bhsibadan.ng:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For bhsibadan.ng (root):**
```
Type: A
Name: @
Value: 76.76.21.21
```

5. Wait for DNS propagation (can take 5-48 hours)

### Step 6: Update Environment Variable

After domain is connected:
1. Go to **Settings** → **Environment Variables**
2. Update `VITE_SITE_URL` to: `https://www.bhsibadan.ng`
3. Redeploy the project

## 🔍 Post-Deployment Testing

### 1. Test All Forms
- [ ] Submit a test contact inquiry
- [ ] Submit a test admissions application
- [ ] Subscribe to newsletter with a test email
- [ ] Check Supabase dashboard to verify entries

### 2. Test Navigation
- [ ] Visit all 11 pages
- [ ] Check mobile responsiveness
- [ ] Test all internal links
- [ ] Verify WhatsApp button works

### 3. Test SEO & Social Sharing

**Facebook Debugger:**
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: `https://www.bhsibadan.ng`
3. Click "Debug" and "Scrape Again"
4. Verify title, description, and image appear correctly

**Twitter Card Validator:**
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: `https://www.bhsibadan.ng`
3. Preview the Twitter card

**LinkedIn Post Inspector:**
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: `https://www.bhsibadan.ng`
3. Check preview

### 4. Performance Testing
- [ ] Run Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] Target: 90+ score on mobile and desktop
- [ ] Check Core Web Vitals (LCP, FID, CLS)

## 📊 Next Steps After Deployment

### 1. Submit to Google Search Console
1. Go to: https://search.google.com/search-console
2. Add property: `https://www.bhsibadan.ng`
3. Verify ownership (Vercel makes this easy)
4. Submit sitemap: `https://www.bhsibadan.ng/sitemap.xml` (create sitemap first)

### 2. Create and Add Sitemap
```bash
# Install sitemap generator
npm install -D vite-plugin-sitemap

# Configure in vite.config.js
# Then rebuild and redeploy
```

### 3. Set Up Google Analytics
1. Create GA4 property
2. Add tracking code to index.html
3. Configure goals and conversions

### 4. Create OG Images
Design custom Open Graph images (1200x630px) for each page:
- Home: School campus/students
- About: School building/logo
- Academics: Classroom scene
- Admissions: Application theme
- Facilities: Modern infrastructure
- Contact: School location
- Gallery: Photo collage
- News: News/events theme

Save to: `/public/og-images/[page-name].jpg`

Update paths in `src/utils/seoConfig.js`

### 5. Set Up Email Notifications (Optional)

Consider setting up automated emails:
- Send confirmation emails when forms are submitted
- Notify admissions team of new applications
- Send welcome emails to newsletter subscribers

Options:
- Supabase Edge Functions with SendGrid
- Vercel Serverless Functions with Resend
- Zapier integration with Gmail

### 6. Google My Business

1. Claim/create business listing
2. Add school information:
   - **Name:** Blossom High School
   - **Address:** Sode Arola, Ilupeju Quarters, Apete, Ibadan, Oyo State
   - **Phone:** +234 (0) 802 7585609
   - **Website:** https://www.bhsibadan.ng
   - **Category:** Private School
3. Upload photos of campus
4. Encourage parent reviews

### 7. Monitor & Maintain

**Weekly:**
- Check Supabase for new submissions
- Respond to contact inquiries
- Update news section with latest events

**Monthly:**
- Review Google Analytics data
- Check Google Search Console for SEO issues
- Update gallery with new photos
- Add new news articles

**Quarterly:**
- Review and update meta descriptions
- Check for broken links
- Update admission dates and fees
- Refresh OG images if needed

## 🔐 Security Checklist

- [x] Environment variables not committed to GitHub
- [x] Supabase RLS policies enabled
- [x] Admin and Portal pages set to noindex
- [x] HTTPS enforced (automatic with Vercel)
- [x] Security headers configured in vercel.json

## 📞 Support & Documentation

**Created Documentation:**
- `DEPLOYMENT.md` - Deployment guide
- `SEO_SETUP.md` - SEO configuration details
- `IMAGE_OPTIMIZATION.md` - Image optimization guide
- `SUPABASE_SETUP.md` - Database setup guide
- `README.md` - Project overview

**Contact Information:**
- **Email:** info@bhsibadan.ng
- **Phone:** +234 802 7585609
- **Domain:** https://www.bhsibadan.ng
- **GitHub:** https://github.com/praizphix/Blossom

## 🎉 Quick Deploy Command

If you prefer using Vercel CLI:

```bash
# Install Vercel CLI (first time only)
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts to link project
# Add environment variables when prompted

# Deploy to production
vercel --prod
```

## ⚠️ Common Issues & Solutions

**Build fails on Vercel:**
- Check that all dependencies are in `package.json`
- Verify environment variables are set correctly
- Look at build logs for specific errors

**Images not loading:**
- Ensure images are in `src/assets/images/` or `public/`
- Check file paths are correct
- Verify images were pushed to GitHub

**Forms not working:**
- Verify Supabase URL and anon key in Vercel
- Check Supabase RLS policies
- Look at browser console for errors

**SEO tags not appearing:**
- Clear browser cache
- Verify `VITE_SITE_URL` is set correctly
- Check meta tags in page source (View → Source)

**Domain not connecting:**
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records at registrar
- Check Vercel dashboard for SSL certificate status

---

## ✅ Ready to Deploy!

Your project is fully configured and ready for production deployment. All code is on GitHub, SEO is implemented, forms are connected to Supabase, and documentation is complete.

**Current Status:**
- ✅ All pages built and tested
- ✅ SEO fully implemented
- ✅ Forms integrated with database
- ✅ Images optimized
- ✅ Animations working
- ✅ All code pushed to GitHub

**To deploy:**
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables
4. Click Deploy!

Good luck with your deployment! 🚀
