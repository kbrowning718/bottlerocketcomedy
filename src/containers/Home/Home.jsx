import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import { Navigation } from "../../components";
import homeImage from "../../images/homepage.jpg";
import { Button } from "../../components";
import { Calendar } from "../../components";

export const Home = () => {
  return (
    <div className="home-container">
      <Navigation></Navigation>
      <ScrollableSection>
        <Hero
          img={homeImage}
          headline="Bottle Rocket Comedy"
          text="Comedy Collective producing AMAZING shows in Baltimore & DC"
        >
          <Button className="hero-cta" buttonText="Search For Tickets"></Button>
        </Hero>
      </ScrollableSection>

      <ScrollableSection>
        <Calendar></Calendar>
      </ScrollableSection>

      <ScrollableSection>
        <Hero></Hero>
      </ScrollableSection>
    </div>
  );
};
