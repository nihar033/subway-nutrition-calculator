
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
    "description": "Calculate nutrition information for your custom Subway sandwich, salad, or wrap. Track calories, macros, and find heart-healthy options with our free Subway Calorie Calculator.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "256"
    },
    "keywords": [
      "subway nutrition calculator", 
      "subway calorie calculator",
      "subway calories",
      "subway macros",
      "subway meal planner"
    ]
  };

  const howToSchemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use the Subway Nutrition Calculator",
    "description": "Step by step guide to using our Subway Nutrition Calculator to plan healthier meals and track Subway calories.",
    "tool": {
      "@type": "HowToTool",
      "name": "Subway Nutrition Calculator"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Select Your Meal Type",
        "text": "Choose between a sandwich (6-inch or footlong), salad, or wrap to start building your meal.",
        "image": "https://subway-nutrition-calculator.com/step1.jpg",
        "url": "https://subway-nutrition-calculator.com/#meal-type"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Your Bread",
        "text": "Select from various bread options like 9-Grain Wheat, Italian, and more. Each choice affects calories and nutrition.",
        "image": "https://subway-nutrition-calculator.com/step2.jpg",
        "url": "https://subway-nutrition-calculator.com/#bread"
      },
      {
        "@type": "HowToStep",
        "name": "Add Protein",
        "text": "Choose your protein option from choices like turkey, ham, chicken, veggie patty, and more.",
        "image": "https://subway-nutrition-calculator.com/step3.jpg",
        "url": "https://subway-nutrition-calculator.com/#protein"
      },
      {
        "@type": "HowToStep",
        "name": "Add Cheese and Vegetables",
        "text": "Customize with your choice of cheese and vegetables to enhance flavor and nutrition.",
        "image": "https://subway-nutrition-calculator.com/step4.jpg",
        "url": "https://subway-nutrition-calculator.com/#toppings"
      },
      {
        "@type": "HowToStep",
        "name": "Select Sauces",
        "text": "Add sauces and dressings, being mindful that these can significantly impact calorie and sodium content.",
        "image": "https://subway-nutrition-calculator.com/step5.jpg",
        "url": "https://subway-nutrition-calculator.com/#sauces"
      },
      {
        "@type": "HowToStep",
        "name": "Review Nutrition Information",
        "text": "See real-time updates of your meal's nutritional content including calories, macros, and allergens.",
        "image": "https://subway-nutrition-calculator.com/step6.jpg",
        "url": "https://subway-nutrition-calculator.com/#nutrition"
      },
      {
        "@type": "HowToStep",
        "name": "Print or Share Results",
        "text": "Save your custom meal nutrition information by printing or sharing it digitally.",
        "image": "https://subway-nutrition-calculator.com/step7.jpg",
        "url": "https://subway-nutrition-calculator.com/#save"
      }
    ]
  };

  const calculatorProductSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Subway Calorie Calculator",
    "url": "https://subway-nutrition-calculator.com/",
    "applicationCategory": "NutritionApplication",
    "description": "Free online tool to calculate calories and nutrition for custom Subway sandwiches, salads, and wraps.",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "Subway Nutrition Calculator",
      "url": "https://subway-nutrition-calculator.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(calculatorSchemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(howToSchemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(calculatorProductSchema)}
      </script>
    </Helmet>
  );
};

export default CalculatorSchema;
