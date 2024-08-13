import React from 'react';
import guava from '../../public/newpng/fruitGuava.png';
import { LuShoppingBag } from "react-icons/lu";

const SliderThree = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between pl-16 bg-[#91DB68]">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
            <h1 className="text-white ">
              Made With Fresh
              <br /> & Ripe <br /> <span className="text-[#F28878]">
                Guavas
              </span>{" "}
            </h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-600  ">
            Groovy Fruit Drink - Guava
          </div>
          <div className="w flex items-center uppercase mt-8">
            <h1 className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-xl py-3 w-auto flex items-center gap-2">
              Shop Now <LuShoppingBag />

            </h1>
          </div>
        </div>
        <img src={guava} alt="" className="h-full pb-16" />
      </div>
  );
};

export default SliderThree;
