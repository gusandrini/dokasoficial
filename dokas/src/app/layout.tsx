import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

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
      <body>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        <footer>
          {/* Rodapé opcional */}
        </footer>
      </body>
    </html>
  )
}
