import React from "react";

export const Contact = () => {

    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
                gap: "20px", // Match spacing
                margin: "0 auto", // Center content
                maxWidth: "800px", // Match width
                // minHeight: "100vh", // Ensure full height
                justifyContent: "space-between", // Space out content
            }}>
                <div style={{ flex: 1 }}>
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
        fontSize: "2.5rem",
        marginBottom: "10px",
    },
    subheading: {
        fontSize: "1.8rem",
        marginBottom: "10px",
    },
    description: {
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
        padding: "5px 3px",
        whiteSpace: "nowrap",
    },
};

export default Contact;
