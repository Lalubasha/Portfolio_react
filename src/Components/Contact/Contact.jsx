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
        // Here, you can integrate your backend or email service to send the form data.
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>
                Fill out the form below to send me a message, or connect with me via LinkedIn, GitHub, or email.
            </p>
            
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>

            {/* Contact Details */}
            <div className="contact-details">
                <h2>Or Contact Me Through</h2>
                <div className="contact-item">
                    <span>📧</span>
                    <a href="mailto:lallalbasha111@gmail.com" target="_blank" rel="noopener noreferrer">lallalbasha111@gmail.com</a>
                </div>
                <div className="contact-item">
                    <span>🌐</span>
                    <a href="https://lalubasha.github.io/MyPortfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                </div>
                <div className="contact-item">
                    <span>💼</span>
                    <a href="https://www.linkedin.com/in/lalu-basha-a22b281b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact-item">
                    <span>🐙</span>
                    <a href="https://github.com/Lalubasha" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="contact-item">
                    <span>📞</span>
                    <a href="tel:8142038361">8142038361</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
