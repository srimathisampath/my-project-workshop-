import React, { useState } from 'react'

function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch('https://my-project-workshop.onrender.com/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('✅ Registered successfully!')
        setForm({ name: '', email: '', phone: '' })
      } else {
        setStatus('❌ ' + data.message)
      }
    } catch {
      setStatus('❌ Server error. Please try again.')
    }
  }

  return (
    <section id="register" style={{ background: '#1a1a2e', maxWidth: '100%', padding: '60px 20px' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ color: 'white' }}>Register Now</h2>
        <input
          name="name" placeholder="Your Name" value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="email" placeholder="Email Address" value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="phone" placeholder="Phone Number" value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        <button onClick={handleSubmit} style={btnStyle}>Submit</button>
        {status && <p style={{ color: '#ccc', marginTop: '12px' }}>{status}</p>}
      </div>
    </section>
  )
}

const inputStyle = {
  width: '100%', padding: '12px', marginBottom: '14px',
  borderRadius: '8px', border: 'none', fontSize: '1rem'
}

const btnStyle = {
  width: '100%', padding: '14px', background: '#e94560',
  color: 'white', border: 'none', borderRadius: '8px',
  fontSize: '1rem', cursor: 'pointer'
}

export default RegistrationForm