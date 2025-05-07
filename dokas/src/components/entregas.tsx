'use client'
import React from 'react'
import { FaStore, FaHandshake } from 'react-icons/fa'
import './entrega.css'

const Entrega = () => {
  return (
    <div className="entrega-container">
      <h1 className="entrega-titulo">Entrega & Retirada</h1>

      <div className="entrega-opcao">
        <FaHandshake size={32} color="#db2777" />
        <div>
          <h2>Entrega Combinada</h2>
          <p>Após a compra, entraremos em contato para combinar o melhor horário e local para entrega com você.</p>
        </div>
      </div>

      <div className="entrega-opcao">
        <FaStore size={32} color="#db2777" />
        <div>
          <h2>Retirada no Local</h2>
          <p>Você também pode optar por retirar seu pedido em nosso ponto de apoio. O endereço será enviado pelo WhatsApp após a confirmação do pedido.</p>
        </div>
      </div>
    </div>
  )
}

export default Entrega