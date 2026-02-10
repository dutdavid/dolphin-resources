export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>Prestige Home Surfaces</h3>
          <p>Your trusted partner for premium kitchen interiors and flooring solutions</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Solutions</h4>
          <ul>
            <li>Kitchen Cabinets</li>
            <li>Countertops</li>
            <li>Hardwood Flooring</li>
            <li>Luxury Vinyl</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>📞 +254 712 345 678</li>
            <li>📧 info@prestigesurfaces.co.ke</li>
            <li>📍 Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Prestige Home Surfaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}