import React from "react";
import profile from "./ProfilePicture.png";
import "./Sidebar.css";

function Sidebar({ darkMode }) {
    return (
        <div className={`sidebar ${darkMode ? "dark" : "light"}`}>
            <div className="sidebar-content">
                <div className="sidebar-profile">
                    <img src={profile} alt="Lalu Basha" className="profile" />
                </div>
                <h2 className="name">Lalu Basha</h2>
                <p className="title">Full Stack Developer</p>
                
                <div className="contact-info">
                    <p>
                        <i className="bx bxl-linkedin icon"></i>
                        <strong>LinkedIn: </strong>
                        <a href="https://www.linkedin.com/in/lalu-basha-a22b281b7/" target="_blank" rel="noopener noreferrer">
                            Lalu Basha
                        </a>
                    </p>
                    <p>
                        <i className="bx bxl-github icon"></i>
                        <strong>GitHub: </strong>
                        <a href="https://github.com/Lalubasha" target="_blank" rel="noopener noreferrer">
                            Lalubasha
                        </a>
                    </p>
                    <p>
                        <i className="bx bxl-envelope icon"></i>
                        <strong>Email: </strong>
                        <a href="mailto:lallalbasha111@gmail.com" target="_blank" rel="noopener noreferrer">
                            lallalbasha111@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
