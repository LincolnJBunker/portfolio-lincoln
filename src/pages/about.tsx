export const About = () => {
  const sections = [
    {
      label: "Past",
      title: "Where I Started",
      text: `Growing up in Salt Lake City, I spent my childhood skiing, hiking, and mountain biking.
After high school, I served a religious mission in Riverside, California and Córdoba, Argentina — becoming
fluent in Spanish. My love for tech started at 20 when I attended Dev Mountain bootcamp and discovered a
passion for software engineering.`,
    },
    {
      label: "Present",
      title: "Where I Am",
      text: `Recently married to my wife Kylie, and finishing an Associate's Degree at Salt Lake Community
College. I'm currently a Fullstack Software Engineer at Monolith Brands Group, where I maintain and build
new software for various departments — from admin tooling to data pipelines.`,
    },
    {
      label: "Future",
      title: "Where I'm Headed",
      text: `I plan to transfer to Utah Valley University to continue studying Computer Science. Constant
learning is something I'm passionate about. I'm excited to grow as an engineer, meet great people, and
contribute to meaningful projects in the years ahead.`,
    },
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        {sections.map((s) => (
          <div key={s.label} className="card-custom about-card">
            <p className="about-card-label">{s.label}</p>
            <h3 className="about-card-title">{s.title}</h3>
            <p className="about-card-text">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
