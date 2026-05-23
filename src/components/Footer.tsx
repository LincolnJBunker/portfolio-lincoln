import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          <span className="footer-name">Lincoln Bunker</span> &mdash; Built with React & TypeScript
        </span>
        <div className="footer-social">
          <a
            href="mailto:lincolnbunker03@gmail.com"
            className="footer-icon-link"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/lincoln-bunker-9a13302a9"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/LincolnJBunker"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
