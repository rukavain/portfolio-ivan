import React, { useEffect } from "react";
import Button from "../components/Button";
import IMAGES from "../images/constants";
import { ArrowRight } from "../images/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        id="#home"
        className="flex flex-1 w-full justify-around items-center  py-20
    flex-wrap max-w-max"
      >
        <div className="flex justify-center items-center flex-col max-w-2xl px-12">
          <div data-aos-duration="400">
            <h1 className="text-gray-700 text-left text-6xl max-sm:text-4xl max-md:text-5xl font-bold font-arial mb-4 font-serif">
              Hi! I'm <span className=" font-poppins">Ivan</span>
            </h1>
            <h1 className="text-2xl mb-7 text-gray-700 text-left font-bold font-arial">
              An aspiring Software Developer
            </h1>
            <p className="text-lg text-gray-700 text-left font-arial mb-9">
              I’m John Ivan A. Magtoto, a passionate Bachelor of Science in
              Information Technology student specializing in web development.
              With a strong foundation in both front-end and back-end
              technologies
            </p>
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
