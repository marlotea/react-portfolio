import { useEffect, useRef } from "react";
import KUTE from "kute.js";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);

    useEffect(() => {
        if (blob1Ref.current && blob2Ref.current) {
            const tween = KUTE.fromTo(
                blob1Ref.current, // Use ref instead of ID
                { path: blob1Ref.current }, // Correct object structure
                { path: blob2Ref.current },
                { repeat: 999, duration: 3000, yoyo: true }
            );
            tween.start();
        }
    }, []);

    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}>Leia Chen</h1>
                {/* <div className={styles.rotatingText}>
                    <p>D</p>
                    <p>
                        <span className={`${styles.green1} ${styles.word}`}>
                            eveloper
                        </span>
                        <span className={`${styles.green2} ${styles.word}`}>
                            esigner
                        </span>
                        <span className={`${styles.green3} ${styles.word}`}>
                            reamer
                        </span>
                    </p>
                </div> */}
                <p className={styles.description}>
                    Sophomore at the University of British Columbia crafting
                    solutions with technology for a more accessible future.
                    I&apos;m passionate about bringing ideas to life, from
                    developing the next application to fostering opportunities
                    for students in tech.
                </p>
                <div className={styles.icons}>
                    <a href="https://github.com/marlotea">
                        <img
                            src={getImageUrl("icon-github-default.png")}
                            alt="github"
                            className={styles.icon}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/leiahjchen/">
                        <img
                            src={getImageUrl("icon-linkedin-default.png")}
                            alt="linkedin"
                            className={styles.icon}
                        />
                    </a>
                    <a href="mailto:leiahjchen@gmail.com">
                        <img
                            src={getImageUrl("icon-email-default.png")}
                            alt="email"
                            className={styles.icon}
                        />
                    </a>
                </div>
            </div>
            <img
                src={getImageUrl("headshot.png")}
                className={styles.headshot}
            ></img>
        </section>
    );
};
