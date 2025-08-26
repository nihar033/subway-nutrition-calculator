import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Coffee, Heart, ExternalLink, X } from 'lucide-react';
interface BuyMeCoffeePopupProps {
  isOpen: boolean;
  onClose: () => void;
}
const BuyMeCoffeePopup: React.FC<BuyMeCoffeePopupProps> = ({
  isOpen,
  onClose
}) => {
  const handleDonate = () => {
    window.open('https://www.paypal.me/cyberlika', '_blank');
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      
    </Dialog>;
};
export default BuyMeCoffeePopup;