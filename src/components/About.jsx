import './About.css';

const About = () => {
  return (
    <section id="experience" className="about-section">
      <div className="container">
        <div className="about-content glass-panel">
          <h2 className="section-title" style={{marginBottom: '1rem'}}>My Journey</h2>
          <p className="text-secondary mb-8 text-center" style={{maxWidth: '800px', margin: '0 auto 2rem'}}>
            A passionate engineer specializing in scalable systems, AI workflow automation, Microsoft Foundry, MCP, and modern frontend architectures.
          </p>
          <div className="stats-grid">
            <div className="stat-item text-center">
              <span className="stat-title text-xl">9+ Years Experience</span>
              <span className="stat-desc">Full-stack & AI</span>
            </div>
            <div className="stat-item text-center">
              <span className="stat-title text-xl">Principal Engineer</span>
              <span className="stat-desc">Leading teams at Eptura</span>
            </div>
            <div className="stat-item text-center">
              <span className="stat-title text-xl">B.Tech Graduate</span>
              <span className="stat-desc">UIET Kurukshetra University</span>
            </div>
            <div className="stat-item text-center">
              <span className="stat-title text-xl">Based in India</span>
              <span className="stat-desc">Bhiwani, Haryana</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
