
import React from 'react';
import { Helmet } from 'react-helmet';

const FAQSchema = () => {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is the Subway Nutrition Calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Subway Nutrition Calculator provides nutrition information based on Subway's official nutritional data. We regularly update our database to ensure accuracy, but values may vary slightly based on preparation methods and ingredient variations at different Subway locations."
        }
      },
      {
        "@type": "Question",
        "name": "How can I find low-calorie options at Subway?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Subway Calorie Calculator allows you to compare different ingredients and meal combinations to find lower-calorie options. Generally, choosing lean proteins like turkey or chicken breast, loading up on veggies, and selecting lighter sauces will create a lower-calorie meal."
        }
      },
      {
        "@type": "Question",
        "name": "Which Subway sandwich has the lowest calories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Veggie Delite® on 9-grain wheat bread is typically the lowest calorie sandwich at Subway, with approximately 230 calories for a 6-inch sub without cheese or sauce. Adding veggies adds minimal calories while providing fiber and nutrients."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find heart-healthy options with the Subway Nutrition Calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Heart-healthy options are marked with a heart icon in our calculator. These items meet specific criteria for lower sodium, saturated fat, and cholesterol content, making them better choices for those concerned about heart health."
        }
      },
      {
        "@type": "Question",
        "name": "Does the Subway Calorie Calculator account for portion sizes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our calculator distinguishes between 6-inch and footlong sandwiches, and adjusts nutrition information accordingly. For salads and wraps, standard portion sizes are used in calculations to provide the most accurate calorie and nutritional information."
        }
      },
      {
        "@type": "Question",
        "name": "How can I track macros for my Subway meal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Subway Nutrition Calculator provides detailed macro information including protein, carbs, and fats for each ingredient and your complete meal. Simply build your meal in the calculator to see real-time updates of all macronutrient values."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if a Subway menu item contains allergens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator displays allergen information for each ingredient. When you select items, any potential allergens will be clearly listed in the summary section, allowing you to make informed choices based on dietary restrictions."
        }
      },
      {
        "@type": "Question",
        "name": "Is this Subway Nutrition Calculator affiliated with Subway?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, this website is not affiliated with, endorsed by, or sponsored by Subway. We're an independent resource providing nutrition information to help consumers make informed choices. Subway® is a registered trademark of Subway IP LLC."
        }
      },
      {
        "@type": "Question",
        "name": "What are the healthiest bread options at Subway?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "9-Grain Wheat bread is generally considered one of the healthier options at Subway due to its higher fiber content and whole grains. Other good choices include the Multigrain and Hearty Italian breads, which are lower in calories and sodium compared to options like Flatbread or Italian Herbs & Cheese."
        }
      },
      {
        "@type": "Question",
        "name": "Can I save or print my Subway meal nutrition information?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Subway Nutrition Calculator allows you to print your complete meal nutrition information including calories, macros, and allergens. This feature makes it easy to track your nutrition or share information with healthcare providers."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchemaData)}
      </script>
    </Helmet>
  );
};

export default FAQSchema;
