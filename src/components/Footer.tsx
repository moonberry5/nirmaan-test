import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../../Logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Nirmaan Logo" className="h-20 w-auto md:h-12 lg:h-24 object-contain" />
            </div>
            <p className="text-gray-300 max-w-md">
              Building dreams and creating lasting impact through education, community development,
              and empowerment initiatives across rural India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/nirmaan-organization-bits-pilani-chapter/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/nirmaan.bppc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-nunito font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/work" className="text-gray-300 hover:text-white">Our Work</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white">Volunteer</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-white">Media Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-nunito font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-maroon" />
                <span className="text-gray-300 text-sm">Pilani, Rajasthan, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-maroon" />
                <span className="text-gray-300 text-sm">contact@nirmaanpilani.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-maroon" />
                <span className="text-gray-300 text-sm">+91 12345 67890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Nirmaan Pilani. All rights reserved. Built with ❤️ for social impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;