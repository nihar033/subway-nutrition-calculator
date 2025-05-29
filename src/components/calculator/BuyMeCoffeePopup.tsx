
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Coffee, Heart, ExternalLink, X } from 'lucide-react';

interface BuyMeCoffeePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyMeCoffeePopup: React.FC<BuyMeCoffeePopupProps> = ({ isOpen, onClose }) => {
  const handleDonate = () => {
    window.open('https://www.paypal.me/cyberlika', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-amber-50">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
            <Coffee className="w-8 h-8 text-white" />
          </div>
          
          <DialogTitle className="text-2xl font-bold text-gray-800">
            ☕ Support me !
          </DialogTitle>
          
          <DialogDescription className="text-gray-600 text-base leading-relaxed">
            <div className="space-y-3">
              <p>
                Hi there! 👋 I'm glad you're finding this Subway nutrition calculator helpful for making healthier choices.
              </p>
              <p>
                If this tool has saved you time or helped you make better meal decisions, consider buying me a coffee! ☕
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>by an independent developer</span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button 
            onClick={handleDonate}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Coffee className="w-5 h-5 mr-2" />
            Buy Me a Coffee
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Maybe Later
          </Button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            Every coffee helps keep this tool free and updated! 🙏
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuyMeCoffeePopup;
