import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { useState } from "react";

export const Home = (img, headline, text) => {
  return (
    <div className="home-container">
      <ScrollableSection>
        <Hero img="https://i.ibb.co/vsv1FpM/BRC.jpg" headline="Bottle Rocket Comedy" text="A comedy group in the DMV.">
        </Hero>
      </ScrollableSection>

      <ScrollableSection>
        <Hero></Hero>
      </ScrollableSection>

      <ScrollableSection>
        <Hero></Hero>
      </ScrollableSection>

    </div >
  );
};
