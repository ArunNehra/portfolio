import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "🧠 AI & Emerging Technologies",
      skills: ["GenAI", "AI Agents", "LLMs", "RAG Architectures", "LangChain", "LangGraph", "Context Engineering", "AI-assisted Pair Programming", "AI Foundry Agents", "Model Context Protocol (MCP)", "Custom MCPs"]
    },
    {
      title: "🖥️ Frontend & UI Architecture",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Microfrontends (MFE)", "Monorepo (NX)", "Redux Toolkit", "Redux Saga", "Tailwind CSS", "Styled Components", "Jotai"]
    },
    {
      title: "⚙️ Backend & Databases",
      skills: ["Node.js", "NestJS", "Go", "PHP / Laravel", "GraphQL", "REST APIs", "TypeORM", "PostgreSQL", "MySQL", "InfluxDB (Time-Series)", "Firebase / Firestore"]
    },
    {
      title: "🦀 Systems & Audio DSP",
      skills: ["Rust (DSP & Systems)", "nih_plug (VST3 / CLAP)", "Zero-Delay Feedback (ZDF)", "Spectral Processing (FFT)", "Granular Synthesis", "Vizia / Egui", "Thread-Safe Real-time DSP"]
    },
    {
      title: "☁️ Cloud, DevOps & Serverless",
      skills: ["AWS", "Azure", "GCP", "Docker & Docker Compose", "Kubernetes", "CI/CD (Jenkins)", "Nginx", "Netlify Serverless Functions"]
    },
    {
      title: "📈 Observability & Testing",
      skills: ["Grafana", "Kibana", "System Telemetry", "Performance Optimization", "Jest", "Cypress", "Automated Testing"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="text-center mb-10">
           <h3 className="text-xl font-semibold">Technical Expertise</h3>
           <p className="text-secondary mt-2">A comprehensive toolkit spanning frontend, backend, cloud, AI, and DevOps.</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="glass-panel skill-card animate-fade-in" key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <h4 className="skill-category-title">{category.title}</h4>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
