import React from 'react';
import './About.css';
// import aboutImage from './Assets/image.png';  Replace with your image path

function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            {/* <img src={aboutImage} alt="Inventory Management" className="about-image" /> */}
            <div className="about-content">
                <p className="about-text">
                    Welcome to the Inventory Management System! Our platform is designed to help businesses efficiently manage their inventory, track stock levels, and streamline operations. 
                </p>
                <p className="about-text">
                    We offer an intuitive interface with powerful features to ensure that you have complete control over your inventory. From tracking product quantities to generating insightful reports, our system provides everything you need to keep your business running smoothly.
                </p>
                <p className="about-text">
                    Our team is dedicated to providing excellent support and continuously improving the system to meet your needs. Thank you for choosing us as your inventory management solution!
                </p>
            </div>
        </div>
    );
}

export default About;
