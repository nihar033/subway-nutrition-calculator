import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Calculator, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostSchema from '@/components/SEO/BlogPostSchema';

const LowCalorieSubwaySandwiches = () => {
  const sandwiches = [
    {
      rank: 1,
      name: "Veggie Delite (6-inch)",
      emoji: "🏆",
      calories: 210,
      protein: "9g",
      fat: "2g",
      carbs: "39g",
      sodium: "280mg",
      description: "The Veggie Delite is a staple for those seeking a light, plant-based option. Packed with fresh vegetables like lettuce, tomatoes, cucumbers, and green peppers, it's a fiber-rich choice that keeps you full without the extra calories."
    },
    {
      rank: 2,
      name: "Oven-Roasted Turkey (6-inch)",
      emoji: "🥗",
      calories: 260,
      protein: "19g",
      fat: "3g",
      carbs: "40g",
      sodium: "840mg",
      description: "This sandwich offers lean protein with minimal fat, making it an excellent choice for muscle maintenance and satiety. Opting for whole-grain bread and adding plenty of veggies enhances its nutritional profile."
    },
    {
      rank: 3,
      name: "Black Forest Ham (6-inch)",
      emoji: "🍖",
      calories: 280,
      protein: "20g",
      fat: "4g",
      carbs: "42g",
      sodium: "860mg",
      description: "Combining savory ham with fresh vegetables, this sandwich provides a satisfying meal that's low in calories and high in protein. Choosing mustard over mayonnaise can further reduce calorie intake."
    },
    {
      rank: 4,
      name: "Grilled Chicken (6-inch)",
      emoji: "🍗",
      calories: 290,
      protein: "27g",
      fat: "4g",
      carbs: "40g",
      sodium: "580mg",
      description: "Grilled chicken provides a lean source of protein, essential for those aiming to lose weight while preserving muscle mass. Adding a variety of vegetables and opting for whole-grain bread can make this sandwich even more nutritious."
    },
    {
      rank: 5,
      name: "Rotisserie-Style Chicken (6-inch)",
      emoji: "🐓",
      calories: 310,
      protein: "25g",
      fat: "6g",
      carbs: "40g",
      sodium: "760mg",
      description: "This option offers tender, flavorful chicken with a moderate calorie count. It's a great choice for those seeking a balance between taste and health."
    },
    {
      rank: 6,
      name: "Roast Beef (6-inch)",
      emoji: "🥩",
      calories: 310,
      protein: "25g",
      fat: "5g",
      carbs: "42g",
      sodium: "790mg",
      description: "Roast beef provides a hearty flavor with a lean protein profile. Pairing it with whole-grain bread and a variety of vegetables can enhance its health benefits."
    },
    {
      rank: 7,
      name: "Sweet Onion Chicken Teriyaki (6-inch)",
      emoji: "🧀",
      calories: 350,
      protein: "26g",
      fat: "4g",
      carbs: "55g",
      sodium: "850mg",
      description: "This sandwich combines sweet and savory flavors with a lean protein source. It's a flavorful option that doesn't compromise on health."
    },
    {
      rank: 8,
      name: "Turkey Wrap",
      emoji: "🥙",
      calories: 430,
      protein: "32g",
      fat: "10g",
      carbs: "54g",
      sodium: "1540mg",
      description: "For those seeking a higher protein content, the turkey wrap is a solid choice. It's filling and can be customized with various vegetables to enhance its nutritional value."
    },
    {
      rank: 9,
      name: "Grilled Chicken Wrap",
      emoji: "🐔",
      calories: 470,
      protein: "42g",
      fat: "11g",
      carbs: "54g",
      sodium: "1010mg",
      description: "This wrap offers a substantial amount of protein, making it ideal for those looking to stay full longer. Adding fresh vegetables can further boost its health benefits."
    },
    {
      rank: 10,
      name: "Veggie Delite Salad",
      emoji: "🥗",
      calories: 50,
      protein: "2g",
      fat: "1g",
      carbs: "1g",
      sodium: "75mg",
      description: "For an ultra-light option, the Veggie Delite Salad is unbeatable. It's perfect for those seeking a low-calorie meal that's rich in fiber and nutrients."
    }
  ];

  const tips = [
    {
      icon: "🍞",
      title: "Choose Whole-Grain Bread",
      description: "Opt for 9-grain wheat or multigrain bread to increase fiber intake."
    },
    {
      icon: "🥬",
      title: "Load Up on Veggies",
      description: "Add a variety of vegetables to increase volume and satiety without adding many calories."
    },
    {
      icon: "🍯",
      title: "Be Mindful of Sauces",
      description: "Select low-calorie options like mustard or vinegar-based dressings."
    },
    {
      icon: "📏",
      title: "Watch Portion Sizes",
      description: "Consider a 6-inch sub instead of a footlong to control calorie intake."
    },
    {
      icon: "🧀",
      title: "Skip the Cheese",
      description: "Omitting cheese can save calories and reduce saturated fat."
    }
  ];

  return (
    <>
      <BlogPostSchema
        title="Top 10 Low-Calorie Subway Sandwiches for Weight Loss (2025 Guide)"
        description="Looking for healthy Subway options? Discover the top 10 lowest calorie Subway sandwiches perfect for weight loss. See calories, macros & nutrition tips for each sub!"
        url="https://subway-nutrition-calculator.com/blog/low-calorie-subway-sandwiches"
        datePublished="2025-01-01"
        dateModified="2025-01-01"
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-subway-green to-subway-yellow text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Top 10 Low-Calorie Subway Sandwiches for Weight Loss (2025 Guide)
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Looking for healthy Subway options? Discover the top 10 lowest calorie Subway sandwiches perfect for weight loss. See calories, macros & nutrition tips for each sub!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="secondary" size="lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Try Our Calculator
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById('sandwiches-list')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Top 10 List
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed">
                Looking to shed pounds without sacrificing flavor? Subway offers a variety of sandwiches that are both delicious and conducive to weight loss. By choosing the right combinations of bread, protein, and toppings, you can enjoy satisfying meals that align with your dietary goals. Here's a comprehensive guide to the top 10 low-calorie Subway sandwiches to help you make informed choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Low-Calorie Sandwiches Header */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Best Low-Calorie Subway Sandwiches to Try
            </h2>
            <p className="text-xl text-gray-600">
              Let's dive into the healthiest and most weight-loss-friendly Subway options
            </p>
          </div>
        </div>
      </section>

      {/* Sandwiches List */}
      <section id="sandwiches-list" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sandwiches.map((sandwich) => (
                <div key={sandwich.rank} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-4xl mb-2">{sandwich.emoji}</div>
                        <div className="text-sm font-bold text-subway-green">#{sandwich.rank}</div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-4">{sandwich.name}</h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                          <div className="text-center p-3 bg-red-50 rounded-lg">
                            <div className="text-2xl font-bold text-red-600">{sandwich.calories}</div>
                            <div className="text-sm text-gray-600">Calories</div>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{sandwich.protein}</div>
                            <div className="text-sm text-gray-600">Protein</div>
                          </div>
                          <div className="text-center p-3 bg-yellow-50 rounded-lg">
                            <div className="text-lg font-bold text-yellow-600">{sandwich.fat}</div>
                            <div className="text-sm text-gray-600">Fat</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{sandwich.carbs}</div>
                            <div className="text-sm text-gray-600">Carbs</div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">{sandwich.sodium}</div>
                            <div className="text-sm text-gray-600">Sodium</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">{sandwich.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                <span className="mr-3">🧠</span>
                Tips for Crafting a Weight-Loss-Friendly Subway Meal
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tips.map((tip, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-16 bg-subway-green text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <Calculator className="mr-3 h-8 w-8" />
              Customize Your Meal with Our Subway Nutrition Calculator
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Take the guesswork out of your meal planning by using our Subway Nutrition Calculator. This tool allows you to customize your sandwich and see real-time nutritional information, helping you make informed choices that align with your weight loss goals.
            </p>
            <Link to="/">
              <Button size="lg" variant="secondary">
                <Utensils className="mr-2 h-5 w-5" />
                Start Using Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
              <span className="mr-3">🌟</span>
              Final Thoughts
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed">
                Subway offers a variety of options for those seeking low-calorie meals without compromising on taste. By making mindful choices and utilizing tools like our nutrition calculator, you can enjoy delicious sandwiches that support your weight loss journey.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/">
                <Button size="lg" className="bg-subway-green hover:bg-subway-green/90">
                  Try Our Nutrition Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 border-t">
        <div className="container-custom">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-subway-green">Home</Link>
            <span className="mx-2">/</span>
            <span>Top 10 Low-Calorie Subway Sandwiches for Weight Loss</span>
          </nav>
        </div>
      </section>
    </>
  );
};

export default LowCalorieSubwaySandwiches;
