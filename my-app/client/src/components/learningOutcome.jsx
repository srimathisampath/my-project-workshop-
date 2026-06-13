import React from 'react'

function LearningOutcomes() {
  const outcomes = [
    'Understand the basics of Artificial Intelligence',
    'Build simple robots using block-based coding',
    'Learn Python fundamentals through fun projects',
    'Develop logical thinking and problem-solving skills',
    'Create a mini AI project by the end of the workshop',
  ]

  return (
    <section style={{ background: '#f9f9f9', maxWidth: '100%', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2>Learning Outcomes</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {outcomes.map((point, i) => (
            <li key={i} style={{
              padding: '12px 0',
              borderBottom: '1px solid #eee',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ color: '#e94560', fontWeight: 'bold' }}>✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default LearningOutcomes