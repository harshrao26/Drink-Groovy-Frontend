import React from "react";
import newAllProducts2 from "../../public/newpng/newAllProducts2.jpg";
import onlyanar from "../../public/newpng/onlyanar.png";
import onlyorange from "../../public/newpng/onlyorange.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const AllPro = () => {
  return (
    <div>
      <div className="bg-[#FFFBE2] flex items-center justify-center px-16 relative">
        <div>
          <h1 className="capitalize text-7xl text-zinc-800 z-20">
            Healthy living was done with fruit juices...
          </h1>
          <Link to="/products" className="flex mt-4">
            <h1 className="text-2xl px-4 py-2  text-zinc-800 border-2 flex gap-2 hover:gap-4 items-center hover:bg-zinc-800 hover:text-white border-zinc-800 transition-all ease-in-out">
              Explore Products
              <MdArrowOutward className=" transition-all ease-in-out" />
            </h1>
          </Link>
        </div>
        <img src={newAllProducts2} alt="" className="h-[80vh]" />
        {/* <img src={onlyanar} alt="" className="h-40 absolute bottom-10 left-96 z-10 " /> */}
        {/* <img src={onlyorange} alt="" className="h-40 absolute bottom-6  left-6 z-10" /> */}
        
      </div>
    </div>
  );
};

export default AllPro;
