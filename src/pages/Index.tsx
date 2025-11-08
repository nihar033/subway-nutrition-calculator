import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import SmoothScroll from '@/components/ui/smooth-scroll';
import { 
  ArrowRight, 
  Calculator, 
  Sandwich, 
  Leaf, 
  Heart,
  Brain,
  Globe,
  ChefHat,
  Users,
  Lightbulb,
  Salad,
  Microscope,
  Trophy,
  Zap,
  Database,
  Smartphone,
  TrendingUp,
  Clock,
  User,
  Star
} from 'lucide-react';

const Index = () => {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Schema Data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Subway Nutrition Calculator",
    "url": "https://subway-nutrition-calculator.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://subway-nutrition-calculator.com/nutrition-database?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "description": "Use our Subway Nutrition Calculator to make healthier choices. Track calories, macros, and find heart-healthy options for your Subway sandwich, salad, or wrap.",
    "publisher": {
      "@type": "Organization",
      "name": "Subway Nutrition Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://subway-nutrition-calculator.com/logo.png"
      }
    },
    "keywords": [
      "subway nutrition calculator",
      "subway calorie calculator",
      "subway calories",
      "healthy subway options",
      "subway menu nutrition",
      "subway macros",
      "subway nutritional information"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Subway Nutrition Calculator",
    "url": "https://subway-nutrition-calculator.com",
    "logo": "https://subway-nutrition-calculator.com/logo.png",
    "sameAs": [
      "https://facebook.com/subwaynutritioncalculator",
      "https://twitter.com/subway_nutrition",
      "https://instagram.com/subway_nutrition"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "subwaynutritioncal@gmail.com"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://subway-nutrition-calculator.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is this Subway nutrition calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Subway Nutrition Calculator provides nutrition information based on Subway's official nutritional data. We regularly update our database to ensure accuracy, but values may vary slightly based on preparation methods and ingredient variations at different Subway locations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find the calories in my Subway sandwich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply build your meal with our Subway sandwich calorie calculator — calories and macros update live!"
        }
      },
      {
        "@type": "Question",
        "name": "Is there a Subway macro calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our tool functions as a Subway macro counter for proteins, fats, and carbs."
        }
      }
    ]
  };

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Subway Nutrition Calculator",
    "url": "https://subway-nutrition-calculator.com/",
    "description": "Free online Subway nutrition calculator to track calories, macros, and nutrition facts for Subway sandwiches, salads, and wraps.",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  // FAQ Data
  const faqs = [
    {
      question: 'How accurate is this Subway nutrition calculator?',
      answer: 'Our Subway Nutrition Calculator provides nutrition information based on Subway\'s official nutritional data. We regularly update our database to ensure accuracy, but values may vary slightly based on preparation methods and ingredient variations at different Subway locations.',
    },
    {
      question: 'How do I find the calories in my Subway sandwich?',
      answer: 'Simply build your meal with our Subway sandwich calorie calculator — calories and macros update live!',
    },
    {
      question: 'Is there a Subway macro calculator?',
      answer: 'Yes! Our tool functions as a Subway macro counter for proteins, fats, and carbs.',
    },
    {
      question: 'Can I use this Subway calorie calculator for salads and wraps?',
      answer: 'Absolutely. It works for Subway salads, wraps, sandwiches, and protein bowls.',
    },
    {
      question: 'Can I check sodium or carbs in my Subway meal?',
      answer: 'Yes, it also functions as a Subway sodium calculator and Subway carbs calculator to help you track these nutrients.',
    },
    {
      question: 'Does this work as a Subway salad calories calculator?',
      answer: 'Yes! Our calculator works perfectly as a Subway salad calorie calculator - just select "Salad" as your meal type and add your ingredients.',
    },
    {
      question: 'Can I use this for Subway wrap nutrition?',
      answer: 'Absolutely! It functions as a comprehensive Subway wrap calories calculator for all wrap varieties.',
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
      question: 'Is this tool affiliated with Subway?',
      answer: 'No, this website is not affiliated with, endorsed by, or sponsored by Subway. We\'re an independent resource providing nutrition information to help consumers make informed choices. Subway® is a registered trademark of Subway IP LLC.',
    },
  ];

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Complete Subway Menu with Prices 2025",
      excerpt: "Find current Subway menu prices for all items including sandwiches, wraps, bowls, breakfast, and desserts. Updated with calories and pricing.",
      readTime: "6 min read",
      author: "Menu Team",
      link: "/blog/subway-menu-prices",
      image: "💰"
    },
    {
      id: 2,
      title: "Low-Calorie Subway Sandwiches: Your Complete Guide",
      excerpt: "Discover the best low-calorie options at Subway and learn how to customize your order for maximum nutrition with minimal calories.",
      readTime: "5 min read",
      author: "Nutrition Team",
      link: "/blog/low-calorie-subway-sandwiches",
      image: "🥗"
    },
    {
      id: 3,
      title: "Subway Macros Explained: Track Protein, Carbs & Fat",
      excerpt: "Master your macros with our comprehensive guide to tracking protein, carbohydrates, and fat in your Subway meals.",
      readTime: "7 min read",
      author: "Fitness Team",
      link: "/blog/subway-macros-guide",
      image: "📊"
    },
    {
      id: 4,
      title: "Does Subway Have Gluten-Free Bread? (2025 Guide)",
      excerpt: "Complete guide to Subway's gluten-free options, safety concerns, and how to order safely for celiac disease and gluten sensitivity.",
      readTime: "8 min read",
      author: "Health Team",
      link: "/blog/subway-gluten-free-bread",
      image: "🌾"
    }
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://subway-nutrition-calculator.com/" />
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(calculatorSchema)}
        </script>
      </Helmet>
      
      <SmoothScroll />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24" onClick={scrollToCalculator}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-subway-green">Subway Nutrition</span> & <span className="text-subway-yellow">Calorie Calculator</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Make smarter meal choices with our Subway Nutrition Calculator. Instantly track calories, macros, sodium, and more — build your Subway sandwich, wrap, salad, or protein bowl and see nutrition facts in real time with our Subway calorie calculator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-white bg-subway-green hover:bg-subway-green/90 transition-colors"
                  onClick={scrollToCalculator}
                >
                  Try Our Calculator <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/nutrition-database">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-subway-green text-subway-green hover:bg-subway-green/10"
                  >
                    View Nutrition Database
                  </Button>
                </Link>
              </div>
              <div className="flex items-center mt-12 space-x-8">
                <div className="flex items-center">
                  <Calculator className="h-6 w-6 text-subway-green mr-2" />
                  <span className="text-gray-600 text-sm">Real-time Updates</span>
                </div>
                <div className="flex items-center">
                  <Sandwich className="h-6 w-6 text-subway-green mr-2" />
                  <span className="text-gray-600 text-sm">Fully Customizable</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-subway-green mr-2" />
                  <span className="text-gray-600 text-sm">Heart-Healthy Options</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-subway-yellow rounded-full opacity-20"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-subway-green rounded-full opacity-20"></div>
              <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Leaf className="h-6 w-6 text-subway-green mr-2" />
                    Healthy Choice Recommendation
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">6-inch Veggie Delite®</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">230 cal</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">9-Grain Wheat Bread</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">180 cal</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">All Veggies</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">25 cal</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Sweet Onion Sauce</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">40 cal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-subway-green">475 calories</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs text-gray-500">Heart-Check Certified</span>
                      <Heart className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator-section" className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-subway-green/5 to-subway-yellow/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-subway-green to-subway-yellow"></div>
        
        <div className="w-full relative z-10">
          <div className="bg-white border-0 shadow-none">
            <CalculatorForm />
          </div>
        </div>
      </section>

      {/* Why Use Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Calculator className="h-8 w-8 text-subway-green mr-3" />
              🔍 Why Use Our Subway Calorie Calculator?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Are you trying to count Subway calories or wondering how many calories are in your Subway sandwich? Our Subway calorie calculator makes it easy to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Calculate total calories in your Subway meal' },
              { icon: '⚖️', title: 'Count carbs, protein, fat, and sodium' },
              { icon: '📊', title: 'Analyze macro breakdowns with our Subway macro calculator' },
              { icon: '🔧', title: 'Customize items like bread, sauces, veggies, cheese, and meat' },
              { icon: '⚡', title: 'See results instantly for both 6-inch and Footlong subs' },
              { icon: '💪', title: 'Perfect for fitness enthusiasts and macro tracking' }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-lg">
            Whether you're on a diet, counting macros, or just curious, our Subway sandwich calorie calculator is built for you.
          </p>
        </div>
      </section>

      {/* Complete Menu Coverage Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Sandwich className="h-8 w-8 text-subway-green mr-3" />
              🍞 Complete Menu Coverage for Every Subway Option
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive nutrition tool works seamlessly across Subway's entire menu range, supporting all popular items, sauces, and toppings with precise calculations for every customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🍞', title: 'Bread Options', description: 'Italian, multigrain, flatbread, and more' },
              { icon: '🥩', title: 'Proteins', description: 'Turkey, chicken, ham, steak, tuna, and plant-based alternatives' },
              { icon: '🥬', title: 'Toppings', description: 'A variety of fresh vegetables and cheeses' },
              { icon: '🍯', title: 'Sauces', description: 'From classic mustard to sweet onion and beyond' }
            ].map((option, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-subway-green hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-semibold mb-2 text-lg">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Every selection updates your meal's nutrition facts in real time, ensuring accuracy for every customization.
          </p>
        </div>
      </section>

      {/* Regional Support Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-subway-green mr-3" />
              🌎 Supports USA, UK, Canada & More
            </h2>
            <p className="text-xl text-gray-600">Looking for regional data? We've got you covered:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { flag: '🇺🇸', title: 'Subway Nutrition Calculator US', bgColor: 'bg-blue-50' },
              { flag: '🇬🇧', title: 'Subway Calorie Calculator UK', bgColor: 'bg-red-50' },
              { flag: '🇨🇦', title: 'Subway Canada Nutrition Calculator', bgColor: 'bg-green-50' }
            ].map((region, index) => (
              <div 
                key={index}
                className={`text-center p-8 ${region.bgColor} rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-5xl mb-4">{region.flag}</div>
                <h3 className="font-semibold text-lg">{region.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Whether you're in the U.S. or abroad, our Subway calculator supports local menus, calorie counts, and nutrition data for accuracy.
          </p>
        </div>
      </section>

      {/* Smart Calculator Features Section */}
      <section className="py-16 bg-gradient-to-br from-subway-green/5 to-subway-yellow/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Brain className="h-8 w-8 text-subway-green mr-3" />
              🧠 Smart & Accurate Subway Macro Calculator
            </h2>
            <p className="text-xl text-gray-600">Need detailed insights? Our Subway macros calculator breaks down your meal into:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['Protein', 'Carbs', 'Fats', 'Calories', 'Sodium', 'Sugars', 'Fiber'].map((nutrient, index) => (
              <div 
                key={nutrient} 
                className="text-center p-4 bg-white rounded-lg hover:bg-subway-green/10 hover:shadow-md transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-semibold text-subway-green">{nutrient}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg font-medium">
            Perfect for meal prep, fitness goals, and macro tracking!
          </p>
        </div>
      </section>

      {/* Sandwich Builder Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-subway-green mr-3" />
              👨‍🍳 Build Your Subway Sandwich Online
            </h2>
            <p className="text-xl text-gray-600">Use our free Subway Sandwich Builder to add:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🍞', title: 'Your choice of bread', description: 'Italian, multigrain, flatbread' },
              { icon: '🥩', title: 'Any meat', description: 'Turkey, chicken, ham, steak' },
              { icon: '🥬', title: 'Toppings, cheese, and sauces', description: 'Customize every ingredient' },
              { icon: '📊', title: 'Real-time nutrition facts', description: 'See updates instantly' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{feature.icon}</span>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600 ml-16">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            It's never been easier to calculate Subway sandwich calories before you order.
          </p>
        </div>
      </section>

      {/* Who Uses Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-subway-green mr-3" />
              📊 Who Uses This Subway Calculator?
            </h2>
            <p className="text-xl text-gray-600">Our tool is designed for a wide range of users:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💪', title: 'Fitness enthusiasts', description: 'Counting calories or macros', bgColor: 'bg-green-50' },
              { icon: '🥑', title: 'Keto or low-carb eaters', description: 'Avoiding certain ingredients', bgColor: 'bg-blue-50' },
              { icon: '🩺', title: 'Diabetics', description: 'Monitoring sugar and carbs', bgColor: 'bg-red-50' },
              { icon: '⚖️', title: 'Weight watchers', description: 'Building low-calorie meals', bgColor: 'bg-yellow-50' },
              { icon: '🌱', title: 'Vegans or vegetarians', description: 'Tracking protein and fiber', bgColor: 'bg-purple-50' }
            ].map((userType, index) => (
              <div 
                key={index}
                className={`text-center p-6 ${userType.bgColor} rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-3xl mb-3">{userType.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{userType.title}</h3>
                <p className="text-gray-600 text-sm">{userType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Lightbulb className="h-8 w-8 text-subway-green mr-3" />
              💡 How to Use the Subway Nutrition Calculator
            </h2>
            <p className="text-xl text-gray-600">Getting started with our advanced calorie counter Subway tool is simple and intuitive:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '1️⃣', title: 'Select Your Base', description: 'Choose from sandwiches, salads, wraps, or protein bowls' },
              { number: '2️⃣', title: 'Pick Your Bread', description: 'From classic Italian herbs & cheese to multigrain and flatbread options' },
              { number: '3️⃣', title: 'Add Proteins', description: 'Select from turkey breast, chicken, roast beef, tuna, or plant-based alternatives' },
              { number: '4️⃣', title: 'Customize Toppings', description: 'Add vegetables, cheese, and condiments while watching calories update' },
              { number: '5️⃣', title: 'Compare Sizes', description: 'Toggle between 6-inch and Footlong portions instantly' },
              { number: '6️⃣', title: 'Export Results', description: 'Save or share your custom meal\'s complete nutrition breakdown' }
            ].map((step, index) => (
              <div 
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-50 rounded-xl"
              >
                <div className="text-4xl mb-4">{step.number}</div>
                <h3 className="font-bold mb-3 text-lg">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg max-w-4xl mx-auto">
            Our comprehensive <a href="https://dunkincaloriescalculator.com/" target="_blank" style="text-decoration: none;">dunkin nutrition calculator</a> updates nutrition information in real-time as you make selections, ensuring accuracy for every customization. This makes it the most reliable calorie calculator for Subway meals available online.
          </p>
        </div>
      </section>

      {/* Popular Menu Categories Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Salad className="h-8 w-8 text-subway-green mr-3" />
              🥗 Popular Subway Menu Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🥬',
                title: 'Low-Calorie Subway Options',
                description: 'Discover sandwiches under 400 calories using our precise calculate Subway sandwich calories feature:',
                items: [
                  'Turkey Breast on 9-grain wheat (6-inch): ~280 calories',
                  'Veggie Delite with mustard: ~230 calories',
                  'Oven Roasted Chicken breast: ~320 calories'
                ],
                bgColor: 'bg-green-50'
              },
              {
                icon: '💪',
                title: 'High-Protein Subway Meals',
                description: 'Perfect for fitness enthusiasts using our detailed Subway macros calculator:',
                items: [
                  'Double Meat Turkey Breast: 46g protein',
                  'Chicken & Bacon Ranch Melt: 42g protein',
                  'Subway Club with extra meat: 39g protein'
                ],
                bgColor: 'bg-blue-50'
              },
              {
                icon: '🥑',
                title: 'Keto-Friendly Subway Options',
                description: 'Use our specialized Subway carb counter to find low-carb meals:',
                items: [
                  'Any protein as a salad (under 15g carbs)',
                  'Protein bowls without bread',
                  'Cheese and meat combinations'
                ],
                bgColor: 'bg-yellow-50'
              }
            ].map((category, index) => (
              <div 
                key={index}
                className={`${category.bgColor} p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-3 text-2xl">{category.icon}</span>
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2 text-subway-green">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Microscope className="h-8 w-8 text-subway-green mr-3" />
              🔬 Advanced Nutrition Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚠️',
                title: 'Allergen Information',
                description: 'Our detailed Subway nutrition information calculator includes comprehensive allergen data for:',
                items: [
                  'Gluten-free options',
                  'Dairy-free alternatives', 
                  'Nut allergy considerations',
                  'Vegetarian and vegan choices'
                ],
                bgColor: 'bg-gray-50'
              },
              {
                icon: '🧂',
                title: 'Sodium Tracking',
                description: 'The powerful Subway sodium calculator helps users monitoring salt intake identify:',
                items: [
                  'Lowest sodium bread options',
                  'High-sodium ingredients to avoid',
                  'Healthier sauce alternatives',
                  'Fresh vegetable recommendations'
                ],
                bgColor: 'bg-red-50'
              },
              {
                icon: '🍯',
                title: 'Sugar Content Analysis',
                description: 'Track hidden sugars in:',
                items: [
                  'Sweet onion sauce and honey mustard',
                  'Teriyaki glazed proteins',
                  'Certain bread varieties',
                  'Fruit-based toppings'
                ],
                bgColor: 'bg-purple-50'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`${feature.bgColor} p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-3 text-2xl">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2 text-subway-green">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stands Out Section */}
      <section className="py-16 bg-gradient-to-br from-subway-green/5 to-subway-yellow/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-subway-green mr-3" />
              🏆 Why Our Calculator Stands Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Real-Time Updates',
                description: 'Unlike static nutrition charts, our dynamic Subway calorie tracker provides instant calculations as you modify ingredients, ensuring accuracy for every possible combination.'
              },
              {
                icon: Database,
                title: 'Comprehensive Database',
                description: 'We maintain the most complete database of Subway nutrition facts, including seasonal menu items, regional specialties, and limited-time offers.'
              },
              {
                icon: Smartphone,
                title: 'Mobile-Optimized Design',
                description: 'Access our versatile Subway Footlong calories calculator seamlessly on any device, with touch-friendly controls and fast loading times.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <feature.icon className="h-12 w-12 text-subway-green mx-auto mb-4" />
                <h3 className="font-bold mb-4 text-lg">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Journey Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-subway-green mr-3" />
              📈 Track Your Subway Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📅',
                title: 'Daily Meal Planning',
                description: 'Use our versatile Subway sandwich calorie calculator to plan balanced meals that fit your daily nutrition goals. Whether you\'re aiming for 1,200 calories or 2,500 calories per day, create Subway meals that complement your overall diet plan.'
              },
              {
                icon: '📝',
                title: 'Weekly Meal Prep',
                description: 'Plan multiple Subway meals for the week using our comprehensive build your Subway meal feature. Compare different combinations including wraps, protein bowls, and salads to add variety while maintaining consistent nutrition targets.'
              },
              {
                icon: '📊',
                title: 'Progress Monitoring',
                description: 'Track how your Subway choices align with fitness goals, whether you\'re building muscle, losing weight, or maintaining a healthy lifestyle.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-subway-green/20 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-subway-green/40"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-3 text-2xl">{feature.icon}</span>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white py-12 px-8 rounded-xl shadow-md">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                📖 Latest Subway Nutrition Tips & Guides
              </h2>
              <p className="text-xl text-gray-600">
                Discover expert tips, nutrition guides, and healthy meal ideas to make the most of your Subway experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{post.image}</span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Featured</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link 
                      to={post.link}
                      className="inline-flex items-center text-subway-green font-semibold hover:text-subway-green/80 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center bg-subway-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-subway-green/90 transition-colors"
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-16 bg-subway-green/5">
        <div className="container-custom">
          <div className="py-12 px-8 rounded-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-subway-green mr-3" />
                🌟 Pro Tips for Healthier Subway Meals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '💪',
                  title: 'Maximize Nutrition',
                  tips: [
                    'Load up on free vegetables for added vitamins and fiber',
                    'Choose lean proteins like turkey breast or grilled chicken',
                    'Opt for mustard or vinegar instead of high-calorie sauces',
                    'Consider protein bowls to reduce carbs while maximizing protein'
                  ]
                },
                {
                  icon: '⚖️',
                  title: 'Portion Control',
                  tips: [
                    'Use our calculator to compare 6-inch vs Footlong portions',
                    'Split a Footlong into two meals for better portion management',
                    'Balance high-calorie ingredients with lower-calorie options'
                  ]
                },
                {
                  icon: '⏰',
                  title: 'Meal Timing',
                  tips: [
                    'Use lighter options for lunch and heartier meals post-workout',
                    'Consider protein-heavy options after exercise',
                    'Balance your Subway meal with other daily food choices'
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-3 text-2xl">{category.icon}</span>
                    {category.title}
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <span className="mr-2 text-subway-green">•</span>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-subway-green to-subway-yellow">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Start Now – Free Subway Calorie Calculator
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Just pick your items, customize your toppings, and instantly get comprehensive nutrition information!
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              {['Total Calories', 'Full Nutrition Facts', 'Macro Breakdown', 'Custom Meal Insights'].map((feature, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="font-semibold">✅ {feature}</div>
                </div>
              ))}
            </div>

            <p className="text-lg opacity-90 mb-4 max-w-4xl mx-auto">
              Whether you're tracking Subway sandwich calories, Subway salad nutrition, or calculating your Subway macros, our calculator is the easiest way to get accurate results fast.
            </p>

            <div className="mt-8 bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-lg font-medium opacity-95">
                Transform your Subway experience from guesswork to precision with the most comprehensive Subway nutrition calculator available online. Start building your perfect meal today and take control of your nutrition journey, one sandwich at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
    </>
  );
};

export default Index;
