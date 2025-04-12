
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calculator, Search, Info, FileText, Home, HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="w-8 h-8 text-subway-green" />
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-subway-green">Subway</span>
                <span className="text-subway-yellow">Smart</span>
                <span className="text-gray-700">Eats</span>
              </h1>
              <p className="text-xs text-gray-500">Nutrition Calculator</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary flex items-center space-x-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary flex items-center space-x-1">
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link to="/nutrition-database" className="text-gray-700 hover:text-primary flex items-center space-x-1">
              <FileText className="w-4 h-4" />
              <span>Nutrition Database</span>
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-primary flex items-center space-x-1">
              <HelpCircle className="w-4 h-4" />
              <span>FAQ</span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <Button variant="outline" className="bg-primary text-white hover:bg-primary/90">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              className="p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5 text-primary" />
                <span>Home</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="w-5 h-5 text-primary" />
                <span>About</span>
              </Link>
              <Link 
                to="/nutrition-database" 
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="w-5 h-5 text-primary" />
                <span>Nutrition Database</span>
              </Link>
              <Link 
                to="/faq" 
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle className="w-5 h-5 text-primary" />
                <span>FAQ</span>
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Contact</span>
              </Link>
              <div className="pt-2">
                <Button variant="outline" className="w-full bg-primary text-white hover:bg-primary/90">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
