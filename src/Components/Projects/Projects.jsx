import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projectsData = [
    {
        id: "travel-planner",
        title: "Travel Planner Website",
        icon: "bx bxl-react",
        description: "This project helps users to plan their travels efficiently by checking various destinations and budgets. The system includes features to compare different locations, track expenses, and provides a seamless user experience with React JS.",
        detailsLink: "https://github.com/Lalubasha/Travel_Planner",
        technologies: "React JS, Node JS, Express JS, MongoDB, HTML, CSS",
    },
    {
        id: "atm-pin-matching",
        title: "ATM PIN Matching Website",
        icon: "bx bxl-spring-boot",
        description: "This project simulates an ATM system where users can securely enter and verify their PINs. The system includes advanced encryption for PIN storage and real-time validation, ensuring user data safety and accurate transaction processing. It also features user authentication, transaction history tracking, and error handling mechanisms to provide a seamless user experience. Developed with Java Spring Boot.",
        detailsLink: "https://github.com/Lalubasha/Capstone_Project",
        technologies: "Java, Spring Boot, MySQL, HTML, CSS, JavaScript",
    },
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <h2 className="heading">Projects</h2>
            <div className="projects-container">
                {projectsData.map((project) => (
                    <div className="projects-box" key={project.id}>
                        <div className="projects-info">
                            <i className={project.icon}></i>
                            <h4>{project.title}</h4>
                            <p>{project.description.slice(0, 100)}...</p>
                            <p>Technologies: {project.technologies}</p>
                            <div className="buttons">
                                <Link to={`/projects/${project.id}`} className="btn-project">View Details</Link>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
