import React from "react";
import slide1 from "../../public/slide1.jpg";
import fruitLemon from "../../public/newpng/fruitLemon.png";
import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";


const Slider = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-between px-16 bg-[#F5DE30]">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
            <h1 className="">
              Made With Mint
               And <br /> <span className="text-[#33810A]">
                Lemon
              </span>{" "}
            </h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-700  ">
            Groovy Fruit Drink - Lemon
          </div>
          <div className="w flex items-center uppercase mt-8">
            <h1 className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-xl py-3 w-auto flex items-center gap-2">
              Shop Now <LuShoppingBag />

            </h1>
          </div>
        </div>
        <img src={fruitLemon} alt="" className="h-full" />
      </div>
    </>
  );
};

export default Slider;
