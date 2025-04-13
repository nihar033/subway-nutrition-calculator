
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
      question: 'How accurate is the Subway Nutrition Calculator?',
      answer: 'Our Subway Nutrition Calculator provides nutrition information based on Subway\'s official nutritional data. We regularly update our database to ensure accuracy, but values may vary slightly based on preparation methods and ingredient variations at different Subway locations.',
    },
    {
      question: 'How can I find low-calorie options at Subway?',
      answer: 'Our Subway Calorie Calculator allows you to compare different ingredients and meal combinations to find lower-calorie options. Generally, choosing lean proteins like turkey or chicken breast, loading up on veggies, and selecting lighter sauces will create a lower-calorie meal.',
    },
    {
      question: 'Which Subway sandwich has the lowest calories?',
      answer: 'The Veggie Delite® on 9-grain wheat bread is typically the lowest calorie sandwich at Subway, with approximately 230 calories for a 6-inch sub without cheese or sauce. Adding veggies adds minimal calories while providing fiber and nutrients.',
    },
    {
      question: 'How do I find heart-healthy options with the Subway Nutrition Calculator?',
      answer: 'Heart-healthy options are marked with a heart icon in our calculator. These items meet specific criteria for lower sodium, saturated fat, and cholesterol content, making them better choices for those concerned about heart health.',
    },
    {
      question: 'Can I save or print my Subway meal nutrition information?',
      answer: 'Yes, our Subway Nutrition Calculator allows you to print your complete meal nutrition information including calories, macros, and allergens. This feature makes it easy to track your nutrition or share information with healthcare providers.',
    },
    {
      question: 'Is this Subway Nutrition Calculator affiliated with Subway?',
      answer: 'No, this website is not affiliated with, endorsed by, or sponsored by Subway. We\'re an independent resource providing nutrition information to help consumers make informed choices. Subway® is a registered trademark of Subway IP LLC.',
    },
  ];

  return (
    <section className="py-16" id="faq">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Subway Nutrition Calculator FAQ</h2>
          <p className="section-subtitle">
            Get answers to common questions about our Subway Calorie Calculator and nutrition information.
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
            Don't see your question here? <a href="/faq" className="text-primary font-medium hover:underline">View our complete FAQ</a> or <a href="/contact" className="text-primary font-medium hover:underline">contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
