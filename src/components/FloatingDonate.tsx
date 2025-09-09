import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const FloatingDonate = () => {
  return (
    <Link 
      to="/get-involved" 
      className="fixed bottom-6 right-6 bg-maroon hover:bg-maroon-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
    >
      <div className="flex items-center space-x-2">
        <Heart className="h-5 w-5 group-hover:animate-pulse" />
        <span className="hidden sm:block font-semibold">Donate</span>
      </div>
    </Link>
  );
};

export default FloatingDonate;