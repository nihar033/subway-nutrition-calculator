
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Target, Dumbbell, Scale, Calculator, TrendingUp, Brain } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white py-12 px-8 rounded-xl shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📖 Latest Subway Nutrition Tips & Guides
            </h2>
            <p className="text-xl text-gray-600">
              Discover expert tips, nutrition guides, and healthy meal ideas to make the most of your Subway experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🧩</span>
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Featured Article</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Subway Macros Explained: How to Track Protein, Carbs, and Fat Like a Pro
              </h3>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Whether you're trying to bulk up, slim down, or just eat healthier, tracking your macros — protein, carbohydrates, and fat — is a proven strategy for reaching your fitness goals. With so many customizable options on the Subway menu, it can be tough to know exactly what you're putting in your body.
              </p>

              {/* Macro basics section */}
              <div className="bg-subway-green/5 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Brain className="h-6 w-6 text-subway-green mr-2" />
                  What Are Macros (Macronutrients)?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">💪</div>
                    <h5 className="font-semibold text-subway-green">Protein</h5>
                    <p className="text-sm text-gray-600">Builds muscle & repairs tissue</p>
                    <p className="text-xs text-gray-500 mt-1">4 cal/gram</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <h5 className="font-semibold text-subway-green">Carbs</h5>
                    <p className="text-sm text-gray-600">Your body's main energy source</p>
                    <p className="text-xs text-gray-500 mt-1">4 cal/gram</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">🧠</div>
                    <h5 className="font-semibold text-subway-green">Fats</h5>
                    <p className="text-sm text-gray-600">Essential for hormones & brain health</p>
                    <p className="text-xs text-gray-500 mt-1">9 cal/gram</p>
                  </div>
                </div>
              </div>

              {/* Fitness goals section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                  <Scale className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h5 className="font-semibold text-blue-900 mb-2">Cutting (Fat Loss)</h5>
                  <p className="text-sm text-blue-700">High protein, low fat, moderate carbs</p>
                  <div className="text-xs text-blue-600 mt-2">Skip cheese & creamy sauces</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100">
                  <Dumbbell className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h5 className="font-semibold text-green-900 mb-2">Bulking (Muscle Gain)</h5>
                  <p className="text-sm text-green-700">High protein, high carbs, moderate fat</p>
                  <div className="text-xs text-green-600 mt-2">Add double meat & cheese</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-100">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h5 className="font-semibold text-purple-900 mb-2">Maintenance</h5>
                  <p className="text-sm text-purple-700">Balanced macros across the board</p>
                  <div className="text-xs text-purple-600 mt-2">Lean proteins & whole grains</div>
                </div>
              </div>

              {/* Calculator features */}
              <div className="bg-gradient-to-r from-subway-green/10 to-subway-yellow/10 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Calculator className="h-6 w-6 text-subway-green mr-2" />
                  How Our Subway Macro Calculator Helps You
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <TrendingUp className="h-6 w-6 text-subway-green mx-auto mb-2" />
                    <p className="text-sm font-medium">Real-time Updates</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-6 w-6 text-subway-green mx-auto mb-2" />
                    <p className="text-sm font-medium">Precise Tracking</p>
                  </div>
                  <div className="text-center">
                    <Scale className="h-6 w-6 text-subway-green mx-auto mb-2" />
                    <p className="text-sm font-medium">Goal Optimization</p>
                  </div>
                  <div className="text-center">
                    <Brain className="h-6 w-6 text-subway-green mx-auto mb-2" />
                    <p className="text-sm font-medium">Smart Suggestions</p>
                  </div>
                </div>
              </div>

              {/* Sample macro breakdown */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">📊 Sample Subway Macro Breakdowns</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-blue-600 mb-2">🥗 Cutting Plan</h5>
                    <p className="text-xs text-gray-600 mb-2">6" Turkey on 9-grain with veggies</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Calories:</span>
                        <span className="font-medium">280</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein:</span>
                        <span className="font-medium">18g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carbs:</span>
                        <span className="font-medium">44g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fat:</span>
                        <span className="font-medium">3g</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-green-600 mb-2">🥪 Bulking Plan</h5>
                    <p className="text-xs text-gray-600 mb-2">Footlong Chicken Bacon Ranch</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Calories:</span>
                        <span className="font-medium">760</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein:</span>
                        <span className="font-medium">44g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carbs:</span>
                        <span className="font-medium">90g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fat:</span>
                        <span className="font-medium">32g</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-semibold text-purple-600 mb-2">🍽️ Maintenance</h5>
                    <p className="text-xs text-gray-600 mb-2">6" Grilled Chicken with avocado</p>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Calories:</span>
                        <span className="font-medium">420</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Protein:</span>
                        <span className="font-medium">25g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Carbs:</span>
                        <span className="font-medium">47g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fat:</span>
                        <span className="font-medium">12g</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Take control of your meals and make smarter choices every time you step into a Subway. Master your macros with precision and reach your fitness goals faster.
                </p>
                <Link 
                  to="/blog/low-calorie-subway-sandwiches" 
                  className="inline-flex items-center bg-subway-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-subway-green/90 transition-colors"
                >
                  Read Full Macro Guide
                  <ArrowDown className="ml-2 h-4 w-4 rotate-[-45deg]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
