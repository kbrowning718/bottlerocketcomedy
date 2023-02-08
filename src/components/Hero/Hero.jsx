import "./Hero.css";
import { useState } from "react";
import { useEffect } from "react";

export const Hero = ({
  img,
  headline,
  text
}) => {

  return (

    <div className="hero-container">
      <div className="headline-wrapper"
      >
        <h1>{headline}</h1>
        <h3>{text}</h3>
      </div>
      <div className="hero-img-wrapper">
        <img src={img}></img>
      </div>

    </div>

  );
};


