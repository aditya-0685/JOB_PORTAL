import { Label } from '@radix-ui/react-label';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-45k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h1 className="font-bold text-2xl mb-4 text-gray-800">Filter Jobs</h1>
      <RadioGroup className="space-y-6">
        {filterData.map((data, index) => (
          <div key={index} className="w-full">
            <h2 className="font-semibold text-xl mb-3 text-gray-700">
              {data.filterType}
            </h2>
            <div className="space-y-3">
              {data.array.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <RadioGroupItem
                    value={item}
                    id={`radio-${item}`}
                    className="relative flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-full checked:bg-purple-600 checked:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 hover:border-purple-400 transition duration-200 ease-in-out"
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 checked:opacity-100">
                      <CheckIcon className="w-4 h-4" />
                    </div>
                  </RadioGroupItem>
                  <Label
                    htmlFor={`radio-${item}`}
                    className="text-gray-700 text-lg cursor-pointer hover:text-purple-600 transition-colors duration-200 ease-in-out"
                  >
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
