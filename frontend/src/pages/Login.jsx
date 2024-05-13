import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { authLogin } from "../features/Auth/authSlice";
const initialState = {
  email: "",
  password: "",
};
export default function Login() {
  const [info, setInfo] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(info);
    dispatch(authLogin(info)).then((res)=>{
      const {payload} = res
      console.log({payload});
      if(res.payload.success===true){
        navigate("/");
      }
    }).catch((err)=>{console.log("dispatch err",err)})
    
  };
  return (
    <div className="container flex justify-center items-center h-screen  bg-gradient-to-tr ">
      <div className="w-3/4 h-full">
        <h1 className="text-center font-mono py-8 font-semibold text-orange-500 text-3xl">
          Login
        </h1>
        {/* differe div */}
        <div className="flex flex-col gap-6 my-16 md:w-[70%] md:mx-auto">
          {/* input for email */}
          <input
            type="text"
            value={info.email}
            onChange={(e) => {
              setInfo((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
            placeholder="Email"
            name="email"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none placeholder:text-gray-500"
          />
          {/* input for password */}
          <input
            type="password"
            value={info.password}
            onChange={(e) => {
              setInfo((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
            placeholder="Enter your password"
            name="password"
            className="px-4 border-2 h-12 border-orange-400 rounded-md placeholder:text-sm focus:ring-2 focus:ring-orange-700 outline-none placeholder:text-gray-500"
          />
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="bg-orange-500 h-12 rounded-lg font-semibold text-white outline-none uppercase hover:bg-orange-600"
          >
            Sign In
          </button>
          <div className="text-gray-700">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="hover:underline text-orange-500">
              Sign up
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
