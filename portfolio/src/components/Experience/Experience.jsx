import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h1 className={styles.title}>Experience</h1>

            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                "&:hover": {
                                    background: "#aec4c1",
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={styles.experience}>
                            <div>
                                <p>Full-Stack Developer Intern</p>
                                <p>MountainMath Software</p>
                            </div>
                            <div className={styles.details}>
                                <p>Feb 2025 - present</p>
                                <p>Vancouver, BC</p>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                "&:hover": {
                                    background: "#aec4c1",
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={styles.experience}>
                            <div>
                                <p>Coding Instructor</p>
                                <p>Code Ninjas</p>
                            </div>
                            <div className={styles.details}>
                                <p>Jan 2025 - present</p>
                                <p>Vancouver, BC</p>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                "&:hover": {
                                    background: "#aec4c1",
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={styles.experience}>
                            <div>
                                <p>AI Researcher</p>
                                <p>Algoverse</p>
                            </div>
                            <div className={styles.details}>
                                <p>Nov 2024 - present</p>
                                <p>Remote</p>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot
                            sx={{
                                "&:hover": {
                                    background: "#aec4c1",
                                },
                            }}
                        />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={styles.experience}>
                            <div>
                                <p>EmpowHer Mentor</p>
                                <p>UBC WiDS</p>
                            </div>
                            <div className={styles.details}>
                                <p>Nov 2024 - present</p>
                                <p>UBC</p>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            {/* <div className={styles.sectionContainer}>
                <div className={styles.timeline} />
                <div className={styles.experience}>
                    <div className={styles.timelineDot} />
                    <div>
                        <p>Full-Stack Developer Intern</p>
                        <p>MountainMath Software</p>
                    </div>
                    <div className={styles.details}>
                        <p>Feb 2025 - present</p>
                        <p>Vancouver, BC</p>
                    </div>
                </div>

                <div className={styles.experience}>
                    <div>
                        <p>Coding Instructor</p>
                        <p>Code Ninjas</p>
                    </div>
                    <div className={styles.details}>
                        <p>Jan 2025 - present</p>
                        <p>Vancouver, BC</p>
                    </div>
                </div>

                <div className={styles.experience}>
                    <div>
                        <p>AI Researcher</p>
                        <p>Algoverse</p>
                    </div>
                    <div className={styles.details}>
                        <p>Nov 2024 - present</p>
                        <p>Remote</p>
                    </div>
                </div>

                <div className={styles.experience}>
                    <div>
                        <p>EmpowHer Mentor</p>
                        <p>UBC WiDS</p>
                    </div>
                    <div className={styles.details}>
                        <p>Nov 2024 - present</p>
                        <p>UBC</p>
                    </div>
                </div>
            </div> */}
        </section>
    );
};
