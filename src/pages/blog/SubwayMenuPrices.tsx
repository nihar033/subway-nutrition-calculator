
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

          <MenuSection title="Featured Combos" items={featuredCombos} emoji="🌟" />
          <MenuSection title="Classic Sandwiches" items={classicSandwiches} emoji="🥪" />
          <MenuSection title="Sidekicks" items={sidekicks} emoji="🍟" />
          <MenuSection title="No Bready Bowls" items={noBreadyBowls} emoji="🥗" />
          <MenuSection title="Wraps" items={wraps} emoji="🌯" />
          <MenuSection title="Breakfast" items={breakfast} emoji="🍳" />
          <MenuSection title="Desserts" items={desserts} emoji="🍪" />
          <MenuSection title="Drinks" items={drinks} emoji="🥤" />

          {/* Pro Tips Section */}
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

          {/* Final Note */}
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
