import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { useNavigate } from 'react-router-dom'

const Job = (job) => {
  const navigate = useNavigate();
  // const jobId = "febfefefe";
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDiffrence = currentTime - createdAt;
    return Math.floor(timeDiffrence/(1000*24*60*60));
  }
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg job-card">
      {/* Top section with time and bookmark */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{daysAgoFunction(job?.createdAt)==0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`} </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="hover:text-blue-600 transition duration-300 ease-in-out" />
        </Button>
      </div>

      {/* Content section with company info on the left and logo on the right */}
      <div className="flex justify-between items-center my-4">
        <div>
          <h1 className="text-lg font-semibold">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
          {/* Job details */}
          <div className="flex items-center space-x-2 mt-2">
            <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">{job?.position}</span>
            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">{job?.salary}LPA</span>
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">{job?.experience}</span>
          </div>
        </div>
        <Avatar className="w-12 h-12">
          <AvatarImage className="rounded-full object-cover" src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="Google Logo" />
        </Avatar>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-4 mt-4">
        <Button onClick = {()=> navigate(`/description/${job?._id}`)} className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2">Apply Now</Button>
        <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-100 rounded-full px-6 py-2">Share</Button>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
       <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
    </div>
  )
}

export default Job
