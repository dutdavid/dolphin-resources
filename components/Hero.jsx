export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <h1>Transform Your Space</h1>
          <p className="hero-subtitle">
            Premium Interior Decor & Home Surface Solutions
          </p>
          <p className="hero-description">
            Dolphin Resources Limited brings you two specialized branches for all your interior needs - 
            Excellence Interior Decor for events & interiors, and Prestige Home Surfaces for kitchen & flooring solutions.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary">Shop Now</a>
            <a href="#branches" className="btn-secondary">Our Branches</a>
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