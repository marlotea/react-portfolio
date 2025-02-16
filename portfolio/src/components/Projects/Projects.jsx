// import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                <div className={styles.project}>
                    <a
                        href="https://github.com/marlotea/perspective-AI"
                        target="_blank"
                    >
                        <img
                            src={getImageUrl("placeholder.png")}
                            className={styles.preview}
                        />
                    </a>
                    <div className={styles.details}>
                        <div>
                            <h3 className={styles.projectName}>
                                perspectiveAI | personal project
                            </h3>
                            <p>
                                A browser extension that analyzes news articles
                                for biases, provides contexts, and predicts
                                impacts. A need in a world where information is
                                key.
                            </p>
                        </div>
                        <div className={styles.tags}>
                            <div className={styles.tag}>JavaScript</div>
                            <div className={styles.tag}>HTML/CSS</div>
                            <div className={styles.tag}>OpenAI API</div>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <a
                        href="https://github.com/marlotea/sonder"
                        target="_blank"
                    >
                        <img
                            src={getImageUrl("placeholder.png")}
                            className={styles.preview}
                        />
                    </a>
                    <div className={styles.details}>
                        <div>
                            <h3 className={styles.projectName}>
                                Sonder | personal project
                            </h3>
                            <p>
                                A full-stack website that allows users to share
                                and explore stories with unique prompts.
                                Inspired by— you guessed it, sonder.
                            </p>
                        </div>
                        <div className={styles.tags}>
                            <div className={styles.tag}>React.js</div>
                            <div className={styles.tag}>Express.js</div>
                            <div className={styles.tag}>OpenAI API</div>
                        </div>
                    </div>
                </div>

                <div className={styles.project}>
                    <a
                        href="https://github.com/Ani-nem/NextDoor"
                        target="_blank"
                    >
                        <img
                            src={getImageUrl("placeholder.png")}
                            className={styles.preview}
                        />
                    </a>
                    <div className={styles.details}>
                        <div>
                            <h3 className={styles.projectName}>
                                nextDoor | nwHacks 2025
                            </h3>
                            <p>
                                A full-stack mobile application that allows
                                users to connect with neighbours to post and
                                complete tasks. The door to a tighter community.
                            </p>
                        </div>
                        <div className={styles.tags}>
                            <div className={styles.tag}>React.js</div>
                            <div className={styles.tag}>Express.js</div>
                            <div className={styles.tag}>PostgresQL</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
