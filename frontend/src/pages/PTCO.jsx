export default function ProceedToCheckOut() {
  return (
    <div className="container mt-4 h-screen sm:grid sm:grid-cols-5 sm:gap-3">
      <div className="w-[100%]  min-h-96 max-h-64 sm:col-span-3">
        <h1 className="text-xl font-semibold">Delivery Address.</h1>
        <div className="flex flex-col gap-2 mt-2 justify-around py-3 items-start px-2 shadow-md rounded-md  border-t-2 border-orange-700 ">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg px-2 outline-none focus:border-2 border-2 focus:border-orange-600"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="rounded-lg px-2 outline-none  border-2 focus:border-2 focus:border-orange-600"
          />
          <input
            type="text"
            placeholder="City"
            className="rounded-lg px-2 outline-none border-2 focus:border-2 focus:border-orange-600"
          />
          <input
            type="text"
            placeholder="Zip code"
            className="rounded-lg px-2 outline-none  border-2 focus:border-2 focus:border-orange-600"
          />
          <input
            type="text"
            placeholder="Phone"
            className="rounded-lg px-2 outline-none border-2 focus:border-2 focus:border-orange-600"
          />
          <textarea
            name="address"
            placeholder="Enter your Address"
            id=""
            className="w-full h-28 border-2 rounded-md px-2"
          ></textarea>
        </div>
      </div>
      {/* TODO: make this payment page */}
      <div className="w-[100%] min-h-44 border-2 border-orange-700 max-h-64 focus:border-2 focus:border-orange-600 sm:col-start-4 sm: col-end-6 ">
        <h1 className="font-bold text-xl">Creat proceed to check out page</h1>
        <div>make the payment section and details</div>
        <button>make thepayment button</button>
      </div>
    </div>
  );
}
