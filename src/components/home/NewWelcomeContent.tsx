
import React from 'react';
import { Calculator, Utensils, ArrowDown, Sandwich } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewWelcomeContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Why Use Our Calculator Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Calculator className="h-8 w-8 text-subway-green mr-3" />
              Why Use Our Subway Calorie Calculator?
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
              Complete Menu Coverage for Every Subway Option
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

        {/* How to Use */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Utensils className="h-8 w-8 text-subway-green mr-3" />
              How to Use the Subway Nutrition Calculator
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
        </div>
      </div>
    </section>
  );
};

export default NewWelcomeContent;
