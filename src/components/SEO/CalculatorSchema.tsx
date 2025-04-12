
import React from 'react';
import { Helmet } from 'react-helmet';

const CalculatorSchema = () => {
  const calculatorSchemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Subway Nutrition Calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Calculate nutrition information for your custom Subway sandwich, salad, or wrap. Track calories, macros, and find heart-healthy options.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "256"
    }
  };

  const howToSchemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Subway Nutrition Calculator",
    "description": "Step by step guide to using our Subway Nutrition Calculator to plan healthier meals.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Select Your Meal Type",
        "text": "Choose between a sandwich, salad, or wrap to start building your meal."
      },
      {
        "@type": "HowToStep",
        "name": "Add Ingredients",
        "text": "Customize with your choice of bread, protein, cheese, veggies, and sauces."
      },
      {
        "@type": "HowToStep",
        "name": "Review Nutrition",
        "text": "See real-time updates of your meal's nutritional content as you build it."
      },
      {
        "@type": "HowToStep",
        "name": "Make Informed Choices",
        "text": "Adjust your selections to meet your dietary goals and preferences."
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(calculatorSchemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchemaData)}
      </script>
    </Helmet>
  );
};

export default CalculatorSchema;
