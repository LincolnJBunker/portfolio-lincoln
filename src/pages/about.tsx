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
      text: `Married to my wife Kylie, and earned my Associate's Degree in Computer Science from Salt Lake
Community College in summer 2025. I'm now studying Computer Science at Weber State University, on track
to graduate summer 2027. Professionally, I'm a Software Engineer at FoundationSource, where I've spent
the past year building and maintaining software that makes a real impact.`,
    },
    {
      label: "Future",
      title: "Where I'm Headed",
      text: `I'm focused on finishing my Bachelor's in Computer Science at Weber State (summer 2027) while
continuing to grow as an engineer at FoundationSource. Constant learning is something I'm passionate
about — I'm excited to keep building meaningful software and take on more complex engineering challenges
in the years ahead.`,
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
