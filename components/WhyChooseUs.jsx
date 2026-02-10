export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Experience excellence in every project</p>
        </div>

        <div className="why-choose-grid">
          <div className="why-choose-card card fade-in-up">
            <div className="why-choose-icon">⭐</div>
            <h3>Quality Materials</h3>
            <p>We use only premium imported materials that stand the test of time</p>
          </div>

          <div className="why-choose-card card fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="why-choose-icon">🔧</div>
            <h3>Expert Installation</h3>
            <p>Our skilled craftsmen ensure perfect installation every time</p>
          </div>

          <div className="why-choose-card card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="why-choose-icon">💯</div>
            <h3>Warranty Protection</h3>
            <p>Full warranty coverage for peace of mind on all installations</p>
          </div>

          <div className="why-choose-card card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="why-choose-icon">🎨</div>
            <h3>Custom Design</h3>
            <p>Tailored solutions designed specifically for your space and style</p>
          </div>

          <div className="why-choose-card card fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="why-choose-icon">💰</div>
            <h3>Best Value</h3>
            <p>Competitive pricing without compromising on quality</p>
          </div>

          <div className="why-choose-card card fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="why-choose-icon">⏱️</div>
            <h3>Timely Delivery</h3>
            <p>We respect your time and complete projects on schedule</p>
          </div>
        </div>
      </div>
    </section>
  )
}