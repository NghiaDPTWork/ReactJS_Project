import "./Footer.css";

function Footer() {
  return (
    <main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press Kit</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Brand.  All Rights Reserved.<br /> From: Tr.Nghĩa</p>
        </div>
      </footer>
    </main>
  );
}

export default Footer;
