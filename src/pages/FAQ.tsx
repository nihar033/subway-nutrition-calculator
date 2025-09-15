
import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FAQSchema from '@/components/SEO/FAQSchema';

const FAQ = () => {
  const generalFaqs = [
    {
      question: 'Is the nutrition information on this website accurate?',
      answer: 'Yes, our nutrition data is based on Subway\'s official nutritional information. We regularly update our database to ensure accuracy, but please note that actual values may vary slightly based on preparation methods and ingredient variations at different Subway locations.'
    },
    {
      question: 'How often is the nutrition data updated?',
      answer: 'We update our nutrition database whenever Subway announces changes to their menu or ingredients. Our team monitors official Subway nutrition publications to ensure we provide the most current information available.'
    },
    {
      question: 'Is this website affiliated with Subway?',
      answer: 'No, this website is not affiliated with, endorsed by, or sponsored by Subway. We\'re an independent resource providing nutrition information to help consumers make informed choices. Subway® is a registered trademark of Subway IP LLC.'
    },
    {
      question: 'Can I trust the calculations made by your calculator?',
      answer: 'Our calculator uses official Subway nutrition data and standard mathematical calculations to provide nutrition information. While we strive for accuracy, the calculator is meant to be a helpful guide rather than a definitive source. Individual preparation methods at Subway locations may result in slight variations.'
    }
  ];

  const calculatorFaqs = [
    {
      question: 'How do I use the Subway Nutrition Calculator?',
      answer: 'Our calculator is designed to be intuitive: 1) Select your meal type (sandwich, salad, or wrap), 2) Choose your bread if applicable, 3) Add proteins, cheese, vegetables, and sauces, 4) Include any sides, and 5) Review your nutrition summary. As you build your meal, nutrition information updates in real-time.'
    },
    {
      question: 'How can I find heart-healthy options on the calculator?',
      answer: 'Heart-healthy options are marked with a heart icon in our calculator. These items meet specific criteria for lower sodium, saturated fat, and cholesterol content, making them better choices for those concerned about heart health.'
    },
    {
      question: 'Does the calculator account for portion sizes?',
      answer: 'Yes, our calculator distinguishes between 6-inch and footlong sandwiches, and adjusts nutrition information accordingly. For salads and wraps, standard portion sizes are used in calculations.'
    },
    {
      question: 'Can I save my custom meal creations?',
      answer: 'Currently, you can print your nutrition information or take a screenshot. We\'re working on a feature to save your custom meals for future reference.'
    }
  ];

  const nutritionFaqs = [
    {
      question: 'What are the healthiest bread options at Subway?',
      answer: '9-Grain Wheat bread is generally considered one of the healthier options at Subway due to its higher fiber content and whole grains. Other good choices include the Multigrain and Hearty Italian breads, which are lower in calories and sodium compared to options like Flatbread or Italian Herbs & Cheese.'
    },
    {
      question: 'Which Subway proteins are lowest in calories?',
      answer: 'Turkey Breast, Ham, and Roast Beef are typically the lowest-calorie protein options at Subway. The Veggie Patty can also be a good choice for vegetarians, though it\'s important to check its specific nutritional content as formulations may vary.'
    },
    {
      question: 'How can I reduce the sodium content in my Subway meal?',
      answer: 'To reduce sodium in your Subway meal: 1) Choose fresh vegetables, which add virtually no sodium, 2) Limit high-sodium condiments like pickles and olives, 3) Use less or no cheese, 4) Select lower-sodium proteins like turkey or veggie patty, 5) Ask for light or no sauce, or choose lower-sodium options like oil and vinegar instead of saltier dressings.'
    },
    {
      question: 'What is Subway\'s definition of "heart-healthy"?',
      answer: 'Heart-healthy items at Subway generally meet criteria aligned with heart health guidelines: they\'re typically lower in sodium (under 700mg), lower in saturated fat (under 3g), and contain no trans fats. These items often include a good balance of lean proteins, vegetables, and whole grains.'
    }
  ];

  const allergenFaqs = [
    {
      question: 'How do I know if a menu item contains allergens?',
      answer: 'Our calculator displays allergen information for each ingredient. When you select items, any potential allergens will be clearly listed in the summary section, allowing you to make informed choices based on dietary restrictions.'
    },
    {
      question: 'Does Subway offer gluten-free options?',
      answer: 'While Subway has tested gluten-free bread in some locations, it\'s not widely available. For those avoiding gluten, Subway offers salads without bread. However, it\'s important to note that cross-contamination is possible in Subway restaurants as they handle wheat products throughout the preparation area.'
    },
    {
      question: 'Which Subway items are dairy-free?',
      answer: 'Many Subway items can be dairy-free if you order without cheese. The Italian, 9-Grain Wheat, and Hearty Italian breads are typically dairy-free. Most proteins (except processed ones like meatballs) are dairy-free. Vegetables are dairy-free, and several sauces like Yellow Mustard, Sweet Onion, and Oil & Vinegar contain no dairy.'
    },
    {
      question: 'Can vegetarians and vegans find options at Subway?',
      answer: 'Yes, vegetarians can enjoy the Veggie Delite® sandwich or salad, Veggie Patty (in some locations), and various plant-based protein options that Subway is increasingly adding to menus. For vegans, options are more limited but include the Veggie Delite® without cheese, with careful selection of bread (some contain honey) and sauces that don\'t contain animal products.'
    }
  ];

  const technicalFaqs = [
    {
      question: 'Why isn\'t the calculator working on my device?',
      answer: 'If you\'re experiencing issues with our calculator, try these troubleshooting steps: 1) Refresh the page, 2) Clear your browser cache, 3) Try a different browser, 4) Ensure JavaScript is enabled, 5) If on mobile, try rotating your device or using desktop mode. If problems persist, please contact us with details about your device and browser for assistance.'
    },
    {
      question: 'Is this website optimized for mobile devices?',
      answer: 'Yes, our website is fully responsive and optimized for mobile, tablet, and desktop use. The calculator is designed to work seamlessly across all devices, allowing you to plan your Subway meals anywhere.'
    },
    {
      question: 'How do I report an error on the website?',
      answer: 'If you find any errors or discrepancies in our nutrition information or calculator functionality, please visit our Contact page and submit a detailed description of the issue. Include specific information about the error you encountered to help us address it promptly.'
    },
    {
      question: 'Can I embed this calculator on my own website?',
      answer: 'Currently, we don\'t offer an embeddable version of our calculator. However, you\'re welcome to link to our site as a resource for your visitors. If you have a specific partnership or integration request, please contact us through our Contact page.'
    }
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://subway-nutrition-calculator.com/faq" />
      </Helmet>
      
      <div className="py-12">
        <FAQSchema />
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our Subway Nutrition Calculator and making healthier choices at Subway.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search for a question..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">General Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Calculator Usage</h2>
            <Accordion type="single" collapsible className="w-full">
              {calculatorFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`calculator-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nutrition Information</h2>
            <Accordion type="single" collapsible className="w-full">
              {nutritionFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`nutrition-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Allergens & Dietary Restrictions</h2>
            <Accordion type="single" collapsible className="w-full">
              {allergenFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`allergen-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Technical Support</h2>
            <Accordion type="single" collapsible className="w-full">
              {technicalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`technical-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please feel free to contact us.
          </p>
          <a 
            href="/contact" 
            className="inline-block py-2 px-6 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default FAQ;
