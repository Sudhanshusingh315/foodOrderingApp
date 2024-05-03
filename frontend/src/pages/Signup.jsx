import { assets } from "../assets/food del assets/frontend_assets/assets";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="container flex justify-center items-center h-screen  bg-gradient-to-tr ">
      <div className="w-3/4 h-full">
        <img src={assets.logo}  alt="/" className=" w-64 mx-auto min-h-4" />
        <h1 className="text-center font-mono py-8 font-semibold text-orange-500 text-2xl">
          Signup
        </h1>
        <div className="flex flex-col gap-6 my-16">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <input
            type="text"
            placeholder="Enterr your password"
            name="password"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <button className="bg-orange-500 h-12 rounded-lg font-semibold text-white outline-none hover:bg-orange-600">
            Sign Up
          </button>
          <div>
            Already have an account?{" "}
            <Link to="/login" className="hover:underline text-orange-500">Sign in</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}