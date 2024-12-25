import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>Feel free to reach out by filling the form below or through my social links.</p>
            </div>
            <div className="contact-content">
                <form className="contact-form " onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="form-input"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                            className="form-input"
                        />
                    </div>
                    <div className="form-row">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            className="form-textarea"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
                <div className="contact-links">
                    
                    <ul>
                        <li>
                            <a href="mailto:lallalbasha111@gmail.com">
                                <span className="icon">📧</span> Email Me
                            </a>
                        </li>
                        <li>
                            <a href="https://lalubasha.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer">
                                <span className="icon">🌐</span> Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/lalu-basha-a22b281b7/" target="_blank" rel="noopener noreferrer">
                                <span className="icon">💼</span> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Lalubasha" target="_blank" rel="noopener noreferrer">
                                <span className="icon">🐙</span> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
