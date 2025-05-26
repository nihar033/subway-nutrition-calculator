
import React from 'react';
import { CheckCircle, Zap, BarChart, Globe } from 'lucide-react';

const WelcomeContent = () => {
  const mealOptions = [
    'Meal Type: Sandwich, Wrap, Salad, or Protein Bowl',
    'Size: 6-inch, Footlong, or custom portion',
    'Bread Type: Choose from Subway\'s range of breads',
    'Protein: Chicken, turkey, steak, tuna, and more',
    'Cheese: American, Swiss, provolone, or skip cheese',
    'Vegetables: Lettuce, spinach, tomatoes, cucumbers, and more',
    'Sauces: Customize flavor and calories',
    'Sides: Chips, cookies, drinks'
  ];

  const benefits = [
    'Track Calories Instantly: See the calorie count update as you add or remove ingredients.',
    'Monitor Macros: Carbs, protein, and fat values update in real time.',
    'Compare Options: Whether you\'re ordering a wrap, salad, or protein bowl, our calculator supports it all.',
    'Make Healthier Choices: Optimize your meal for low-calorie, low-carb, low-sodium, or high-protein diets.',
    'Support Dietary Goals: Whether it\'s weight loss, muscle gain, or managing health conditions, our tool has you covered.'
  ];

  const popularUses = [
    'Quickly check calories and macros before placing an order',
    'Customize meals like a tuna wrap, veggie salad, or grilled chicken protein bowl',
    'Build healthy Subway sandwiches that are low in calories or high in protein',
    'Compare ingredients to create balanced meals based on dietary needs',
    'Access updated Subway nutrition facts in a simple, interactive format'
  ];

  const healthFeatures = [
    'Heart-Healthy Subway Meals: Meals that meet AHA heart-health standards.',
    'Low-Sodium Options: Instantly find Subway items with reduced sodium.',
    'Subway Carb Calculator: For people following keto or low-carb diets.',
    'Subway Protein Calculator: Perfect for muscle gain or high-protein meal plans.'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Your all-in-one tool to track calories, macros, and nutritional information for your favorite Subway meals. Whether you're focused on fitness, managing macros, or just curious about what's in your sub, our calculator gives you real-time data for smarter eating.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Designed for both Subway USA and Subway UK menus, this tool makes it easy to compare options, build your meal, and stay on track with your dietary goals. From sandwiches to wraps, salads to protein bowls, you can calculate nutrition for every item you add to your meal.
          </p>
        </div>

        {/* Build Your Custom Meal Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Build Your Custom Subway Meal Online</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our interactive Subway meal builder allows you to fully customize your order. Whether you're counting calories, watching sodium, or tracking protein, you can instantly see how each ingredient affects your meal's nutrition.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-center">Start by selecting:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mealOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-subway-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{option}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6 italic">
                As you make selections, our calculator works behind the scenes as both a Subway calorie counter and a detailed macronutrient tracker—showing the exact protein, carbohydrate, and fat content of your custom meal.
              </p>
            </div>
          </div>
        </div>

        {/* Why Use Our Calculator Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Use Our Subway Nutrition Calculator?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Unlike static PDF nutrition lists or generic apps, our dynamic Subway calorie counter lets you:
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Zap className="h-5 w-5 text-subway-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Support Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Subway USA vs Subway UK Nutrition</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              <p className="text-lg font-semibold text-blue-800">Did you know that Subway menus vary by region?</p>
            </div>
            <p className="text-center text-gray-700 mb-6">Our calculator adjusts to your location:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-blue-800 mb-2">Subway UK Nutrition Calculator</h3>
                <p className="text-gray-700">Tailored for UK-based items, ingredients, and portion sizes.</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-blue-800 mb-2">Subway USA Calorie Calculator</h3>
                <p className="text-gray-700">Matches U.S. menu items and standard servings.</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              This allows for accurate, region-specific meal tracking that aligns with local offerings.
            </p>
          </div>
        </div>

        {/* Popular Uses Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Uses of Our Subway Calculator</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">Users rely on our tool to:</p>
            <div className="space-y-4">
              {popularUses.map((use, index) => (
                <div key={index} className="flex items-start">
                  <BarChart className="h-5 w-5 text-subway-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 italic">
              Whether you need a detailed Subway salad calories calculator or a macro tracker for your favorite footlong, this tool adapts to your choices in real time.
            </p>
          </div>
        </div>

        {/* Health-Conscious Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Health-Conscious Features</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">We also highlight:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {healthFeatures.map((feature, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-subway-green text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Start Building Your Subway Meal Now</h2>
          <p className="text-lg mb-6 opacity-90">
            Ready to take control of your nutrition? Use our Subway nutrition calculator to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>Explore calorie counts, sodium, protein, and more</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>Build custom meals with real-time nutrition tracking</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>Compare Subway sandwiches, wraps, salads, and bowls</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>Make healthier choices whether you're in the US or UK</span>
            </div>
          </div>
          <p className="text-xl font-semibold">
            👉 Try the Subway Calorie Calculator Now – It's Fast, Free, and Easy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeContent;
