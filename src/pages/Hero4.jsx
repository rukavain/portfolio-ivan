import React, { useEffect, useState } from "react";
import Axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import Button from "../components/Button";

const Hero2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cards, setCards] = useState([]);

  const fetchData = () => {
    console.log("fetchData called");
    Axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
      .then((res) => {
        console.log("API Response:", res.data);
        setCards(res.data.cards);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  
  

  return (
    <section
      data-aos="fade-left"
      data-aos-delay="200"
      className="flex justify-center items-center text-white py-9 px-10"
    >
      <div className="border border-blue-500" >
      <h1 className="text-5xl font-bold text-center py-5 max-sm:text-4xl max-md:text-5xl">
        Draw a card
      </h1>
      <div className="flex flex-wrap justify-center align-center gap-16 py-10">
        <Button
          onclick={fetchData} // Call fetchData on click
          label="Draw"
          backgroundColor="transparent"
          textColor="text-white"
          borderColor="border-gray-200"
        />
      </div>
      </div>
      
      <div className="flex flex-wrap px-4 max-md:text-xl justify-start items-center gap-16 text-4xl border border-red-500 min-w-min">
        {cards.length > 0 ?
          <>
          <div className="flex  justify-center items-center gap-4 flex-col py-5 w-full flex-1 min-w-min">

             <p className="  lowercase border border-red-600 font-bold text-center"> {cards[0].value} of {cards[0].suit} </p>

            <img
              src={cards[0].image}
              alt={`${cards[0].value} of ${cards[0].suit}`}
              className="w-32 h-auto"
            />
          </div>
            
          </>
        : <>  </>
          
        }
        {console.log(cards.data)}
      </div>
    </section>
  );
};

export default Hero2;
