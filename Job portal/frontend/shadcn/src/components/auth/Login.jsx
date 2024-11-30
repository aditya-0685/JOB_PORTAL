import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc"; // Import Google Icon
import { MdOutlinePassword } from "react-icons/md"; // Import Password Icon
import { RadioGroup } from "@radix-ui/react-radio-group";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Loader2, Eye, EyeOff } from "lucide-react"; // Import Eye icons for visibility toggle

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility toggle
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 border border-gray-300 p-8 my-10 font-bold rounded-xl shadow-2xl bg-white transition-transform transform hover:scale-105 duration-300"
        >
          <h1 className="font-extrabold text-4xl mb-6 text-gray-800 text-center leading-tight">
            Welcome Back!
          </h1>
          <p className="text-gray-600 text-lg text-center mb-8 italic">
            Log in to continue your journey.
          </p>

          <div className="my-3">
            <Label className="block text-gray-700 text-sm font-semibold">
              Email
            </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="example@gmail.com"
              className="border rounded-md shadow-sm p-3 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 hover:shadow-md"
            />
          </div>

          <div className="my-3 relative">
            <Label className="block text-gray-700 text-sm font-semibold">
              Password
            </Label>
            <Input
              type={passwordVisible ? "text" : "password"} // Change input type based on visibility state
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="********"
              className="border rounded-md shadow-sm p-3 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 hover:shadow-md"
            />
            {/* Toggle button for showing/hiding password */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-6 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {passwordVisible ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <div className="flex items-center justify-between mt-5">
            <RadioGroup
              className="flex items-center gap-8"
              value={input.role}
              onValueChange={(value) => setInput({ ...input, role: value })}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label className="text-gray-700 text-sm font-semibold">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label className="text-gray-700 text-sm font-semibold">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-between items-center mt-4">
            <a
              href="/forgot-password"
              className="text-blue-600 text-sm hover:underline transition duration-200"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin"></Loader2>{" "}
                Please wait
              </Button>
            ) : (
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-8 py-3 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 hover:text-gray-900 hover:bg-gradient-to-r from-yellow-300 to-red-500">
                Log in
              </button>
            )}
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            <Button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
              <FcGoogle size={24} />
              <span>Login with Google</span>
            </Button>
          </div>

          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up here
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
