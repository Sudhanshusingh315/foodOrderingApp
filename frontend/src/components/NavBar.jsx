import { assets } from "../assets/food del assets/frontend_assets/assets";
export default function NavBar() {
  return (
    <>
      <div className="container flex justify-between items-center  my-2 gap-4 h-16 ">
        {/* logo */}
        <div className="min-w- h-14 flex justify-center items-center">
          <img
            src={assets.logo}
            alt="/assets"
            className="w-100 h-100 object-cover"
          />
        </div>
        {/* normal info and stuff */}
        <div className="flex justify-between gap-5  items-center ">
          <ul className="hidden md:flex md:justify-around items-center gap-4 mx-2 ">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>
          <div>
            <button className="px-4 py-2 bg-orange-600 overflow-hidden whitespace-nowrap text-ellipsis   text-white font-semibold rounded-lg">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
