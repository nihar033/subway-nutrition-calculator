import React from 'react';
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  // Schema data for the menu page
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Subway",
    "image": "https://subway-nutrition-calculator.com/logo.png",
    "servesCuisine": "Sandwiches",
    "priceRange": "$5-$12",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "minPrice": "5.00",
        "maxPrice": "167.76"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the latest Subway menu prices in the United States (2025)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Subway's 2025 menu prices vary by item. A 6-inch sandwich typically starts at $5.00, while footlongs range from $8.00 to $11.79. Wraps, protein bowls, and catering platters are also available at competitive prices."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I see Subway menu prices with pictures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Right here in this article! We've included Subway menu prices with pictures so you can easily visualize what you’re ordering—whether it’s a sandwich, wrap, cookie, or protein bowl."
        }
      },
      {
        "@type": "Question",
        "name": "What are the prices of Subway wraps in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Subway wraps menu with prices shows options like Baja Chicken & Bacon and Veggie Delite®, starting around $6.48 for a 6-inch and up to $11.79 for a footlong wrap."
        }
      },
      {
        "@type": "Question",
        "name": "Has Subway launched a new menu with updated prices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the new Subway menu with prices 2025 includes revised costs for sandwiches, wraps, protein bowls, and cookies, reflecting updated ingredients and customer preferences."
        }
      },
      {
        "@type": "Question",
        "name": "What’s included in the Subway Classic Combo Platter and how much does it cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Classic Combo Platter includes a mix of Subway sandwiches, chips, and cookies, making it perfect for events. The average price is around $75.00, depending on your location and order size."
        }
      },
      {
        "@type": "Question",
        "name": "Are there gluten-free options on the Subway menu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Subway Gluten-Free Menu includes gluten-free bread (available at select locations), meats like turkey and ham, veggies, and sauces like mustard and vinaigrette."
        }
      },
      {
        "@type": "Question",
        "name": "What soups are available at Subway and how much do they cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popular soups like Broccoli Cheddar, Chicken Noodle, and Loaded Baked Potato are available at most locations, with prices starting at $3.99 and going up to $6.79, depending on the size."
        }
      },
      {
        "@type": "Question",
        "name": "How much do Subway cookies cost in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Subway cookies are budget-friendly and delicious. A single cookie costs $0.59, a 3-pack is $1.50, and a dozen is $5.99. You can also get a Footlong Oreo Cookie for around $5.00."
        }
      },
      {
        "@type": "Question",
        "name": "Are Subway Protein Bowls a good low-carb option?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Subway Protein Bowl Menu offers low-carb, high-protein meals with options like Chicken Teriyaki and Italian B.M.T., starting at around $9.00."
        }
      },
      {
        "@type": "Question",
        "name": "Does Subway still offer customizable sandwiches and wraps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Subway is known for its customizations. You can pick your bread, protein, veggies, sauces, and more to create your perfect meal."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Subway Menu with Prices 2025 (With Pictures) | Complete Guide</title>
        <meta name="description" content="Find the latest Subway menu prices for 2025. Complete guide with sandwiches, wraps, protein bowls, and catering options. Updated prices and pictures included." />
        <script type="application/ld+json">
          {JSON.stringify(menuSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              🥪 Subway Menu with Prices 2025 (With Pictures)
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Looking for the Subway menu prices with pictures? You've come to the right place. Whether you're planning your lunch or a party platter for a group, this Subway menu with prices (2025) guide has everything you need — from wraps to sandwiches, cookies to catering.
            </p>
          </div>

          {/* Sandwiches Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🥪 Subway Sandwich Menu with Prices</h2>
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
            <h2 className="text-3xl font-bold mb-6">🌯 Subway Wraps Menu with Prices</h2>
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
            <h2 className="text-3xl font-bold mb-6">🥗 Subway Protein Bowl Menu</h2>
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

          {/* Cookies Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">🧁 Subway Cookies Price</h2>
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
            <h2 className="text-3xl font-bold mb-6">🍲 Subway Soup Menu</h2>
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
            <h2 className="text-3xl font-bold mb-6">🌾 Subway Gluten-Free Menu</h2>
            <Card className="p-6">
              <ul className="space-y-4">
                <li><strong>Gluten-Free Bread:</strong> Available upon request</li>
                <li><strong>Gluten-Free Fillings:</strong> Turkey, Ham, Chicken, Cheese, Veggies</li>
                <li><strong>Gluten-Free Sauces:</strong> Mayonnaise, Mustard, Subway Vinaigrette</li>
              </ul>
            </Card>
          </section>

          {/* Sauces Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">🧂 Subway Sauce Menu</h2>
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

          {/* Catering Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">🎉 Subway Catering Menu Prices</h2>
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

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>
            <Card className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What are the latest Subway menu prices in the United States (2025)?</AccordionTrigger>
                  <AccordionContent>
                    Subway's 2025 menu prices vary by item. A 6-inch sandwich typically starts at $5.00, while footlongs range from $8.00 to $11.79. Wraps, protein bowls, and catering platters are also available at competitive prices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Where can I see Subway menu prices with pictures?</AccordionTrigger>
                  <AccordionContent>
                    Right here in this article! We've included Subway menu prices with pictures so you're ordering—whether it's a sandwich, wrap, cookie, or protein bowl.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What are the prices of Subway wraps in 2025?</AccordionTrigger>
                  <AccordionContent>
                    The Subway wraps menu with prices shows options like Baja Chicken & Bacon and Veggie Delite®, starting around $6.48 for a 6-inch and up to $11.79 for a footlong wrap.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Has Subway launched a new menu with updated prices?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the new Subway menu with prices 2025 includes revised costs for sandwiches, wraps, protein bowls, and cookies, reflecting updated ingredients and customer preferences.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What's included in the Subway Classic Combo Platter and how much does it cost?</AccordionTrigger>
                  <AccordionContent>
                    The Classic Combo Platter includes a mix of Subway sandwiches, chips, and cookies, making it perfect for events. The average price is around $75.00, depending on your location and order size.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Are there gluten-free options on the Subway menu?</AccordionTrigger>
                  <AccordionContent>
                    Yes. The Subway Gluten-Free Menu includes gluten-free bread (available at select locations), meats like turkey and ham, veggies, and sauces like mustard and vinaigrette.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>What soups are available at Subway and how much do they cost?</AccordionTrigger>
                  <AccordionContent>
                    Popular soups like Broccoli Cheddar, Chicken Noodle, and Loaded Baked Potato are available at most locations, with prices starting at $3.99 and going up to $6.79, depending on the size.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>How much do Subway cookies cost in 2025?</AccordionTrigger>
                  <AccordionContent>
                    Subway cookies are budget-friendly and delicious. A single cookie costs $0.59, a 3-pack is $1.50, and a dozen is $5.99. You can also get a Footlong Oreo Cookie for around $5.00.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>Are Subway Protein Bowls a good low-carb option?</AccordionTrigger>
                  <AccordionContent>
                    Yes! The Subway Protein Bowl Menu offers low-carb, high-protein meals with options like Chicken Teriyaki and Italian B.M.T., starting at around $9.00.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>Does Subway still offer customizable sandwiches and wraps?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. Subway is known for its customizations. You can pick your bread, protein, veggies, sauces, and more to create your perfect meal.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </section>

          {/* Final Words section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">📝 Final Words</h2>
            <p className="text-gray-600">
              This guide provides a full overview of the new Subway menu with prices to help you choose the best meal or catering option in 2025. Whether you're searching for the Subway wraps menu with prices, customizing your own sandwich, or planning an event with a classic combo platter Subway price, we've covered it all. For detailed nutritional information, visit our{' '}
              <Link to="/nutrition-database" className="text-subway-green hover:underline">
                Nutrition Database
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
