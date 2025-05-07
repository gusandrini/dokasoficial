'use client'
import React, { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import './contato.css'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  const gerarLinkWhatsApp = () => {
    const texto = `Olá, meu nome é ${nome}. Gostaria de dizer: ${mensagem}`
    const textoCodificado = encodeURIComponent(texto)
    return `https://wa.me/5511940219422?text=${textoCodificado}`
  }

  return (
    <div className="contato-container">
      <h1 className="titulo">Fale Conosco</h1>

      <div className="info-contato">
        <p><FaPhone /> (11) 94021-9422</p>
        <p><FaPhone /> (11) 96222-1054</p>
        <p>
          <FaInstagram />
          <a href="https://instagram.com/dokasoficial" target="_blank" rel="noopener noreferrer">
            @dokasoficial
          </a>
        </p>
      </div>


      <form className="formulario">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        ></textarea>
        <a href={gerarLinkWhatsApp()} target="_blank" rel="noopener noreferrer" className="botao-whatsapp">
          <FaWhatsapp /> Enviar pelo WhatsApp
        </a>
      </form>

      <div className="mapa-container">
        <h2 className="subtitulo">Localização</h2>
        <div className="mapa">
          <iframe
            title="Localização no Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0407546476636!2d-46.5340475!3d-23.5652418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cd9474a16d3%3A0x58231a1a22be3312!2sSanto%20Andr%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1683054546264!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contato