import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sandwich, Salad, Cookie, Soup, UtensilsCrossed, Wheat, MapPin, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            🥪 Subway Menu with Prices 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Looking for the Subway menu prices with pictures? You've come to the right place. Whether you're planning your lunch or a party platter for a group, this guide has everything you need.
          </p>
        </div>

        {/* Sandwiches Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sandwich className="w-8 h-8 text-subway-green" />
            <h2 className="text-3xl font-bold">Subway Sandwich Menu</h2>
          </div>
          <Card className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sandwich</TableHead>
                  <TableHead>6-Inch Price</TableHead>
                  <TableHead>Footlong Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Black Forest Ham</TableCell>
                  <TableCell>$5.50</TableCell>
                  <TableCell>$9.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Italian B.M.T.®</TableCell>
                  <TableCell>$6.75</TableCell>
                  <TableCell>$10.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Meatball Marinara</TableCell>
                  <TableCell>$6.00</TableCell>
                  <TableCell>$9.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chicken & Bacon Ranch Melt</TableCell>
                  <TableCell>$7.75</TableCell>
                  <TableCell>$11.25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Veggie Delite®</TableCell>
                  <TableCell>$5.00</TableCell>
                  <TableCell>$8.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Wraps Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-8 h-8 text-subway-green" />
            <h2 className="text-3xl font-bold">Subway Wraps Menu</h2>
          </div>
          <Card className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Wrap</TableHead>
                  <TableHead>6-Inch Price</TableHead>
                  <TableHead>Footlong Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Baja Chicken & Bacon</TableCell>
                  <TableCell>$6.99</TableCell>
                  <TableCell>$10.79</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>All-American Club™</TableCell>
                  <TableCell>$7.48</TableCell>
                  <TableCell>$11.39</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Steak & Cheese</TableCell>
                  <TableCell>$6.99</TableCell>
                  <TableCell>$11.79</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Veggie Delite®</TableCell>
                  <TableCell>$6.48</TableCell>
                  <TableCell>$9.98</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Protein Bowls Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Salad className="w-8 h-8 text-subway-green" />
            <h2 className="text-3xl font-bold">Protein Bowl Menu</h2>
          </div>
          <Card className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Protein Bowl</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Black Forest Ham</TableCell>
                  <TableCell>$9.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chicken Teriyaki</TableCell>
                  <TableCell>$9.75</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chicken & Bacon Ranch Melt</TableCell>
                  <TableCell>$10.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Italian B.M.T.®</TableCell>
                  <TableCell>$11.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Veggie Delite®</TableCell>
                  <TableCell>$8.50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Other Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cookies Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Cookie className="w-8 h-8 text-subway-green" />
              <h2 className="text-3xl font-bold">Cookies</h2>
            </div>
            <Card className="p-6">
              <ul className="space-y-4">
                <li className="flex justify-between"><span>Single Cookie</span><span>$0.59</span></li>
                <li className="flex justify-between"><span>3 Cookies</span><span>$1.50</span></li>
                <li className="flex justify-between"><span>Dozen Cookies</span><span>$5.99</span></li>
                <li className="flex justify-between"><span>Footlong Oreo Cookie</span><span>$5.00</span></li>
              </ul>
            </Card>
          </section>

          {/* Soup Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Soup className="w-8 h-8 text-subway-green" />
              <h2 className="text-3xl font-bold">Soups</h2>
            </div>
            <Card className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Soup</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Broccoli Cheddar</TableCell>
                    <TableCell>$4.49 - $6.49</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Chicken Noodle</TableCell>
                    <TableCell>$3.99 - $5.99</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Loaded Baked Potato</TableCell>
                    <TableCell>$4.79 - $6.79</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </section>

          {/* Gluten-Free Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Wheat className="w-8 h-8 text-subway-green" />
              <h2 className="text-3xl font-bold">Gluten-Free Options</h2>
            </div>
            <Card className="p-6">
              <ul className="space-y-4">
                <li><strong>Bread:</strong> Available upon request</li>
                <li><strong>Fillings:</strong> Turkey, Ham, Chicken, Cheese, Veggies</li>
                <li><strong>Sauces:</strong> Mayonnaise, Mustard, Subway Vinaigrette</li>
              </ul>
            </Card>
          </section>

          {/* Sauces Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Droplet className="w-8 h-8 text-subway-green" />
              <h2 className="text-3xl font-bold">Sauces</h2>
            </div>
            <Card className="p-6">
              <ul className="grid grid-cols-2 gap-4">
                <li>Mayonnaise</li>
                <li>Ranch</li>
                <li>Honey Mustard</li>
                <li>Chipotle Southwest</li>
                <li>Creamy Sriracha</li>
                <li>Subway Vinaigrette</li>
                <li>Oil & Vinegar</li>
              </ul>
            </Card>
          </section>
        </div>

        {/* Catering Section */}
        <section className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <UtensilsCrossed className="w-8 h-8 text-subway-green" />
            <h2 className="text-3xl font-bold">Catering Menu</h2>
          </div>
          <Card className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Catering Item</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Easy Order Sandwich Platter</TableCell>
                  <TableCell>$59.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Subway Series Sandwich Platter</TableCell>
                  <TableCell>$69.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Easy Order Sandwich Platter Bundle</TableCell>
                  <TableCell>$126.34</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Assorted Lunch Box Meal Bundle</TableCell>
                  <TableCell>$167.76</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Classic Combo Platter</TableCell>
                  <TableCell>$75.00 (avg.)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Pro Tip Section */}
        <div className="mt-12 bg-subway-green/10 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">💡 Pro Tip</h3>
          <p>Order the Classic Combo Platter Subway for a balanced mix of sandwiches, chips, and cookies for your next event.</p>
        </div>

        {/* Final Words */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">📝 Final Words</h2>
          <p className="text-gray-600">
            This guide provides a full overview of the new Subway menu with prices to help you choose the best meal or catering option in 2025. For detailed nutritional information, visit our{' '}
            <Link to="/nutrition-database" className="text-subway-green hover:underline">
              Nutrition Database
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
