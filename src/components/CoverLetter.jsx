import './CoverLetter.css';
import './CoverLetterPrint.css';

const CoverLetter = () => {
  return (
    <section id="cover-letter" className="cover-letter-section">
      <div className="container">
        <h2 className="section-title">Cover Letter</h2>
        <div className="glass-panel letter-container animate-fade-in">
          <div className="letter-content">
            <h3 className="mb-4 text-xl font-semibold text-primary">Why Hire Me?</h3>
            <p className="mb-6 text-sm text-secondary">A brief introduction to what I bring to the table.</p>
            
            <p className="salutation">Dear Hiring Manager,</p>
            
            <p>
              I am writing to express my interest in a Principal Fullstack Software Engineering position. With over 9 years of experience engineering scalable web applications with deep-seated expertise in advanced frontend architectures, state management, and full-stack integrations, I am confident in my ability to drive technical excellence on your team.
            </p>
            
            <p>
              In my current role as Principal Software Engineer at Eptura, I have led web modernization initiatives using monorepo (NX) and micro-frontend architectures, establishing scalable UI foundations and elevating developer productivity. On the backend, I built and scaled high-throughput systems, including a user directory managing 100K+ records, using optimization policies to ensure secure, sub-second client delivery.
            </p>

            <p>
              I have designed and implemented full-stack pipelines that reduced release cycles from weeks to days, leveraging Docker, Kubernetes, and Azure for cloud-native reliability. I also integrated GenAI workflows, designing custom Model Context Protocol (MCP) servers and AI Agents via Azure AI Foundry to automate client-side operations.
            </p>
            
            <p>
              My expertise spans the entire lifecycle of modern web products, combining a mastery of client-side frameworks (React, Next.js, Redux Saga) with robust API development (GraphQL/REST, BFF patterns) and database engineering (PostgreSQL, MySQL, InfluxDB).
            </p>

            <p>
              I am excited about the opportunity to bring my full-stack capabilities and user-centric architecture experience to your organization. I would welcome the chance to discuss how my background aligns with your team's upcoming goals.
            </p>

            <div className="sign-off">
              <p>Best regards,</p>
              <h3 className="signature">Arun Nehra</h3>
              <p className="contact-info mt-2">arun.nehra.007@gmail.com • +91-9050861181</p>
            </div>
            
            <div className="mt-8 text-center">
               <button className="btn-secondary" onClick={() => window.print()}>Print / Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetter;
