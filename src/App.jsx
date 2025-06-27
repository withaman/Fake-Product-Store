import { useContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Navbar from "./components/Navbar";
import Electronic from "./pages/Electronic";
import Jewelery from "./pages/Jewelery";
import Cart from "./pages/Cart";
import { ProductContext } from "./context/ProductContext";

function App() {
  const { setFilteredProducts, setSearchItem } = useContext(ProductContext);
  return (
    <>
      <Navbar
        setFilteredProducts={setFilteredProducts}
        setSearchItem={setSearchItem}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/Jewelery" element={<Jewelery />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
