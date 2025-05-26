
import React from 'react';
import { Calculator, Utensils, ArrowDown, Sandwich } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewWelcomeContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Welcome Introduction */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Welcome to the Subway Nutrition Calculator 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your all-in-one tool for tracking calories, macros, carbs, sodium, and comprehensive nutrition facts for all your favorite Subway menu items. Whether you're customizing a sandwich, salad, protein bowl, or wrap, our powerful calculator helps you build your Subway meal with precise nutrition information in real time.
          </p>
        </div>

        {/* Why Use Our Calculator Section */}
        <div className="mb-16">
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
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Calculate total calories in your Subway meal</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-3">⚖️</div>
              <h3 className="font-semibold mb-2">Count carbs, protein, fat, and sodium</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Analyze macro breakdowns with our Subway macro calculator</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="font-semibold mb-2">Customize items like bread, sauces, veggies, cheese, and meat</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">See results instantly for both 6-inch and Footlong subs</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-3">💪</div>
              <h3 className="font-semibold mb-2">Perfect for fitness enthusiasts and macro tracking</h3>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-lg">
            Whether you're on a diet, counting macros, or just curious, our Subway sandwich calorie calculator is built for you.
          </p>
        </div>

        {/* Complete Menu Coverage */}
        <div className="mb-16">
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
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl mb-3">🍞</div>
              <h3 className="font-semibold mb-2">Bread Options</h3>
              <p className="text-gray-600 text-sm">Italian, multigrain, flatbread, and more</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl mb-3">🥩</div>
              <h3 className="font-semibold mb-2">Proteins</h3>
              <p className="text-gray-600 text-sm">Turkey, chicken, ham, steak, tuna, and plant-based alternatives</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl mb-3">🥬</div>
              <h3 className="font-semibold mb-2">Toppings</h3>
              <p className="text-gray-600 text-sm">A variety of fresh vegetables and cheeses</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="text-3xl mb-3">🍯</div>
              <h3 className="font-semibold mb-2">Sauces</h3>
              <p className="text-gray-600 text-sm">From classic mustard to sweet onion and beyond</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Every selection updates your meal's nutrition facts in real time, ensuring accuracy for every customization.
          </p>
        </div>

        {/* Regional Support */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🌎 Supports USA, UK, Canada & More
            </h2>
            <p className="text-xl text-gray-600">Looking for regional data? We've got you covered:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🇺🇸</div>
              <h3 className="font-semibold">Subway Nutrition Calculator US</h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🇬🇧</div>
              <h3 className="font-semibold">Subway Calorie Calculator UK</h3>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🇨🇦</div>
              <h3 className="font-semibold">Subway Canada Nutrition Calculator</h3>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Whether you're in the U.S. or abroad, our Subway calculator supports local menus, calorie counts, and nutrition data for accuracy.
          </p>
        </div>

        {/* Smart Calculator Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🧠 Smart & Accurate Subway Macro Calculator
            </h2>
            <p className="text-xl text-gray-600">Need detailed insights? Our Subway macros calculator breaks down your meal into:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['Protein', 'Carbs', 'Fats', 'Calories', 'Sodium', 'Sugars', 'Fiber'].map((nutrient) => (
              <div key={nutrient} className="text-center p-4 bg-subway-green/10 rounded-lg">
                <div className="font-semibold text-subway-green">{nutrient}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg font-medium">
            Perfect for meal prep, fitness goals, and macro tracking!
          </p>
        </div>

        {/* Build Your Sandwich Online */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              👨‍🍳 Build Your Subway Sandwich Online
            </h2>
            <p className="text-xl text-gray-600">Use our free Subway Sandwich Builder to add:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">🍞 Your choice of bread</h3>
              <p className="text-gray-600">Italian, multigrain, flatbread</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">🥩 Any meat</h3>
              <p className="text-gray-600">Turkey, chicken, ham, steak</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">🥬 Toppings, cheese, and sauces</h3>
              <p className="text-gray-600">Customize every ingredient</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-4">📊 Real-time nutrition facts</h3>
              <p className="text-gray-600">See updates instantly</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            It's never been easier to calculate Subway sandwich calories before you order.
          </p>
        </div>

        {/* Who Uses This Calculator */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📊 Who Uses This Subway Calculator?
            </h2>
            <p className="text-xl text-gray-600">Our tool is designed for a wide range of users:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-2xl mb-3">💪</div>
              <h3 className="font-semibold">Fitness enthusiasts</h3>
              <p className="text-gray-600 text-sm">Counting calories or macros</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-3">🥑</div>
              <h3 className="font-semibold">Keto or low-carb eaters</h3>
              <p className="text-gray-600 text-sm">Avoiding certain ingredients</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="text-2xl mb-3">🩺</div>
              <h3 className="font-semibold">Diabetics</h3>
              <p className="text-gray-600 text-sm">Monitoring sugar and carbs</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="text-2xl mb-3">⚖️</div>
              <h3 className="font-semibold">Weight watchers</h3>
              <p className="text-gray-600 text-sm">Building low-calorie meals</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="font-semibold">Vegans or vegetarians</h3>
              <p className="text-gray-600 text-sm">Tracking protein and fiber</p>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Utensils className="h-8 w-8 text-subway-green mr-3" />
              💡 How to Use the Subway Nutrition Calculator
            </h2>
            <p className="text-xl text-gray-600">Getting started with our advanced calorie counter Subway tool is simple and intuitive:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="font-bold mb-2">Select Your Base</h3>
              <p className="text-gray-600">Choose from sandwiches, salads, wraps, or protein bowls</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="font-bold mb-2">Pick Your Bread</h3>
              <p className="text-gray-600">From classic Italian herbs & cheese to multigrain and flatbread options</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="font-bold mb-2">Add Proteins</h3>
              <p className="text-gray-600">Select from turkey breast, chicken, roast beef, tuna, or plant-based alternatives</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="font-bold mb-2">Customize Toppings</h3>
              <p className="text-gray-600">Add vegetables, cheese, and condiments while watching calories update</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">5️⃣</div>
              <h3 className="font-bold mb-2">Compare Sizes</h3>
              <p className="text-gray-600">Toggle between 6-inch and Footlong portions instantly</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">6️⃣</div>
              <h3 className="font-bold mb-2">Export Results</h3>
              <p className="text-gray-600">Save or share your custom meal's complete nutrition breakdown</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Our comprehensive Subway calories calculator updates nutrition information in real-time as you make selections, ensuring accuracy for every customization. This makes it the most reliable calorie calculator for Subway meals available online.
          </p>
        </div>

        {/* Popular Menu Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🥗 Popular Subway Menu Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🥬</span>
                Low-Calorie Subway Options
              </h3>
              <p className="text-gray-600 mb-4">Discover sandwiches under 400 calories using our precise calculate Subway sandwich calories feature:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Turkey Breast on 9-grain wheat (6-inch): ~280 calories</li>
                <li>• Veggie Delite with mustard: ~230 calories</li>
                <li>• Oven Roasted Chicken breast: ~320 calories</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">💪</span>
                High-Protein Subway Meals
              </h3>
              <p className="text-gray-600 mb-4">Perfect for fitness enthusiasts using our detailed Subway macros calculator:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Double Meat Turkey Breast: 46g protein</li>
                <li>• Chicken & Bacon Ranch Melt: 42g protein</li>
                <li>• Subway Club with extra meat: 39g protein</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🥑</span>
                Keto-Friendly Subway Options
              </h3>
              <p className="text-gray-600 mb-4">Use our specialized Subway carb counter to find low-carb meals:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Any protein as a salad (under 15g carbs)</li>
                <li>• Protein bowls without bread</li>
                <li>• Cheese and meat combinations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🔬 Advanced Nutrition Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">⚠️</span>
                Allergen Information
              </h3>
              <p className="text-gray-600 mb-4">Our detailed Subway nutrition information calculator includes comprehensive allergen data for:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Gluten-free options</li>
                <li>• Dairy-free alternatives</li>
                <li>• Nut allergy considerations</li>
                <li>• Vegetarian and vegan choices</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🧂</span>
                Sodium Tracking
              </h3>
              <p className="text-gray-600 mb-4">The powerful Subway sodium calculator helps users monitoring salt intake identify:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Lowest sodium bread options</li>
                <li>• High-sodium ingredients to avoid</li>
                <li>• Healthier sauce alternatives</li>
                <li>• Fresh vegetable recommendations</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🍯</span>
                Sugar Content Analysis
              </h3>
              <p className="text-gray-600 mb-4">Track hidden sugars in:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Sweet onion sauce and honey mustard</li>
                <li>• Teriyaki glazed proteins</li>
                <li>• Certain bread varieties</li>
                <li>• Fruit-based toppings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Our Calculator Stands Out */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🏆 Why Our Calculator Stands Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-subway-green/10 rounded-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">Unlike static nutrition charts, our dynamic Subway calorie tracker provides instant calculations as you modify ingredients, ensuring accuracy for every possible combination.</p>
            </div>
            <div className="text-center p-6 bg-subway-green/10 rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold mb-2">Comprehensive Database</h3>
              <p className="text-gray-600">We maintain the most complete database of Subway nutrition facts, including seasonal menu items, regional specialties, and limited-time offers.</p>
            </div>
            <div className="text-center p-6 bg-subway-green/10 rounded-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-bold mb-2">Mobile-Optimized Design</h3>
              <p className="text-gray-600">Access our versatile Subway Footlong calories calculator seamlessly on any device, with touch-friendly controls and fast loading times.</p>
            </div>
          </div>
        </div>

        {/* Track Your Journey */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📈 Track Your Subway Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-subway-green/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📅</span>
                Daily Meal Planning
              </h3>
              <p className="text-gray-600">Use our versatile Subway sandwich calorie calculator to plan balanced meals that fit your daily nutrition goals. Whether you're aiming for 1,200 calories or 2,500 calories per day, create Subway meals that complement your overall diet plan.</p>
            </div>
            <div className="bg-white border-2 border-subway-green/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📝</span>
                Weekly Meal Prep
              </h3>
              <p className="text-gray-600">Plan multiple Subway meals for the week using our comprehensive build your Subway meal feature. Compare different combinations including wraps, protein bowls, and salads to add variety while maintaining consistent nutrition targets.</p>
            </div>
            <div className="bg-white border-2 border-subway-green/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📊</span>
                Progress Monitoring
              </h3>
              <p className="text-gray-600">Track how your Subway choices align with fitness goals, whether you're building muscle, losing weight, or maintaining a healthy lifestyle.</p>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mb-16 bg-gray-50 py-12 px-8 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📖 Latest Subway Nutrition Tips & Guides
            </h2>
            <p className="text-xl text-gray-600">
              Discover expert tips, nutrition guides, and healthy meal ideas to make the most of your Subway experience.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🏆</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Featured Post</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Top 10 Low-Calorie Subway Sandwiches for Weight Loss (2025 Guide)
              </h3>
              <p className="text-gray-600 mb-4">
                Looking for healthy Subway options? Discover the top 10 lowest calorie Subway sandwiches perfect for weight loss. See calories, macros & nutrition tips for each sub!
              </p>
              <Link 
                to="/blog/low-calorie-subway-sandwiches" 
                className="inline-flex items-center text-subway-green font-semibold hover:underline"
              >
                Read Full Guide
                <ArrowDown className="ml-2 h-4 w-4 rotate-[-45deg]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mb-16 bg-subway-green/5 py-12 px-8 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🌟 Pro Tips for Healthier Subway Meals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">💪</span>
                Maximize Nutrition
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Load up on free vegetables for added vitamins and fiber</li>
                <li>• Choose lean proteins like turkey breast or grilled chicken</li>
                <li>• Opt for mustard or vinegar instead of high-calorie sauces</li>
                <li>• Consider protein bowls to reduce carbs while maximizing protein</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">⚖️</span>
                Portion Control
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use our calculator to compare 6-inch vs Footlong portions</li>
                <li>• Split a Footlong into two meals for better portion management</li>
                <li>• Balance high-calorie ingredients with lower-calorie options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">⏰</span>
                Meal Timing
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use lighter options for lunch and heartier meals post-workout</li>
                <li>• Consider protein-heavy options after exercise</li>
                <li>• Balance your Subway meal with other daily food choices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-subway-green to-subway-yellow p-12 rounded-xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Start Now – Free Subway Calorie Calculator
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Just pick your items, customize your toppings, and instantly get comprehensive nutrition information!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold">✅ Total Calories</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold">✅ Full Nutrition Facts</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold">✅ Macro Breakdown</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="font-semibold">✅ Custom Meal Insights</div>
            </div>
          </div>

          <p className="text-lg opacity-90">
            Whether you're tracking Subway sandwich calories, Subway salad nutrition, or calculating your Subway macros, our calculator is the easiest way to get accurate results fast.
          </p>

          <div className="mt-8">
            <p className="text-lg font-medium opacity-95">
              Transform your Subway experience from guesswork to precision with the most comprehensive Subway nutrition calculator available online. Start building your perfect meal today and take control of your nutrition journey, one sandwich at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWelcomeContent;
