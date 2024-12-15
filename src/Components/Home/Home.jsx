import React from "react";
import "./Home.css";
import Profile from "./ProfilePicture.png";

function Home() {
    return (
        <section className="home" id="home">
            <div className="container">
                <div className="text-content">
                    <h1>
                        Hi, I'm <span>Lalu Basha</span>
                    </h1>
                    <h3>Full Stack Developer | Software Engineer</h3>
                    <p>
                        I am a driven and analytical software developer with expertise in Java, C++, Python, and SQL. I specialize in designing efficient algorithms, database solutions, and responsive web applications.
                        Let's create innovative and impactful software together!
                    </p>

                    <div className="cta-buttons">
                        <a href="#contact" className="btn primary">Hire Me</a>
                        <a href="/LaluBasha_CV.pdf" target="_blank" className="btn secondary">Download CV</a>
                    </div>

                    <div className="social-icons">
                        <a href="https://github.com/Lalubasha" target="_blank" rel="noopener noreferrer" className="icon">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/lalu-basha-a22b281b7/" target="_blank" rel="noopener noreferrer" className="icon">
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <a href="https://x.com/Lalbasha111" target="_blank" rel="noopener noreferrer" className="icon">
                            <i className="bx bxl-twitter"></i>
                        </a>
                        <a href="mailto:lallalbasha111@gmail.com" className="icon">
                            <i className="bx bxl-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="image-content">
                    <img src={Profile} alt="Lalu Basha" className="profile-img" />
                </div>
            </div>

            <div className="skills-section">
                <h2>Skills</h2>
                <ul>
                    <li>Programming: Java, C++, Python, SQL</li>
                    <li>Database Management: SQL Design, Optimization, Management</li>
                    <li>Web Development: React, Node.js, MongoDB, Express (MERN)</li>
                    <li>Soft Skills: Teamwork, Leadership, Time Management</li>
                </ul>
            </div>

            <div className="education-section">
                <h2>Education</h2>
                <p><strong>Lovely Professional University</strong> - B.Tech in Computer Science (2020 - 2024), CGPA: 7.81</p>
                <p><strong>Rao’s Jr College</strong> - Intermediate MPC (2018 - 2020), CGPA: 8.96</p>
                <p><strong>ZP High School</strong> - High School (2018), CGPA: 9.7</p>
            </div>
        </section>
    );
}

export default Home;
