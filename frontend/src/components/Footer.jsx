import { assets } from "../assets/food del assets/frontend_assets/assets";

export default function Footer() {
  return (
    <>
      <div className="container grid grid-cols-4 min-h-36 py-8 px-4 bg-gray-800 mt-4  gap-2 lg:gap-4 rounded-tr-3xl rounded-tl-3xl ">
        <div className="col-span-2 flex justify-center items-start flex-col">
          <div>
            <img src={assets.logo} alt="" className="w-40 min-h-4 my-2" />
          </div>
          <div className="text-white mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            beatae reiciendis, voluptates enim eius blanditiis, hic animi
          </div>
          <div>
            <div className="flex py-4 gap-2 ">
              <img src={assets.facebook_icon} alt="/" className="w-12 h-12" />
              <img src={assets.linkedin_icon} alt="/" className="w-12 h-12" />
              <img src={assets.twitter_icon} alt="/" className="w-12 h-12" />
            </div>
          </div>
        </div>
        {/* grid second part */}
        <div className="flex flex-col col-start-3 col-end-5">
          <div className="font-bold text-2xl text-white font-mono w-40 min-h-12">
            COMPANY
          </div>
          <ul className="text-white flex flex-col gap-2 text-xl">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privary Policy</li>
          </ul>
        </div>
        {/* grid third part*/}
        <div></div>
      </div>
    </>
  );
}
