import React from "react";
import { useParams, Link } from "react-router-dom";
import './ProjectDetails.css';


const projectsData = [
    {
        id: "travel-planner",
        title: "Travel Planner Website",
        icon: "bx bxl-react",
        description: "This project helps users to plan their travels efficiently by checking various destinations and budgets. The system includes features to compare different locations, track expenses, and provides a seamless user experience with React JS.",
    },
    {
        id: "atm-pin-matching",
        title: "ATM PIN Matching Website",
        icon: "bx bxl-spring-boot",
        description: "This project simulates an ATM system where users can securely enter and verify their PINs. The system includes advanced encryption for PIN storage and real-time validation, ensuring user data safety and accurate transaction processing. It also features user authentication, transaction history tracking, and error handling mechanisms to provide a seamless user experience. Developed with Java Spring Boot.",
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
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <Link to="/projects" className="btn-project">Back to Projects</Link>
        </div>
    );
}

export default ProjectDetails;
