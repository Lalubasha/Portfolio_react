  import React from "react";
  import Home from "../Home/Home";
  import Resume from "../Resume/Resume";
  import Projects from "../Projects/Projects";
  import ProjectDetails from "../Projects/ProjectDetails";
  import Contact from "../Contact/Contact";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Nav from "../Navbar/Nav";
  import "./Main.css";

  function Main({darkMode, toggleMode}) {
    return (
      <div className="nav-main">
        <Router>
          {/* Navbar */}
          <Nav  darkMode={darkMode} toggleMode={toggleMode}/>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    );
  }

  export default Main;
