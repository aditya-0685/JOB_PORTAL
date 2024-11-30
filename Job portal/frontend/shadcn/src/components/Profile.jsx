import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import AppliedJobTabel from "./AppliedJobTabel";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";


const skills = ["HTML", "CSS", "JS", "React JS", "Angular"];

const Profile = () => {
  const isResume = true;
  const [open, setOpen] = useState(false);
  const {user} = useSelector(store=>store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <Avatar className="h-18 w-20">
              <AvatarImage
                src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
                alt="Profile Avatar"
                className="rounded-full"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p className="text-gray-600">{user?.profile?.bio}</p>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="text-right hover:bg-gray-200 transition-transform transform hover:scale-105"
              variant="outline"
            >
              <Pen /> Edit
            </Button>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2">
              <Mail className="text-blue-500" />
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center gap-2 my-2">
              <Contact className="text-green-500" />
              <span>{user?.phoneNumber}</span>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h1 className="font-bold text-lg">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            { user?.profile?.skills.length ? (
              user?.profile?.skills.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-200 cursor-pointer transition shadow-sm"
                >
                  {item}
                </span>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>

        <div className="mt-5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 12l8 8m0 0l8-8m-8 8V4"
                />
              </svg>
            {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 mt-5">
        <h1 className="font-bold text-lg mb-4">Applied Jobs</h1>
        <AppliedJobTabel />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;     