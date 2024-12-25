import React from "react";
import "./Resume.css"; // Import custom CSS for styling

function Resume() {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <h1>Shaik Lalu Basha</h1>
                <p> Full Stack Developer  |  Software Developer </p>
                <div className="contact">
                    <p>lallalbasha111@gmail.com</p>
                    <p>
                        <a href="https://lalubasha.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a> | 
                        <a href="https://github.com/Lalubasha" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                        <a href="https://www.linkedin.com/in/lalu-basha-a22b281b7/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </p>
                </div>
            </header>
            
            <section>
                <h2>Profile</h2>
                <p>
                    Driven and analytical Software Developer with a solid background in Java, C++, Python, and SQL. 
                    Skilled in designing and implementing efficient algorithms and database solutions. Dedicated to creating robust 
                    software applications that address complex challenges.
                </p>
            </section>

            <section>
                <h2>Skills</h2>
                <ul>
                    <li>Programming Languages: Java, C++, Python, SQL</li>
                    <li>Database Management: SQL Design, Management, and Optimization</li>
                    <li>Teamwork, Leadership, Time Management, Critical Thinking</li>
                </ul>
            </section>

            <section>
                <h2>Education</h2>
                <p><strong>Lovely Professional University</strong> - B.Tech in Computer Science (2020 - 2024), CGPA: 7.81</p>
                <p><strong>Rao’s Jr College</strong> - Intermediate MPC (2018 - 2020), CGPA: 8.96</p>
                <p><strong>ZP High School</strong> - High School (2018), CGPA: 9.7</p>
            </section>

            <section>
                <h2>Projects</h2>
                <div>
                    <h3>Travel Planner Website</h3>
                    <p>Technologies Used: React JS, Node JS, Express JS, MongoDB, HTML, CSS</p>
                    <ul>
                        <li>Helps users to plan their travels efficiently by checking various destinations and budgets.</li>
                        <li>Features include location comparison, expense tracking, and a seamless user experience.</li>
                        <li>Developed with React JS for front-end and Node.js for back-end.</li>
                        
                    </ul>
                </div>
                <div>
                    <h3>ATM PIN Matching Website</h3>
                    <p>Technologies Used: Java, Spring Boot, MySQL, HTML, CSS, JavaScript</p>
                    <ul>
                        <li>Simulates an ATM system for secure PIN entry and verification.</li>
                        <li>Features advanced encryption, user authentication, and transaction history tracking.</li>
                        <li>Developed with Java Spring Boot and MySQL for secure back-end operations.</li>
                        
                    </ul>
                </div>
                
                
            </section>

            <section>
                <h2>Certifications</h2>
                <ul>
                    <li>Java Full Stack Certification</li>
                    <li>Python Programming</li>
                </ul>
            </section>
        </div>
    );
}

export default Resume;
