import React from "react";

export const Contact = () => {

    const handleEmailClick = () => {
        window.location.href = "mailto:webdev.lincolnbunker@gmail.com?subject=Let's Connect";
    };
    

    const handleGitHubClick = () => {
        window.open('https://github.com/LincolnJBunker')
    }

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/lincoln-bunker-9a13302a9/')
    }

    const handleResumeClick = () => {
        window.open("/portfolio-lincoln/Resume%20-%20Lincoln%20Bunker.pdf", "_blank")
    }

    return (
        <React.Fragment>
            <div style={styles.container}>
                <h1 style={styles.heading}>Contact Me</h1>

                <div style={styles.textContainer}>
                    <h3 style={styles.subheading}>Let's Connect!</h3>
                    <h3 style={styles.description}>
                        I'd love to connect and meet! Whether it's about an employment opportunity, 
                        a project to collaborate on, a tech discussion, CS classes you're taking, 
                        or even chatting about our favorite ski runs—let's make it happen! Feel free 
                        to reach out via email or LinkedIn. Looking forward to hearing from you!
                    </h3>
                </div>

                <div style={styles.linksContainer}>
                    <h2 onClick={handleEmailClick} style={styles.link}>Email</h2>
                    <h2 onClick={handleGitHubClick} style={styles.link}>GitHub</h2>
                    <h2 onClick={handleLinkedInClick} style={styles.link}>LinkedIn</h2>
                    <h2 onClick={handleResumeClick} style={styles.link}>Resume</h2>
                </div>
            </div>
        </React.Fragment>
    );
};

const styles: any = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
    },
    heading: {
        // fontSize: "2.5rem",
        marginBottom: "10px",
    },
    subheading: {
        // fontSize: "1.8rem",
        marginBottom: "10px",
    },
    description: {
        // fontSize: "1.1rem",
        maxWidth: "600px",
        // lineHeight: "1.6",
        marginBottom: "40px",
    },
    linksContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        marginTop: "50px",
        flexWrap: "nowrap", 
        overflowX: "auto", 
    },
    link: {
        // fontSize: "1.3rem",
        cursor: "pointer",
        transition: "color 0.3s",
        padding: "5px 5px",
        whiteSpace: "nowrap",
    },
};

export default Contact;
