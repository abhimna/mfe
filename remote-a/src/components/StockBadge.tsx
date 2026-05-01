import styles from './StockBadge.module.css'

type Status = 'in-stock' | 'low' | 'out'

interface Props {
  status: Status
  stock: number
}

const labels: Record<Status, string> = {
  'in-stock': 'In stock',
  low: 'Low stock',
  out: 'Out of stock',
}

const classMap: Record<Status, string> = {
  'in-stock': styles.inStock,
  low: styles.low,
  out: styles.out,
}

export default function StockBadge({ status, stock }: Props) {
  return (
    <span className={`${styles.badge} ${classMap[status]}`}>
      {labels[status]}{status !== 'out' ? ` · ${stock}` : ''}
    </span>
  )
}
