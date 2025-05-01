'use client'
import React, { useState } from 'react'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Enviando...')

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, mensagem }),
    })

    if (res.ok) {
      setStatus('Mensagem enviada com sucesso!')
      setNome('')
      setEmail('')
      setMensagem('')
    } else {
      setStatus('Erro ao enviar mensagem.')
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Fale Conosco</h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="bg-pink-600 text-white px-6 py-2 rounded">
          Enviar
        </button>
        {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
      </form>
    </div>
  )
}

export default Contato