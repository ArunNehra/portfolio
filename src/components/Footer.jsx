import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="text-center mb-8 text-secondary">Let's Connect - Have a project in mind or want to discuss opportunities? I'd love to hear from you.</p>
        <div className="footer-content glass-panel">
          <div className="footer-brand flex-1">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <div className="contact-details space-y-4">
              <div>
                <h4 className="text-accent text-sm font-semibold">Email</h4>
                <a href="mailto:arun.nehra.007@gmail.com" className="text-primary hover:text-accent transition">arun.nehra.007@gmail.com</a>
              </div>
              <div>
                <h4 className="text-accent text-sm font-semibold">Phone</h4>
                <a href="tel:+919050861181" className="text-primary hover:text-accent transition">+91-9050861181</a>
              </div>
              <div>
                <h4 className="text-accent text-sm font-semibold">LinkedIn</h4>
                <a href="https://linkedin.com/in/arunnehra" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition">linkedin.com/in/arunnehra</a>
              </div>
              <div>
                <h4 className="text-accent text-sm font-semibold">Address</h4>
                <p className="text-primary">21, New Bharat Nagar, Bhiwani, Haryana</p>
              </div>
            </div>
          </div>
          <div className="footer-form flex-1">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="form-group">
                 <label>Your Name</label>
                 <input type="text" placeholder="John Doe" className="form-control" />
               </div>
               <div className="form-group">
                 <label>Email</label>
                 <input type="email" placeholder="john@example.com" className="form-control" />
               </div>
               <div className="form-group">
                 <label>Message</label>
                 <textarea placeholder="Hello..." className="form-control" rows="4"></textarea>
               </div>
               <button type="submit" className="btn-primary w-full mt-4">Send Message</button>
            </form>
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
