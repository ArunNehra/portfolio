import { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "AI-Driven Workflow Automation",
      company: "Eptura",
      category: "AI & GenAI",
      description: "Architected an Agent Orchestrator using Azure AI Foundry SDK in TypeScript. Developed a custom Eptura Platform MCP server connected to an API Gateway with secure bearer authentication.",
      tags: ["TypeScript", "Foundry SDK", "Agent Orchestrator", "MCP", "API Gateway", "Bearer Auth"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "User Directory & Management System",
      company: "Eptura",
      category: "Frontend",
      description: "Built and scaled a high-performance user directory system handling 100K+ records with optimized load times and secure access controls. Implemented bulk uploads, RBAC, and feature toggles.",
      tags: ["React", "TypeScript", "NX Monorepo", "MFE", "Azure", "GraphQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "SchemaPulse: Distributed Database & System Monitoring Platform",
      company: "Freelance",
      category: "Systems & Backend",
      description: "Developed an enterprise-grade real-time monitoring platform. Built a Go agent for low-level server telemetry, a Laravel API backend with PostgreSQL/InfluxDB dual storage, and a React dashboard.",
      tags: ["Go", "React", "TypeScript", "Laravel", "PostgreSQL", "InfluxDB", "Docker"],
      image: import.meta.env.BASE_URL + "schemapulse_dashboard.png"
    },
    {
      title: "Audio DSP & Synthesizer Suite",
      company: "Freelance",
      category: "Systems & Backend",
      description: "Designed and built high-performance VST3/CLAP synthesizers and audio effect plugins in Rust. Implemented zero-delay feedback SVF filters, real-time spectral FFT processing, and custom GUIs.",
      tags: ["Rust", "DSP", "VST3 / CLAP", "FFT", "Vizia / Egui", "Systems"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Taboola Product Implementation Platform",
      company: "Taboola",
      category: "Frontend",
      description: "Led the implementation and deployment of Taboola content recommendation feeds, floating widgets, video units, and vignettes across multiple high-traffic publisher sites, optimizing ad revenue.",
      tags: ["React", "Redux", "Node.js", "Next.js", "Socket IO", "Docker"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "CRWN Clothing",
      company: "Freelance",
      category: "Frontend",
      description: "Developed a full-featured e-commerce PWA using React v17, TypeScript, and Styled Components. Integrated Redux Saga, Stripe payments via serverless functions, Firebase Auth, and Firestore databases.",
      tags: ["React", "TypeScript", "Redux Saga", "Firebase", "Stripe", "Serverless"],
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "CarBazaar",
      company: "Freelance",
      category: "Systems & Backend",
      description: "Developed a full-stack car rental platform with a React frontend and a NestJS GraphQL API. Configured a containerized production environment using Docker Compose, Nginx, and MySQL.",
      tags: ["React", "NestJS", "GraphQL", "MySQL", "Docker", "Nginx", "TypeScript"],
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="text-center mb-10">
           <div className="badge" style={{marginBottom: '1rem'}}>Portfolio</div>
           <h2 className="section-title" style={{marginBottom: '1rem', borderBottom: 'none', paddingBottom: 0}}>Featured Projects</h2>
           <p className="text-secondary" style={{maxWidth: '600px', margin: '0 auto 2rem'}}>Highlights from my professional work across enterprise-scale platforms and AI-driven solutions.</p>
        </div>

        <div className="portfolio-filters">
          {['All', 'AI & GenAI', 'Frontend', 'Systems & Backend'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card animate-fade-in" key={project.title} style={{animationDelay: `${index * 0.1}s`}}>
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
