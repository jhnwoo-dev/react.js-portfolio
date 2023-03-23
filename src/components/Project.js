import React, { useState } from "react";

export const Project = (props) => {
    return (
        <main className="card">
            <img src={props.image} alt={props.imgdescript}></img>

            <figure className="card-information">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <details className="card-btn">
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
                </details>
            </figure>

        </main>
    );
};

export default Project;
