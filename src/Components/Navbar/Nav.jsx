import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ darkMode, toggleMode }) {
    return (
        <div className={`navbar ${darkMode ? "dark" : "light"}`}>
            <div>
                <Link to="/" className="logo-link">
                    <p className="navbar-logo">Lalu Basha</p>
                </Link>
            </div>

            <div className="navbar-content">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/resume" className="nav-link">Resume</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>

            <button className="toggle-button" onClick={toggleMode} aria-label="Toggle theme">
                <div className={`icon-container ${darkMode ? "sun-active" : "moon-active"}`}>
                    <i className="bx bx-sun sun-icon"></i>
                    <i className="bx bx-moon moon-icon"></i>
                </div>
            </button>
        </div>
    );
}

export default Nav;
