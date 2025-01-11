import React from "react";
import IMAGES from "../images/constants";
import Button from "../components/Button";
import "aos/dist/aos.css";
import AOS from "aos";

const Hero6 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="#projects"
      className="flex flex-col gap-16 justify-center items-center bg-gray-900 p-10 py-12"
    >
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold py-3 max-md:text-4xl">Projects</h1>
        <h1 className="text-5xl font-semibold py-2 max-md:text-xl">
          Here's what I've made so far
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-20 max-w-5xl">
        <a
          href="https://github.com/rukavain/dhvsu-portal-clone"
          target="blank"
          className="flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw] max-w-md text-center"
        >
          <img src={IMAGES.dentist} className="pb-5 h-28 w-24" />
          <h1 className="pb-5 text-2xl font-semibold">Dental Clinic System</h1>
          <Button label={"Learn more"} />
        </a>
        <a
          href="https://github.com/rukavain/dhvsu-portal-clone"
          target="blank"
          className="flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw] max-w-md text-center"
        >
          <img src={IMAGES.portal} className="pb-5 h-28 w-24" />
          <h1 className="pb-5 text-2xl font-semibold">
            Announcement and event system for DHVSU
          </h1>
          <Button label={"Learn more"} />
        </a>

        <a
          href="https://github.com/rukavain/shopee"
          target="blank"
          className="flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw] max-w-md text-center"
        >
          <img src={IMAGES.shop} className="pb-5 h-28 w-24" />
          <h1 className="pb-5 text-2xl font-semibold">Shopee Clone website</h1>
          <Button label={"Learn more"} />
        </a>
        <a
          href="https://github.com/rukavain/fullstack-crud-app"
          target="blank"
          className="flex flex-col justify-center items-center p-10 rounded-lg border border-white text-white min-w-[25vw] max-w-md text-center"
        >
          <img src={IMAGES.todo} className="pb-5 h-28 w-24" />
          <h1 className="pb-5 text-2xl font-semibold">To-do List</h1>
          <Button label={"Learn more"} />
        </a>
      </div>
    </div>
  );
};

export default Hero6;
