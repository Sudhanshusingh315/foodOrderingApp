import { useEffect, useState } from "react";
import { menu_list } from "../assets/food del assets/frontend_assets/assets";
import { food_list } from "../assets/food del assets/frontend_assets/assets";
import FoodGrid from "./FoodGrid";
export default function MenuItems() {
  const [category, setCategory] = useState([]);
  const [filterItems, setFilterItesm] = useState(menu_list);
  const [showFilterData, setShowFitlerData] = useState(food_list);

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
  "inside use effect"
    newFilterItem();
  }, [category]);

  function newFilterItem() {
    if(category.length>0){
      let newData = category.map((item)=>{
        let tempResult = food_list.filter((el)=>{ return el.category===item})
        return tempResult;
      })
      setShowFitlerData(newData.flat());
    }else{
      setShowFitlerData(food_list);
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
                  className="w-20 h-20  overflow-hidden p-1 border-4 rounded-full active:border-orange-600 active:p-2"
                >
                  <img
                    src={item.menu_image}
                    alt="/"
                    className="w-100 h-100 object-cover "
                  />
                </div>
                <p className="md:text-xl">{item.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="container my-6" />
      <FoodGrid showFilterData={showFilterData} />
    </>
  );
}
