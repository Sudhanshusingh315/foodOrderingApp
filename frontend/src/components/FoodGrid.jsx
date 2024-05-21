
import { useState } from "react";
import FoodItem from "./FoodItem";
import { useSelector } from "react-redux";
export default function FoodGrid({ showFilterData }) {
  return (
    <>
      <div className="container font-bold text-xl my-6 ">
        Top Rated Dish near you
      </div>
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {showFilterData?.map((items, index) => {
          return (
            <div key={`Index-${index}`}>

              <FoodItem items={items} />


            </div>
          );
        })}
      </div>
    </>
  );
}
