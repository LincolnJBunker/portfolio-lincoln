export const Skills = () => {
    const frontend = [
        "Javascript",
        "Typescript",
        "React",
        "Redux",
        "HTML",
        "CSS",
        "Bootstrap",
        "Material UI",
    ];

    const backend = [
        "Python",
        "PostgresSQL",
        "MySQL",
        "Java",
        "Node.js",
        "Express",
        "REST API",
        "ETL",
        "Data Pipelines",
        "Bash",
    ];

    const tools = [
        "Git",
        "GitHub",
        "AWS",
        "Postman",
        "Axios",
        "VSCode",
        "Mac OS",
        "Linux",
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                gap: "20px", // Match spacing
                margin: "0 auto", // Center content
                maxWidth: "800px", // Match width
            }}
        >
            <h1 style={{ marginBottom: '25px'}}>Skills</h1>
            <div style={styles.container}>
                <div>
                    <h3>Front End</h3>
                    <div style={styles.skillGrid}>
                        {frontend.map((skill, index) => (
                            <span key={index} style={styles.skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Back End</h3>
                    <div style={styles.skillGrid}>
                        {backend.map((skill, index) => (
                            <span key={index} style={styles.skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Tools / Cloud</h3>
                    <div style={styles.skillGrid}>
                        {tools.map((skill, index) => (
                            <span key={index} style={styles.skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles: any = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        maxWidth: "900px",
    },
    skillGrid: {
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        justifyContent: "center",
    },
    skill: {
        padding: "10px 15px",
        backgroundColor: "#6b9da5",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "16px",
        color: "white",
    }
    
};

export default Skills;
