


import Footer from '@/components/footer/Footer'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'

export const metadata = {
  title: 'Ahroomi',
  description: 'Your app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='navbar'>
          <Navbar />
        </div>
        {/* <main className="min-h-screen">{children}</main> */}
        <main className="h-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
