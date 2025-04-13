
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, Heart, FileText, Download, ChevronDown, AlertTriangle } from 'lucide-react';
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
import { fullMenuData, MenuItem } from '@/data/fullMenuData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';

const NutritionDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);
  const [showHeartHealthyOnly, setShowHeartHealthyOnly] = useState(false);
  const [sortOption, setSortOption] = useState('name');
  const [menuItems, setMenuItems] = useState<MenuItem[]>(fullMenuData);

  useEffect(() => {
    let filtered = [...fullMenuData];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    
    // Filter vegetarian items
    if (showVegetarianOnly) {
      filtered = filtered.filter(item => item.vegetarian === true);
    }
    
    // Filter heart-healthy items
    if (showHeartHealthyOnly) {
      filtered = filtered.filter(item => item.heartHealthy === true);
    }
    
    // Sort items
    filtered = sortItems(filtered, sortOption);
    
    setMenuItems(filtered);
  }, [searchTerm, category, showVegetarianOnly, showHeartHealthyOnly, sortOption]);

  const sortItems = (items: MenuItem[], sortBy: string): MenuItem[] => {
    switch(sortBy) {
      case 'name':
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case 'calories-asc':
        return [...items].sort((a, b) => a.calories - b.calories);
      case 'calories-desc':
        return [...items].sort((a, b) => b.calories - a.calories);
      case 'protein-desc':
        return [...items].sort((a, b) => b.protein - a.protein);
      case 'sodium-asc':
        return [...items].sort((a, b) => a.sodium - b.sodium);
      default:
        return items;
    }
  };

  const downloadNutritionPDF = () => {
    // In a real implementation, this would download the actual PDF
    toast.info("Downloading nutrition information PDF...");
    // Simulate download
    setTimeout(() => {
      toast.success("PDF downloaded successfully!");
    }, 1500);
  };

  const uniqueCategories = Array.from(new Set(fullMenuData.map(item => item.category)));

  return (
    <div className="py-12">
      <div className="container-custom mx-auto px-4 max-w-7xl">
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
              <Button className="flex items-center" onClick={downloadNutritionPDF}>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search for an item..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="calories-asc">Calories (Low to High)</SelectItem>
                <SelectItem value="calories-desc">Calories (High to Low)</SelectItem>
                <SelectItem value="protein-desc">Protein (High to Low)</SelectItem>
                <SelectItem value="sodium-asc">Sodium (Low to High)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="vegetarian" 
                checked={showVegetarianOnly} 
                onCheckedChange={(checked) => setShowVegetarianOnly(checked as boolean)}
              />
              <Label htmlFor="vegetarian">Vegetarian Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="heartHealthy" 
                checked={showHeartHealthyOnly} 
                onCheckedChange={(checked) => setShowHeartHealthyOnly(checked as boolean)}
              />
              <Label htmlFor="heartHealthy">Heart Healthy Only</Label>
            </div>
            {(showVegetarianOnly || showHeartHealthyOnly) && (
              <Button variant="ghost" size="sm" onClick={() => {
                setShowVegetarianOnly(false);
                setShowHeartHealthyOnly(false);
              }}>
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Nutrition Data Tabs */}
        <Tabs defaultValue="all" className="w-full" value={category} onValueChange={setCategory}>
          <TabsList className="flex flex-wrap w-full mb-8 h-auto">
            <TabsTrigger value="all" className="py-2">All</TabsTrigger>
            {uniqueCategories.map((category) => (
              <TabsTrigger key={category} value={category.toLowerCase()} className="py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={category}>
            {menuItems.length > 0 ? (
              <>
                <h2 className="text-xl font-semibold mb-4">
                  {searchTerm ? `Search Results for "${searchTerm}"` : 
                    category === 'all' ? 'All Menu Items' : 
                    `${category.charAt(0).toUpperCase() + category.slice(1)}`}
                  <span className="text-sm font-normal ml-2 text-gray-500">
                    ({menuItems.length} items)
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems.map((item) => (
                    <NutritionCard key={item.id} item={item} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">No items found</h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search term to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setCategory('all');
                    setShowVegetarianOnly(false);
                    setShowHeartHealthyOnly(false);
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface NutritionCardProps {
  item: MenuItem;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ item }) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardContent className="pt-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.category}</p>
          </div>
          <div className="flex items-center space-x-1">
            {item.heartHealthy && (
              <Heart className="h-5 w-5 text-red-500 flex-shrink-0" />
            )}
            {item.vegetarian && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                Veg
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <span>{item.servingSize}{item.servingSizeUnit}</span>
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
        
        {item.allergens && item.allergens.length > 0 && (
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
