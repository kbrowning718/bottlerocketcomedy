import "./Button.css";
import { Link } from "react-router-dom";

export const Button = ({ buttonText, buttonLink }) => {
  return (
    <button className="button">
      <a className="button-text" href={buttonLink}>
        {buttonText}
      </a>
    </button>
  );
};
