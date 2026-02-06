export default function Services() {
  const services = [
    {
      icon: '🎨',
      title: 'Interior Design',
      description: 'Professional design consultation for your space'
    },
    {
      icon: '🏠',
      title: 'Home Renovation',
      description: 'Complete home transformation services'
    },
    {
      icon: '🪑',
      title: 'Furniture Supply',
      description: 'Quality furniture for every room'
    },
    {
      icon: '💡',
      title: 'Lighting Solutions',
      description: 'Modern and traditional lighting options'
    },
    {
      icon: '🎪',
      title: 'Event Decoration',
      description: 'Make your events memorable'
    },
    {
      icon: '🔧',
      title: 'Installation Services',
      description: 'Professional installation and setup'
    }
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions for all your interior needs</p>
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