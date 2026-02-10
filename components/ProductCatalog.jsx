'use client'
import { useState } from 'react'
import { products } from '@/data/products'

export default function ProductCatalog({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [notification, setNotification] = useState('')

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'flooring', name: 'Flooring', count: products.filter(p => p.category === 'flooring').length },
    { id: 'kitchen', name: 'Kitchen', count: products.filter(p => p.category === 'kitchen').length }
  ]

  const handleAddToCart = (product) => {
    addToCart(product)
    setNotification(`${product.name} added to cart!`)
    setTimeout(() => setNotification(''), 3000)
  }

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Explore our curated selection of premium products</p>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category.id}
              className={selectedCategory === category.id ? 'active' : ''}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div 
                  className="product-placeholder" 
                  style={{ background: product.color, display: 'none' }}
                >
                  <span className="product-emoji">{product.emoji}</span>
                </div>
                <span className="product-branch-badge">
                  {product.category === 'flooring' ? 'Flooring' : 'Kitchen'}
                </span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">KSh {product.price.toLocaleString()}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}
      </div>
    </section>
  )
}