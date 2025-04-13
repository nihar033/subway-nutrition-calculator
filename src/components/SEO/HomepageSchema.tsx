
import React from 'react';
import { Helmet } from 'react-helmet';

const HomepageSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Subway Nutrition Calculator",
    "url": "https://subway-nutrition-calculator.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://subway-nutrition-calculator.com/nutrition-database?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Use our Subway Nutrition Calculator to make healthier choices. Track calories, macros, and find heart-healthy options for your Subway sandwich, salad, or wrap.",
    "publisher": {
      "@type": "Organization",
      "name": "Subway Nutrition Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://subway-nutrition-calculator.com/logo.png"
      }
    },
    "keywords": [
      "subway nutrition calculator",
      "subway calorie calculator",
      "subway calories",
      "healthy subway options",
      "subway menu nutrition",
      "subway macros",
      "subway nutritional information"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Subway Nutrition Calculator",
    "url": "https://subway-nutrition-calculator.com",
    "logo": "https://subway-nutrition-calculator.com/logo.png",
    "sameAs": [
      "https://facebook.com/subwaynutritioncalculator",
      "https://twitter.com/subway_nutrition",
      "https://instagram.com/subway_nutrition"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "subwaynutritioncal@gmail.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://subway-nutrition-calculator.com"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default HomepageSchema;
