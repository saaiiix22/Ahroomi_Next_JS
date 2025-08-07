


import Footer from '@/components/footer/Footer'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'

export const metadata = {
  title: 'My App',
  description: 'Your app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
