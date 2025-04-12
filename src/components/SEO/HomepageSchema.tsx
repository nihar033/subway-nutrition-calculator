
import React from 'react';
import { Helmet } from 'react-helmet';

const HomepageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Subway Smart Eats Guide",
    "url": "https://subwaysmarteats.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://subwaysmarteats.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Use our Subway Nutrition Calculator to make healthier choices. Track calories, macros, and find heart-healthy options for your Subway sandwich, salad, or wrap.",
    "publisher": {
      "@type": "Organization",
      "name": "Subway Smart Eats Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://subwaysmarteats.com/logo.png"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Subway Smart Eats Guide",
    "url": "https://subwaysmarteats.com",
    "logo": "https://subwaysmarteats.com/logo.png",
    "sameAs": [
      "https://facebook.com/subwaysmarteats",
      "https://twitter.com/subwaysmarteats",
      "https://instagram.com/subwaysmarteats"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default HomepageSchema;
