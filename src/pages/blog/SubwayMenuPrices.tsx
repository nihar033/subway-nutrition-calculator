import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SubwayMenuPrices = () => {
  const featuredCombos = [
    { name: "Elite Chicken & Bacon Ranch", price: "$15.28", calories: "580 Cal" },
    { name: "The Philly", price: "$13.78", calories: "505 Cal" },
    { name: "Subway Club", price: "$14.78", calories: "500 Cal" },
    { name: "All-American Club", price: "$14.28", calories: "540 Cal" },
    { name: "The Hotshot Italiano", price: "$12.28", calories: "630 Cal" },
    { name: "The Ultimate B.M.T.", price: "$12.78", calories: "560 Cal" },
    { name: "Titan Turkey", price: "$12.68", calories: "490 Cal" },
    { name: "Home Run Ham", price: "$12.18", calories: "510 Cal" },
    { name: "Honey Mustard BBQ Chicken", price: "$13.78", calories: "510 Cal" },
    { name: "The Boss", price: "$14.58", calories: "690 Cal" },
    { name: "Spicy Nacho Chicken", price: "$13.78", calories: "440 Cal" },
    { name: "Cheesy Garlic Steak", price: "$13.78", calories: "510 Cal" }
  ];

  const classicSandwiches = [
    { name: "Black Forest Ham", price: "$5.99", calories: "320 Cal" },
    { name: "B.L.T.", price: "$5.99", calories: "370 Cal" },
    { name: "Cold Cut Combo", price: "$5.99", calories: "370 Cal" },
    { name: "Grilled Chicken", price: "$6.99", calories: "330 Cal" },
    { name: "Meatball Marinara", price: "$6.99", calories: "520 Cal" },
    { name: "Oven-Roasted Turkey", price: "$5.99", calories: "310 Cal" },
    { name: "Pizza Sub", price: "$4.99", calories: "490 Cal" },
    { name: "Oven-Roasted Turkey & Ham", price: "$5.99", calories: "310 Cal" },
    { name: "Rotisserie-Style Chicken", price: "$6.99", calories: "350 Cal" },
    { name: "Roast Beef", price: "$6.99", calories: "350 Cal" },
    { name: "Steak & Cheese", price: "$6.99", calories: "370 Cal" },
    { name: "Tuna", price: "$5.99", calories: "510 Cal" },
    { name: "Veggie Delite", price: "$5.99", calories: "220 Cal" }
  ];

  const sidekicks = [
    { name: "Cinnabon Footlong Churro", price: "$2.99", calories: "190 Cal" },
    { name: "Auntie Anne's Footlong Pretzel", price: "$3.99", calories: "330 Cal" },
    { name: "Pepperoni & Cheese Dipper", price: "$3.00", calories: "680 Cal" },
    { name: "Subway Footlong Cookie", price: "$5.99", calories: "1330 Cal" },
    { name: "Chicken & Cheese Dipper", price: "$3.00", calories: "580 Cal" },
    { name: "Double Cheese Dipper", price: "$3.00", calories: "710 Cal" }
  ];

  const noBreadyBowls = [
    { name: "Black Forest Ham", price: "$8.99", calories: "170 Cal" },
    { name: "B.L.T.", price: "$8.99", calories: "360 Cal" },
    { name: "Cold Cut Combo", price: "$7.99", calories: "260 Cal" },
    { name: "Grilled Chicken", price: "$9.99", calories: "200 Cal" },
    { name: "Meatball Marinara", price: "$8.99", calories: "540 Cal" },
    { name: "Oven Roasted Turkey", price: "$8.99", calories: "150 Cal" },
    { name: "Oven Roasted Turkey & Ham", price: "$8.99", calories: "160 Cal" },
    { name: "Roast Beef", price: "$10.99", calories: "230 Cal" },
    { name: "Rotisserie-Style Chicken", price: "$9.99", calories: "230 Cal" },
    { name: "Steak & Cheese", price: "$12.98", calories: "380 Cal" },
    { name: "Tuna", price: "$11.98", calories: "550 Cal" }
  ];

  const wraps = [
    { name: "Honey Mustard BBQ Chicken", price: "$10.99", calories: "680 Cal" },
    { name: "Cheesy Garlic Steak", price: "$10.99", calories: "700 Cal" },
    { name: "Spicy Nacho Chicken", price: "$10.99", calories: "610 Cal" },
    { name: "Elite Chicken & Bacon Ranch", price: "$11.99", calories: "830 Cal" },
    { name: "All-American Club", price: "$11.99", calories: "760 Cal" },
    { name: "The Great Garlic", price: "$11.99", calories: "830 Cal" },
    { name: "Rotisserie-Style Chicken", price: "$13.99", calories: "490 Cal" },
    { name: "Oven Roasted Turkey", price: "$12.99", calories: "410 Cal" },
    { name: "Roast Beef", price: "$14.99", calories: "480 Cal" },
    { name: "Grilled Chicken", price: "$12.79", calories: "460 Cal" }
  ];

  const breakfast = [
    { name: "Bacon, Egg & Cheese", price: "$8.99", calories: "440 Cal" },
    { name: "Bacon, Egg & Cheese Wrap", price: "$12.99", calories: "850 Cal" },
    { name: "Black Forest Ham, Egg & Cheese", price: "$8.99", calories: "400 Cal" },
    { name: "Black Forest Ham, Egg & Cheese Wrap", price: "$12.99", calories: "750 Cal" },
    { name: "Egg & Cheese", price: "$8.49", calories: "360 Cal" },
    { name: "Egg & Cheese Wrap", price: "$12.99", calories: "690 Cal" },
    { name: "Steak, Egg & Cheese", price: "$9.99", calories: "430 Cal" },
    { name: "Steak, Egg & Cheese Wrap", price: "$12.99", calories: "800 Cal" }
  ];

  const desserts = [
    { name: "Cinnabon Footlong Churro", price: "$2.99", calories: "190 Cal" },
    { name: "Subway Footlong Cookie", price: "$5.99", calories: "1330 Cal" },
    { name: "6 Pack Cookie Box", price: "$4.99", calories: "1260 Cal" },
    { name: "12 Pack Cookie Box", price: "$9.99", calories: "2520 Cal" },
    { name: "Double Chocolate Cookie", price: "$1.29", calories: "210 Cal" },
    { name: "Chocolate Chip Cookie", price: "$1.29", calories: "210 Cal" },
    { name: "Oatmeal Raisin Cookie", price: "$1.29", calories: "200 Cal" },
    { name: "White Chip Macadamia Nut Cookie", price: "$1.29", calories: "220 Cal" },
    { name: "Raspberry Cheesecake Cookie", price: "$1.29", calories: "210 Cal" }
  ];

  const drinks = [
    { name: "Coca-Cola Classic (Bottled)", price: "$2.99", calories: "240 Cal" },
    { name: "Dasani Water", price: "$2.99", calories: "0 Cal" },
    { name: "Gatorade Cool Blue", price: "$2.99", calories: "140 Cal" },
    { name: "Simply Orange", price: "$2.99", calories: "160 Cal" },
    { name: "Sprite (Bottled)", price: "$3.29", calories: "230 Cal" },
    { name: "Vitamin Water XXX", price: "$3.29", calories: "80 Cal" },
    { name: "1% Low Fat Milk", price: "$2.79", calories: "110 Cal" },
    { name: "Diet Coke (Fountain)", price: "$3.49", calories: "0 Cal" },
    { name: "Sprite (Fountain)", price: "$3.49", calories: "340 Cal" },
    { name: "Coca-Cola Classic (Fountain)", price: "$3.49", calories: "370 Cal" }
  ];

  const MenuSection = ({ title, items, emoji }: { title: string; items: { name: string; price: string; calories: string; }[]; emoji: string }) => (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <span>{emoji}</span>
        {title}
      </h2>
      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Calories</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="text-subway-green font-semibold">{item.price}</TableCell>
                <TableCell className="text-gray-600">{item.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Complete Subway Menu with Prices 2025 | All Items & Calories</title>
        <meta name="description" content="Complete Subway menu with prices for 2025. Find prices for all sandwiches, wraps, bowls, breakfast items, desserts, and drinks. Updated with calories and current pricing." />
        <meta name="keywords" content="subway menu prices, subway prices 2025, subway menu with calories, subway sandwich prices, subway wrap prices" />
      </Helmet>

      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-subway-green hover:text-subway-green/80 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                🥪 Complete Subway Menu with Prices 2025
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the complete Subway menu with current prices and calorie information. Whether you're looking for sandwiches, wraps, bowls, or breakfast items, we've got you covered with the most up-to-date pricing.
              </p>
            </div>
          </div>

          {/* New introductory content */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you're a fan of fresh sandwiches, healthy eating, or quick bites on the go, chances are you've stepped into a Subway restaurant. But what if you want to explore the full Subway menu with prices, toppings, and nutritional details before you order? That's where this guide comes in. Whether you're hunting for the price of the new footlong cookie, curious about calories, or wondering if Subway has a secret menu, we've got you covered.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For personalized nutrition breakdowns and menu information, visit{' '}
              <Link to="/" className="text-subway-green hover:underline font-semibold">
                subway-nutrition-calculator.com
              </Link>
              , your trusted resource for building better meals at Subway.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-subway-green">🍽️ Subway Menu with Prices: What to Expect</h3>
              <p className="text-gray-700 mb-4">
                Subway offers a diverse range of subs, wraps, bowls, salads, and sides. The prices vary slightly depending on your location, but here's a general idea:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>6-Inch Subs:</span>
                  <span className="font-semibold">Starting at $4.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Footlong Subs:</span>
                  <span className="font-semibold">Starting at $7.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Signature Wraps:</span>
                  <span className="font-semibold">Around $7.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Protein Bowls:</span>
                  <span className="font-semibold">$8.99 and up</span>
                </li>
                <li className="flex justify-between">
                  <span>Salads:</span>
                  <span className="font-semibold">Starting at $6.79</span>
                </li>
                <li className="flex justify-between">
                  <span>Footlong Cookie:</span>
                  <span className="font-semibold">About $5.00 (availability may vary)</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Want to see a more accurate menu? Our tool at{' '}
                <Link to="/" className="text-subway-green hover:underline font-semibold">
                  subway-nutrition-calculator.com
                </Link>
                {' '}helps you browse the Subway menu without ordering and get pricing based on your area.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-subway-green">🥒 Toppings Galore: What Can You Add to Your Sub?</h3>
              <p className="text-gray-700 mb-4">
                The customization options are what make Subway a fan favorite. Here are just a few of the toppings you can expect:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Veggies:</h4>
                  <p className="text-gray-700 text-sm">Lettuce, Spinach, Tomato, Cucumber, Pickles, Peppers, Red Onions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Proteins:</h4>
                  <p className="text-gray-700 text-sm">Turkey, Roast Beef, Chicken Strips, Tuna, Meatballs, Steak</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Cheeses:</h4>
                  <p className="text-gray-700 text-sm">American, Provolone, Pepperjack, Shredded Mozzarella</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sauces:</h4>
                  <p className="text-gray-700 text-sm">Mayo, Mustard, Chipotle Southwest, Ranch, Buffalo, Vinaigrette</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                Explore all available Subway menu toppings with nutrition and calorie details on our website.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-subway-green">📈 Nutrition Counts: Know Before You Order</h3>
              <p className="text-gray-700 mb-4">
                Subway is popular for being one of the healthier fast food options. But not all sandwiches are created equal. A 6-inch Turkey Breast sub has around 280 calories, while a footlong Italian B.M.T. can go over 800.
              </p>
              <p className="text-gray-700 mb-2">
                With{' '}
                <Link to="/" className="text-subway-green hover:underline font-semibold">
                  subway-nutrition-calculator.com
                </Link>
                , you can:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Check Subway menu nutrition by customizing your sandwich</li>
                <li>• See the Subway menu calories by size, bread, meat, cheese, and sauce</li>
                <li>• Download or view the Subway menu PDF to compare meals at a glance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-subway-green">🍎 Does Subway Have a Secret Menu?</h3>
              <p className="text-gray-700 mb-4">
                It might not be official, but yes—there are a few hidden items! Some of the Subway secret menu favorites include:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4 mb-4">
                <li>• The "Old Cut" sub style</li>
                <li>• The Pizza Sub (sometimes still available on request)</li>
                <li>• The "Wing Effect" sandwich with extra sauce on the side</li>
              </ul>
              <p className="text-gray-700">
                Just ask the staff nicely and you might get lucky!
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-subway-green">🔍 View Subway Menu Without Ordering</h3>
              <p className="text-gray-700 mb-4">
                Sometimes you just want to browse the menu without placing an order. Good news: you can use our tool at{' '}
                <Link to="/" className="text-subway-green hover:underline font-semibold">
                  subway-nutrition-calculator.com
                </Link>
                {' '}to:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• View the Subway menu without ordering</li>
                <li>• See live updates on prices and item availability</li>
                <li>• Customize your meal with toppings and instantly view nutrition info</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-subway-green">🌐 FAQs – Subway Menu, Prices & Nutrition</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ What is the price of a footlong cookie at Subway?</h4>
                  <p className="text-gray-700">The Subway footlong cookie price is about $5, though this may vary by region. It's a sweet treat worth trying if your local store has it!</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ How can I view the Subway menu without ordering?</h4>
                  <p className="text-gray-700">
                    Visit{' '}
                    <Link to="/" className="text-subway-green hover:underline font-semibold">
                      subway-nutrition-calculator.com
                    </Link>
                    {' '}to explore the full Subway menu without needing to place an order. It's simple, fast, and doesn't require creating an account.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ Does Subway have a secret menu?</h4>
                  <p className="text-gray-700">Yes, there are unofficial secret menu items like the Pizza Sub and "Old Cut" style. Some stores still honor these requests!</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ Where can I find the Subway menu with prices?</h4>
                  <p className="text-gray-700">
                    Use our platform at{' '}
                    <Link to="/" className="text-subway-green hover:underline font-semibold">
                      subway-nutrition-calculator.com
                    </Link>
                    {' '}to see updated Subway menu and prices in your region.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ How do I check Subway nutrition before visiting?</h4>
                  <p className="text-gray-700">
                    Easily customize and calculate your sandwich's nutritional value at{' '}
                    <Link to="/" className="text-subway-green hover:underline font-semibold">
                      subway-nutrition-calculator.com
                    </Link>
                    .
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ Can I download a Subway menu PDF?</h4>
                  <p className="text-gray-700">Yes, many Subway regions offer downloadable PDFs. Or use our website for an interactive, mobile-friendly experience.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ What are all the toppings I can add to my Subway sandwich?</h4>
                  <p className="text-gray-700">You can choose from dozens of Subway menu toppings, including meats, cheeses, veggies, and sauces.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ How many calories are in a Subway sub?</h4>
                  <p className="text-gray-700">
                    That depends on your build! A typical 6-inch sub ranges from 250 to 450 calories. Visit{' '}
                    <Link to="/" className="text-subway-green hover:underline font-semibold">
                      subway-nutrition-calculator.com
                    </Link>
                    {' '}for a breakdown.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">❓ Are there healthy options at Subway?</h4>
                  <p className="text-gray-700">Absolutely. Choose lean proteins, load up on veggies, and go easy on sauces. Use our calculator for smart choices.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Keep all existing menu sections */}
          <MenuSection title="Featured Combos" items={featuredCombos} emoji="🌟" />
          <MenuSection title="Classic Sandwiches" items={classicSandwiches} emoji="🥪" />
          <MenuSection title="Sidekicks" items={sidekicks} emoji="🍟" />
          <MenuSection title="No Bready Bowls" items={noBreadyBowls} emoji="🥗" />
          <MenuSection title="Wraps" items={wraps} emoji="🌯" />
          <MenuSection title="Breakfast" items={breakfast} emoji="🍳" />
          <MenuSection title="Desserts" items={desserts} emoji="🍪" />
          <MenuSection title="Drinks" items={drinks} emoji="🥤" />

          {/* Keep existing pro tips and final note sections */}
          <div className="mt-12 bg-gradient-to-r from-subway-green/10 to-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-subway-green">💡 Money-Saving Tips</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-subway-green mr-2">•</span>
                <span>Check the Subway app for daily deals and exclusive offers</span>
              </li>
              <li className="flex items-start">
                <span className="text-subway-green mr-2">•</span>
                <span>Consider the "Sub of the Day" promotions for discounted footlongs</span>
              </li>
              <li className="flex items-start">
                <span className="text-subway-green mr-2">•</span>
                <span>No Bready Bowls offer great value for low-carb, high-protein meals</span>
              </li>
              <li className="flex items-start">
                <span className="text-subway-green mr-2">•</span>
                <span>Combo meals with chips and drinks often provide better value than ordering separately</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-sm border">
            <h3 className="text-2xl font-bold mb-4">📍 Important Note</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prices may vary by location and are subject to change. For the most accurate pricing, please check with your local Subway restaurant or use the official Subway app. 
              Use our <Link to="/" className="text-subway-green hover:underline font-semibold">Nutrition Calculator</Link> to plan your perfect meal!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubwayMenuPrices;
