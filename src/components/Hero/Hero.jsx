import "./Hero.css";
import { useState } from "react";
import { useEffect } from "react";
import homeImage from "../../images/homepage.jpg";


export const Hero = ({
  img,
  headline,
  text, bgImage
}) => {


  return (

    <div className="hero-container">

      <div className="bg-img" style={{ backgroundImage: `url(${img})` }}> </div>


      <div className="headline-wrapper">
        <div className="text-wrapper">

          <h1 className="hero-header">{headline}</h1>
          <h3 className="hero-subhead">{text}</h3>
        </div>
      </div>
    </div >



  );
};


