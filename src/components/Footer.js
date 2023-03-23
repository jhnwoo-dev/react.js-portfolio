import React, { useState } from "react";
import github from "./assets/github.png";
import linkedin from "./assets/linked-in.png";

export const Footer = () => {
    return (
        <footer className="footer">
            {/* <p>&#169; Jason Nguyen 2023</p> */}
            <ul>
                <li>
                    <a href="https://github.com/jhnwoo-dev" target="_blank">
                        <img className="footer-img" src={github}></img>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/jhnwoo" target="_blank">
                        <img className="footer-img" src={linkedin}></img>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
