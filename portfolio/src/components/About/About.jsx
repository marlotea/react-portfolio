import { useEffect, useState } from "react";
import styles from "./About.module.css";

export const About = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            setIsActive(window.location.hash === "#about");
        };

        // Check on initial render
        handleHashChange();

        // Listen for hash changes
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <section id="about" className={styles.container}>
            <div className={styles.typingWrapper}>
                <p
                    className={`${styles.intro} ${
                        isActive ? styles.typing : ""
                    }`}
                >
                    Hi, I&apos;m Leia!
                </p>
            </div>
            <div>
                <div className={styles.section}>
                    <p className={styles.subsectionHeader}>Currently a...</p>
                    <ul className={styles.list}>
                        <li>
                            B.Sc. Computer Science Student{" "}
                            <span className={styles.grey_text}>@UBC</span>
                        </li>
                        <li>
                            Full-Stack Dev Intern{" "}
                            <span className={styles.grey_text}>
                                @ MountainMath Software
                            </span>
                        </li>
                        <li>
                            AI Researcher{" "}
                            <span className={styles.grey_text}>
                                @ Algoverse
                            </span>
                        </li>
                        <li>
                            Mentor{" "}
                            <span className={styles.grey_text}>@ UBC WiDS</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <p className={styles.subsectionHeader}>
                        Talk to me about...
                    </p>
                    <ul className={styles.list}>
                        <li>Artificial Intelligence</li>
                        <li>Web Development</li>
                        <li>Business Intelligence</li>
                        <li>Starting Businesses</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <p className={styles.subsectionHeader}>I also enjoy...</p>
                    <p>🎨 throwing colours together</p>
                    <p>👾 smashing LC-RC-LC-SHIFT</p>
                    <p>💭 dreaming about my tattoo artist aspirations</p>
                </div>
            </div>
        </section>
    );
};
