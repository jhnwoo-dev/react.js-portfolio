import React, { useState } from "react";
import resume from "./assets/jason-nguyen-resume.jpg";

export const Resume = () => {
    return (
        <div className="content">
            <h1 className="blue-text">Resume</h1>
            <img src={resume} alt="Jason Nguyen Resume"></img>
        </div>
    );
};

export default Resume;
