import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Index() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
