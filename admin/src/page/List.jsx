import axios from "axios";
import { useEffect, useState } from "react";

export default function List() {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    (async function name() {
      let { data } = await axios.get("/api/food/"); // setFoodList(data);
			const moreData = [...data.foodList,...data.foodList];
      // setFoodList(data.foodList);
      setFoodList(moreData);
    })();
  }, []);
  console.log(foodList);
  return (
    <div className="sectionHeight p-4 flex flex-col gap-3 overflow-auto shadow-inner">
      {foodList.map((item, index) => {
        return (
          <>
            <div
              key={`food-${index}`}
              className="w-full h-32 flex-shrink-0 grid grid-cols-4 shadow-lg overflow-hidden rounded-2xl "
            >
              <div className="w-[100%] h-full overflow-hidden rounded-2xl ">
                <img
                  src={item.image}
                  alt="/"
                  className="w-[100%] h-full object-cover"
                />
              </div>
              <div className="col-span-2 px-4">
                <h1 className="font-semibold text-xl ">{item.name}</h1>
                <p className=" w-[80%] py-2 ">{item.description}</p>
              </div>
              <div className="w-10 h-10 flex justify-center items-center bg-orange-600  text-white rounded-full my-auto mx-auto">
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
