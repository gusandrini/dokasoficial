import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Dokas',
  description: 'Loja de doces e sobremesas',
}

type LayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}