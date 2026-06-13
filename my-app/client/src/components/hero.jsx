import React from 'react'

function Hero() {
  const scrollToForm = () => {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
        AI & Robotics Summer Workshop
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '32px', color: '#ccc' }}>
        Empower your child with the skills of tomorrow — AI, coding & robotics in a fun, hands-on environment.
      </p>
      <button
        onClick={scrollToForm}
        style={{
          background: '#e94560',
          color: 'white',
          border: 'none',
          padding: '14px 36px',
          fontSize: '1rem',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Enroll Now
      </button>
    </div>
  )
}

export default Hero