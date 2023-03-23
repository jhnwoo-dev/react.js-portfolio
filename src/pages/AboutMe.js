import React, { useState } from "react";
import me from "./assets/Jason-grad-photo.jpeg";

export const AboutMe = () => {
    return (
        <main className="aboutme-container">
            <h1 className="about-header">About Me</h1>

            <section className="aboutme-content">
                <details id="about-text">
                    <h3 className="intro-sub">Hello, my name is Jason - Welcome to my portfolio!</h3>
                    <p >
                        I am a private banker that has transitioned to software development located in Seattle, Washington. I have my BA in Psychology at the University of Washington, as well as a certificate from the University of Washington/EdX Full Stack Developer Bootcamp.
                        <br />
                        <br />
                        My passion in coding lies in building applications that are
                        unique to the clientele - I utilize my resources well to solve
                        problems and work exceptionally in collaborative environments. When working in teams, I enjoy organizing roles and  and working together to produce creative solutions for unique problems.
                        <br />
                        <br />
                        In my freetime, I enjoy spending quality time with friends and family, building custom mechanical keyboards for myself and others, as well as training and competing in powerlifting.
                    </p>
                </details>
                <img src={me} alt="Jason Nguyen Photo" id="photo"></img>
            </section>
        </main>
    );
};

export default AboutMe;
