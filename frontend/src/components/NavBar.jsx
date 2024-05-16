import { useState } from "react";
import { assets } from "../assets/food del assets/frontend_assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavBar() {
  const { pathname } = useLocation();
  const userInfo = useSelector((state)=>state.auth.userInfo)
  console.log("userInfo:",userInfo);
  return (
    <>
      <div className="container flex justify-between items-center  my-2 gap-4 h-16 ">
        {/* logo */}
        <Link to='/' className="min-w- h-14 flex justify-center items-center">
          <img
            src={assets.logo}
            alt="/assets"
            className="w-100 h-100 object-cover"
          />
        </Link>
        {/* normal info and stuff */}
        <div className="flex justify-between gap-5  items-center ">
          <ul className="hidden md:flex md:justify-around items-center gap-4 mx-2 ">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
          <div className="flex gap-2 justify-center items-center">
            {/* add to cart */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 bg-orange-600 overflow-hidden whitespace-nowrap text-ellipsis text-white font-semibold rounded-lg"
                  : "px-3 py-2 bg-orange-600 overflow-hidden whitespace-nowrap text-ellipsis text-white font-semibold rounded-lg "
              }
            >
              {pathname === "/cart" ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </>
              )}
            </NavLink>
            {/* sign in */}
            <button className="px-4 py-2 bg-orange-600 overflow-hidden whitespace-nowrap text-ellipsis   text-white font-semibold rounded-lg">
              {userInfo ? "name":"Singin"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
