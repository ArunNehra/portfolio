import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Principal Software Engineer",
      company: "Eptura • Gurugram, HR",
      duration: "APR 2024 - Current",
      description: [
        "Architected a custom Agent Orchestrator & Eptura Platform MCP (Foundry SDK, TS) connected to API Gateway with Bearer auth for AI-driven workflow orchestration",
        "Led UI modernisation using Monorepo (NX) and Microfrontend's (MFE)",
        "Built User Directory & Management system handling 100K+ records",
        "Drove performance optimization and observability improvements across distributed systems"
      ]
    },
    {
      role: "Sr. Software Engineer",
      company: "Lowe's Services India • Bengaluru, KA",
      duration: "APR 2023 - MAR 2024",
      description: [
        "Completed full SDLC with industry best practices",
        "Conducted code reviews and developed automation tests"
      ]
    },
    {
      role: "Sr. Implementation Specialist",
      company: "Taboola • Gurugram, HR",
      duration: "MAY 2020 - APR 2023",
      description: [
        "Implemented Taboola Feed/Widget, Floating units, video, Vignette",
        "Worked with React, Redux, Node.js, Next.js, and more"
      ]
    },
    {
      role: "Sr. UI/UX Developer",
      company: "Templatolio Technologies • Gurugram, HR",
      duration: "JAN 2019 - APR 2020",
      description: [
        "Development, deployment & migrations of production-ready websites",
        "Managed LAMP-Nginx server infrastructure"
      ]
    },
    {
      role: "Web Designer/Developer",
      company: "Ihaveanswer • Gurugram, HR",
      duration: "JAN 2017 - JAN 2019",
      description: [
        "Full lifecycle software development for 4 projects",
        "100% on-time delivery track record"
      ]
    }
  ];

  return (
    <section id="work-experience" className="experience-section">
      <div className="container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item animate-fade-in" key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="timeline-dot"></div>
              <div className="glass-panel experience-card">
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <ul className="exp-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>▸ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
