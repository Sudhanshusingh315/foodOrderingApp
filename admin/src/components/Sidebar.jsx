import { NavLink, useLocation } from "react-router-dom";
export default function Sidebar({ children }) {
  const {pathname}= useLocation();
  console.log(pathname);
  return (
    <div className="container flex h-full">
      <div className=" min-w-[30%] max-w-[30%] flex flex-col gap-4 text-white  bg-orange-100 overflow-auto ">
        <NavLink
          to="/add"
          className={({isActive})=> isActive ?"flex h-auto p-2 text-xl justify-center items-center gap-2 bg-orange-800 border-2 rounded-lg " :"flex h-auto p-2 text-xl justify-center items-center gap-2 bg-orange-600 border-2 rounded-lg "}
        >
          <p className="hidden sm:block">Add Items</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </NavLink>

        <NavLink
          to="/list"
          className={({isActive})=> isActive ? "flex h-14 p-2 text-xl justify-center items-center gap-2 bg-orange-800 border-2 rounded-lg": "flex h-14 p-2 text-xl justify-center items-center gap-2 bg-orange-600 border-2 rounded-lg"}
        >
          <p className="hidden sm:block">List Items</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </NavLink>
        <NavLink
          to="/menuList"
          className={({isActive})=> isActive ?"flex h-14 p-2 text-xl justify-center items-center gap-2 bg-orange-800 border-2 rounded-lg" : "flex h-14 p-2 text-xl justify-center items-center gap-2 bg-orange-600 border-2 rounded-lg"}
        >
          <p className="hidden sm:block">Category</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
          </svg>
        </NavLink>

        <NavLink to='/orders' className={({isActive})=>isActive ? "flex h-14 p-2 text-xl justify-center items-center gap-2 bg-orange-800 border-2 rounded-lg overflow-hidden whitespace-nowrap text-ellipsis":"flex h-14 p-2 text-xl justify-center items-center gap-2 bg-orange-600 border-2 rounded-lg overflow-hidden whitespace-nowrap text-ellipsis"}>
          <p className="hidden sm:block">Ordered Items</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
        </NavLink>
        {/* childre */}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
