import React from "react";

export const About = () => {
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px",
                }}
            >
                <h1>About Me</h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        textAlign: "center",
                        maxWidth: "800px",
                        width: "100%",
                        marginTop: "50px",
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={styles.section}>
                        <h3>Past</h3>
                        <p>
                            Growing up in the Salt Lake area, I have always been a lover of the outdoors. I spent my childhood and teenage years skiing, hiking, mountain biking,
                            and doing anything I could outside. After graduating High School, I served a religous mission in Riverside, California and Córdoba, Argentina. I became and still
                            am fluent in Spanish. My love for tech began at about 20 years old when I took a coding bootcamp - Dev Mountain. There, I found a passion for software engineering.
                        </p>
                    </div>
                    <div style={styles.section}>
                        <h3>Present</h3>
                        <p>
                            I recently have gotten married, and love spending time with my wife, Kylie. I am finishing up an Associates Degree at Salt Lake Community College, taking various
                            Computer Science classes. I'm currently employed at Monolith Brands Group as a Fullstack Software Engineer. My responsibilites, to name a few, include maintaining previously
                            built software to the company's needs, while developing new software to help various departments of the company.
                        </p>
                    </div>
                    <div style={styles.section}>
                        <h3>Future</h3>
                        <p>
                            Upon finishing at Salt Lake Community College, I plan on attending Utah Valley University to study Computer Science. I look forward to expanding my experience as a Software Engineer.
                            Constant learning is something that I love and am passionate about. I'm excited to see what my career will entail, the people I will meet, and the projects that I will be able
                            to contribute to in the upcoming years
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

// CSS-in-JS for responsive design
const styles = {
    section: {
        flex: "1", // Equal width on desktop
        minWidth: "250px", // Ensures responsiveness
        maxWidth: "300px",
    },

    "@media (max-width: 768px)": {
        section: {
            flex: "1 1 100%", // Stack items on mobile
        },
    },
};

export default About;
