
import React from 'react';
import { CheckCircle, Search, Globe, BarChart, Zap, Medal, Heart, Utensils, Calculator, Shield } from 'lucide-react';

const NewWelcomeContent = () => {
  const whyUseFeatures = [
    'Count total calories instantly',
    'Break down macros: protein, carbs, fats',
    'Analyze sodium, sugar, and fiber',
    'Customize bread, meats, veggies, cheese, and sauces',
    'Compare 6-inch vs. Footlong calories in seconds'
  ];

  const menuCoverage = [
    'All Subway sandwiches, wraps, bowls, and salads',
    'Sauces, toppings, cheese, and condiments',
    'Bread types like Italian, Wheat, Flatbread & more'
  ];

  const trackingFeatures = [
    'Calories',
    'Protein',
    'Carbohydrates',
    'Fats',
    'Sodium',
    'Sugars',
    'Fiber'
  ];

  const lowCalorieOptions = [
    { name: 'Turkey Breast (6" on wheat)', calories: '~280 calories' },
    { name: 'Veggie Delite (6" with mustard)', calories: '~230 calories' },
    { name: 'Oven-Roasted Chicken (6")', calories: '~320 calories' }
  ];

  const highProteinMeals = [
    { name: 'Double Meat Turkey', protein: '~46g protein' },
    { name: 'Chicken & Bacon Ranch', protein: '~42g protein' },
    { name: 'Subway Club with Extra Meat', protein: '~39g protein' }
  ];

  const ketoOptions = [
    'Protein Bowls (no bread): <15g carbs',
    'Salads with meats & cheese',
    'Low-carb sauces & toppings'
  ];

  const allergenFree = [
    'Gluten',
    'Dairy',
    'Nuts'
  ];

  const userTypes = [
    'Gym-goers tracking macros',
    'Dieters counting calories',
    'Diabetics monitoring sugar',
    'Vegans and vegetarians',
    'Anyone customizing their Subway order'
  ];

  const steps = [
    'Pick a base: Sandwich, wrap, salad, or bowl',
    'Choose your bread and size (6" or Footlong)',
    'Add proteins, veggies, cheese, and sauces',
    'Instantly see total calories and macros',
    'Export or save your custom meal data'
  ];

  const nutritionTips = [
    'Load up on veggies (they\'re free & full of fiber)',
    'Pick lean meats like turkey or grilled chicken',
    'Choose vinegar or mustard over high-fat sauces'
  ];

  const portionTips = [
    'Use the 6" sub for lighter meals',
    'Split a Footlong for two meals'
  ];

  const mealTimingTips = [
    'Choose higher-protein meals post-workout',
    'Opt for lighter items during lunch hours'
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Welcome to the #1 Subway Nutrition Calculator – your ultimate tool to track calories, carbs, protein, fat, sodium, and other nutrition facts for every Subway menu item. Whether you're creating a custom sandwich, salad, wrap, or protein bowl, this tool gives you real-time nutrition insights for every ingredient you add.
          </p>
        </div>

        {/* Why Use Our Calculator */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Search className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Why Use Our Subway Calorie & Macro Calculator?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Wondering how many calories are in your Subway sandwich? Trying to stay on track with your macros or meal goals?
            </p>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our advanced Subway calorie calculator helps you:
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
                This tool is perfect for fitness enthusiasts, keto dieters, weight watchers, and anyone who wants to eat smarter at Subway.
              </p>
            </div>
          </div>
        </div>

        {/* Full Menu Coverage */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Utensils className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Full Subway Menu Coverage – Customize Every Meal</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our Subway calculator includes complete menu support, so you can customize:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuCoverage.map((item, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Medal className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8 italic font-semibold">
              Every change updates your nutrition facts instantly – no more guesswork!
            </p>
          </div>
        </div>

        {/* Regional Support */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Regional Support: USA, UK, Canada & More</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              We support local Subway menus for accurate results:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <span className="text-2xl mb-2 block">🇺🇸</span>
                <h3 className="font-semibold text-red-800 mb-2">Subway USA Nutrition Calculator</h3>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <span className="text-2xl mb-2 block">🇬🇧</span>
                <h3 className="font-semibold text-blue-800 mb-2">Subway UK Calorie Calculator</h3>
              </div>
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <span className="text-2xl mb-2 block">🇨🇦</span>
                <h3 className="font-semibold text-red-800 mb-2">Subway Canada Menu Support</h3>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              Wherever you are, get precise calorie and macro data for your region.
            </p>
          </div>
        </div>

        {/* What You Can Track */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <BarChart className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">What You Can Track with Our Subway Nutrition Tool</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our Subway nutrition tracker gives you full control over:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trackingFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                  <Calculator className="h-6 w-6 text-subway-green mx-auto mb-2" />
                  <p className="font-medium text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              You'll also get allergen data and tips for gluten-free, dairy-free, and vegan Subway options.
            </p>
          </div>
        </div>

        {/* Build Your Sandwich */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <Utensils className="h-8 w-8 text-subway-green mr-3" />
            <h2 className="text-3xl font-bold">Build Your Subway Sandwich Online</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Use our Subway sandwich builder to:
            </p>
            <div className="bg-subway-green text-white p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Select your bread: Italian, multigrain, flatbread, etc.</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Choose your protein: turkey, chicken, ham, steak, tuna, or plant-based</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Add veggies, sauces, and cheese</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Watch your nutrition facts update live – calories, macros, and more</span>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> No sign-up needed.</span>
                  <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> No app download.</span>
                  <span className="flex items-center"><CheckCircle className="h-5 w-5 mr-2" /> 100% free.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Meal Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Subway Meal Categories</h2>
          
          {/* Low-Calorie Options */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-green-600">🟢 Low-Calorie Subway Options (Under 400 Calories)</h3>
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
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-600">🥩 Keto & Low-Carb Subway Picks</h3>
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
            <h2 className="text-3xl font-bold">Advanced Features for Detailed Nutrition Tracking</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Allergen Info */}
              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold">Allergen Info</h3>
                </div>
                <p className="text-gray-700 mb-4">Track options free of:</p>
                <div className="space-y-2">
                  {allergenFree.map((allergen, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                      <span className="text-gray-700">{allergen}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm">Also includes vegan and vegetarian filters.</p>
              </div>

              {/* Sodium & Sugar Monitoring */}
              <div className="bg-red-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">Sodium & Sugar Monitoring</h3>
                </div>
                <p className="text-gray-700 mb-4">Avoid high-sodium and high-sugar ingredients like:</p>
                <div className="space-y-2 mb-4">
                  <div className="text-gray-700">• Sweet onion sauce</div>
                  <div className="text-gray-700">• Teriyaki chicken</div>
                  <div className="text-gray-700">• Certain breads and condiments</div>
                </div>
                <p className="text-gray-600 text-sm">Our calculator shows healthier swaps in real-time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who Uses This Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Who Uses This Subway Calculator?</h2>
          <div className="max-w-3xl mx-auto">
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
            <h2 className="text-3xl font-bold">How to Use the Subway Calorie Calculator</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-8 italic text-lg">
                You'll never have to ask, "How many calories are in my Subway sandwich?" again – our tool gives you instant answers.
              </p>
            </div>
          </div>
        </div>

        {/* Tips for Healthier Meals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Tips for a Healthier Subway Meal</h2>
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
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Control Portions</h3>
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

        {/* Mobile Friendly */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Use It Anywhere – 100% Mobile Friendly</h2>
          <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl">
            <p className="text-lg text-gray-700 mb-6 text-center">Our Subway nutrition tool is:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-subway-green mx-auto mb-2" />
                <p className="font-semibold">💨 Fast-loading</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-subway-green mx-auto mb-2" />
                <p className="font-semibold">📱 Touch-friendly</p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-subway-green mx-auto mb-2" />
                <p className="font-semibold">🌐 Works on all devices</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 italic">
              Perfect for checking your meal before you order at the store.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-subway-green text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Start Tracking Your Subway Meal Now – It's Free!</h2>
          <p className="text-lg mb-6 opacity-90">Customize your meal now and get:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✔️ Total Calories</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✔️ Full Nutrition Label</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✔️ Macro Breakdown</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>✔️ Real-Time Ingredient Analysis</span>
            </div>
          </div>
          <p className="text-lg mb-6 opacity-90">
            Whether you're meal prepping, counting carbs, or just staying informed, our Subway Nutrition Calculator 2025 is your go-to tool.
          </p>
          <p className="text-2xl font-bold">
            🎯 Take control of your Subway meal today – and eat smarter with every bite!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewWelcomeContent;
