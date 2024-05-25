import { Fragment, useEffect } from "react";
import { food_list } from "../assets/food del assets/frontend_assets/assets";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItemsAsync } from "../features/cart/CartSlice";
import { initiatingCheckout, getAPIkey } from "../features/payments/paymentSlice";
// TODO: add redux state here, for testing purposes foodlist in added here
export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  let sum;
  isLoading ? "" : sum = cartItems.reduce((acc, cur) => {
    let price = cur.foodId.price * cur.quantity;
    acc += price;
    return acc;
  }, 0)
  useEffect(() => {
    dispatch(fetchCartItemsAsync())
  }, [dispatch])

  // handler for payments
  const checkoutHandler = async (sum) => {
    const options = {
      "currency": "INR",
      "name": "Tomato Food",
      "description": "Test Transaction",
      "image": "https://firebasestorage.googleapis.com/v0/b/memorymatchinggame-25508.appspot.com/o/logo%2Fbubble.jpg?alt=media&token=353cf14a-3198-45f4-8bd2-12c64c83c8c7",
      // "callback_url": navigate(-1),
      "prefill": {
        "name": "Tomato Food",
        "email": "LeaderOfMeow@fake.com",
        "contact": "9000090000"
      },
      "notes": {
        "address": "Meow Town Office"
      },
      "theme": {
        "color": "#FF6600"
      }
    };
    console.log(sum);
    dispatch(getAPIkey()).then((res) => {
      return res.payload;
    }).then((key) => {
      dispatch(initiatingCheckout(sum)).then((orderId) => {
        const { payload: { order: { id } } } = orderId;
        console.log("order Id", id);
        options.key = key;
        options.order_id = id;
        return options;
      }).then((options) => {
        console.log(options);
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      })
    })
  }
  return (
    <>
      <div className="container max-h-96 ">
        <div className="py-10 uppercase text-center font-bold lg:text-4xl text-xl ">
          shopping cart
        </div>

        {isLoading ? <div>im loading this.....</div> : <div className="sm:grid sm:grid-cols-5 sm:grid-rows-4 gap-4 min-h-96 flex-shrink-0">
          {/* TODO: make this a seprate component and pass the data through props */}
          {/* TODO: make this overflow scrollable [important] */}
          {
            cartItems?.map((item, index) => {
              return <Fragment key={index}> <CartItem item={item} /> </Fragment>
            })
          }
          {/* Page checkout section */}
          <div className="sm:row-start-2 sm:row-span-3 border-t-2 border-orange-700 sm:col-start-4 sm:col-span-2 px-2 rounded-xl shadow-lg  w-full h-60 flex flex-col gap-4">
            <h1 className="text-2xl font-extrabold px-2">Cart Total</h1>
            <div className="px-2 flex flex-col gap-2">
              <div className="flex justify-between items-center w-full ">
                <div className="text-gray-600">Subtotal:</div>
                <div className="text-gray-800">${sum}</div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <div className="text-gray-600">Delivery Fee:</div>
                <div className="text-gray-800">$2</div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <div className="font-extrabold text-xl">Total:</div>
                <div>${sum}</div>
              </div>
            </div>
            <button onClick={() => { checkoutHandler(sum) }} className="py-2 px-4 rounded-lg bg-orange-800 text-white font-semibold active:bg-orange-200 hover:text-black ">
              Proceed To Checkout
            </button>
          </div>
        </div>}
      </div>
    </>
  );
}
