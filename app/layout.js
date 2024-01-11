import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { CarritoProvider } from '@/context/carritoContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GuitarLA - Home',
  description: 'GuitarLa - Guitar sells and music blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </head>
      <body className={inter.className}>
        <Header />
        <CarritoProvider>
          {children}
        </CarritoProvider>
        <Footer />
      </body>
    </html>
  )
}
