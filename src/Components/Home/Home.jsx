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
              I am a highly motivated and results-driven software developer with
              a passion for problem-solving and creating efficient, scalable
              solutions. With strong expertise in Java, C++, Python, and SQL, I
              enjoy tackling complex challenges and building innovative
              applications.
            </p>
          </div>

          <div className="image-content">
            <img src={Profile} alt="Lalu Basha" className="profile-img" />
          </div>
        </div>

        <div className="section">
          <div className="skills-section">
            <h2>Skills</h2>
            <ul>
              <li>Programming: Java, C++, Python, SQL</li>
              <li>Database Management: SQL Design, Optimization, Management</li>
              <li>Web Development: React, Node.js, MongoDB, Express (MERN)</li>
              <li>Soft Skills: Teamwork, Leadership, Time Management</li>
            </ul>
          </div>

          <div className="certifications-section">
            <h2>Certifications</h2>
            <ul>
              <li>React JS Certification by Skillstone</li>
              <li>Java Full Stack Certification by Spruce</li>
              <li>Node.js Certification by Coursera</li>
              <li>SQL Certification by Infosys Springboard</li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default Home;
