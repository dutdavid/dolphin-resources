export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <h1>Premium Home Surfaces</h1>
          <p className="hero-subtitle">
            Transform Your Kitchen & Floors
          </p>
          <p className="hero-description">
            Prestige Home Surfaces specializes in premium flooring and kitchen interior solutions. 
            We combine quality materials with expert craftsmanship to create spaces that last a lifetime.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary">Shop Now</a>
            <a href="#about" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}