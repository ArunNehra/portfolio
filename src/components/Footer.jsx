import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="text-center mb-8 text-secondary">Let's Connect - Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        <div className="footer-content glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="footer-brand" style={{ width: '100%', textAlign: 'center' }}>
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <p className="text-secondary mb-8" style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Feel free to reach out directly through any of the channels below.
            </p>
            <div className="contact-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              width: '100%'
            }}>
              <a href="mailto:arun.nehra.007@gmail.com" className="contact-card">
                <div className="contact-icon">📧</div>
                <h4 className="contact-title">Email</h4>
                <span className="contact-value">arun.nehra.007@gmail.com</span>
              </a>
              <a href="tel:+919050861181" className="contact-card">
                <div className="contact-icon">📞</div>
                <h4 className="contact-title">Phone</h4>
                <span className="contact-value">+91-9050861181</span>
              </a>
              <a href="https://linkedin.com/in/arunnehra" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">💼</div>
                <h4 className="contact-title">LinkedIn</h4>
                <span className="contact-value">linkedin.com/in/arunnehra</span>
              </a>
              <div className="contact-card no-link">
                <div className="contact-icon">📍</div>
                <h4 className="contact-title">Location</h4>
                <span className="contact-value">Gurugram, Haryana, India</span>
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
