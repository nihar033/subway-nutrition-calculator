
import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Add smooth scrolling to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null;
};

export default SmoothScroll;
