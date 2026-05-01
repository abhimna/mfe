import { recentOrders, OrderStatus } from '../data'
import styles from './RecentOrders.module.css'

const statusLabel: Record<OrderStatus, string> = {
  processing: 'Processing',
  shipped: 'Shipped',
  delivered: 'Delivered',
}

export default function RecentOrders() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent orders</h3>
        <span className={styles.origin}>remote-b · :5175</span>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(o => (
              <tr key={o.id}>
                <td><span className={styles.orderId}>{o.id}</span></td>
                <td>{o.customer}</td>
                <td>{o.product}</td>
                <td className={styles.amount}>${o.amount.toFixed(2)}</td>
                <td style={{ color: '#6b7280', fontSize: 12 }}>{o.date}</td>
                <td>
                  <span className={`${styles.badge} ${styles[o.status as OrderStatus]}`}>
                    {statusLabel[o.status as OrderStatus]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
