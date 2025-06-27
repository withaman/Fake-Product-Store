import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

// import { ProductContext } from "../context/ProductContext.jsx";

function Navbar({ setFilteredProducts, setSearchItem }) {
  const { products } = useContext(ProductContext);
  const [v, setV] = useState("");
  // const  setSearchItem] = useState("");
  // const { setFilteredProducts } = useContext(ProductContext);
  // const [filter, setFilter] = useState([]);

  function applyFilter() {
    console.log(v);
    setSearchItem(v);
    const filtered = products.filter(
      (item) =>
        item.title.toLowerCase().includes(v.toLowerCase()) ||
        item.category.toLowerCase().includes(v.toLowerCase())
    );
    console.log(filtered);
    setFilteredProducts(filtered);
  }
  useEffect(() => {
    applyFilter();
  }, [products, v]);
  return (
    <>
      <div className="nav flex justify-between items-center p-2 h-14 bg-yellow-400 text-black">
        <div className="logo text-2xl font-bold">
          <Link to="/">
            <h1>Store</h1>
          </Link>
        </div>
        <div>
          <div className="flex gap-10 justify-center items-center text-center">
            <NavLink to="/men">
              <p>Men's</p>
            </NavLink>
            <NavLink to="/women">
              <p>Women's</p>
            </NavLink>
            <NavLink to="/jewelery">
              <p>Jewelery</p>
            </NavLink>
            <NavLink to="/electronic">
              <p>Electronic</p>
            </NavLink>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <Link to="/cart">
              <button className="p-2 w-10 h-10 hover:bg-zinc-800  text-white rounded-full ">
                <i className="ri-shopping-cart-line"></i>
              </button>
            </Link>
          </div>
          <input
            className="text-white bg-black rounded px-2 py-[3px]"
            type="text"
            placeholder="search here..."
            id="search"
            onChange={(e) => setV(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
