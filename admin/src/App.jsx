import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Add from "./page/Add";
import List from "./page/List";
import Category from "./page/Category";
import NewCategory from "./page/NewCategory";

function App() {
  return (
    <>
      <Navbar />
        <Sidebar>
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/menuList" element={<Category/>}/>
            <Route path="/newCate" element={<NewCategory/>}/>
          </Routes>
        </Sidebar>
    </>
  );
}

export default App;
