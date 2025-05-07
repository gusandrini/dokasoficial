'use client'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (

    <footer className="bg-pink-200 text-gray-800 py-10 mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Siga-nos</h3>
              <div className="flex flex-col space-y-2">
                <a href="https://instagram.com/sualojinha" target="_blank" className="hover:text-pink-600">Instagram</a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-600">
            © 2025 Dokas. Todos os direitos reservados.
          </div>
        </footer>
    
  )
}

export default Footer