
import React from 'react';
import { CheckCircle, Search, Globe, BarChart, Zap, Medal, Heart, Utensils, Calculator, Shield, Star, Sandwich, Salad } from 'lucide-react';

const NewWelcomeContent = () => {
  const whyUseFeatures = [
    'Calculate total calories in your Subway meal',
    'Count carbs, protein, fat, and sodium',
    'Analyze macro breakdowns with our Subway macro calculator',
    'Customize items like bread, sauces, veggies, cheese, and meat',
    'See results instantly for both 6-inch and Footlong subs'
  ];

  const menuCoverage = [
    { title: 'Bread Options', desc: 'Italian, multigrain, flatbread, and more' },
    { title: 'Proteins', desc: 'Turkey, chicken, ham, steak, tuna, and plant-based alternatives' },
    { title: 'Toppings', desc: 'A variety of fresh vegetables and cheeses' },
    { title: 'Sauces', desc: 'From classic mustard to sweet onion and beyond' }
  ];

  const trackingFeatures = [
    'Protein',
    'Carbs', 
    'Fats',
    'Calories',
    'Sodium',
    'Sugars',
    'Fiber'
  ];

  const lowCalorieOptions = [
    { name: 'Turkey Breast on 9-grain wheat (6-inch)', calories: '~280 calories' },
    { name: 'Veggie Delite with mustard', calories: '~230 calories' },
    { name: 'Oven Roasted Chicken breast', calories: '~320 calories' }
  ];

  const highProteinMeals = [
    { name: 'Double Meat Turkey Breast', protein: '46g protein' },
    { name: 'Chicken & Bacon Ranch Melt', protein: '42g protein' },
    { name: 'Subway Club with extra meat', protein: '39g protein' }
  ];

  const ketoOptions = [
    'Any protein as a salad (under 15g carbs)',
    'Protein bowls without bread',
    'Cheese and meat combinations'
  ];

  const allergenInfo = [
    'Gluten-free options',
    'Dairy-free alternatives', 
    'Nut allergy considerations',
    'Vegetarian and vegan choices'
  ];

  const userTypes = [
    'Fitness enthusiasts counting calories or macros',
    'Keto or low-carb eaters avoiding certain ingredients',
    'Diabetics monitoring sugar and carbs',
    'Weight watchers building low-calorie Subway meals',
    'Vegans or vegetarians tracking protein and fiber'
  ];

  const howToSteps = [
    'Select Your Base: Choose from sandwiches, salads, wraps, or protein bowls',
    'Pick Your Bread: From classic Italian herbs & cheese to multigrain and flatbread options',
    'Add Proteins: Select from turkey breast, chicken, roast beef, tuna, or plant-based alternatives',
    'Customize Toppings: Add vegetables, cheese, and condiments while watching calories update',
    'Compare Sizes: Toggle between 6-inch and Footlong portions instantly',
    'Export Results: Save or share your custom meal\'s complete nutrition breakdown'
  ];

  const nutritionTips = [
    'Load up on free vegetables for added vitamins and fiber',
    'Choose lean proteins like turkey breast or grilled chicken',
    'Opt for mustard or vinegar instead of high-calorie sauces',
    'Consider the Subway protein bowl nutrition calculator option to reduce carbs while maximizing protein intake'
  ];

  const portionTips = [
    'Use our calculator to compare 6-inch vs Footlong portions',
    'Split a Footlong into two meals for better portion management',
    'Balance high-calorie ingredients with lower-calorie options'
  ];

  const mealTimingTips = [
    'Use lighter options for lunch and heartier meals post-workout',
    'Consider protein-heavy options after exercise',
    'Balance your Subway meal with other daily food choices'
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Welcome to the Subway Nutrition Calculator 2025
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Your all-in-one tool for tracking calories, macros, carbs, sodium, and comprehensive nutrition facts for all your favorite Subway menu items. Whether you're customizing a sandwich, salad, protein bowl, or wrap, our powerful calculator helps you build your Subway meal with precise nutrition information in real time.
          </p>
        </div>

        {/* Why Use Our Calculator */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Search className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Why Use Our Subway Calorie Calculator?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Are you trying to count Subway calories or wondering how many calories are in your Subway sandwich? Our Subway calorie calculator makes it easy to:
            </p>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="space-y-4">
                {whyUseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6 italic">
                Whether you're on a diet, counting macros, or just curious, our Subway sandwich calorie calculator is built for you.
              </p>
            </div>
          </div>
        </div>

        {/* Complete Menu Coverage */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Utensils className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Complete Menu Coverage for Every Subway Option</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our comprehensive nutrition tool works seamlessly across Subway's entire menu range, supporting all popular items, sauces, and toppings with precise calculations for every customization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuCoverage.map((item, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Medal className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-blue-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 italic font-semibold">
              Every selection updates your meal's nutrition facts in real time, ensuring accuracy for every customization.
            </p>
          </div>
        </div>

        {/* Regional Support */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Supports USA, UK, Canada & More</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Looking for regional data? We've got you covered:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <span className="text-2xl mb-2 block">🇺🇸</span>
                <h3 className="font-semibold text-red-800 mb-2">Subway Nutrition Calculator US</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <span className="text-2xl mb-2 block">🇬🇧</span>
                <h3 className="font-semibold text-blue-800 mb-2">Subway Calorie Calculator UK</h3>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <span className="text-2xl mb-2 block">🇨🇦</span>
                <h3 className="font-semibold text-red-800 mb-2">Subway Canada Nutrition Calculator</h3>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              Whether you're in the U.S. or abroad, our Subway calculator supports local menus, calorie counts, and nutrition data for accuracy.
            </p>
          </div>
        </div>

        {/* Smart Macro Calculator */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <BarChart className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Smart & Accurate Subway Macro Calculator</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Need detailed insights? Our Subway macros calculator breaks down your meal into:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trackingFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <Calculator className="h-6 w-6 text-subway-green mx-auto mb-2" />
                  <p className="font-medium text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 font-semibold">
              Perfect for meal prep, fitness goals, and macro tracking!
            </p>
          </div>
        </div>

        {/* Build Your Sandwich */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sandwich className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Build Your Subway Sandwich Online</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Use our free Subway Sandwich Builder to add:
            </p>
            <div className="bg-subway-green text-white p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Your choice of bread (Italian, multigrain, flatbread)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Any meat (turkey, chicken, ham, steak)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Toppings, cheese, and sauces</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Real-time nutrition facts</span>
                </div>
              </div>
              <p className="text-center mt-8 text-lg">
                It's never been easier to calculate Subway sandwich calories before you order.
              </p>
            </div>
          </div>
        </div>

        {/* Who Uses This Calculator */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Who Uses This Subway Calculator?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our tool is designed for a wide range of users:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userTypes.map((user, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-subway-green mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{user}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">How to Use the Subway Nutrition Calculator</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Getting started with our advanced calorie counter Subway tool is simple and intuitive:
            </p>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="space-y-4">
                {howToSteps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-8 italic text-lg">
                Our comprehensive Subway calories calculator updates nutrition information in real-time as you make selections, ensuring accuracy for every customization.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Menu Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Subway Menu Categories</h2>
          
          {/* Low-Calorie Options */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-green-600">🟢 Low-Calorie Subway Options</h3>
            <p className="text-center text-gray-700 mb-6">Discover sandwiches under 400 calories using our precise calculate Subway sandwich calories feature:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lowCalorieOptions.map((option, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">{option.name}</h4>
                  <span className="text-green-600 font-bold">{option.calories}</span>
                </div>
              ))}
            </div>
          </div>

          {/* High-Protein Options */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">💪 High-Protein Subway Meals</h3>
            <p className="text-center text-gray-700 mb-6">Perfect for fitness enthusiasts using our detailed Subway macros calculator:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highProteinMeals.map((meal, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">{meal.name}</h4>
                  <span className="text-blue-600 font-bold">{meal.protein}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Keto Options */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-600">🥩 Keto-Friendly Subway Options</h3>
            <p className="text-center text-gray-700 mb-6">Use our specialized Subway carb counter and Subway sub calorie calculator to find low-carb meals:</p>
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="space-y-4">
                {ketoOptions.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <Heart className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Advanced Nutrition Features</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Allergen Info */}
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold">Allergen Information</h3>
                </div>
                <p className="text-gray-700 mb-4">Our detailed Subway nutrition information calculator includes comprehensive allergen data for:</p>
                <div className="space-y-2">
                  {allergenInfo.map((allergen, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                      <span className="text-gray-700">{allergen}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sodium & Sugar Monitoring */}
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">Sodium & Sugar Tracking</h3>
                </div>
                <p className="text-gray-700 mb-4">The powerful Subway sodium calculator helps users monitoring salt intake identify:</p>
                <div className="space-y-2 mb-4">
                  <div className="text-gray-700">• Lowest sodium bread options</div>
                  <div className="text-gray-700">• High-sodium ingredients to avoid</div>
                  <div className="text-gray-700">• Healthier sauce alternatives</div>
                  <div className="text-gray-700">• Fresh vegetable recommendations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for Healthier Meals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Pro Tips for Healthier Subway Meals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Maximize Nutrition */}
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-800">Maximize Nutrition</h3>
              <div className="space-y-3">
                {nutritionTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Control Portions */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Portion Control</h3>
              <div className="space-y-3">
                {portionTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meal Timing Strategy */}
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Meal Timing Strategy</h3>
              <div className="space-y-3">
                {mealTimingTips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Our Calculator Stands Out */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Our Calculator Stands Out</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Zap className="h-8 w-8 text-subway-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
                <p className="text-gray-700 text-sm">Unlike static nutrition charts, our dynamic Subway calorie tracker provides instant calculations as you modify ingredients.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <BarChart className="h-8 w-8 text-subway-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Comprehensive Database</h3>
                <p className="text-gray-700 text-sm">We maintain the most complete database of Subway nutrition facts, including seasonal menu items and regional specialties.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <Globe className="h-8 w-8 text-subway-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Mobile-Optimized Design</h3>
                <p className="text-gray-700 text-sm">Access our versatile Subway Footlong calories calculator seamlessly on any device, with touch-friendly controls.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-subway-green text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Start Now – Free Subway Calorie Calculator</h2>
          <p className="text-lg mb-6 opacity-90">Just pick your items, customize your toppings, and instantly get:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✅ Total Calories</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✅ Full Nutrition Facts</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✅ Macro Breakdown</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✅ Custom Meal Insights</span>
            </div>
          </div>
          <p className="text-lg mb-6 opacity-90">
            Whether you're tracking Subway sandwich calories, Subway salad nutrition, or calculating your Subway macros, our calculator is the easiest way to get accurate results fast.
          </p>
          <p className="text-2xl font-bold">
            🎯 Transform your Subway experience from guesswork to precision with the most comprehensive Subway nutrition calculator available online. Start building your perfect meal today and take control of your nutrition journey, one sandwich at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewWelcomeContent;
