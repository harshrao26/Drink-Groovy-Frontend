import React from 'react';
import lychee from '../../public/newpng/fruitLychyee.png';
import { LuShoppingBag } from "react-icons/lu";

const SliderFour = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between pl-16 bg-[#EF94A6]">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
            <h1 className="text-[#9D2729]">
              Made With Sweet
              & puply <br /> <span className="text-[#ffffff]">
                Lychees
              </span>{" "}
            </h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-700  ">
            Groovy Fruit Drink - Lychees
          </div>
          <div className="w flex items-center uppercase mt-8">
            <h1 className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-xl py-3 w-auto flex items-center gap-2">
              Shop Now <LuShoppingBag />

            </h1>
          </div>
        </div>
        <img src={lychee} alt="" className="h-full" />
      </div>
  );
};

export default SliderFour;
