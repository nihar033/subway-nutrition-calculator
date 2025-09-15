
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, Heart, Book, Award, Clock, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Subway Smart Eats Guide | Your Nutrition Calculator Partner</title>
        <meta name="description" content="Learn about our mission to help you make informed nutrition choices at Subway. Discover how our calculator works and why you can trust our nutrition data." />
        <link rel="canonical" href="https://subway-nutrition-calculator.com/about" />
      </Helmet>
      
      <div className="py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Subway Smart Eats Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helping you make informed nutrition choices when eating at Subway. Learn more about our mission and how we can help you make healthier choices.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2>Our Mission</h2>
              <p>
                At Subway Smart Eats Guide, we believe that making informed dietary choices shouldn't be complicated. 
                Our mission is to provide a user-friendly, accurate nutrition calculator that empowers Subway 
                customers to customize their meals while keeping track of nutritional content.
              </p>
              
              <p>
                While we're not affiliated with Subway, we're committed to maintaining an up-to-date database 
                that reflects their menu offerings, helping you align your fast food choices with your 
                personal health goals.
              </p>

              <h2>How Our Calculator Works</h2>
              <p>
                The Subway Nutrition Calculator is designed to be intuitive and informative. As you build your 
                meal—selecting breads, proteins, vegetables, sauces, and sides—our tool calculates nutrition 
                information in real-time. This includes calories, fat, saturated fat, carbohydrates, protein, 
                sodium, and more.
              </p>
              
              <p>
                We've also incorporated heart-healthy indicators to help those focusing on cardiovascular health, 
                and allergen information for individuals with dietary restrictions.
              </p>

              <h2>Our Data Sources</h2>
              <p>
                We use Subway's official nutrition information to power our calculator, ensuring accuracy 
                in our nutritional data. Our team regularly updates the database to reflect menu changes 
                and nutritional adjustments, though we always recommend checking with your local Subway 
                for the most current information.
              </p>

              <h2>Who We Are</h2>
              <p>
                Subway Smart Eats Guide was created by a team of nutrition enthusiasts and web developers 
                who saw the need for a more robust nutrition calculator for one of America's most popular 
                sandwich chains. Our backgrounds in nutrition, health education, and technology allow us 
                to provide a valuable resource for health-conscious consumers.
              </p>

              <h2>Disclaimer</h2>
              <p>
                While we strive for accuracy, the nutritional information provided is for reference only. 
                Actual values may vary based on portion sizes, preparation methods, and ingredient substitutions 
                at different Subway locations. Our tool should not replace professional dietary advice, and 
                we encourage users to consult with healthcare providers for personalized nutrition guidance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Why Trust Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Accurate Calculations</h4>
                      <p className="text-sm text-gray-600">Based on official Subway nutritional data and regularly updated</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Health-Focused</h4>
                      <p className="text-sm text-gray-600">Designed to help users make healthier fast food choices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                      <Book className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Educational</h4>
                      <p className="text-sm text-gray-600">Provides nutritional insights and dietary information</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-primary/10 p-2 rounded-full">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">User-Friendly</h4>
                      <p className="text-sm text-gray-600">Simple interface designed for all users regardless of nutrition knowledge</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  Have questions, feedback, or suggestions? We'd love to hear from you!
                </p>
                <a 
                  href="/contact" 
                  className="block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
