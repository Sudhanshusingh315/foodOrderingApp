import { useEffect, useState } from "react";
import { menu_list } from "../assets/food del assets/frontend_assets/assets";
import FoodGrid from "./FoodGrid";

export default function MenuItems({ foodItem, isLoading }) {
  const [category, setCategory] = useState([]);
  const [filterItems, setFilterItesm] = useState(menu_list);
  const [showFilterData, setShowFitlerData] = useState(foodItem);
  // first task is to fill the category array;
  const handleCategory = (selectedCategory) => {
    if (category.includes(selectedCategory)) {
      let newFilter = category.filter((element) => {
        return element !== selectedCategory;
      });
      setCategory(newFilter);
    } else {
      setCategory([...category, selectedCategory]);
    }
  };

  // second task is to get the array from the origal menu_list
  useEffect(() => {
    "inside use effect";
    newFilterItem();
  }, [category]);

  function newFilterItem() {
    if (category.length > 0) {
      let newData = category.map((item) => {
        let tempResult = foodItem.filter((el) => {
          return el.category === item;
        });
        return tempResult;
      });
      setShowFitlerData(newData.flat());
    } else {
      setShowFitlerData(foodItem);
    }
  }

  return (
    <>
      <div className="container">
        <div className="my-6 font-bold text sm:text-2xl ">
          Select from Menu <span className="text-orange-500 font-bold">[</span>{" "}
          List <span className="text-orange-500 font-bold">]</span>{" "}
        </div>
        {/* these are my titles  */}
        <div className="flex overflow-x-scroll gap-2 justify-between smoothScroll  bg-orange-50  rounded-xl">
          {filterItems.map((item) => {
            return (
              <div
                key={item.menu_name}
                className=" w-24 h-28 overflow-hidden flex-shrink-0 slides flex flex-col justify-center items-center"
              >
                <div
                  onClick={() => {
                    handleCategory(item.menu_name);
                  }}
                  className={
                    category.includes(item.menu_name)
                      ? "w-20 h-20  overflow-hidden p-1 border-4 rounded-full borded-2 border-orange-500"
                      : "w-20 h-20  overflow-hidden p-1 border-4 rounded-full "
                  }
                >
                  <img
                    src={item.menu_image}
                    alt="/"
                    className="w-100 h-100 object-cover "
                  />
                </div>
                <p className="md:text-xl ">{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="container my-6" />

      {/* food grid is here */}
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <FoodGrid showFilterData={showFilterData} />
      )}
    </>
  );
}
