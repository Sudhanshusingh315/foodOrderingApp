import { useEffect } from "react";
import { food_list } from "../assets/food del assets/frontend_assets/assets";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItemsAsync } from "../features/cart/CartSlice";
// TODO: add redux state here, for testing purposes foodlist in added here
export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  useEffect(() => {
    dispatch(fetchCartItemsAsync())
  }, [dispatch])
  return (
    <>
      <div className="container max-h-96 ">
        <div className="py-10 uppercase text-center font-bold lg:text-4xl text-xl ">
          shopping cart
        </div>

        {isLoading ? <div>loading.....</div> : <div className="sm:grid sm:grid-cols-5 sm:grid-rows-4 gap-4 min-h-96 flex-shrink-0">
          {/* TODO: make this a seprate component and pass the data through props */}
          {/* TODO: make this overflow scrollable [important] */}
          {
            cartItems.map((item, index) => {
              let foodDetails = item.foodId;
              return < CartItem food_list={foodDetails} />
            })
          }
          {/* Page checkout section */}
          <div className="sm:row-start-2 sm:row-span-3 border-t-2 border-orange-700 sm:col-start-4 sm:col-span-2 px-2 rounded-xl shadow-lg  w-full h-60 flex flex-col gap-4">
            <h1 className="text-2xl font-extrabold px-2">Cart Total</h1>
            <div className="px-2 flex flex-col gap-2">
              <div className="flex justify-between items-center w-full ">
                <div className="text-gray-600">Subtotal:</div>
                <div className="text-gray-800">5</div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <div className="text-gray-600">Delivery Fee:</div>
                <div className="text-gray-800">$2</div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <div className="font-extrabold text-xl">Total:</div>
                <div>23</div>
              </div>
            </div>
            <button className="py-2 px-4 rounded-lg bg-orange-800 text-white font-semibold hover:bg-orange-200 hover:text-black ">
              Proceed To Checkout
            </button>
          </div>
        </div>}
      </div>
    </>
  );
}
