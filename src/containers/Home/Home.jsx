import "./Home.css";
import { Hero } from "../../components";
import { ScrollableSection } from "../../components";
import homeImage from "../../images/homepage.jpg";





export const Home = () => {


  return (
    <div className="home-container">
      <ScrollableSection>

        <Hero img={homeImage} headline="Bottle Rocket Comedy" text="Comedy Collective producing AMAZING shows in Baltimore & DC">
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


