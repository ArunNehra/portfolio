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
              I am writing to express my interest in a Principal/Senior Software Engineering position. With over 9 years of experience building scalable, high-performance systems across UI architecture, AI, cloud, and DevOps, I am confident in my ability to make a meaningful impact on your team.
            </p>
            
            <p>
              In my current role as Principal Software Engineer at Eptura, I have led UI modernisation initiatives using Monorepo (NX) and Microfrontend architectures, enabling scalable architecture, faster releases, and improved developer experience. I built and scaled a high-performance User Directory & Management system handling 100K+ records with optimised load times and secure access controls.
            </p>

            <p>
              I designed CI/CD pipelines that reduced release cycles from weeks to days, improving deployment reliability with Docker, Kubernetes, and Azure. I also integrated AI-driven workflows using AI-assisted pair programming and built AI Agents with Azure AI Foundry for automation, implementing GenAI/LLM-based solutions with RAG using LangChain/LangGraph.
            </p>
            
            <p>
              My expertise spans GenAI, AI Agents, LLMs, and RAG-based architectures, with hands-on experience in agentic workflows using LangChain/LangGraph and context engineering. I am experienced in AI-assisted pair programming, AI Foundry agent development, and building custom MCPs.
            </p>

            <p>
              I have a strong background in React, TypeScript, Node.js, Go, APIs (GraphQL/REST, BFF), and cloud-native systems (AWS/Azure/GCP, Docker, CI/CD), with a focus on scalability, observability, and SRE practices.
            </p>
            
            <p>
              I am excited about the opportunity to bring my technical expertise and leadership experience to your organization. I would welcome the chance to discuss how my skills and experience align with your team's goals.
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
