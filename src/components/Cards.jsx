import React from "react";

function Cards({ title, description, category, image, count, rating }) {
  return (
    <>
      <div className="w-64 h-80 shadow-[0px_0px_15px_rgba(255,255,255,0.6)] rounded-xl overflow-hidden p-5 bg-white">
        <div className="flex flex-col items-center">
          <img className="w-auto h-28" src={image} alt="" />
        </div>
        <h1 className="font-bold text-center h-11 overflow-hidden text-sm mt-3">
          {title}
        </h1>
        <div className="flex bg-black rounded-md text-white px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.6)] justify-between">
          <div className="">
            <p className="">Rs: {description}</p>
            <p className="">{category}</p>
          </div>
          <div className=" text-sm mt-2">
            <p className="">{rating}</p>
            <p className="">({count})</p>
          </div>
        </div>
        <div className="pt-4 flex justify-between">
          <button className="bg-yellow-500  text-white rounded-md text-center px-3 py-1">
            Add Cart
          </button>
          <button className="bg-red-600  text-white rounded-md text-center px-3 py-1">
            Buy
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
