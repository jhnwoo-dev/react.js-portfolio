import React, { useState } from "react";
import Project from "../components/Project";
import imgArr from "./assets/index";

export const Portfolio = () => {
    return (
        <main className="portfolio">

            <section>
                <Project
                    title="Eatsy"
                    image={imgArr[0]}
                    imgdescript="Eatsy Home Page"
                    description="React.js/MongoDB/Javascript"
                    link="https://eatsyfoods.netlify.app/"
                    repolink="https://github.com/binh-ngo/eatsy-front-end.git"
                />
            </section>

            <section>
                <Project
                    title="World of Wordcraft"
                    image={imgArr[1]}
                    imgdescript="Tavern page of the application that shows the user's character and their statistics."
                    description="MySQL/Javascript/Node.js"
                    link="https://world-of-wordcraft.herokuapp.com/"
                    repolink="https://github.com/agtTwilight/project-2.git"
                />
            </section>
        </main>
    );
};

export default Portfolio;
