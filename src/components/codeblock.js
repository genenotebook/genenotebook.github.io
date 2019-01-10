import React from 'react';

function CodeBlock({ children }){
  return <blockquote style={{ maxWidth: 450, margin: 'auto' }}>
    <pre className='has-background-dark has-text-white is-family-monospace'>
      { children }
    </pre>
  </blockquote>
}

export default CodeBlock