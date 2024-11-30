import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";
const user = true;
import { Link, useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

export default function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.responce.data.message);
    }
  };
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            JOB
            <span className="text-[#F83002] shadow-lg animate-bounce transition-all duration-300 hover:scale-110 hover:shadow-xl">
              BAZAR
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role == "recruiter" ? (
              <>
                <li className="transition duration-300 hover:text-[#6A38C2] cursor-pointer">
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className="transition duration-300 hover:text-[#6A38C2] cursor-pointer">
                  {" "}
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="transition duration-300 hover:text-[#6A38C2] cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="transition duration-300 hover:text-[#6A38C2] cursor-pointer">
                  {" "}
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="transition duration-300 hover:text-[#6A38C2] cursor-pointer">
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/Login">
                <Button className="rounded px-6 py-4" variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="/Signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white rounded px-6 py-4  ">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="h-11 w-11  cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                    className="rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="h-11 w-11  cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                      className="rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {
                    user && user.role == 'student' && (
                       <div className="flex w-fit items gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">
                      <Link to="/profile">Veiw Profile</Link>
                    </Button>
                  </div>
                    )
                  }
                 
                  <div className="flex w-fit items gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}
