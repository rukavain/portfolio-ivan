import React from "react";
import Axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Button from "../components/Button";

const Hero2 = () => {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);
  const generateCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    <generateCatFact />;
  }, []);

  return (
    <section
      data-aos="fade-right"
      data-aos-delay="200"
      className="flex flex-col justify-center items-center text-white py-9 px-10"
    >
      <h1 className="text-5xl font-bold text-center py-5 max-sm:text-4xl max-md:text-5xl">
        Wanna know a cat fact?
      </h1>
      <Button
        onclick={generateCatFact}
        label="Generate Cat Fact"
        backgroundColor="transparent"
        textColor="text-white"
        borderColor="border-gray-200"
      />
      <h1 className="text-lg font-semibold text-center max-w-4xl py-10">
        {catFact}
      </h1>
    </section>
  );
};

export default Hero2;
