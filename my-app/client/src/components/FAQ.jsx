import React, { useState } from 'react'

const faqs = [
  {
    question: 'Who can join this workshop?',
    answer: 'Any child between 8 to 14 years of age can join. No prior coding experience is required.'
  },
  {
    question: 'What do I need to attend?',
    answer: 'Just a laptop or desktop with a stable internet connection. All software used is free.'
  },
  {
    question: 'Will there be a certificate?',
    answer: 'Yes! Every participant who completes the workshop will receive a digital certificate.'
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <div key={i} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '12px',
          overflow: 'hidden'
        }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '16px',
              background: open === i ? '#1a1a2e' : '#fff',
              color: open === i ? '#fff' : '#333',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {faq.question}
          </button>
          {open === i && (
            <p style={{ padding: '16px', background: '#f9f9f9' }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </section>
  )
}

export default FAQ