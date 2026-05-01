import React from 'react'
import ReactDOM from 'react-dom/client'
import KpiCard from './components/KpiCard'
import SalesChart from './components/SalesChart'
import RecentOrders from './components/RecentOrders'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: 900 }}>
      <p style={{ fontSize: 12, color: '#888', marginBottom: 24 }}>
        Remote B — standalone dev preview (port 5175)
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
        <KpiCard label="Revenue · 30d" value="$84,210" trend="+12.4%" positive />
        <KpiCard label="Orders · 30d" value="1,284" trend="+8.1%" positive />
        <KpiCard label="Avg. order value" value="$65.58" trend="-2.3%" positive={false} />
      </div>
      <SalesChart />
      <div style={{ marginTop: 24 }}>
        <RecentOrders />
      </div>
    </div>
  </React.StrictMode>
)
