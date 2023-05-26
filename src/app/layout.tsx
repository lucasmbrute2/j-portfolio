import { ReactNode } from 'react'
import './globals.css'
import { Roboto, Poppins } from 'next/font/google'
import Header from '@/components/header'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Jonathan Rodrigues',
  description: 'Instrutor e personal Jonathan Rodrigues',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${poppins.variable} h-screen bg-primary-background-color`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
