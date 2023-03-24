import React, { useState } from "react";
import Project from "../components/Project";
import imgArr from "./assets/index";

export const Portfolio = () => {
    return (
        <main className="portfolio">
            <h2 className="portfolio-intro">Thank you for taking the time to visit my portfolio! <br /> Here are some of the projects that I have worked on:</h2>
            <section className="project-container">
                <Project
                    title="Eatsy"
                    image={imgArr[0]}

                    imgdescript="Eatsy Home Page"
                    technology="React.js/MongoDB/Javascript"

                    description="Eatsy is a social media application developed with a React.js front end and MongoDB database for home cooks, foodies, and chefs to connect and share their recipes with each other!"

                    responsibility="My role in this application was to manage the project design direction, as well as assisting in a handful of backend routes that would allow us to fetch user data points for use in the editing of user profiles."

                    link="https://eatsyfoods.netlify.app/"
                    repolink="https://github.com/binh-ngo/eatsy-front-end.git"
                />
            </section>

            <section className="project-container">
                <Project
                    title="World of Wordcraft"
                    image={imgArr[1]}

                    imgdescript="Tavern page of the application that shows the user's character and their statistics."

                    technology="MySQL/Javascript/Node.js/Handlebars.js"

                    description="World of Wordcraft is a text-based adventure game that utilizes user inputs to create spells with unique multipliers for rhyming!"

                    responsibility="My responsibility in this project was to create the models and seeds for the backend testing, as well as the design and development of the home/tavern page."

                    link="https://world-of-wordcraft.herokuapp.com/"
                    repolink="https://github.com/agtTwilight/project-2.git"
                />
            </section>
        </main>
    );
};

export default Portfolio;
