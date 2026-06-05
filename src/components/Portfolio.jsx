import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "User Directory & Management System",
      company: "Eptura",
      description: "Built and scaled a high-performance user directory system handling 100K+ records with optimized load times and secure access controls. Implemented bulk uploads, RBAC, and feature toggles.",
      tags: ["React", "TypeScript", "NX Monorepo", "MFE", "Azure", "GraphQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "AI-Driven Workflow Automation",
      company: "Eptura",
      description: "Architected an Agent Orchestrator using Azure AI Foundry SDK in TypeScript. Developed a custom Eptura Platform MCP server connected to an API Gateway with secure bearer authentication.",
      tags: ["TypeScript", "Foundry SDK", "Agent Orchestrator", "MCP", "API Gateway", "Bearer Auth"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SchemaPulse: Distributed Database & System Monitoring Platform",
      company: "Freelance",
      description: "Developed an enterprise-grade real-time monitoring platform. Built a Go agent for low-level server telemetry, a Laravel API backend with PostgreSQL/InfluxDB dual storage, and a React dashboard.",
      tags: ["Go", "React", "TypeScript", "Laravel", "PostgreSQL", "InfluxDB", "Docker"],
      image: import.meta.env.BASE_URL + "schemapulse_dashboard.png"
    },
    {
      title: "Taboola Product Implementation Platform",
      company: "Taboola",
      description: "Led the implementation and deployment of Taboola content recommendation feeds, floating widgets, video units, and vignettes across multiple high-traffic publisher sites, optimizing ad revenue.",
      tags: ["React", "Redux", "Node.js", "Next.js", "Socket IO", "Docker"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="text-center mb-10">
           <div className="badge" style={{marginBottom: '1rem'}}>Portfolio</div>
           <h2 className="section-title" style={{marginBottom: '1rem', borderBottom: 'none', paddingBottom: 0}}>Featured Projects</h2>
           <p className="text-secondary" style={{maxWidth: '600px', margin: '0 auto'}}>Highlights from my professional work across enterprise-scale platforms and AI-driven solutions.</p>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="project-card animate-fade-in" key={index} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <span className="project-company-badge">{project.company}</span>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
