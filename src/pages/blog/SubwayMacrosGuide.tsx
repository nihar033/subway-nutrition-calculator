
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Calculator, Target, Dumbbell, TrendingDown, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import BlogPostSchema from '@/components/SEO/BlogPostSchema';

const SubwayMacrosGuide = () => {
  const macroInfo = [
    {
      name: "Protein",
      icon: "💪",
      calories: "4 calories per gram",
      purpose: "Builds and repairs muscle, supports metabolism",
      color: "blue"
    },
    {
      name: "Carbohydrates", 
      icon: "⚡",
      calories: "4 calories per gram",
      purpose: "Your body's main energy source",
      color: "green"
    },
    {
      name: "Fats",
      icon: "🧠",
      calories: "9 calories per gram", 
      purpose: "Essential for hormones, brain health, and satiety",
      color: "yellow"
    }
  ];

  const breadOptions = [
    { name: "9-Grain Wheat (6\")", protein: "5g", carbs: "40g", fat: "2g" },
    { name: "Multigrain Flatbread", protein: "6g", carbs: "44g", fat: "5g" },
    { name: "Italian (White) Bread", protein: "7g", carbs: "41g", fat: "2g" },
    { name: "No Bread (Salad Bowl)", protein: "–", carbs: "–", fat: "–" }
  ];

  const proteinOptions = [
    { name: "Oven Roasted Turkey", protein: "18g", carbs: "1g", fat: "2g" },
    { name: "Grilled Chicken Strips", protein: "20g", carbs: "0g", fat: "3g" },
    { name: "Steak", protein: "21g", carbs: "2g", fat: "6g" },
    { name: "Tuna (with mayo)", protein: "15g", carbs: "2g", fat: "15g" },
    { name: "Meatballs", protein: "20g", carbs: "9g", fat: "18g" },
    { name: "Veggie Patty", protein: "10g", carbs: "9g", fat: "5g" }
  ];

  const sauceOptions = [
    { name: "Mayonnaise (Regular)", calories: "110", fat: "12g", carbs: "0g" },
    { name: "Ranch", calories: "110", fat: "11g", carbs: "1g" },
    { name: "Sweet Onion", calories: "40", fat: "0g", carbs: "9g" },
    { name: "Honey Mustard", calories: "30", fat: "0g", carbs: "6g" },
    { name: "Yellow Mustard", calories: "10", fat: "0g", carbs: "1g" },
    { name: "Oil & Vinegar", calories: "90", fat: "10g", carbs: "0g" }
  ];

  const mealPlans = [
    {
      title: "Cutting Plan (Under 400 Calories)",
      icon: <TrendingDown className="h-6 w-6" />,
      meal: "6\" Turkey on 9-grain with veggies, mustard",
      calories: 280,
      protein: "18g",
      carbs: "44g", 
      fat: "3g",
      color: "red"
    },
    {
      title: "Bulking Plan (750–800 Calories)",
      icon: <Dumbbell className="h-6 w-6" />,
      meal: "Footlong Chicken Bacon Ranch with cheese",
      calories: 760,
      protein: "44g",
      carbs: "90g",
      fat: "32g", 
      color: "blue"
    },
    {
      title: "Maintenance Plan (Balanced)",
      icon: <Target className="h-6 w-6" />,
      meal: "6\" Grilled Chicken with multigrain bread, avocado, mustard",
      calories: 420,
      protein: "25g",
      carbs: "47g",
      fat: "12g",
      color: "green"
    }
  ];

  return (
    <>
      <BlogPostSchema
        title="Subway Macros Explained: How to Track Protein, Carbs, and Fat Like a Pro"
        description="Master your Subway macros with our comprehensive guide. Learn how to track protein, carbs, and fat to reach your fitness goals using our Subway macro calculator."
        url="https://subway-nutrition-calculator.com/blog/subway-macros-guide"
        datePublished="2025-01-01"
        dateModified="2025-01-01"
      />
      
      <Helmet>
        <link rel="canonical" href="https://subway-nutrition-calculator.com/blog/subway-macros-guide" />
      </Helmet>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-subway-green to-subway-yellow text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Subway Macros Explained: How to Track Protein, Carbs, and Fat Like a Pro
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Master your Subway macros with our comprehensive guide. Learn how to track protein, carbs, and fat to reach your fitness goals using our Subway macro calculator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="secondary" size="lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Try Our Macro Calculator
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById('macros-explained')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Macros
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
                Whether you're trying to bulk up, slim down, or just eat healthier, tracking your macros — protein, carbohydrates, and fat — is a proven strategy for reaching your fitness goals. With so many customizable options on the Subway menu, it can be tough to know exactly what you're putting in your body.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mt-4">
                That's where our Subway Macro Calculator comes in. In this guide, you'll learn what macros are, why they matter, and how to use our calculator to build meals at Subway that fit your macro goals like a pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Macros */}
      <section id="macros-explained" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                🧩 What Are Macros (Macronutrients)?
              </h2>
              <p className="text-xl text-gray-600">
                Macros refer to the three main nutrients your body needs in large amounts:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {macroInfo.map((macro, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md text-center">
                  <div className="text-4xl mb-4">{macro.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{macro.name}</h3>
                  <div className="text-lg font-semibold text-subway-green mb-2">
                    {macro.calories}
                  </div>
                  <p className="text-gray-600">{macro.purpose}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Calorie Calculation Example</h3>
              <p className="text-lg text-gray-600 text-center">
                So, if you're eating a sandwich with <strong>20g protein</strong>, <strong>40g carbs</strong>, and <strong>10g fat</strong>, that's <strong className="text-subway-green">330 calories total</strong> (20×4 + 40×4 + 10×9).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tracking Matters */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
              🎯 Why Tracking Macros at Subway Matters
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subway is one of the few fast-food restaurants where you can fully customize your meal—making it ideal for macro-based meal planning. Whether you're:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Cutting (losing fat)', 'Bulking (building muscle)', 'Maintaining weight', 'Following keto, high-protein, or low-carb diets'].map((goal, index) => (
                <div key={index} className="bg-subway-green/10 rounded-lg p-4">
                  <div className="font-semibold text-subway-green">{goal}</div>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-600 mt-8">
              ...you can tweak your Subway order to fit your exact needs.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                🛠️ How to Use the Subway Macro Calculator
              </h2>
              <p className="text-xl text-gray-600">
                Our Subway Macro Calculator is a free online tool that helps you:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                {[
                  'Track protein, carbs, fats, and total calories',
                  'Customize bread, sauces, proteins, veggies, and cheese',
                  'Instantly see macro updates for 6-inch or Footlong subs'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  'Compare different combinations in real-time',
                  'Export your meal for tracking apps like MyFitnessPal',
                  'Get personalized recommendations for your goals'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                🚀 Steps to Use It:
              </h3>
              <div className="space-y-4">
                {[
                  'Select your base: Sandwich, wrap, salad, or protein bowl',
                  'Choose your bread (or go breadless for keto)',
                  'Pick your protein: Turkey, chicken, steak, tuna, meatless, etc.',
                  'Add cheese, veggies, and sauces',
                  'Watch the macro breakdown update instantly on screen'
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-subway-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
              <div className="bg-subway-yellow/20 rounded-lg p-4 mt-6">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💡</span>
                  <span className="font-semibold">Tip:</span>
                  <span className="ml-2">Try building multiple combos to see which version offers the best macro ratio for your goals!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Goals by Fitness Objective */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                🏋️ Macro Goals by Fitness Objective
              </h2>
              <p className="text-xl text-gray-600">
                Here's how to tailor your Subway order depending on your fitness target:
              </p>
            </div>

            <div className="space-y-8">
              {/* Cutting */}
              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  💪 For Cutting (Fat Loss)
                </h3>
                <p className="text-lg mb-4">Focus on high protein, low fat, moderate carbs</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>• Skip cheese and creamy sauces (like mayo or ranch)</li>
                      <li>• Choose 6-inch subs or salads to reduce calories</li>
                      <li>• Load up on free veggies for fiber</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">Example:</h4>
                    <p className="text-sm mb-3">6" Oven Roasted Turkey on 9-Grain Wheat</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Protein: <strong>18g</strong></div>
                      <div>Carbs: <strong>44g</strong></div>
                      <div>Fat: <strong>3g</strong></div>
                      <div>Calories: <strong>~280</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bulking */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  🧱 For Bulking (Muscle Gain)
                </h3>
                <p className="text-lg mb-4">Aim for high protein, high carbs, moderate fat</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>• Add double meat, cheese, avocado, and sauces</li>
                      <li>• Choose Footlong subs or protein bowls with hearty toppings</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">Example:</h4>
                    <p className="text-sm mb-3">Footlong Chicken & Bacon Ranch Melt with Cheese</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Protein: <strong>44g</strong></div>
                      <div>Carbs: <strong>90g</strong></div>
                      <div>Fat: <strong>32g</strong></div>
                      <div>Calories: <strong>~760</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance */}
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  🧘 For Maintenance or General Health
                </h3>
                <p className="text-lg mb-4">Balance your macros across the board</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-2">
                      <li>• Add lean proteins, whole-grain bread, and healthy fats like avocado</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">Example:</h4>
                    <p className="text-sm mb-3">6" Turkey Breast on Multigrain with Avocado</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Protein: <strong>20g</strong></div>
                      <div>Carbs: <strong>45g</strong></div>
                      <div>Fat: <strong>10g</strong></div>
                      <div>Calories: <strong>~360</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bread Options Table */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                🍞 Subway Bread Options by Macro Content
              </h2>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-subway-green text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Bread Type</th>
                      <th className="px-6 py-4 text-center">Protein</th>
                      <th className="px-6 py-4 text-center">Carbs</th>
                      <th className="px-6 py-4 text-center">Fat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {breadOptions.map((bread, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold">{bread.name}</td>
                        <td className="px-6 py-4 text-center">{bread.protein}</td>
                        <td className="px-6 py-4 text-center">{bread.carbs}</td>
                        <td className="px-6 py-4 text-center">{bread.fat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-subway-yellow/20 text-center">
                <span className="text-sm">🔎 Use the macro calculator to test which bread best fits your goals.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protein Options Table */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                🧀 Subway Proteins by Macro Profile
              </h2>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-subway-green text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Protein Option</th>
                      <th className="px-6 py-4 text-center">Protein</th>
                      <th className="px-6 py-4 text-center">Carbs</th>
                      <th className="px-6 py-4 text-center">Fat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proteinOptions.map((protein, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold">{protein.name}</td>
                        <td className="px-6 py-4 text-center">{protein.protein}</td>
                        <td className="px-6 py-4 text-center">{protein.carbs}</td>
                        <td className="px-6 py-4 text-center">{protein.fat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-subway-yellow/20 text-center">
                <span className="text-sm">🧠 Want to bulk? Go with double meat for added protein.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sauce Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                🍯 Subway Sauces and Their Macro Effects
              </h2>
              <p className="text-xl text-gray-600">Be cautious with sauces—some are calorie bombs in disguise!</p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-subway-green text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Sauce</th>
                      <th className="px-6 py-4 text-center">Calories</th>
                      <th className="px-6 py-4 text-center">Fat</th>
                      <th className="px-6 py-4 text-center">Carbs</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sauceOptions.map((sauce, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold">{sauce.name}</td>
                        <td className="px-6 py-4 text-center">{sauce.calories}</td>
                        <td className="px-6 py-4 text-center">{sauce.fat}</td>
                        <td className="px-6 py-4 text-center">{sauce.carbs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-subway-yellow/20 text-center">
                <span className="text-sm">✅ Pro Tip: Stick with mustard or vinegar if cutting calories or carbs.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plans */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                📊 Macro Breakdown: Sample Subway Meal Plan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mealPlans.map((plan, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className={`text-${plan.color}-500 mr-3`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-lg font-bold">{plan.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Meal:</p>
                    <p className="font-semibold">{plan.meal}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Calories:</span>
                      <span className="font-bold">{plan.calories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Protein:</span>
                      <span className="font-bold">{plan.protein}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carbs:</span>
                      <span className="font-bold">{plan.carbs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fat:</span>
                      <span className="font-bold">{plan.fat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Calculator */}
      <section className="py-16 bg-subway-green text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
                📱 Why Use Our Subway Macro Calculator?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🧮", text: "Real-time macro updates with every ingredient added" },
                { icon: "🧠", text: "Perfect for macro tracking apps and meal planning" },
                { icon: "🌎", text: "Works with Subway menus in US, UK, Canada & more" },
                { icon: "🔄", text: "Compare meals instantly before you order" },
                { icon: "💪", text: "Designed for fitness goals: cutting, bulking, low-carb, high-protein" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-white/10 rounded-lg">
                  <span className="text-2xl mr-4">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/">
                <Button size="lg" variant="secondary">
                  <Calculator className="mr-2 h-5 w-5" />
                  Try Free Macro Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
              🎯 Final Thoughts: Master Your Macros at Subway
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Tracking your Subway macros doesn't have to be hard. With our Subway Macro Calculator, you can build meals that support your fitness journey, whether you're trying to lose weight, gain muscle, or just stay healthy.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Take control of your meals and make smarter choices every time you step into a Subway. Try the free Subway macro calculator now and start crafting meals that fuel your body right!
              </p>
            </div>
            <div className="mt-8">
              <Link to="/">
                <Button size="lg" className="bg-subway-green hover:bg-subway-green/90">
                  <Brain className="mr-2 h-5 w-5" />
                  Start Using Macro Calculator
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
            <span>Subway Macros Explained: How to Track Protein, Carbs, and Fat Like a Pro</span>
          </nav>
        </div>
      </section>
    </>
  );
};

export default SubwayMacrosGuide;
