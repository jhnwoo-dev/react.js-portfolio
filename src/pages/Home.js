import React, { useState } from "react";

export const Home = () => {
    return (
        <main className="home-content">
            <h4 className="intro-greeting">Hi there, my name is</h4>

            <h2 className="intro-text">Jason Nguyen.</h2>

            <h3 className="intro-sub">Software Developer.</h3>

            <p className="intro-info">
                I am a Seattle-based software developer who excels in collaborative spaces and enjoys <strong>producing user-friendly applications</strong> using <strong>React</strong>. Currently, I am looking for work in the telecommunication or tech industries.
            </p>
            <a className="contact-btn remove-line" href="/contact"><strong>Let's Chat</strong></a>
        </main>
    );
};

export default Home;
