import React from "react";
import dets3 from "../../public/newpng/dets3.png";
import leaf from "../../public/newpng/leaf.png";
import leaf2 from "../../public/newpng/leaf2.png";
import leaf3 from "../../public/newpng/leaf3.png";
import leaf4 from "../../public/newpng/leaf4.png";

const CheckDets = () => {
  return (
    <div className="w-full relative justify-center flex items-center bg-[#CF4758] pb-6">
      <div className="w-1/3 pl-16">
        <h1 className="text-8xl text-center uppercase text-white tracking-tighter leading-[5rem]">
          Fresh from source
        </h1>
      </div>
      <div
        className="w-1/3 z-20 h-[80vh] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${dets3})` }}
      ></div>
      <div className="w-1/3 pr-16">
        <h1 className="text-8xl text-center uppercase text-white tracking-tighter leading-[5rem]">
          100% Gluten Free
        </h1>
      </div>
      <img src={leaf} alt="" className="move-img w-20 absolute top-10 right-24" />
      <img src={leaf2} alt="" className="move-img1 w-20 absolute top-60 right-96" />
      <img src={leaf3} alt="" className="move-img w-20 absolute top-16 left-24" />
      <img
        src={leaf}
        alt=""
        className="move-img1 w-20 absolute bottom-36 left-24 rotate-90"
      />
    </div>
  );
};

export default CheckDets;
