import React, { useState } from "react";

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
                    <a href="/resume"> Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
