
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="bg-white py-12 px-8 rounded-xl shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📖 Latest Subway Nutrition Tips & Guides
            </h2>
            <p className="text-xl text-gray-600">
              Discover expert tips, nutrition guides, and healthy meal ideas to make the most of your Subway experience.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">🏆</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Featured Post</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Top 10 Low-Calorie Subway Sandwiches for Weight Loss (2025 Guide)
              </h3>
              <p className="text-gray-600 mb-4">
                Looking for healthy Subway options? Discover the top 10 lowest calorie Subway sandwiches perfect for weight loss. See calories, macros & nutrition tips for each sub!
              </p>
              <Link 
                to="/blog/low-calorie-subway-sandwiches" 
                className="inline-flex items-center text-subway-green font-semibold hover:underline"
              >
                Read Full Guide
                <ArrowDown className="ml-2 h-4 w-4 rotate-[-45deg]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
