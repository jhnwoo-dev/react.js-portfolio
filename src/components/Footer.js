import React, { useState } from "react";

export const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="https://github.com/jhnwoo-dev" target="_blank">
                        {" "}
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/jhnwoo"
                        target="_blank"
                    >
                        {" "}
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
