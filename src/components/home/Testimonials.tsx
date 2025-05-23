
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Fitness Enthusiast',
      content: 'This Subway calorie tracker is amazing. I always know exactly what I'm eating — super helpful during my marathon training!',
      rating: 5,
      image: '/testimonials/person1.jpg',
    },
    {
      name: 'Michael C.',
      role: 'Nutrition Coach',
      content: 'Finally a Subway sandwich calorie calculator that actually updates macros live! Highly recommended for my nutrition clients.',
      rating: 5,
      image: '/testimonials/person2.jpg',
    },
    {
      name: 'Emma R.',
      role: 'Working Mom',
      content: 'As a busy parent, I love quickly checking the Subway calories counter on my phone before ordering.',
      rating: 4,
      image: '/testimonials/person3.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Thousands of people use our calculator every day to make healthier choices at Subway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 h-full">
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 flex-grow">{testimonial.content}</p>
                <div className="flex items-center mt-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
