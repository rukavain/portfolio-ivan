import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import IMAGES from "../images/constants";

const Hero3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="200"
      id="#about"
      className="flex flex-wrap justify-center items-center py-12 text-gray-700 px-10 max-sm:text-left"
    >
      <div>
        <img src={IMAGES.developer} className="px-5" />
      </div>
      <div className="">
        <h1 className="text-6xl font-bold pb-5 text-right max-md:text-4xl max-sm:text-3xl">
          About me
        </h1>
        <h1 className="text-l max-w-xl text-right">
          I am a 4th-year student in Bachelor of Science in Information
          Technology at Mabalacat City College, with a focus on web development.
          Throughout my studies, I have gained practical experience by building
          real-world applications, such as a comprehensive dental management
          system for Tooth Impression’s Dental Clinic.
        </h1>
        <h1 className="text-l max-w-xl text-right my-4">
          I am skilled in front-end and back-end technologies, including HTML5,
          CSS3, JavaScript, ReactJS, Laravel, and Tailwind CSS. My
          certifications in JavaScript, Python, and networking further
          complement my technical foundation. As I look for opportunities, I aim
          to apply my skills in real-world projects and contribute to impactful
          solutions in the field of software and web development.
        </h1>
      </div>
    </div>
  );
};

export default Hero3;
