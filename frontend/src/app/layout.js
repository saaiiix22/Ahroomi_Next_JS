


import Footer from '@/components/footer/Footer'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'

export const metadata = {
  title: 'AHroomi',
  description: 'Your app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://setmycart.blob.core.windows.net/smcproduction//3-19-2025/08e7e2b19639443ea33144b34fbcf95a/ahroomiFav.png" type="image/png" />
      </head>
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
