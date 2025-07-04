import React from "react";
import Cards from "../components/Cards";
import { products } from "../assets/products.js";

function Women() {
  let p1 = [...products];
  const applyFilter = () => {
    p1 = p1.filter((item) => item.category == "women's clothing");
    return p1;
  };

  return (
    <div className="bg-black">
    <h2 className="text-xl text-center font-bold py-6 text-white">Women's</h2>
    <div className="flex gap-10 justify-center items-center flex-wrap p-4">
      {applyFilter().map((element, index) => (
        <Cards
        key={index}
          image={element.image}
          title={element.title}
          description={element.price}
          category={element.category}
          rating={element.rating.rate}
          count={element.rating.count}
        />
      ))}
    </div>
    </div>
  );
}

export default Women;