import React, { createContext, useState } from "react";
import { products } from "../assets/products.js";
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const obj = {
    filteredProducts,
    setFilteredProducts,
    searchItem,
    setSearchItem,
    products
  };

  return (
    <ProductContext.Provider value={obj}>{children}</ProductContext.Provider>
  );
}
