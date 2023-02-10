import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
    return (
        <header>
            <div className="floating-nav-container">
                <Link className="nav-link hover-underline-animation" to="/">Home</Link>
                <Link className="nav-link hover-underline-animation" to="/">Upcoming Shows</Link>
                <Link className="nav-link hover-underline-animation" to="/">Contact</Link>
            </div>

        </header >
    );
};
