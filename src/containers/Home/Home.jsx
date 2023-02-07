import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { useState } from "react";

export const Home = () => {
  return (
    <div className="home-container">
      <ScrollableSection>
        <Hero></Hero>
      </ScrollableSection>

      <ScrollableSection>
        <Hero></Hero>
      </ScrollableSection>

      <ScrollableSection>
        <Hero></Hero>
      </ScrollableSection>

    </div>
  );
};
