import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Add from "./page/Add";
import List from "./page/List";

function App() {
  return (
    <>
      <Navbar />
        <Sidebar>
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Sidebar>
    </>
  );
}

export default App;
