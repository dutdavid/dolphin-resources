export default function About() {
  const whatsappNumber = "254712345678" // Replace with your actual WhatsApp number
  const whatsappMessage = "Hello! I'm interested in Prestige Home Surfaces services."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Prestige Home Surfaces</h2>
            
            <p>
              With over a decade of experience in kitchen and home surface installations, 
              Prestige Home Surfaces has become Nairobi's trusted partner for creating 
              exceptional living spaces.
            </p>

            <p>
              We specialize in transforming ordinary kitchens into extraordinary spaces. 
              From custom cabinetry to premium countertops, our attention to detail and 
              commitment to excellence ensures every project is picture-perfect.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">300+</div>
                <div className="stat-label">Kitchens<br/>Installed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years<br/>Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client<br/>Satisfaction</div>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn-primary">Get a Quote</a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <span className="whatsapp-icon">💬</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop" 
              alt="Luxury Kitchen Interior"
            />
          </div>
        </div>
      </div>
    </section>
  )
}