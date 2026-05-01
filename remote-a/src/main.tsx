import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductTable from './components/ProductTable'
import './index.css'

// Standalone preview — lets you develop the MFE in isolation
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <p style={{ fontSize: 12, color: '#888', marginBottom: 16 }}>
        Remote A — standalone dev preview (port 5174)
      </p>
      <ProductTable />
    </div>
  </React.StrictMode>
)
