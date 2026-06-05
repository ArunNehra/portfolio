import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="text-center mb-8 text-secondary">Let's Connect - Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        <div className="footer-content glass-panel" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className="footer-brand" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-secondary mb-8">Feel free to reach out directly through any of the channels below.</p>
            <div className="contact-details" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2.5rem',
              marginTop: '1rem'
            }}>
              <div>
                <h4 className="text-accent text-sm font-semibold mb-2">Email</h4>
                <a href="mailto:arun.nehra.007@gmail.com" className="text-primary hover:text-accent transition">arun.nehra.007@gmail.com</a>
              </div>
              <div>
                <h4 className="text-accent text-sm font-semibold mb-2">Phone</h4>
                <a href="tel:+919050861181" className="text-primary hover:text-accent transition">+91-9050861181</a>
              </div>
              <div>
                <h4 className="text-accent text-sm font-semibold mb-2">LinkedIn</h4>
                <a href="https://linkedin.com/in/arunnehra" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition">linkedin.com/in/arunnehra</a>
              </div>
              <div>
                <h4 className="text-accent text-sm font-semibold mb-2">Address</h4>
                <p className="text-primary">Bhiwani, Haryana, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-8">
          <p>&copy; {new Date().getFullYear()} Arun Nehra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
