import React, { useState } from "react";

export const Project = (props) => {
    return (
        <main className="card">
            <img src={props.image} alt={props.imgdescript}></img>

            <section className="card-information">

                <h2>
                    <a
                        className="project-title"
                        href={props.link}
                        target="_blank"
                        rel="noreferrer"
                        id="link-btn">
                        {props.title}
                    </a>
                </h2>
                <h3 className="project-tech info-margins">{props.technology}</h3>
                <p className="info-margins project-text">{props.description}</p>
                <p className="info-margins project-text">{props.responsibility}</p>

                <div className="card-btn">
                    <a
                        href={props.repolink}
                        target="_blank"
                        rel="noreferrer"
                        id="repo-btn">
                        <button type="button">GitHub Repo</button>
                    </a>
                </div>

            </section>

        </main>
    );
};

export default Project;
