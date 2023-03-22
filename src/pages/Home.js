import React, { useState } from "react";

export const Home = () => {
    return (
        <section className="home-content">
            <h4 className="intro-greeting">Hi there, my name is</h4>

            <h2 className="intro-text">Jason Nguyen.</h2>

            <h3 className="intro-sub">Full Stack Software Developer.</h3>

            <p className="intro-info">
                I am a Seattle-based software developer with experience in project management and collaborative teamwork. Currently, I am looking for work in a forward-driven environment that cultivates growth and professional development.
            </p>
            <a className="contact-btn remove-line" href="/contact"><strong>Let's Chat</strong></a>
        </section>
    );
};

export default Home;
