import React from 'react';
import { Badge } from './ui/badge';

export default function LatestJobsCards({job}) {
  return (
    <div className='p-6 rounded-lg shadow-md bg-gray-50 border border-gray-200 cursor-pointer transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-100'>
      <div className='space-y-2'>
        <h1 className='font-semibold text-lg text-gray-800 transition-colors duration-200 hover:text-[#6A38C2]'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-600 italic'>Location: India</p>
      </div>
      <div className='mt-4'>
        <h2 className='font-bold text-xl text-gray-900 transition-transform duration-200 hover:translate-y-1'>{job?.title}</h2>
        <p className='text-sm text-gray-700 transition-all duration-200 hover:text-gray-500'>{job?.decription}</p>
      </div>
      <div className='flex items-center gap-2 mt-5'>
        <Badge className='text-blue-700 font-bold bg-blue-100 transition-transform duration-200 hover:bg-blue-500 hover:text-white hover:scale-105'>{job?.position}Positions</Badge>
        <Badge className='text-[#F83002] font-bold bg-red-100 transition-transform duration-200 hover:bg-red-500 hover:text-white hover:scale-105'>{job?.jobType}</Badge>
        <Badge className='text-[#7209b7] font-bold bg-purple-100 transition-transform duration-200 hover:bg-purple-500 hover:text-white hover:scale-105'>{job?.salary}LPA</Badge>
      </div>
      <div className='mt-4 flex justify-between items-center'>
        <button className='px-4 py-2 bg-[#6A38C2] text-white font-bold rounded-md transition-transform duration-200 hover:bg-[#5A2BA0] hover:scale-105'>Apply Now</button>
        <span className='text-sm text-gray-500 transition-opacity duration-200 hover:opacity-100'>Easy Apply</span>
      </div>
    </div>
  );
}
