import React from "react";
import "./footer.css";
import logo from "../assets/logo.jpg";
import Line from "../assets/Line.jpg"
function Footer() {
    return (
        <div className="footer">
            
            <div className="footer-2">
            <div className="footer-1">
                <img src={logo} />
                <p>India's first platform dedicated to simplifying partner search</p>
            </div>
                <div className="company">
                     <h3>Company</h3>
                     <span>About</span>
                     <span>Pricing</span>
                     <span>Career</span>
                </div>
                <div className="solution">
                    <h3>Solution</h3>
                    <span>Search</span>
                    <span>Connect</span>
                    <span>Research</span>
                    <span>Academy</span>
                    </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <span>Blogs</span>
                    <span>Forms</span>
                    </div>
                <div className="Support">
                    <h3>Support</h3>
                    <span>Help </span>
                    <span>Contact Us </span>
                    </div>
                <div className="Legal">
                    <h3>Legal</h3>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Accessibility</span>
                </div>
            </div>
            <div className="last">
            <img src={Line}/>
            <p>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
        
            </div>
            <h5>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</h5>
            </div>
    )
}
export default Footer;