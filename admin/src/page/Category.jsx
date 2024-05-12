import { NavLink , Link} from "react-router-dom";
export default function Category() {
  return (
    <div className="sectionHeight flex gap-4 flex-wrap justify-center items-center">
      <div>
        <Link to="/newCate" className="w-16 h-16 rounded-full outline-none bg-orange-500 flex justify-center items-center hover:cursor-pointer active:bg-orange-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
