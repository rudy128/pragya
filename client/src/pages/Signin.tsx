import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import meeting from "../assets/students.jpg";

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gradient-to-r from-gray-100 to-yellow-100">
      {/* Left Panel (Sign In Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white shadow-lg rounded-none md:rounded-r-lg">
        <h2 className="text-3xl font-semibold text-gray-800">Sign in to your account</h2>
        <p className="text-gray-500 mt-2">Welcome back! Please enter your credentials</p>

        <form className="w-full max-w-md mt-6">
          <label className="block text-gray-600 text-sm">Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <label className="block text-gray-600 text-sm mt-4">Password</label>
          <input
            type="password"
            placeholder="***************"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <div className="flex justify-between items-center mt-3">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-yellow-500 text-sm font-semibold">Forgot Password?</a>
          </div>

          <button className="w-full bg-yellow-500 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Sign In
          </button>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
            <button className="flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-lg hover:opacity-80 transition w-full md:w-auto">
              <FaApple className="text-lg" />
              <span>Apple</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100 transition w-full md:w-auto">
              <FaGoogle className="text-red-500" />
              <span>Google</span>
            </button>
          </div>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          Don't have an account? <a href="/signup" className="text-yellow-500 font-semibold">Sign up</a>
        </p>
      </div>

      {/* Right Panel (Image & Schedule) */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center">
        <img src={meeting} alt="Meeting" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bg-white/70 p-4 rounded-lg top-10 left-10">
          <p className="text-sm text-gray-800 font-semibold">Morning Standup</p>
          <p className="text-xs text-gray-600">09:00am - 09:30am</p>
        </div>
        <div className="absolute bg-white/70 p-4 rounded-lg bottom-10 left-10">
          <p className="text-sm text-gray-800 font-semibold">Team Sync</p>
          <p className="text-xs text-gray-600">03:00pm - 04:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
