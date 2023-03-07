import React, { useState } from "react";
import { Footer } from "../Footer";
import resume from "./assets/jason-nguyen-resume.jpg";

export const Resume = () => {
    return (
        <div className="content">
            <h1 className="amber-text">Resume</h1>
            <img src={resume} alt="Jason Nguyen Resume"></img>
            <Footer />
        </div>
    );
};

export default Resume;
