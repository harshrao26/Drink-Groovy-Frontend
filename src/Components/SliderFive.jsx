import React, { useEffect, useRef } from 'react';
import mango from '../../public/newpng/fruitMango.png';
import { LuShoppingBag } from "react-icons/lu";
import gsap from 'gsap';

const SliderFive = () => {
  const textRef = useRef();
  const subTextRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

 

  return (
    <div className="h-screen w-full flex items-center justify-between pl-16 bg-[#FFDA55]">
      <div>
        <div ref={textRef} className="font-oswald font-semibold uppercase text-7xl text-white">
          <h1 className='text-[#c0732b]'>
            Made With 
             Topical <br /> <span className="text-[#ffffff]">
              Mango
            </span>{" "}
          </h1>
        </div>
        <div ref={subTextRef} className="font-oswald font-semibold uppercase text-4xl text-gray-700">
          Groovy Fruit Drink - Mango
        </div>
        <div ref={buttonRef} className="flex items-center uppercase mt-8">
          <h1 className="bg-gray-700 text-white px-4 text-xl py-3 w-auto flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </h1>
        </div>
      </div>
      <img ref={imageRef} src={mango} alt="" className="h-full" />
    </div>
  );
};

export default SliderFive;
