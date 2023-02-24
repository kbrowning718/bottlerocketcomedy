import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <header>
      <div className="floating-nav-container">
        <a className="nav-link hover-underline-animation" to="/">
          Home
        </a>
        <a className="nav-link hover-underline-animation" to="/">
          Upcoming Shows
        </a>
        <a className="nav-link hover-underline-animation" to="/">
          Contact
        </a>
      </div>
    </header>
  );
};
