import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-wrapper">
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", marginBottom: "16px" }}>
          Let's Connect!
        </h3>
        <p className="contact-description">
          Whether it's an employment opportunity, a project to collaborate on, a tech discussion,
          CS classes you're taking, or even chatting about our favorite ski runs — I'd love to hear
          from you. Reach out via email or LinkedIn and I'll get back to you soon.
        </p>
        <div className="contact-links">
          <a
            href="mailto:lincolnbunker03@gmail.com"
            className="contact-link-btn"
          >
            <FaEnvelope /> lincolnbunker03@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/lincoln-bunker-9a13302a9"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/LincolnJBunker"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link-btn"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
