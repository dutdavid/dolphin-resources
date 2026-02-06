import './globals.css'

export const metadata = {
  title: 'Dolphin Resources Limited',
  description: 'Excellence Interior Decor & Prestige Home Surfaces',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}