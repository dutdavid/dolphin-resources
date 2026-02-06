'use client'
import { useState } from 'react'

export default function BranchCards() {
  const [selectedBranch, setSelectedBranch] = useState(null)

  const branches = [
    {
      id: 1,
      name: 'Excellence Interior Decor',
      tagline: 'Event & Interior Decor Supplies',
      icon: '🎨',
      image: '/images/branches/excellence-interior.jpg',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: [
        'Event Decorations',
        'Curtains & Drapes',
        'Wall Art & Decor',
        'Furniture Accessories',
        'Lighting Solutions',
        'Custom Design Services'
      ],
      benefits: [
        'Professional event planning support',
        'Custom color matching',
        'Installation services available',
        'Bulk order discounts',
        'Latest design trends'
      ],
      description: 'Excellence Interior Decor specializes in transforming spaces for events and homes. From elegant drapery to stunning centerpieces, we provide everything needed to create memorable experiences.'
    },
    {
      id: 2,
      name: 'Prestige Home Surfaces',
      tagline: 'Kitchen Interiors & Flooring',
      icon: '🏡',
      image: '/images/branches/prestige-surfaces.jpg',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: [
        'Premium Flooring',
        'Kitchen Cabinets',
        'Countertops',
        'Backsplash Tiles',
        'Hardware & Fixtures',
        'Complete Kitchen Makeovers'
      ],
      benefits: [
        'Durable materials',
        'Expert installation',
        'Warranty protection',
        'Free design consultation',
        '3D visualization available'
      ],
      description: 'Prestige Home Surfaces offers premium flooring and kitchen interior solutions. We combine quality materials with expert craftsmanship to create spaces that last a lifetime.'
    }
  ]

  return (
    <section id="branches" className="branches-section">
      <div className="container">
        <div className="section-header">
          <h2 className="fade-in-up">Our Branches</h2>
          <p className="fade-in-up">Two specialized divisions serving all your interior needs</p>
        </div>

        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div 
              key={branch.id}
              className="branch-card card fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="branch-image-container">
                <img 
                  src={branch.image} 
                  alt={branch.name}
                  className="branch-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div 
                  className="branch-header"
                  style={{ background: branch.gradient, display: 'none' }}
                >
                  <div className="branch-icon">{branch.icon}</div>
                  <h3>{branch.name}</h3>
                  <p>{branch.tagline}</p>
                </div>
              </div>

              <div className="branch-body">
                <h3 className="branch-title">{branch.name}</h3>
                <p className="branch-tagline">{branch.tagline}</p>
                
                <div className="features-list">
                  <h4>Our Services</h4>
                  <ul>
                    {branch.features.slice(0, 4).map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="btn-primary"
                  onClick={() => setSelectedBranch(branch)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedBranch && (
        <div className="modal-overlay" onClick={() => setSelectedBranch(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedBranch(null)}
            >
              ×
            </button>

            <div className="modal-image-header">
              <img 
                src={selectedBranch.image} 
                alt={selectedBranch.name}
                className="modal-branch-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div 
                className="modal-header"
                style={{ background: selectedBranch.gradient, display: 'none' }}
              >
                <div className="modal-icon">{selectedBranch.icon}</div>
                <h2>{selectedBranch.name}</h2>
                <p>{selectedBranch.tagline}</p>
              </div>
            </div>

            <div className="modal-body">
              <p className="branch-description">{selectedBranch.description}</p>

              <div className="modal-section">
                <h3>Our Services</h3>
                <div className="features-grid">
                  {selectedBranch.features.map((feature, i) => (
                    <div key={i} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Why Choose Us</h3>
                <ul className="benefits-list">
                  {selectedBranch.benefits.map((benefit, i) => (
                    <li key={i}>⭐ {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <a href="#products" className="btn-primary" onClick={() => setSelectedBranch(null)}>
                  View Products
                </a>
                <a href="#contact" className="btn-secondary" onClick={() => setSelectedBranch(null)}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}