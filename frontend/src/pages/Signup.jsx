import { useState } from "react";
import { assets } from "../assets/food del assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRegister } from "../features/Auth/authSlice";
const initialState = {
  email: "",
  password: "",
  name: "",
};
export default function Signup() {
  const [info, setInfo] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("user info",info);
    dispatch(authRegister(info))
  }
  return (
    <div className="container flex justify-center items-center h-screen  bg-gradient-to-tr ">
      <div className="w-3/4 h-full">
        <img src={assets.logo} alt="/" className=" w-64 mx-auto min-h-4" />
        <h1 className="text-center font-mono py-8 font-semibold text-orange-500 text-2xl">
          Signup
        </h1>
        {/* different div */}
        <div className="flex flex-col gap-6 my-16 md:w-[70%] md:mx-auto">
          <input
            type="text"
            value={info.name}
            onChange={(e) => {
              setInfo((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
            placeholder="Name"
            name="name"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <input
            type="text"
            value={info.email}
            onChange={(e) => {
              setInfo((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
            placeholder="Email"
            name="email"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <input
            type="password"
            onChange={(e) => {
              setInfo((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
            value={info.password}
            placeholder="Enterr your password"
            name="password"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none"
          />
          <button onClick={(e)=>{handleSubmit(e)}} className="bg-orange-500 h-12 rounded-lg font-semibold text-white outline-none hover:bg-orange-600">
            Sign Up
          </button>
          <div>
            Already have an account?{" "}
            <Link to="/login" className="hover:underline text-orange-500">
              Sign in
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
