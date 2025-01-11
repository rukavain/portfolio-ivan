import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Hero5 from "./Hero5";
import Hero6 from "./Hero6";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <main className="flex justify-center items-center flex-col">
        <section>
          <Hero />
        </section>
        <section className="w-full bg-gray-900">
          <Hero2 />
        </section>
        <section>
          <Hero3 />
        </section>
        <section className="w-full bg-gray-900">
          <Hero4 />
        </section>
        <section className="w-full max-w-4xl">
          <Hero5 />
        </section>
        <section className="w-full">
          <Hero6 />
        </section>
        <section>
          <Contact />
        </section>

      </main>
    </>
  );
}
