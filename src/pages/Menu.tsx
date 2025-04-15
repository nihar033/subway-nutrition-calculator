
import React from 'react';
import { Card } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MenuPage = () => {
  const menuSections = [
    {
      title: "Subway Sandwiches",
      items: [
        { name: "Black Forest Ham", price6: "$5.50", price12: "$9.00" },
        { name: "Italian B.M.T.®", price6: "$6.75", price12: "$10.50" },
        { name: "Meatball Marinara", price6: "$6.00", price12: "$9.50" },
        { name: "Chicken & Bacon Ranch Melt", price6: "$7.75", price12: "$11.25" },
        { name: "Veggie Delite®", price6: "$5.00", price12: "$8.00" }
      ]
    },
    {
      title: "Subway Wraps",
      items: [
        { name: "Baja Chicken & Bacon", price6: "$6.99", price12: "$10.79" },
        { name: "All-American Club™", price6: "$7.48", price12: "$11.39" },
        { name: "Steak & Cheese", price6: "$6.99", price12: "$11.79" },
        { name: "Veggie Delite®", price6: "$6.48", price12: "$9.98" }
      ]
    }
  ];

  const proteinBowls = [
    { name: "Black Forest Ham", price: "$9.00" },
    { name: "Chicken Teriyaki", price: "$9.75" },
    { name: "Chicken & Bacon Ranch Melt", price: "$10.50" },
    { name: "Italian B.M.T.®", price: "$11.00" },
    { name: "Veggie Delite®", price: "$8.50" }
  ];

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          🥪 Subway Menu with Prices 2025
        </h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-600 mb-8">
            Looking for the Subway menu prices with pictures? You've come to the right place. Whether you're planning your lunch or a party platter for a group, this Subway menu with prices (2025) guide has everything you need — from wraps to sandwiches, cookies to catering.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Link 
              to="/nutrition-database" 
              className="inline-flex items-center px-6 py-3 bg-subway-green text-white rounded-lg hover:bg-subway-green/90 transition-colors"
            >
              View Nutrition Info <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {menuSections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              <div className="grid gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">6-inch: {item.price6}</p>
                        <p className="text-sm text-gray-600">Footlong: {item.price12}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🥗 Protein Bowls</h2>
            <div className="grid gap-6">
              {proteinBowls.map((bowl, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{bowl.name}</h3>
                    <p className="text-gray-600">{bowl.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🧁 Cookies</h2>
            <Card className="p-6">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Single Cookie</span>
                  <span>$0.59</span>
                </li>
                <li className="flex justify-between">
                  <span>3 Cookies</span>
                  <span>$1.50</span>
                </li>
                <li className="flex justify-between">
                  <span>Dozen Cookies</span>
                  <span>$5.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Footlong Oreo Cookie</span>
                  <span>$5.00</span>
                </li>
              </ul>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🎉 Catering</h2>
            <Card className="p-6">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Easy Order Sandwich Platter</span>
                  <span>$59.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Subway Series Sandwich Platter</span>
                  <span>$69.99</span>
                </li>
                <li className="flex justify-between">
                  <span>Easy Order Sandwich Platter Bundle</span>
                  <span>$126.34</span>
                </li>
                <li className="flex justify-between">
                  <span>Assorted Lunch Box Meal Bundle</span>
                  <span>$167.76</span>
                </li>
              </ul>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
