import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaEdge,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const openLinkInNewTab = (link) => {
        window.open(link, "_blank");
    };

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    MovieTrax is your ultimate destination for all things movies and TV shows. With its extensive collection of information, trailers, and videos, you can easily explore and discover your favorite films and TV series, getting a comprehensive glimpse into each title before deciding what to watch next.
                    <br />
                    <br />
                    ↓ Built and Designed By:- Prashant Verma ↓
                </div>
                <div className="socialIcons">
                    <span className="icon" onClick={() => openLinkInNewTab("https://www.instagram.com/hellracerprashant")}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={() => openLinkInNewTab("https://github.com/prashant9191")}>
                        <FaGithub />
                    </span>
                    <span className="icon" onClick={() => openLinkInNewTab("https://prashant9191.github.io/")}>
                        <FaEdge />
                    </span>
                    <span className="icon" onClick={() => openLinkInNewTab("https://www.linkedin.com/in/prashant-verma-b44738178/")}>
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
