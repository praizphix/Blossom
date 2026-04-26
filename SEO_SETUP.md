# Social Sharing & SEO Configuration

This document outlines the social sharing and SEO implementation for Blossom High School website.

## ✅ Implemented Features

### 1. **SEO Component** (`src/components/SEO.jsx`)
Reusable component that dynamically updates page meta tags:
- **Title tags** - Unique for each page
- **Meta descriptions** - Optimized for search engines
- **Keywords** - Relevant search terms
- **Open Graph tags** - For Facebook, LinkedIn, WhatsApp sharing
- **Twitter Card tags** - For Twitter sharing
- **Canonical URLs** - Prevents duplicate content issues
- **Robots meta** - Control search engine indexing

### 2. **SEO Configuration** (`src/utils/seoConfig.js`)
Centralized configuration for all pages with:
- Custom title for each page
- Unique description (155-160 characters)
- Relevant keywords
- Open Graph images
- Canonical URLs
- Structured data (JSON-LD) for rich search results

### 3. **Pages with SEO**
All major pages now have optimized meta tags:
- ✅ **Home** - Main landing page
- ✅ **About** - School information
- ✅ **Academics** - Academic programs
- ✅ **Admissions** - Application process
- ✅ **Contact** - Contact information
- ✅ **Facilities** - Infrastructure details
- ✅ **Gallery** - Photo gallery
- ✅ **News** - Latest updates
- ✅ **Curriculum** - Course details
- ✅ **Portal** - Student/parent login (noindex)
- ✅ **Admin** - Admin dashboard (noindex)

### 4. **Structured Data**
Added JSON-LD structured data to `index.html`:
- Organization schema
- Educational organization type
- Contact information
- Address details
- Founding date

## 🌐 Domain Configuration

### Updated Environment Variables
```bash
VITE_SITE_URL=https://www.bhsibadan.ng
VITE_CONTACT_EMAIL=info@bhsibadan.ng
VITE_WHATSAPP_NUMBER=+2348027585609
```

### Email Configuration
All form submissions will be sent to: **info@bhsibadan.ng**
- Contact form inquiries
- Admissions applications
- Newsletter subscriptions

## 📱 Social Sharing Preview

When sharing on social media, users will see:

### Facebook/WhatsApp/LinkedIn
- **Title**: Page-specific title
- **Description**: SEO-optimized description
- **Image**: Custom OG image (1200x630px recommended)
- **URL**: Clean canonical URL

### Twitter
- **Card Type**: Summary with large image
- **Title**: Page-specific title  
- **Description**: SEO-optimized description
- **Image**: Custom Twitter card image

## 🎯 SEO Best Practices Implemented

1. **Unique Titles** - Each page has a unique, descriptive title
2. **Meta Descriptions** - 155-160 characters, action-oriented
3. **Keyword Optimization** - Relevant keywords without stuffing
4. **Mobile-Friendly** - Responsive meta viewport
5. **Social Media Tags** - Open Graph & Twitter Cards
6. **Structured Data** - JSON-LD for rich snippets
7. **Canonical URLs** - Prevents duplicate content
8. **Image Alt Text** - All images have descriptive alt attributes
9. **Robots Control** - Noindex for login/admin pages
10. **Fast Loading** - Optimized images and lazy loading

## 📊 Expected Results

### Search Engine Rankings
- **Local SEO**: "secondary school Ibadan", "private school Nigeria"
- **Academic**: "best WAEC school", "JAMB preparation Ibadan"
- **Branded**: "Blossom High School", "BHS Ibadan"

### Social Media Engagement
- Rich previews when sharing links
- Increased click-through rates
- Professional brand appearance
- Better trust signals

## 🖼️ Open Graph Image Requirements

For best social sharing results, create these OG images (1200x630px):

```
/public/og-images/
  ├── home.jpg          - School campus/students
  ├── about.jpg         - School building/logo
  ├── academics.jpg     - Classroom/students learning
  ├── admissions.jpg    - Application/enrollment theme
  ├── facilities.jpg    - Modern facilities
  ├── contact.jpg       - School location/map
  ├── gallery.jpg       - Photo collage
  └── news.jpg          - News/events theme
```

**Design Guidelines:**
- Size: 1200x630px
- Format: JPG or PNG
- File size: < 1MB
- Text: Large, readable (avoid small text)
- Branding: Include school logo
- Imagery: High-quality, professional photos

## 🔍 Testing Social Sharing

### Facebook Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter URL: `https://www.bhsibadan.ng/`
3. Click "Debug" to see how it appears
4. Click "Scrape Again" if needed

### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter URL: `https://www.bhsibadan.ng/`
3. Preview how card appears

### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter URL and inspect preview

## 📈 Monitoring & Analytics

### Google Search Console
1. Verify domain ownership
2. Submit sitemap: `https://www.bhsibadan.ng/sitemap.xml`
3. Monitor search performance
4. Check index coverage

### Google Analytics
Track social sharing:
- Social network referrals
- Share button clicks
- Page engagement from social

### Tools
- **Google PageSpeed Insights**: Performance
- **Google Rich Results Test**: Structured data
- **Screaming Frog**: Technical SEO audit

## 🚀 Next Steps

1. **Create OG Images** - Design custom social sharing images
2. **Submit Sitemap** - Generate and submit XML sitemap
3. **Google My Business** - Create/verify school listing
4. **Social Profiles** - Update social media with website URL
5. **Backlinks** - Get listed in Nigerian school directories
6. **Content Strategy** - Regular blog posts/news updates

## 📝 Usage Example

```jsx
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';

const MyPage = () => {
  return (
    <>
      <SEO {...seoConfig.myPage} />
      <div>
        {/* Page content */}
      </div>
    </>
  );
};
```

## 🔐 Vercel Environment Variables

When deploying, add these to Vercel:
```
VITE_SITE_URL=https://www.bhsibadan.ng
VITE_CONTACT_EMAIL=info@bhsibadan.ng
VITE_SUPABASE_URL=[your-supabase-url]
VITE_SUPABASE_ANON_KEY=[your-key]
VITE_WHATSAPP_NUMBER=+2348027585609
```

## ✅ Checklist

- [x] SEO component created
- [x] SEO config for all pages
- [x] Meta tags added to pages
- [x] Structured data in HTML
- [x] Domain configured
- [x] Email configured
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [ ] Create OG images
- [ ] Submit to Google Search Console
- [ ] Create sitemap.xml
- [ ] Set up Google Analytics
- [ ] Test social sharing
- [ ] Verify structured data

## 📞 Support

For questions or issues:
- Email: info@bhsibadan.ng
- Phone: +234 802 7585609
- Website: https://www.bhsibadan.ng
