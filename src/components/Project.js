import React, { useState } from "react";

export const Project = (props) => {
    return (
        <main className="card">
            <img src={props.image} alt={props.imgdescript}></img>

            <section className="card-information">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-btn">
                    <a
                        href={props.link}
                        target="_blank"
                        rel="noreferrer"
                        id="link-btn">
                        <button type="button">Link</button>
                    </a>

                    <a
                        href={props.repolink}
                        target="_blank"
                        rel="noreferrer"
                        id="repo-btn">
                        <button type="button">GitHub</button>
                    </a>
                </div>
            </section>

        </main>
    );
};

export default Project;
