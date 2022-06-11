import React from "react";
import Carousel from "../component/carousel/Carousel";
import Menutop from "./../component/menuTop/Menutop";
import Footer from "./../component/footer/Footer";
import Faq from "./../component/faq/Faq";
import Statistics from "../component/statistics/Statistics";

function Landing() {
  return (
    <div>
      <Menutop />
      <Statistics />
      <Carousel />
      <Faq />
      <Footer />
    </div>
  );
}

export default Landing;
