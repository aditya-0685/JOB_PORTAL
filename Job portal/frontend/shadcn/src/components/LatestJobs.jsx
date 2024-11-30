import React from 'react';
import LatestJobsCards from './LatestJobsCards';
import { useSelector } from 'react-redux';

// const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8];
function LatestJobs() {
  const {allJobs} = useSelector(store=>store.job);
  return (
    <div className='max-w-7xl mx-auto my-20 px-5'>
      <h1 className='text-5xl font-extrabold text-center animate-pulse mb-10'>
        <span className='bg-gradient-to-r from-[#6A38C2] to-[#F83002] text-transparent bg-clip-text'>Latest & Top</span> Job Openings
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          allJobs.length<= 0 ? <span>No Job Available</span>: allJobs?.slice(0, 6).map((job) => <LatestJobsCards key={job._id} job ={job} />)
        }
      </div>
    </div>
  );
}

export default LatestJobs;
