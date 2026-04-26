import { useEffect } from 'react';

/**
 * SEO Component for managing page meta tags
 * Handles Open Graph, Twitter Cards, and general SEO meta tags
 */
const SEO = ({
  title = 'Blossom High School',
  description = 'Excellence & Integrity in education. Premier private secondary school in Ibadan, Nigeria.',
  keywords = 'secondary school, high school, private school, Ibadan, Nigeria, education, WAEC, NECO, JAMB',
  ogImage = `${import.meta.env.VITE_SITE_URL}/og-image.jpg`,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.bhsibadan.ng';
  const fullTitle = title.includes('Blossom') ? title : `${title} | Blossom High School`;
  const url = canonicalUrl || window.location.href;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property, content, useProperty = false) => {
      const attribute = useProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // General meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'Blossom High School', true);
    updateMetaTag('og:locale', 'en_NG', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Robots meta tag
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Canonical URL
    let linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', url);

  }, [fullTitle, description, keywords, ogImage, url, ogType, twitterCard, noindex]);

  return null; // This component doesn't render anything
};

export default SEO;
