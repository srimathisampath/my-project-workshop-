import React from 'react'

function WorkshopDetails() {
  const details = [
    { label: 'Age Group', value: '8–14 Years' },
    { label: 'Duration', value: '4 Weeks' },
    { label: 'Mode', value: 'Online' },
    { label: 'Fee', value: '₹2,999' },
    { label: 'Start Date', value: '15 July 2026' },
  ]

  return (
    <section>
      <h2>Workshop Details</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {details.map((item) => (
          <div key={item.label} style={{
            background: '#f4f4f4',
            borderRadius: '10px',
            padding: '20px 30px',
            minWidth: '150px',
            flex: '1'
          }}>
            <p style={{ color: '#888', fontSize: '0.85rem' }}>{item.label}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkshopDetails