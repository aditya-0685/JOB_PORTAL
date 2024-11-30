import { Search } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    // <div className="relative text-center py-20 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
      <div className="container mx-auto relative text-center ">
        {/* Badge */}
        <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-medium mb-6">
          No.1 Job Website
        </span>

        {/* Main Heading with bounce animation */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 animate-bounce">
          Search, Apply, <br />
          <span className="text-purple-600">Get Your Dream Job</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover thousands of opportunities and take the next step in your career. Find the job that suits your skills and goals today!
        </p>

        {/* Search Input */}
        <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto mb-12">
          <div className="flex items-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 py-4">
            <input
              type="text"
              placeholder="Find Your Dream Job"
              className="flex-grow text-lg px-2 py-1 outline-none border-none text-gray-700"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full px-6 py-3 hover:bg-purple-700 transition-all duration-300">
              <Search className="h-6 w-6" />
            </Button>
          </div>
        {/* </div> */}

        {/* Divider */}
      

        {/* Call to Action Section */}
        
      </div>
    </div>
  );
};

export default HeroSection;
