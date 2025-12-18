import React, { useEffect, useState } from 'react'

export default function App() {
  const [status, setStatus] = useState('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/auth/health')
      .then(r => r.json())
      .then(j => setStatus(j.status || 'ok'))
      .catch(() => setStatus('down'))

    fetch('/auth')
      .then(r => r.json())
      .then(j => setMessage(j.message || JSON.stringify(j)))
      .catch(() => setMessage('error'))
  }, [])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1>Frontend UI</h1>
      <h2>Auth service status: {status}</h2>
      <p>Auth message: {message}</p>
    </div>
  )
}
