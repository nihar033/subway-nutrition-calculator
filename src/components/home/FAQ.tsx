
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Is the nutrition information on this website accurate?',
      answer: 'Yes, our nutrition data is based on Subway\'s official nutritional information. We regularly update our database to ensure accuracy, but please note that actual values may vary slightly based on preparation methods and ingredient variations at different Subway locations.',
    },
    {
      question: 'How can I find heart-healthy options on the calculator?',
      answer: 'Heart-healthy options are marked with a heart icon in our calculator. These items meet specific criteria for lower sodium, saturated fat, and cholesterol content, making them better choices for those concerned about heart health.',
    },
    {
      question: 'Does the calculator account for portion sizes?',
      answer: 'Yes, our calculator distinguishes between 6-inch and footlong sandwiches, and adjusts nutrition information accordingly. For salads and wraps, standard portion sizes are used in calculations.',
    },
    {
      question: 'Can I save my custom meal creations?',
      answer: 'Currently, you can print your nutrition information or take a screenshot. We\'re working on a feature to save your custom meals for future reference.',
    },
    {
      question: 'How do I know if a menu item contains allergens?',
      answer: 'Our calculator displays allergen information for each ingredient. When you select items, any potential allergens will be clearly listed in the summary section, allowing you to make informed choices based on dietary restrictions.',
    },
    {
      question: 'Is this website affiliated with Subway?',
      answer: 'No, this website is not affiliated with, endorsed by, or sponsored by Subway. We\'re an independent resource providing nutrition information to help consumers make informed choices. Subway® is a registered trademark of Subway IP LLC.',
    },
  ];

  return (
    <section className="py-16" id="faq">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our Subway Nutrition Calculator.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Don't see your question here? <a href="/contact" className="text-primary font-medium hover:underline">Contact us</a> and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
