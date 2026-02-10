export default function About() {
  return (
    <section id="about" className="branches-section">
      <div className="container">
        <div className="section-header">
          <h2 className="fade-in-up">About Prestige Home Surfaces</h2>
          <p className="fade-in-up">Your trusted partner for kitchen interiors and flooring solutions</p>
        </div>

        <div className="branches-grid">
          <div className="branch-card card fade-in-up">
            <div className="branch-header" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
              <div className="branch-icon">🏡</div>
              <h3>Premium Flooring</h3>
              <p>Durable & Beautiful Surfaces</p>
            </div>
            <div className="branch-body">
              <div className="features-list">
                <h4>Our Flooring Solutions</h4>
                <ul>
                  <li>✓ Hardwood Flooring</li>
                  <li>✓ Luxury Vinyl Planks</li>
                  <li>✓ Ceramic & Porcelain Tiles</li>
                  <li>✓ Laminate Flooring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="branch-card card fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="branch-header" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
              <div className="branch-icon">🍳</div>
              <h3>Kitchen Interiors</h3>
              <p>Modern & Functional Designs</p>
            </div>
            <div className="branch-body">
              <div className="features-list">
                <h4>Kitchen Solutions</h4>
                <ul>
                  <li>✓ Custom Cabinets</li>
                  <li>✓ Granite Countertops</li>
                  <li>✓ Designer Backsplash</li>
                  <li>✓ Kitchen Islands</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center', maxWidth: '800px', margin: '60px auto 0' }}>
          <h3 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '28px' }}>Why Choose Us</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', background: 'var(--light)', borderRadius: '10px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>⭐</div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>Quality Materials</strong>
              <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Only the best products</p>
            </div>
            <div style={{ padding: '20px', background: 'var(--light)', borderRadius: '10px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔧</div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>Expert Installation</strong>
              <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Professional craftsmen</p>
            </div>
            <div style={{ padding: '20px', background: 'var(--light)', borderRadius: '10px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>💯</div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>Warranty Protection</strong>
              <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Peace of mind guarantee</p>
            </div>
            <div style={{ padding: '20px', background: 'var(--light)', borderRadius: '10px' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🎨</div>
              <strong style={{ display: 'block', marginBottom: '5px' }}>Free Consultation</strong>
              <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Design support included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}