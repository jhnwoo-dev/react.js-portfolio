import React, { useState } from "react";
import me from "./assets/Jason-grad-photo.jpeg";

export const AboutMe = () => {
    return (
        <div className="content">
            <h1>About Me</h1>
            <img src={me} alt="Jason Nguyen Photo" id="photo"></img>
            <br></br>
            <p id="about-text">
                Hello, my name is Jason. I am a Seattle-based full stack web
                developer with a certificate from the University of Washington.
                I have a background in the banking and the health and wellness
                industry, which has provided me with a plethora of unique skills
                and experiences.
                <br />
                <br />
                My passion in coding lies in building applications that are
                unique to the clientele - I utilize my resources well to solve
                problems and work exceptionally in team environments.
                <br />
                <br />
                In my freetime, I enjoy building custom mechanical keyboards and
                compete in powerlifting.
            </p>
        </div>
    );
};

export default AboutMe;
