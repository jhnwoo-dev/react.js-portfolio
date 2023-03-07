import React, { useState } from "react";
import Project from "../Project";
import imgArr from "./assets/index";

export const Portfolio = () => {
    return (
        <div className="portfolio">
            <div>
                <Project
                    title="Hero Clash"
                    image={imgArr[0]}
                    imgdescript="Class Comparison Page"
                    description="HTML/CSS/Javascript"
                    link="https://jhnwoo-dev.github.io/hero-clash/"
                    repolink="https://github.com/jhnwoo-dev/hero-clash.git"
                />
            </div>

            <div>
                <Project
                    title="World of Wordcraft"
                    image={imgArr[1]}
                    imgdescript="Tavern page of the application that shows the user's character and their statistics."
                    description="MySQL/Javascript/Node.js"
                    link="https://world-of-wordcraft.herokuapp.com/"
                    repolink="https://github.com/agtTwilight/project-2.git"
                />
            </div>
        </div>
    );
};

export default Portfolio;
