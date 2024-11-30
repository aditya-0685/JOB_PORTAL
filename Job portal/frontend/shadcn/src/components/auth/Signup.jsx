import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Button } from "../ui/button";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2, Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { fullname, email, phoneNumber, password, role } = input;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      toast.error("Something is missing");
      return;
    }

    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message || "Account created successfully");
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full md:w-1/2 border border-gray-300 p-6 my-10 font-bold rounded-xl shadow-2xl transition-transform transform hover:scale-105 duration-300 bg-white"
        >
          <h1 className="font-extrabold text-4xl mb-5 text-gray-800 text-center leading-tight">
            Join Us Today!
          </h1>
          <p className="text-gray-600 text-lg text-center mb-8 italic">
            Create your account and start your journey towards success.
          </p>

          <div className="my-2">
            <Label className="block text-gray-700 text-sm font-semibold">
              Full Name
            </Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Aditya"
              className="border rounded-md shadow-sm p-3 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 hover:shadow-md"
            />
          </div>

          <div className="my-2">
            <Label className="block text-gray-700 text-sm font-semibold">
              Email
            </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="xyz@gmail.com"
              className="border rounded-md shadow-sm p-3 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 hover:shadow-md"
            />
          </div>

          <div className="my-2">
            <Label className="block text-gray-700 text-sm font-semibold">
              Phone Number
            </Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="+916392348485"
              className="border rounded-md shadow-sm p-3 w-full transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 hover:shadow-md"
            />
          </div>

          <div className="my-2 relative">
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
              value={input.role}
              onValueChange={(value) => setInput({ ...input, role: value })}
              className="flex items-center gap-8"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role == "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1" className="text-gray-700 text-sm font-semibold">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2" className="text-gray-700 text-sm font-semibold">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label className="text-gray-700 text-sm font-semibold">Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-8 py-3 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 hover:text-gray-900 hover:bg-gradient-to-r from-yellow-300 to-red-500"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Sign Up"}
            </button>
          </div>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Log in here
            </a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
