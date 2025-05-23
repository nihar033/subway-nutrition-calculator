
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HomepageFAQ = () => {
  const faqs = [
    {
      question: 'How accurate is this Subway nutrition calculator?',
      answer: 'We use official Subway menu data and frequently update it for maximum accuracy.'
    },
    {
      question: 'How do I find the calories in my Subway sandwich?',
      answer: 'Simply build your meal with our Subway sandwich calorie calculator — calories and macros update live!'
    },
    {
      question: 'Is there a Subway macro calculator?',
      answer: 'Yes! Our tool functions as a Subway macro counter for proteins, fats, and carbs.'
    },
    {
      question: 'Can I use this Subway calorie calculator for salads and wraps?',
      answer: 'Absolutely. It works for Subway salads, wraps, sandwiches, and protein bowls.'
    },
    {
      question: 'Is this tool affiliated with Subway?',
      answer: 'No. We are an independent project designed to help Subway fans make better nutrition decisions.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Subway Nutrition Calculator FAQ</h2>
          <p className="section-subtitle">
            Common questions about our nutrition calculator tool
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
