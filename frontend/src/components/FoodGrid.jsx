export default function FoodGrid({ showFilterData }) {
  console.log(showFilterData);
  return (
    <>
      <div className="container font-bold text-xl my-6 ">
        Top Rated Dish near you
      </div>
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {showFilterData.map((items, index) => {
          return (
            <div
              key={`Foodgrid-${index}`}
              className="w-[100%] h-80 lg:w-[100%] lg:h-80 flex flex-col justify-start items-baseline shadow-md rounded-lg"
            >
              <div className="w-100 h-100 mx-auto h-100 relative overflow-hidden rounded-tr-xl rounded-tl-xl shadow-sm">
                <img
                  src={items.image}
                  alt="/"
                  className="w-100 h-100 object-cover"
                />
                <p className="w-9 h-9 bg-orange-500 text-white absolute bottom-0 right-0 mb-2 mr-4 flex justify-center items-center rounded-full  hover:bg-orange-600">
                  {/* cart svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
              <div className="  w-[100%] px-6 py-4">
                <div className="flex justify-between  gap-2 my-2  items-center">
                  <div className=" font-semibold font-mono text-gray-800 ">{items.name}</div>
                  <div>
                    cate:{" "}
                    <span className="font-semibold text-orange-700">
                      {items.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm">{items.description}</div>
                  <div className="text-orange-600 font-semibold mt-2">
                    ${items.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
