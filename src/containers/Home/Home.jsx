import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { Navigation } from "../../components";
import homeImage from "../../images/homepage.jpg";
import { Button } from "../../components";
import { CalendarContainer } from "../../components";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {
  return (
    <div className="home-container">
      <Navigation></Navigation>
      <ScrollableSection id="home">
        <Hero
          img={homeImage}
          headline="Bottle Rocket Comedy"
          text="Comedy Collective producing AMAZING shows in Baltimore & DC"
        >
          <Button
            buttonLink="https://www.eventbrite.com/o/bob-smith-60714778103"
            className="hero-cta"
            buttonText="Search For Tickets"
          ></Button>
        </Hero>
      </ScrollableSection>

      <ScrollableSection id="upcoming-events">
        <CalendarContainer></CalendarContainer>
      </ScrollableSection>

      <ScrollableSection id="contact">
        <Hero></Hero>
      </ScrollableSection>
    </div>
  );
};
