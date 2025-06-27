import React, { useContext, useEffect } from "react";
import { products } from "../assets/products.js";
import Cards from "../components/Cards.jsx";
import { ProductContext } from "../context/ProductContext.jsx";

function Home() {
  let p1 = [...products];
  // const { display } = useContext(NavContext);
  const { filteredProducts } = useContext(ProductContext);
  const abc = () => {
    if (filteredProducts >= 0) {
      console.log(p1);
      return p1;
    } else {
      console.log(filteredProducts);
      return filteredProducts;
    }
  };
  useEffect(() => {
    abc();
  }, [p1, filteredProducts]);
  return (
    <div className="flex gap-5 justify-center items-center flex-wrap py-10  bg-black">
      {abc().map((element, index) => (
        <div key={index}>
          <Cards
            image={element.image}
            title={element.title}
            description={element.price}
            category={element.category}
            rating={element.rating.rate}
            count={element.rating.count}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
