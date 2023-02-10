import "./Button.css";
import { Link } from "react-router-dom";

export const Button = ({ buttonText }) => {
    return (
        <button className="button">
            <Link className="button-text">{buttonText}</Link>
        </button>
    );
};