import React, { useEffect, useState } from "react";
import a from "../../public/a.jpeg";
import b from "../../public/b.jpeg";
import c from "../../public/c.jpeg";
import e from "../../public/e.jpeg";
import f from "../../public/f.jpeg";
import g from "../../public/g.jpeg";
import h from "../../public/h.jpeg";
import pack from "../../public/pack.jpg";
import pow from "../../public/pow.png";
import wearegroovy from "../../public/wearegroovy.jpg";
import www from "../../public/www.png";
import www1 from "../../public/www1.png";
import TimelineComponent from "../Components/TimelineComponent";
const images = [pack, www, www1];
const dist = [a, b, c, e, f, g, , h];
const Award = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <>
      <div className="pt-20 bg-[#F3F1F8]">
       
        <TimelineComponent />

        <div className="w-full flex px-16 bg-[#abf063] py-4">
          <div className="w-1/2 bg-green-40 overflow-hidden">
            <div
              className="flex transition-transform duration-500 "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 flex items-center  flex-col ">
            <img src={wearegroovy} alt="" className="w-96 " />
            <img src={pow} alt="" />
            <a href="https://packagingoftheworld.com/2020/07/groovy.html">
              <h1 className="bg-zinc-800 p text-white px-4 py-2 rounded">
                Read More
              </h1>
            </a>
          </div>
        </div>
        {/* <div className="">
          <img src="../../public/bgg2.png" alt="" />
        </div> */}

        <div></div>
      </div>
    </>
  );
};

export default Award;
