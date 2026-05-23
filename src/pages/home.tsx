import { Carousel, CarouselItem } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import me from "../../public/Portfolio.jpg";
import family from "../../public/MeAndWifey.jpg";

export const Home = () => {
  const handleResumeClick = () => {
    window.open("/portfolio-lincoln/Resume%20-%20Lincoln%20Bunker.pdf", "_blank");
  };

  return (
    <div className="hero-section">
      {/* Text */}
      <div className="hero-text">
        <p className="hero-greeting">Software Engineer</p>
        <h1 className="hero-name">Lincoln Bunker</h1>
        <p className="hero-title">Fullstack Engineer</p>
        <p className="hero-bio">
          Passionate software engineer based in Salt Lake City, studying Computer Science.
          Currently building fullstack software at Monolith Brands Group. Strong interest
          in backend engineering, data pipelines, and clean system design.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary-custom" onClick={handleResumeClick}>
            <FaFileAlt /> Resume <FiArrowRight />
          </button>
          <a
            href="https://linkedin.com/in/lincoln-bunker-9a13302a9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-custom"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        <div className="hero-social-links">
          <a
            href="https://github.com/LincolnJBunker"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon-link"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/lincoln-bunker-9a13302a9"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon-link"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Image carousel */}
      <div className="hero-image-container">
        <Carousel indicators={false} interval={4000}>
          <CarouselItem>
            <img
              src={me}
              alt="Lincoln Bunker"
              style={{ width: "100%", borderRadius: "var(--radius-lg)", objectFit: "cover", maxHeight: "420px" }}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src={family}
              alt="Lincoln and Kylie"
              style={{ width: "100%", borderRadius: "var(--radius-lg)", objectFit: "cover", maxHeight: "420px" }}
            />
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
};
