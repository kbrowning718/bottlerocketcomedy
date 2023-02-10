import "./Hero.css";
import { useState } from "react";
import { useEffect } from "react";
import homeImage from "../../images/homepage.jpg";
import { Button } from "../../components";


export const Hero = ({
  img,
  headline,
  text, children
}) => {


  return (

    <div className="hero-container">

      <div className="bg-img" style={{ backgroundImage: `url(${img})` }}> </div>


      <div className="headline-wrapper">
        <div className="text-wrapper">

          <h1 className="hero-header">{headline}</h1>
          <p className="hero-subhead">{text}</p>
          {children}

        </div>
      </div>

    </div >





  );
};


