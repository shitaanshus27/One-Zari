import React from "react";
import HighlightText from "./common/HightlightText";
import photo1 from "../assets/images/aboutus1.jpg";
import photo2 from "../assets/images/aboutus2.jpg";

const Intro = () => {
  return (
    <div id="aboutus" className="md:w-[1280px] mx-auto mt-4 relative">
      <div className="w-full">
        <h1 className="text-black text-center font-mullish text-5xl">
          About Us
        </h1>
        <div className="mt-1 w-1/4 h-1 mx-auto bg-red-500"></div>
        <h1 className="text-black text-center font-mullish text-5xl mt-4">
          <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Elevate Your Style
          </span>{" "}
          <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
            with Kurtis
          </span>
        </h1>
        <p className="mt-4 text-gray-950 w-3/4 mx-auto text-lg text-center leading-relaxed font-mullish">
          At Kurtis,{" "}
          <HighlightText text="we believe that fashion is not just about clothes" />
          ; it's a statement, an expression of who you are. Our collection is
          meticulously crafted to blend traditional elegance with contemporary
          flair, offering you a range of designs that reflect your unique
          personality. Whether you're Looking for a casual everyday look or a
          sophisticated ensemble for a special occasion, we've got you covered.
          Explore our curated selection and discover the perfect Kurti to
          elevate your style and make a lasting impression.
        </p>
        <div className="h-[200px]"></div>
        <div className="absolute left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[-30%] grid-cols-3 gap-3 lg:gap-5">
          <img src={photo1} alt="Photos2" />
          <img src={photo2} alt="Photos1" />
          <img src={photo1} alt="Photos2" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
