import React, { useState } from "react";
import resume from "./assets/resume.pdf"

export const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/about-me"> About Me</a>
                </li>

                <li>
                    <a href="/portfolio"> Portfolio</a>
                </li>

                <li>
                    <a href="/contact"> Contact</a>
                </li>

                <li>
                    <a className="resume-btn" href={resume} target="_blank" rel="noopener noreferrer"> Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
