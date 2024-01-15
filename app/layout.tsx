import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './header'
import Nav from './nav'
import Home from './home'
import Footer from './footer'
//import { LoadingScreen } from './loadingScreen';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VSCP',
  description: 'Vash C. Puno | Portfolio',
  authors: [{ name: "Vash C. Puno", url: "https://www.facebook.com/vashyyy" }],
  keywords: ['Vash', 'Puno', 'Portfolio', 'Web Development', 'Programming', 'Cybersecurity'],
  icons: {
    icon: '/vscp.ico',
  }
}

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Header/>
        <Nav/>
        <Home/>
        <Footer/>
        {/*<LoadingScreen />*/}
      </body>
    </html>
  )
}