import styles from './KpiCard.module.css'

interface Props {
  label: string
  value: string
  trend: string
  positive: boolean
}

export default function KpiCard({ label, value, trend, positive }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
      <div className={`${styles.trend} ${positive ? styles.positive : styles.negative}`}>
        {positive ? '▲' : '▼'} {trend} vs last month
      </div>
      <div className={styles.origin}>remote-b · :5175</div>
    </div>
  )
}
