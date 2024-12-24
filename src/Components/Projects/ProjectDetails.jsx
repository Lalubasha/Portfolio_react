import React from "react";
import { useParams, Link } from "react-router-dom";
import './ProjectDetails.css';

// Sample data for the projects
const projectsData = [
    {
        id: "travel-planner",
        title: "Travel Planner Website",
        icon: "bx bxl-react",
        description: "This project helps users to plan their travels efficiently by checking various destinations and budgets. The system includes features to compare different locations, track expenses, and provides a seamless user experience with React JS.",
        githubLink: "https://github.com/Lalubasha/Travel_Planner",
        images: [],
        technologies: "React,JavaScript,HTML/CSS, Node.js",
    },
    {
        id: "atm-pin-matching",
        title: "ATM PIN Matching Website",
        icon: "bx bxl-spring-boot",
        description: "This project simulates an ATM system where users can securely enter and verify their PINs. The system includes advanced encryption for PIN storage and real-time validation, ensuring user data safety and accurate transaction processing. It also features user authentication, transaction history tracking, and error handling mechanisms to provide a seamless user experience. Developed with Java Spring Boot.",
        githubLink: "https://github.com/Lalubasha/Capstone_Project",
        images: [], // No images for this project,
        technologies: "Java, Spring Boot, MySQL, HTML, CSS, JavaScript",
    },
];

function ProjectDetails() {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div className="project-details">
            {/* Back Button */}
            <Link to="/projects" className="back-button">
                <i className="bx bx-arrow-back"></i> {/* Using Boxicons for the arrow */}
            </Link>

            {/* Project Title and Description */}
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>Technologies Used : {project.technologies}</p>
            {/* GitHub Button */}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-btn">
                View on GitHub
            </a>
            

            {/* Floating Images Grid - Only display if images are available */}
            {project.images.length > 0 && (
                <div className="image-grid">
                    {project.images.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image} alt={`Project Screenshot ${index + 1}`} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectDetails;
