import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Logo from "../../Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Our Work', path: '/work' },
    { name: 'Donate', path: '/get-involved' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className="bg-paper shadow-lg border-b-2 border-maroon/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              {/* Logo only */}
              <img
                src={Logo}
                alt="Nirmaan Logo"
                className="h-20 w-auto md:h-12 lg:h-32 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                    ? 'text-maroon bg-maroon/10'
                    : 'text-charcoal hover:text-maroon hover:bg-maroon/5'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-paper p-2 rounded-md text-charcoal hover:text-maroon focus:outline-none focus:ring-2 focus:ring-maroon"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-paper-light border-t border-maroon/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.path)
                  ? 'text-maroon bg-maroon/10'
                  : 'text-charcoal hover:text-maroon hover:bg-maroon/5'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;