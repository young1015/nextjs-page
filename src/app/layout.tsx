import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{backgroundImage:`url("https://eldenring.wiki.fextralife.com/file/Elden-Ring/elden-ring-wiki-guide-walkthrough-background-min.jpg")`}} className={inter.className='bg-fixed'} >
        <Header/>
        {children}
        
        </body>
    </html>
  )
}
