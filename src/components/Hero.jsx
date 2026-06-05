import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">Available for opportunities</div>
          <h1 className="name">Hi, I'm <span className="gradient-text">Arun Nehra</span></h1>
          <h2 className="title">Principal Fullstack Engineer</h2>
          <p className="description">
            9+ years engineering scalable full-stack applications with a deep specialization in modern UI architectures, state management, GenAI integrations, and high-performance client-side systems.
          </p>
          <div className="hero-cta">
            <a href="#cover-letter" className="btn-primary">View Cover Letter</a>
            <a href="#portfolio" className="btn-secondary">View Portfolio</a>
          </div>
        </div>
        <div className="hero-visual animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="ide-window glass-panel">
            <div className="ide-header">
              <div className="ide-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="ide-title">engineer.js</div>
            </div>
            <div className="ide-body">
              <div className="line-numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div className="code-content">
                <code>
                  <span className="keyword">const</span> <span className="variable">engineer</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span className="string">"Arun Nehra"</span>,<br />
                  &nbsp;&nbsp;role: <span className="string">"Principal Fullstack Engineer"</span>,<br />
                  &nbsp;&nbsp;experience: <span className="string">"9+ Years"</span>,<br />
                  &nbsp;&nbsp;location: <span className="string">"India"</span>,<br />
                  &nbsp;&nbsp;focus: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"UI Architecture & React"</span>, <span className="string">"GenAI & Agents"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Fullstack Node/Go/Python"</span>, <span className="string">"Cloud Native"</span><br />
                  &nbsp;&nbsp;]<br />
                  &#125;;
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
