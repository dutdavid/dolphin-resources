export default function Services() {
  const services = [
    {
      icon: '🔨',
      title: 'Kitchen Installation',
      description: 'Complete kitchen setup and installation services'
    },
    {
      icon: '🪵',
      title: 'Flooring Installation',
      description: 'Expert floor laying and finishing'
    },
    {
      icon: '🎨',
      title: 'Design Consultation',
      description: 'Free professional design advice'
    },
    {
      icon: '📐',
      title: 'Custom Measurements',
      description: 'Precise on-site measurements'
    },
    {
      icon: '🛠️',
      title: 'Repair & Maintenance',
      description: 'Post-installation support'
    },
    {
      icon: '💎',
      title: 'Premium Materials',
      description: 'High-quality products guaranteed'
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for kitchens and flooring</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}