
import React from 'react';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ComparisonTable = () => {
  const features = [
    {
      name: 'Real-Time Nutrition & Macro Tracking',
      ourCalculator: true,
      subwayWebsite: false
    },
    {
      name: 'Subway Calorie Counter',
      ourCalculator: true,
      subwayWebsite: false
    },
    {
      name: 'Subway Meal Builder (Sandwiches, Salads, Wraps)',
      ourCalculator: true,
      subwayWebsite: false
    },
    {
      name: 'Compare US vs UK Subway Nutrition',
      ourCalculator: true,
      subwayWebsite: false
    },
    {
      name: 'Mobile Responsive & User-Friendly',
      ourCalculator: true,
      subwayWebsite: true
    },
    {
      name: 'Export Meals (Coming Soon)',
      ourCalculator: true,
      subwayWebsite: false
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Top Benefits for Our Users</h2>
          <p className="section-subtitle">
            See how our calculator compares to other options
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[180px] font-bold text-lg">Feature</TableHead>
                <TableHead className="font-bold text-lg text-subway-green">Our Subway Calculator</TableHead>
                <TableHead className="font-bold text-lg">Subway Official Website</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell>
                    {feature.ourCalculator ? (
                      <Check className="h-6 w-6 text-subway-green" />
                    ) : (
                      <X className="h-6 w-6 text-red-500" />
                    )}
                  </TableCell>
                  <TableCell>
                    {feature.subwayWebsite ? (
                      <Check className="h-6 w-6 text-subway-green" />
                    ) : (
                      <X className="h-6 w-6 text-red-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-3">🌍 Subway USA vs UK Nutrition Data</h3>
          <p className="mb-4">
            Nutrition facts can differ between Subway US and Subway UK menus.
            Our Subway calculator automatically adjusts based on your location.
          </p>
          
          <div className="flex justify-center space-x-4 mt-2">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 font-medium">
              🇺🇸 Subway USA
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 font-medium">
              🇬🇧 Subway UK
            </button>
          </div>
          <p className="text-center mt-4 text-sm text-gray-600">
            If you're looking for a Subway UK calorie calculator, you're in the right place!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
