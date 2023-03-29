import React, { useState } from "react";

export const Home = () => {
    return (
        <main className="home-content">

            <h2 className="intro-text">Jason Nguyen.</h2>

            <h3 className="intro-sub">Software Developer.</h3>

            <p className="intro-info">
                I am a Seattle-based software developer who excels in collaborative spaces and enjoys <span className="strong-nunito">producing user-friendly applications</span> using <span className="strong-nunito">React</span>. Currently, I am looking for work that will <span className="strong-nunito">provide meaningful experiences for users</span> while developing my front-end developer skills in the social media/telecommunication industries.
            </p>
            <a className="contact-btn remove-line" href="/contact">Let's Chat</a>
        </main>
    );
};

export default Home;
