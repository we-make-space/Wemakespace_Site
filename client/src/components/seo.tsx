import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description = "Wemakespace is an extraordinary digital studio specializing in spatial UI and high-performance software ecosystems.", 
  image = "/og-image.png", 
  type = "website" 
}: SEOProps) {
  useEffect(() => {
    const siteName = "Wemakespace";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    // Update basic tags
    document.title = fullTitle;
    
    const updateTag = (selector: string, attr: string, value: string) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attr, value);
      } else {
        // pro-actively handle missing tags if needed
        const head = document.getElementsByTagName('head')[0];
        const newTag = document.createElement('meta');
        if (selector.includes('property')) {
          newTag.setAttribute('property', selector.split('"')[1]);
        } else {
          newTag.setAttribute('name', selector.split('"')[1]);
        }
        newTag.setAttribute(attr, value);
        head.appendChild(newTag);
      }
    };

    updateTag('meta[property="og:title"]', 'content', fullTitle);
    updateTag('meta[name="twitter:title"]', 'content', fullTitle);
    updateTag('meta[property="og:description"]', 'content', description);
    updateTag('meta[name="twitter:description"]', 'content', description);
    updateTag('meta[property="og:type"]', 'content', type);
    
    // We keep images as placeholders or generated ones if provided
    if (image) {
      updateTag('meta[property="og:image"]', 'content', image);
      updateTag('meta[name="twitter:image"]', 'content', image);
    }
  }, [title, description, image, type]);

  return null;
}
