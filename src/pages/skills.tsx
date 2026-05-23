import { ReactNode } from "react";
import {
  SiJavascript, SiTypescript, SiReact, SiRedux, SiHtml5, SiCss,
  SiBootstrap, SiMui, SiPython, SiPostgresql, SiMysql, SiNodedotjs,
  SiExpress, SiGit, SiGithub, SiPostman, SiLinux, SiAxios, SiGnubash,
} from "react-icons/si";
import { FaJava, FaAws, FaApple } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdDataThresholding } from "react-icons/md";
import { VscCode, VscWorkspaceTrusted } from "react-icons/vsc";

interface Skill {
  name: string;
  icon?: ReactNode;
}

const frontend: Skill[] = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Material UI", icon: <SiMui /> },
];

const backend: Skill[] = [
  { name: "Python", icon: <SiPython /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "REST APIs", icon: <TbApi /> },
  { name: "ETL", icon: <VscWorkspaceTrusted /> },
  { name: "Data Pipelines", icon: <MdDataThresholding /> },
  { name: "Bash", icon: <SiGnubash /> },
];

const tools: Skill[] = [
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "VS Code", icon: <VscCode /> },
  { name: "macOS", icon: <FaApple /> },
  { name: "Linux", icon: <SiLinux /> },
];

const categories = [
  { label: "Front End", skills: frontend },
  { label: "Back End", skills: backend },
  { label: "DevOps & Tools", skills: tools },
];

export const Skills = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid-wrapper">
        {categories.map((cat) => (
          <div key={cat.label}>
            <p className="skills-category-title">{cat.label}</p>
            <div className="skill-grid">
              {cat.skills.map((skill) => (
                <span key={skill.name} className="skill-badge">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
