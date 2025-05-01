'use client'
import React from 'react'

const Contato = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">Fale Conosco</h1>

      {/* Informações de contato */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Entre em contato</h2>
          <p className="mb-2">WhatsApp: <a href="https://wa.me/5511940219422" className="text-pink-600 underline">(11) 94021-9422</a></p>
          <p className="mb-2">Telefone: (11) 96222-1054</p>
          <p className="mb-2">Email: <a href="mailto:contato@doceencanto.com" className="text-pink-600 underline">contato@doceencanto.com</a></p>
          <p className="mb-2">Endereço: Rua dos Doces, 123 - Santo André, SP</p>
        </div>

        {/* Mapa */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nossa localização</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.660303410637!2d-46.52743968444615!3d-23.581587984669315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42297ffec40d%3A0x8f0d6fdc648e5b49!2sSanto%20Andr%C3%A9%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1684108898801"
            width="100%"
            height="200"
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow"
          />
        </div>
      </div>

      {/* Formulário */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Envie uma mensagem</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium">Nome</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full border border-gray-300 p-2 rounded" required />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium">Mensagem</label>
            <textarea className="w-full border border-gray-300 p-2 rounded h-32" required></textarea>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contato