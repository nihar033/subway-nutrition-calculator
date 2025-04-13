
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Calculator className="w-8 h-8 text-subway-green" />
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-subway-green">Subway</span>
                  <span className="text-subway-yellow">Nutrition</span>
                  <span className="text-gray-700">Calculator</span>
                </h2>
              </div>
            </Link>
            <p className="text-gray-600 mb-4">
              Helping you make informed nutrition choices when eating at Subway. Our calculator lets you plan your meal with real-time calorie and nutrition updates.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-600 hover:text-primary" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-600 hover:text-primary" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-primary" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <Youtube className="w-5 h-5 text-gray-600 hover:text-primary" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> About
                </Link>
              </li>
              <li>
                <Link to="/nutrition-database" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Nutrition Database
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-primary flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" /> Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for tips on making healthier choices at Subway and calorie-saving hacks.
            </p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Subway Nutrition Calculator. All rights reserved.</p>
          <p className="mt-2">
            This website is not affiliated with or endorsed by Subway® Restaurants. Subway® is a registered trademark of Subway IP LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
