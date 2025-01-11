import React from "react";
import Button from "../components/Button";
import IMAGES from "../images/constants";
import { ArrowRight } from "../images/icons";
import "../index.css";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-1 w-full justify-around items-center bg-white py-20
    flex-wrap max-w-max"
      >
        <div className="flex justify-center items-center flex-col max-w-2xl px-12">
          <div>
            <h1 className="text-gray-700 text-left text-6xl max-sm:text-4xl max-md:text-5xl font-bold font-arial mb-4 font-serif">
              Hi! I'm <span className=" font-poppins">Ivan</span>
            </h1>
            <h1 className="text-2xl mb-7 text-gray-700 text-left font-bold font-arial">
              An aspiring Software Developer
            </h1>
            <p className="text-lg text-gray-700 text-left font-bold font-arial mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              quibusdam in ab vero eveniet sit laborum consectetur, modi fugit,
              earum sequi quidem unde porro. Atque maxime cumque molestiae magni
              veritatis!
            </p>
            <Button
              label="Next"
              backgroundColor="transparent"
              textColor="text-gray-700"
              className="hover:opacity-20"
              borderColor="border-gray-700"
            />
          </div>
        </div>
        <div>
          <img
            src={IMAGES.image1}
            className="h-96 border-blue-400"
            alt="hero-image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
