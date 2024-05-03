import { useState } from "react";
import { assets } from "../assets/food del assets/frontend_assets/assets";
import MenuItems from "../components/MenuItems";
import FoodGrid from "../components/FoodGrid";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="container min-h-20 max-h-auto relative overflow-hidden rounded-2xl">
        <img
          src={assets.header_img}
          alt="/"
          className="min-w-full h-100 object-cover md:scale-125"
        />

        <div className="absolute bottom-0 text-base px-4 py-2 sm:text-2xl md:text-3xl lg:py-8 sm:py-4 lg:text-5xl animate-fadeIn">
          <div className="font-bold text-white">Order your</div>
          <div className="font-bold text-white mb-4 ">Favourite food here</div>
          <button className="px-4 py-2 bg-white text-sm text-black rounded-2xl">
            View Menu
          </button>
        </div>
      </div>
      <hr className="my-6 container" />
      {/* menu items component */}
      <MenuItems />

      <Footer />
    </>
  );
}
