import React, { useState } from "react";
import me from "./assets/Jason-grad-photo.jpeg";

export const AboutMe = () => {
    return (
        <main className="aboutme-container">
            <h1 className="about-header">About Me</h1>

            <section className="aboutme-content">
                <div id="about-text">
                    <h3 className="about-sub">Hello, my name is Jason - Welcome to my portfolio!</h3>
                    <p >
                        I am a private banker that has transitioned to software development located in Seattle, Washington.
                        <br />
                        <br />
                        I received my BA in Psychology at the University of Washington, and most recently received a certificate from the University of Washington/EdX Full Stack Developer Bootcamp.
                        <br />
                        <br />
                        My passion in coding lies in building applications that are unique to the clientele that will provide meaningful impact to the audience it reaches.
                        <br />
                        <br />
                        From my unique experiences, I have learned to utilize my resources effectively and efficiently - I am not afraid to ask questions when necessary and excel when placed in collaborative environments to ultimately produce creative solutions for unique situations.
                        <br />
                        <br />
                        In my freetime, I enjoy spending quality time with friends and family, building custom mechanical keyboards, as well as training and competing in powerlifting. At my last competition, I qualified for the 2023 USAPL Raw Nationals, which is set to be in Memphis, Tennessee!
                    </p>
                </div>
                <img src={me} alt="Jason Nguyen Photo" id="photo"></img>
            </section>
        </main>
    );
};

export default AboutMe;
