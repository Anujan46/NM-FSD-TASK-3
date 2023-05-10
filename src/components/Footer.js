import "./FooterStyle.css";

import React from 'react'
import {FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#00ffff",margineRight: "2rem"}}/>
                    <div>
                        <p>No:4/308 Parisalai.</p>
                        <p>Mogappair East.</p>
                        <p>Chennai-37.</p>
                    </div>   
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#00ffff",margineRight: "2rem"}}/>
                        +91 8778956095</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#00ffff",margineRight: "2rem"}}/>
                        abishek.k.m.2020.ad@ritchennai.edu.in</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the Website</h4>
                <p>This is a portfolio website created by our team for frontend creation task</p>
                <div className="social">
                <FaLinkedin size={30} style={{color: "#00ffff",margineRight: "1rem"}}/>
                <FaGithub size={30} style={{color: "#00ffff",margineRight: "1rem"}}/>
                <FaFacebook size={30} style={{color: "#00ffff",margineRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;