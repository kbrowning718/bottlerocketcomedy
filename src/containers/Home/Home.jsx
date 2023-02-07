import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { useState } from "react";

export const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
    console.log(window.scrollY);
  }

  return (
    <div className="home-container" onScroll={(e) => handleScroll(e)}>
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
