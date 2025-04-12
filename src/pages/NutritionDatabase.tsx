
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, Heart, FileText, Download, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  breadOptions,
  proteinOptions,
  cheeseOptions,
  vegetableOptions,
  sauceOptions,
  sideOptions
} from '@/data/nutritionData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NutritionDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all food items for search
  const allItems = [
    ...breadOptions.map(item => ({ ...item, category: 'Breads' })),
    ...proteinOptions.map(item => ({ ...item, category: 'Proteins' })),
    ...cheeseOptions.map(item => ({ ...item, category: 'Cheeses' })),
    ...vegetableOptions.map(item => ({ ...item, category: 'Vegetables' })),
    ...sauceOptions.map(item => ({ ...item, category: 'Sauces' })),
    ...sideOptions.map(item => ({ ...item, category: 'Sides' })),
  ];

  // Filter items based on search term
  const filteredItems = allItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Subway Nutrition Database</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive database of Subway menu items and their nutritional information.
          </p>
        </div>

        {/* PDF Download Card */}
        <Card className="mb-8 bg-gray-50">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <FileText className="h-10 w-10 text-primary mr-4" />
                <div>
                  <h3 className="text-lg font-bold">Official Subway Nutrition Data</h3>
                  <p className="text-gray-600">Download the complete nutrition and allergen chart (April 2025)</p>
                </div>
              </div>
              <Button className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search for an item..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter Options
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Nutrition Data Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="breads">Breads</TabsTrigger>
            <TabsTrigger value="proteins">Proteins</TabsTrigger>
            <TabsTrigger value="cheeses">Cheeses</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            <TabsTrigger value="sauces">Sauces</TabsTrigger>
            <TabsTrigger value="sides">Sides</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            {searchTerm ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Search Results for "{searchTerm}"</h2>
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredItems.map((item) => (
                      <NutritionCard key={`${item.category}-${item.id}`} item={item} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-500">No items matching your search criteria</p>
                )}
              </div>
            ) : (
              <NutritionCategoryAccordion />
            )}
          </TabsContent>
          
          <TabsContent value="breads">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {breadOptions.map((bread) => (
                <NutritionCard key={bread.id} item={{ ...bread, category: 'Breads' }} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="proteins">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {proteinOptions.map((protein) => (
                <NutritionCard key={protein.id} item={{ ...protein, category: 'Proteins' }} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cheeses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cheeseOptions.map((cheese) => (
                <NutritionCard key={cheese.id} item={{ ...cheese, category: 'Cheeses' }} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="vegetables">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vegetableOptions.map((vegetable) => (
                <NutritionCard key={vegetable.id} item={{ ...vegetable, category: 'Vegetables' }} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sauces">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sauceOptions.map((sauce) => (
                <NutritionCard key={sauce.id} item={{ ...sauce, category: 'Sauces' }} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sideOptions.map((side) => (
                <NutritionCard key={side.id} item={{ ...side, category: 'Sides' }} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const NutritionCategoryAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="breads">
        <AccordionTrigger className="text-xl font-semibold">Breads</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {breadOptions.map((bread) => (
              <NutritionCard key={bread.id} item={{ ...bread, category: 'Breads' }} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="proteins">
        <AccordionTrigger className="text-xl font-semibold">Proteins</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {proteinOptions.map((protein) => (
              <NutritionCard key={protein.id} item={{ ...protein, category: 'Proteins' }} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="cheeses">
        <AccordionTrigger className="text-xl font-semibold">Cheeses</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {cheeseOptions.map((cheese) => (
              <NutritionCard key={cheese.id} item={{ ...cheese, category: 'Cheeses' }} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="vegetables">
        <AccordionTrigger className="text-xl font-semibold">Vegetables</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {vegetableOptions.map((vegetable) => (
              <NutritionCard key={vegetable.id} item={{ ...vegetable, category: 'Vegetables' }} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="sauces">
        <AccordionTrigger className="text-xl font-semibold">Sauces</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {sauceOptions.map((sauce) => (
              <NutritionCard key={sauce.id} item={{ ...sauce, category: 'Sauces' }} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="sides">
        <AccordionTrigger className="text-xl font-semibold">Sides</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {sideOptions.map((side) => (
              <NutritionCard key={side.id} item={{ ...side, category: 'Sides' }} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

interface NutritionCardProps {
  item: any;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ item }) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.category}</p>
          </div>
          {'heartHealthy' in item && item.heartHealthy && (
            <Heart className="h-5 w-5 text-red-500 flex-shrink-0" />
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
          <div>
            <p className="text-gray-500">Calories</p>
            <p className="font-medium">{item.calories}</p>
          </div>
          <div>
            <p className="text-gray-500">Total Fat</p>
            <p className="font-medium">{item.fat}g</p>
          </div>
          <div>
            <p className="text-gray-500">Carbs</p>
            <p className="font-medium">{item.carbs}g</p>
          </div>
          <div>
            <p className="text-gray-500">Protein</p>
            <p className="font-medium">{item.protein}g</p>
          </div>
          <div>
            <p className="text-gray-500">Sodium</p>
            <p className="font-medium">{item.sodium}mg</p>
          </div>
          <div>
            <p className="text-gray-500">Sugar</p>
            <p className="font-medium">{item.sugar}g</p>
          </div>
        </div>
        
        {item.allergens.length > 0 && (
          <div className="mt-auto pt-2">
            <p className="text-xs text-gray-500 mb-1">Allergens:</p>
            <div className="flex flex-wrap gap-1">
              {item.allergens.map((allergen: string, index: number) => (
                <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                  {allergen}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NutritionDatabase;
