import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Principal Full-stack Engineer",
      company: "Eptura • Gurugram, HR",
      duration: "APR 2024 - Current",
      description: [
        "Architecting and engineering scalable enterprise platforms for Eptura Visitor, focusing on distributed systems, microservices architecture, and complex backend integrations.",
        "Designing highly available, API-driven services using Node.js, NestJS, and TypeScript, backed by optimized relational data models (MySQL/TypeORM) and asynchronous event-driven streaming (Event Hub/Avro).",
        "Architected an Agent Orchestrator using Azure AI Foundry SDK, building a custom Eptura Platform MCP by converting existing REST APIs to MCP standards for AI-driven workflow automation.",
        "Developing robust web and mobile ecosystems (Angular, React Native, RxJS) integrated seamlessly with distributed backend services, managed via Turborepo/Yarn Workspaces.",
        "Spearheading mission-critical systems engineering including massive data migration pipelines, zero-downtime identity/SCIM integrations, and deep-dive production observability improvements.",
        "Previously led UI modernization for Eptura Platform's Directory and HR systems, engineering high-performance micro-frontends (MFE) orchestrated within an NX Monorepo."
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
    <section id="experience" className="experience-section">
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
