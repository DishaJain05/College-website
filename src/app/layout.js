import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
      <Navbar />
      {children}
      <div className='footer'>
      <Footer />
      </div>
      </div>
      </body>
    </html>
  )
}