/**
 * SEO Configuration for all pages
 * Centralized meta tags, descriptions, and keywords for each page
 */

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.bhsibadan.ng';

export const seoConfig = {
  home: {
    title: 'Blossom High School - Excellence & Integrity in Education | Ibadan, Nigeria',
    description: 'Premier private secondary school in Ibadan, Nigeria. Offering world-class education with emphasis on academic excellence, character development, and moral values. Admissions open for JSS & SSS.',
    keywords: 'Blossom High School, secondary school Ibadan, private school Nigeria, best school Ibadan, JSS SSS education, WAEC preparation, JAMB coaching, international curriculum Nigeria',
    ogImage: `${siteUrl}/og-images/home.jpg`,
    canonicalUrl: `${siteUrl}/`
  },

  about: {
    title: 'About Us - Our Mission, Vision & Values',
    description: 'Learn about Blossom High School\'s commitment to nurturing excellence and raising future leaders. Discover our mission, vision, core values, and educational philosophy that sets us apart.',
    keywords: 'about Blossom High School, school mission vision, educational philosophy, school values, excellence integrity discipline',
    ogImage: `${siteUrl}/og-images/about.jpg`,
    canonicalUrl: `${siteUrl}/about`
  },

  academics: {
    title: 'Academic Programs - JSS & SSS Curriculum',
    description: 'Comprehensive academic programs from JSS 1-3 to SSS 1-3. STEM excellence, arts, commerce tracks with 100% WAEC pass rates. Preparing students for JAMB, NECO, and university entrance.',
    keywords: 'academic programs, JSS curriculum, SSS curriculum, STEM education, WAEC preparation, NECO coaching, JAMB CBT, science arts commerce, Nigerian curriculum',
    ogImage: `${siteUrl}/og-images/academics.jpg`,
    canonicalUrl: `${siteUrl}/academics`
  },

  admissions: {
    title: 'Admissions - Apply Now for 2024/2025 Session',
    description: 'Admissions now open for the 2024/2025 academic session. Apply online for JSS 1, JSS 2, JSS 3, SSS 1, SSS 2, or SSS 3. Simple application process with transparent admission criteria.',
    keywords: 'school admission, apply to Blossom, admission requirements, school enrollment, JSS admission, SSS admission, secondary school admission Nigeria',
    ogImage: `${siteUrl}/og-images/admissions.jpg`,
    canonicalUrl: `${siteUrl}/admissions`
  },

  facilities: {
    title: 'World-Class Facilities - Modern Learning Environment',
    description: 'State-of-the-art facilities including digital library, science laboratories, computer labs, sports complex, modern cafeteria, and air-conditioned classrooms for optimal learning.',
    keywords: 'school facilities, science laboratory, computer lab, library, sports facilities, modern classroom, school infrastructure',
    ogImage: `${siteUrl}/og-images/facilities.jpg`,
    canonicalUrl: `${siteUrl}/facilities`
  },

  contact: {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Blossom High School for inquiries, school tours, and admissions. Located at Sode Arola, Ilupeju Quarters, Apete Ibadan. Call +234 802 7585609 or email info@bhsibadan.ng',
    keywords: 'contact school, school address, school phone number, book school tour, visit school, school location Ibadan',
    ogImage: `${siteUrl}/og-images/contact.jpg`,
    canonicalUrl: `${siteUrl}/contact`
  },

  gallery: {
    title: 'Photo Gallery - Life at Blossom High School',
    description: 'Explore photo galleries showcasing student life, academic activities, sports events, cultural programs, and memorable moments at Blossom High School.',
    keywords: 'school gallery, school photos, student life, campus photos, school events, academic activities',
    ogImage: `${siteUrl}/og-images/gallery.jpg`,
    canonicalUrl: `${siteUrl}/gallery`
  },

  news: {
    title: 'Latest News & Events - School Updates',
    description: 'Stay updated with the latest news, announcements, achievements, and upcoming events at Blossom High School. Read about student success stories and school activities.',
    keywords: 'school news, school events, announcements, student achievements, school activities, academic updates',
    ogImage: `${siteUrl}/og-images/news.jpg`,
    canonicalUrl: `${siteUrl}/news`
  },

  curriculum: {
    title: 'Curriculum - Comprehensive Educational Framework',
    description: 'Detailed curriculum information for all classes. British-Nigerian hybrid curriculum with focus on critical thinking, problem-solving, and holistic development.',
    keywords: 'school curriculum, educational framework, Nigerian curriculum, British curriculum, subject offerings, course structure',
    ogImage: `${siteUrl}/og-images/curriculum.jpg`,
    canonicalUrl: `${siteUrl}/curriculum`
  },

  portal: {
    title: 'Student Portal - Access Your Account',
    description: 'Secure login portal for students, parents, and staff. Access grades, attendance, assignments, announcements, and school resources online.',
    keywords: 'student portal, parent portal, online grades, school management system, student login',
    ogImage: `${siteUrl}/og-images/portal.jpg`,
    canonicalUrl: `${siteUrl}/portal`,
    noindex: true // Don't index login pages
  },

  admin: {
    title: 'Admin Dashboard',
    description: 'Administrative dashboard for managing school operations, student records, and communication.',
    keywords: 'admin dashboard, school management',
    ogImage: `${siteUrl}/og-images/admin.jpg`,
    canonicalUrl: `${siteUrl}/admin`,
    noindex: true // Don't index admin pages
  }
};

// Structured data for local business
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Blossom High School",
  "alternateName": "BHS Ibadan",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "description": "Premier private secondary school in Ibadan, Nigeria offering world-class education from JSS to SSS with emphasis on academic excellence and character development.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sode Arola, Ilupeju Quarters, Apete",
    "addressLocality": "Ibadan",
    "addressRegion": "Oyo State",
    "postalCode": "",
    "addressCountry": "NG"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-802-758-5609",
    "contactType": "Admissions",
    "email": "info@bhsibadan.ng",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://facebook.com/bhsibadan",
    "https://twitter.com/bhsibadan",
    "https://instagram.com/bhsibadan"
  ],
  "founder": {
    "@type": "Person",
    "name": "Blossom High School Founders"
  },
  "foundingDate": "1994",
  "areaServed": {
    "@type": "City",
    "name": "Ibadan"
  }
};

export default seoConfig;
