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
              I am writing to express my interest in a Principal Fullstack Software Engineering position. With over 9 years of experience architecting scalable enterprise platforms, with deep-seated expertise in distributed systems, microservices, and robust backend integrations, I am confident in my ability to drive technical excellence on your team.
            </p>
            
            <p>
              In my current role as a Principal Full-stack Engineer at Eptura, I drive backend engineering and architecture for the Eptura Visitor management platform. I design highly available, API-driven services using Node.js and NestJS, backed by MySQL and asynchronous event-driven streaming (Event Hub/Avro). I have also led complex data migration initiatives, seamlessly transitioning legacy heritage systems to modern platforms with zero downtime and strict data integrity.
            </p>

            <p>
              Beyond traditional backend architecture, I architected an Agent Orchestrator utilizing the Azure AI Foundry SDK, building a custom Eptura Platform MCP by converting existing REST APIs to MCP standards. This successfully integrated secure AI-driven workflow automation into our core enterprise environment.
            </p>
            
            <p>
              My expertise spans the entire lifecycle of mission-critical platforms, combining robust backend services with complex web and mobile ecosystems (Angular, React Native, RxJS) managed within Turborepo and Yarn Workspaces. I excel at handling massive data pipelines, identity/SCIM integrations, and deep-dive production observability.
            </p>

            <p>
              I am excited about the opportunity to bring my distributed systems capabilities and enterprise architecture experience to your organization. I would welcome the chance to discuss how my background aligns with your team's upcoming goals.
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
