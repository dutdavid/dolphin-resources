'use client'
import { useState } from 'react'

export default function Checkout({ isOpen, onClose, items, total }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'mpesa'
  })
  const [mpesaPhone, setMpesaPhone] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [transactionRef, setTransactionRef] = useState('')

  const deliveryFee = 500
  const finalTotal = total + deliveryFee

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitInfo = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate M-Pesa STK Push
    setTimeout(() => {
      const ref = 'DRL' + Math.random().toString(36).substr(2, 9).toUpperCase()
      setTransactionRef(ref)
      setIsProcessing(false)
      setOrderComplete(true)
    }, 3000)
  }

  const handleClose = () => {
    setStep(1)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      paymentMethod: 'mpesa'
    })
    setMpesaPhone('')
    setOrderComplete(false)
    setTransactionRef('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>

        {!orderComplete ? (
          <>
            <div className="checkout-header">
              <h2>Checkout</h2>
              <div className="checkout-steps">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Info</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Payment</div>
              </div>
            </div>

            {step === 1 && (
              <form onSubmit={handleSubmitInfo} className="checkout-form">
                <h3>Delivery Information</h3>
                
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="0712345678"
                  />
                </div>

                <div className="form-group">
                  <label>Delivery Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Street, Building, Apartment"
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Nairobi"
                  />
                </div>

                <div className="order-summary">
                  <h4>Order Summary</h4>
                  <div className="summary-items">
                    {items.map((item) => (
                      <div key={item.id} className="summary-item">
                        <span>{item.name} x{item.quantity}</span>
                        <span>KSh {(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="summary-totals">
                    <div className="summary-row">
                      <span>Subtotal:</span>
                      <span>KSh {total.toLocaleString()}</span>
                    </div>
                    <div className="summary-row">
                      <span>Delivery:</span>
                      <span>KSh {deliveryFee.toLocaleString()}</span>
                    </div>
                    <div className="summary-row total">
                      <span>Total:</span>
                      <span>KSh {finalTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-primary full-width">
                  Continue to Payment
                </button>
              </form>
            )}

            {step === 2 && (
              <div className="payment-section">
                <h3>Payment Method</h3>

                <div className="payment-methods">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mpesa"
                      checked={formData.paymentMethod === 'mpesa'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-card">
                      <span className="payment-icon">📱</span>
                      <div>
                        <strong>M-Pesa</strong>
                        <p>Pay with M-Pesa STK Push</p>
                      </div>
                    </div>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-card">
                      <span className="payment-icon">💳</span>
                      <div>
                        <strong>Visa Card</strong>
                        <p>Pay with credit/debit card</p>
                      </div>
                    </div>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                    />
                    <div className="payment-card">
                      <span className="payment-icon">💵</span>
                      <div>
                        <strong>Cash on Delivery</strong>
                        <p>Pay when you receive</p>
                      </div>
                    </div>
                  </label>
                </div>

                {formData.paymentMethod === 'mpesa' && (
                  <form onSubmit={handlePayment} className="mpesa-form">
                    <div className="form-group">
                      <label>M-Pesa Phone Number *</label>
                      <input
                        type="tel"
                        value={mpesaPhone}
                        onChange={(e) => setMpesaPhone(e.target.value)}
                        required
                        placeholder="254712345678"
                        pattern="254[0-9]{9}"
                      />
                      <small>Format: 254XXXXXXXXX</small>
                    </div>

                    <div className="payment-info">
                      <p>💡 You will receive an M-Pesa prompt on your phone</p>
                      <p>💡 Enter your M-Pesa PIN to complete payment</p>
                      <p className="amount-highlight">Amount to pay: KSh {finalTotal.toLocaleString()}</p>
                    </div>

                    {isProcessing ? (
                      <div className="processing">
                        <div className="spinner"></div>
                        <p>Processing payment...</p>
                        <p className="processing-note">Please check your phone for M-Pesa prompt</p>
                      </div>
                    ) : (
                      <div className="payment-buttons">
                        <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                          Back
                        </button>
                        <button type="submit" className="btn-primary">
                          Complete Payment
                        </button>
                      </div>
                    )}
                  </form>
                )}

                {formData.paymentMethod === 'card' && (
                  <div className="payment-placeholder">
                    <p>💳 Card payment integration coming soon!</p>
                    <p>This is a mockup placeholder for demonstration purposes.</p>
                    <div className="payment-buttons">
                      <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                        Back
                      </button>
                      <button className="btn-primary" onClick={handlePayment}>
                        Simulate Payment
                      </button>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'cod' && (
                  <div className="payment-placeholder">
                    <p>💵 Cash on Delivery selected</p>
                    <p>Pay KSh {finalTotal.toLocaleString()} when you receive your order.</p>
                    <div className="payment-buttons">
                      <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
                        Back
                      </button>
                      <button className="btn-primary" onClick={handlePayment}>
                        Confirm Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="order-success">
            <div className="success-icon">✓</div>
            <h2>Order Confirmed!</h2>
            <p className="success-message">Thank you for your order</p>
            
            <div className="order-details">
              <div className="detail-row">
                <span>Transaction Ref:</span>
                <strong>{transactionRef}</strong>
              </div>
              <div className="detail-row">
                <span>Payment Method:</span>
                <strong>{formData.paymentMethod === 'mpesa' ? 'M-Pesa' : formData.paymentMethod === 'card' ? 'Visa Card' : 'Cash on Delivery'}</strong>
              </div>
              <div className="detail-row">
                <span>Total Amount:</span>
                <strong>KSh {finalTotal.toLocaleString()}</strong>
              </div>
              <div className="detail-row">
                <span>Delivery To:</span>
                <strong>{formData.city}</strong>
              </div>
            </div>

            <div className="success-info">
              <p>📧 Order confirmation sent to {formData.email}</p>
              <p>📱 We'll call you at {formData.phone} for delivery coordination</p>
              <p>🚚 Expected delivery: 2-3 business days</p>
            </div>

            <button className="btn-primary full-width" onClick={handleClose}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}