import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold mb-3">About JobPortal</h3>
          <p className="text-gray-300 text-sm">
            We connect people with their dream jobs by simplifying the job search process and offering resources for professional growth.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/jobs" className="text-sm hover:text-red-400 hover:scale-105 hover:shadow-md hover:shadow-red-400 transition-all duration-300 ease-in-out transform">
                Jobs
              </a>
            </li>
            <li>
              <a href="" className="text-sm hover:text-green-400 hover:scale-105 hover:shadow-md hover:shadow-green-400 transition-all duration-300 ease-in-out transform">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellow-400 hover:scale-105 hover:shadow-md hover:shadow-yellow-400 transition-all duration-300 ease-in-out transform">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-blue-400 hover:scale-105 hover:shadow-md hover:shadow-blue-400 transition-all duration-300 ease-in-out transform">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        <div className="hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold mb-3">Connect with Us</h3>
          <div className="flex space-x-6 mt-2">
            <a href="#" className="group relative">
              <Facebook className="h-6 w-6 group-hover:animate-bounce transition duration-300 ease-in-out text-white group-hover:text-blue-500" />
            </a>
            <a href="#" className="group relative">
              <Twitter className="h-6 w-6 group-hover:animate-bounce transition duration-300 ease-in-out text-white group-hover:text-blue-400" />
            </a>
            <a href="#" className="group relative">
              <Linkedin className="h-6 w-6 group-hover:animate-bounce transition duration-300 ease-in-out text-white group-hover:text-blue-600" />
            </a>
            <a href="#" className="group relative">
              <Instagram className="h-6 w-6 group-hover:animate-bounce transition duration-300 ease-in-out text-white group-hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Text */}
      <div className="text-center text-gray-400 mt-6 text-sm">
        &copy; {new Date().getFullYear()} JobPortal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
