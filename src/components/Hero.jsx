import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">Available for opportunities</div>
          <h1 className="name">Hi, I'm <span className="gradient-text">Arun Nehra</span></h1>
          <h2 className="title">Principal Software Engineer</h2>
          <p className="description">
            9+ years building scalable, high-performance systems across UI architecture, AI, cloud & DevOps. Expertise in GenAI, AI Agents, LLMs, and RAG-based architectures.
          </p>
          <div className="hero-cta">
            <a href="#cover-letter" className="btn-primary">View Cover Letter</a>
            <a href="#portfolio" className="btn-secondary">View Portfolio</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glass-panel profile-card">
            <div className="code-snippet">
              <pre>
                <code>
{`const engineer = {
  name: "Arun Nehra",
  role: "Principal SE",
  experience: "9+ Years",
  focus: [
    "UI Architecture", "AI", 
    "GenAI", "DevOps"
  ]
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
