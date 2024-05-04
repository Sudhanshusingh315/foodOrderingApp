import { Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./components/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import ProceedToCheckOut from "./pages/PTCO";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<ProceedToCheckOut />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
