'use client'
import { useState, useEffect } from 'react'

export default function Navbar({ cartCount, onCartClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <h2>Prestige Home Surfaces</h2>
          <p>Kitchen & Flooring Solutions</p>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
          <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          <li>
            <button className="cart-btn" onClick={onCartClick}>
              🛒 Cart
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}