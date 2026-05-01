import { monthlySales } from '../data'
import styles from './SalesChart.module.css'

const MAX = 100
const regions = [
  { key: 'eu',   label: 'Europe',       color: '#7F77DD' },
  { key: 'na',   label: 'N. America',   color: '#5DCAA5' },
  { key: 'apac', label: 'Asia-Pacific',  color: '#EF9F27' },
] as const

export default function SalesChart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>Sales by region · last 6 months</h3>
        <span className={styles.origin}>remote-b · :5175</span>
      </div>
      <div className={styles.chartArea}>
        <div className={styles.legend}>
          {regions.map(r => (
            <div key={r.key} className={styles.legendItem}>
              <span className={styles.dot} style={{ background: r.color }} />
              {r.label}
            </div>
          ))}
        </div>
        <div className={styles.bars}>
          {monthlySales.map(m => (
            <div key={m.month} className={styles.monthGroup}>
              <div className={styles.barStack}>
                {regions.map(r => (
                  <div
                    key={r.key}
                    className={styles.bar}
                    style={{
                      height: `${(m[r.key] / MAX) * 100}%`,
                      background: r.color,
                    }}
                    title={`${r.label}: ${m[r.key]}`}
                  />
                ))}
              </div>
              <span className={styles.monthLabel}>{m.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
