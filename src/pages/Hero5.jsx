import React from "react";
import IMAGES from "../images/constants";

const Hero5 = () => {
  return (
    <div
      id="#profile"
      className="flex flex-col flex-wrap justify-center items-center py-16 text-gray-700"
    >
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        className="flex flex-col justify-center items-center px-5  pb-10"
      >
        <h1 className="text-xl font-semibold">About</h1>
        <h1 className="text-3xl pb-6 font-bold text-center">
          Let me introduce myself
        </h1>
        <span className="flex flex-row justify-center items-center">
          <img
            src={IMAGES.profile}
            className="rounded-full h-24 w-24 mx-10 max-md:hidden"
          />
          <p className="py-10 max-w-lg first-letter:text-left max-md:text-center">
            I was drawn to web development because it empowers me to solve
            real-world problems and create impactful solutions. The ability to
            turn ideas into functional websites and applications sparked my
            passion, and I’m excited to continue learning and contributing to
            meaningful projects.
          </p>
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-between max-md:justify-center items-center px-10 w-full py-10">
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="text-gray-700 text-left max-md:text-center"
        >
          <h1 className="font-bold text-2xl pb-10">PROFILE</h1>

          <h1 className="font-semibold">FULLNAME</h1>
          <p className="pb-6">John Ivan A. Magtoto</p>

          <h1 className="font-semibold">BIRTHDATE</h1>
          <p className="pb-6">October 03, 2002</p>

          <h1 className="font-semibold">EMAIL</h1>
          <p className="pb-6"> magtoto599@email.com</p>

          <h1 className="font-semibold">PHONE NUMBER</h1>
          <p className="pb-6">+639155454229</p>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <img src={IMAGES.contact} className="h-92 w-96 max-md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero5;
