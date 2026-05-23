import { FaGithub } from "react-icons/fa";
import ATPM from "../../public/ATPM.jpeg";
import NatureNetwork from "../../public/NatureNetwork.jpeg";
import Huzz from "../../public/HUZZ.png";

interface Project {
  title: string;
  tech: string[];
  description: string;
  image?: string;
  badge?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Sentinel",
    tech: ["TypeScript", "React", "MUI", "Python", "PostgreSQL", "AWS", "Serverless"],
    description:
      "Built at Monolith Brands Group — a real-time Amazon data platform serving all of Monolith's brands. I contributed significantly to v2, shipping admin features for FBM/WFM management, Shopify order tracking, feature flag integrations, and executive reporting.",
    badge: "Professional",
  },
  {
    title: "Alpine Twin Peak Maintenance",
    tech: ["JavaScript", "React", "React Bootstrap", "Node.js", "PostgreSQL", "Sequelize"],
    description:
      "My first fullstack project — a website for my aeration business that lets customers learn about aeration and schedule appointments online. Built an admin dashboard to manage users and bookings, with automated emails via NodeMailer.",
    image: ATPM,
    github: "https://github.com/LincolnJBunker",
  },
  {
    title: "Nature Network",
    tech: ["JavaScript", "React", "Node.js", "PostgreSQL", "NPS API", "Google Maps API"],
    description:
      "Group project — a social app for U.S. National Park enthusiasts. Users can create profiles, connect with friends, and share adventures. Integrated Google Maps and the NPS API to display all national parks with rich info and imagery.",
    image: NatureNetwork,
    github: "https://github.com/LincolnJBunker",
  },
  {
    title: "Huzz Converter",
    tech: ["TypeScript", "React", "Gender API"],
    description:
      "A fun side project inspired by a viral video. The tool uses the Gender API to detect whether a name is male or female, then converts it using specific rules — appending \"-ruzz\" for male names or replacing with \"Huzz\" for female names.",
    image: Huzz,
    github: "https://github.com/LincolnJBunker",
  },
];

export const Projects = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            {project.image ? (
              <img src={project.image} alt={project.title} className="project-image" />
            ) : (
              <div className="project-image-placeholder">
                Sentinel
                <br />
                @ Monolith Brands
              </div>
            )}
            <div className="project-details">
              {project.badge && (
                <span className="project-badge">{project.badge}</span>
              )}
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech-pills">
                {project.tech.map((t) => (
                  <span key={t} className="project-tech-pill">{t}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              {project.github && (
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary-custom"
                    style={{ fontSize: "0.82rem", padding: "7px 14px" }}
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
