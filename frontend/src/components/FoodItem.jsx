import { useDispatch } from "react-redux";
import { cartAddItems } from "../features/cart/CartSlice";
import { initialAdd } from "../features/foodList/foodSlice";
import { useState } from "react";
export default function FoodItem({ items }) {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);
    const handleCart = (e, itemId) => {
        dispatch(initialAdd());
        dispatch(cartAddItems(itemId)).then((res) => {
            console.log("first added dispatch", res)
            if (res.payload.length > 0) {
                localStorage.setItem("added", true);
                setAdded(true);
            }
            console.log(res);
        }).catch((err) => {
            console.log(err.message);
        })
    }
    return (
        <div
            className="w-[100%] h-80 lg:w-[100%] lg:h-80 flex flex-col justify-start items-baseline shadow-md rounded-lg"
        >
            <div className="w-100 h-100 mx-auto h-100 relative overflow-hidden rounded-tr-xl rounded-tl-xl shadow-sm">
                <img
                    src={items.image}
                    alt="/"
                    className="w-100 h-100 object-cover"
                />
                <p onClick={(e) => { { added ? "" : handleCart(e, items._id) } }} className="w-9 h-9 shadow-lg bg-orange-700 text-white absolute bottom-0 right-0 mb-2 mr-4 flex justify-center items-center rounded-full  hover:bg-orange-600">
                    {/* cart svg */}
                    {added ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                        : <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-6 h-6 shadow-lg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
                                clipRule="evenodd"
                            />
                        </svg>}
                </p>
            </div>
            <div className="  w-[100%] px-6 py-4">
                <div className="flex justify-between  gap-2 my-2  items-center">
                    <div className=" font-semibold font-mono text-gray-800 ">
                        {items.name}
                    </div>
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
    )
}
