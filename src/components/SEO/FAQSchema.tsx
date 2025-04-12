
import React from 'react';
import { Helmet } from 'react-helmet';

const FAQSchema = () => {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the nutrition information on this website accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our nutrition data is based on Subway's official nutritional information. We regularly update our database to ensure accuracy, but please note that actual values may vary slightly based on preparation methods and ingredient variations at different Subway locations."
        }
      },
      {
        "@type": "Question",
        "name": "How can I find heart-healthy options on the calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Heart-healthy options are marked with a heart icon in our calculator. These items meet specific criteria for lower sodium, saturated fat, and cholesterol content, making them better choices for those concerned about heart health."
        }
      },
      {
        "@type": "Question",
        "name": "Does the calculator account for portion sizes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our calculator distinguishes between 6-inch and footlong sandwiches, and adjusts nutrition information accordingly. For salads and wraps, standard portion sizes are used in calculations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if a menu item contains allergens?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator displays allergen information for each ingredient. When you select items, any potential allergens will be clearly listed in the summary section, allowing you to make informed choices based on dietary restrictions."
        }
      },
      {
        "@type": "Question",
        "name": "Is this website affiliated with Subway?",
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
