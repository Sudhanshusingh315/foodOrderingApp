import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCarteItemsAsync, deletingParticulateItemAync, cartAddItems } from "../features/cart/CartSlice";
export default function CartItem({ item }) {
  let food_list = item?.foodId;
  const dispatch = useDispatch();
  const handleDecreate = (e, itemId) => {
    e.preventDefault();
    if (item.quantity > 1) {
      dispatch(deleteCarteItemsAsync(itemId));
    }
    else {
      dispatch(deletingParticulateItemAync(itemId));
    }
  }
  const handleIncrease = (e, itemId) => {
    e.preventDefault();
    if (item.quantity >= 1) {
      dispatch(cartAddItems(itemId))
    }
  }
  const handleRemove = (itemId) => {
    dispatch(deletingParticulateItemAync(itemId))
  }

  return (
    <>
      <div className="flex flex-col min-w-full shadow-lg mx-auto col-span-3 rounded-xl h-[100%]">
        <div className="w-full min-h-14 max-h-auto hover:border-orange-800 border-b-2 bg-orange-500 rounded-xl overflow-hidden grid grid-cols-3 gap-2 ease-in-out duration-200">
          {/* for image */}
          <div className="w-full h-100 overflow-hidden rounded-xl">
            <img
              src={food_list?.image}
              alt="/"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          {/* for rest of the content */}
          <div className="col-start-2 col-end-4 flex flex-col  justify-around px-4 py-2 gap-2">
            {/* name and delete button */}
            <div className="flex justify-between items-center gap-2">
              <p className="md:text-xl text-white font-semibold lg:text-3xl">
                {food_list?.name}
              </p>
              <p onClick={() => { handleRemove(food_list._id) }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 bg-orange-800 text-white p-1 rounded-full hover:text-black hover:bg-orange-200 hover:cursor-pointer "
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
            {/* rating  */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {/* quantity and price */}
            <div className="flex gap-2 justify-between">
              <div className="sm:w-32 w-24 flex justify-start sm:justify-between gap-2">
                <p onClick={(e) => { handleDecreate(e, food_list._id) }} className="sm:w-7 sm:h-7 w-5 h-5 border-2 rounded-full bg-red-300 flex justify-center items-center select-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-900">
                    <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>

                </p>
                <p className="sm:w-7 sm:h-7 w-5 h-5 rounded-full flex justify-center items-center bg-white font-semibold text-orange-800">
                  {item.quantity}
                </p>
                <p onClick={(e) => { handleIncrease(e, food_list._id) }} className="sm:w-7 sm:h-7 w-5 h-5 rounded-full bg-green-300 justify-center items-center  flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-900 ">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                  </svg>

                </p>
              </div>
              <div className="text-nowrap text-white font-semibold">
                ${food_list?.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
