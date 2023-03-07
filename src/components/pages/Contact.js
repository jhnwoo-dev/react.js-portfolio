import React, { useState } from "react";

export const Contact = () => {
    return (
        <div className="content contact-me">
            <h1 className="amber-text">Contact</h1>
            <p className="amber-text">
                Feel free to reach out to me via the contact methods below:
            </p>
            <ul>
                <li>
                    <a href="#0" className="remove-line">
                        jhnguyen99@gmail.com
                    </a>
                </li>
                <li>
                    <a href="#0" className="remove-line">
                        (206) 330-9954
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
                <li>
                    <a href="https://github.com/jhnwoo-dev" target="_blank">
                        {" "}
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
