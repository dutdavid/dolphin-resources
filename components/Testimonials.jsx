'use client'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: '👩',
      rating: 5,
      text: 'Prestige Home Surfaces transformed our kitchen beyond our expectations. The granite countertops are stunning and the installation was flawless. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Omondi',
      role: 'Property Developer',
      image: '👨',
      rating: 5,
      text: 'We have used Prestige for multiple projects. Their hardwood flooring is top quality and their team is professional. Best in the business!'
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      role: 'Interior Designer',
      image: '👩',
      rating: 5,
      text: 'I always recommend Prestige to my clients. Their kitchen solutions are modern, durable, and beautifully finished. Great customer service too.'
    },
    {
      id: 4,
      name: 'David Kimani',
      role: 'Restaurant Owner',
      image: '👨',
      rating: 5,
      text: 'The luxury vinyl flooring in our restaurant has held up perfectly for 2 years. Easy to maintain and looks amazing. Worth every shilling!'
    },
    {
      id: 5,
      name: 'Patricia Akinyi',
      role: 'Homeowner',
      image: '👩',
      rating: 5,
      text: 'From consultation to installation, everything was perfect. Our new kitchen island is the centerpiece of our home. Thank you Prestige!'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real feedback from satisfied customers</p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={goToPrevious}>‹</button>
          
          <div className="testimonial-card card">
            <div className="testimonial-image">
              <span className="testimonial-emoji">{testimonials[currentIndex].image}</span>
            </div>
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <p>{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <button className="carousel-btn next" onClick={goToNext}>›</button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}