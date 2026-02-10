export default function WhatsAppFloat() {
  const whatsappNumber = "254712345678" // Replace with your actual WhatsApp number
  const whatsappMessage = "Hello! I'm interested in Prestige Home Surfaces services."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-float-icon">💬</span>
    </a>
  )
}