'use client'
import React, { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [mensagem, setMensagem] = useState('')

  const gerarLinkWhatsApp = () => {
    const texto = `Olá, meu nome é ${nome}. Gostaria de dizer: ${mensagem}`
    const textoCodificado = encodeURIComponent(texto)
    return `https://wa.me/5511940219422?text=${textoCodificado}`
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 text-gray-800">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Fale Conosco</h1>

      {/* Informações de contato */}
      <div className="mb-6 grid gap-2">
        <p className="flex items-center gap-2"><FaMapMarkerAlt /> Rua das Delícias, 123 - Santo André, SP</p>
        <p className="flex items-center gap-2"><FaClock /> Atendimento: Seg a Sáb das 10h às 18h</p>
        <p className="flex items-center gap-2"><FaPhone /> (11) 94021-9422</p>
        <p className="flex items-center gap-2">
          <FaInstagram />
          <a href="https://instagram.com/sualoja" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
            @sualoja
          </a>
        </p>
      </div>

      {/* Mini mapa do Google Maps */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-pink-600 mb-2">Localização</h2>
        <div className="w-full h-64 rounded overflow-hidden border">
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

      {/* Formulário para mensagem via WhatsApp */}
      <form className="grid gap-4 mb-6">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="border p-2 rounded h-32"
          required
        ></textarea>
        <a
          href={gerarLinkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded flex items-center justify-center gap-2 transition"
        >
          <FaWhatsapp size={20} /> Enviar pelo WhatsApp
        </a>
      </form>
    </div>
  )
}

export default Contato