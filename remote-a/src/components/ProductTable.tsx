import { useState } from 'react'
import { products } from '../data'
import StockBadge from './StockBadge'
import styles from './ProductTable.module.css'

type SortKey = 'name' | 'stock' | 'price'

export default function ProductTable() {
  const [sort, setSort] = useState<SortKey>('name')
  const [asc, setAsc] = useState(true)

  const sorted = [...products].sort((a, b) => {
    const av = a[sort]
    const bv = b[sort]
    const cmp = typeof av === 'string' ? av.localeCompare(bv as string) : (av as number) - (bv as number)
    return asc ? cmp : -cmp
  })

  const toggleSort = (key: SortKey) => {
    if (sort === key) setAsc(p => !p)
    else { setSort(key); setAsc(true) }
  }

  const arrow = (key: SortKey) => sort === key ? (asc ? ' ↑' : ' ↓') : ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Inventory</h2>
        <span className={styles.origin}>remote-a · :5174</span>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>SKU</th>
              <th style={{ cursor: 'pointer' }} onClick={() => toggleSort('name')}>Product{arrow('name')}</th>
              <th>Category</th>
              <th style={{ cursor: 'pointer' }} onClick={() => toggleSort('price')}>Price{arrow('price')}</th>
              <th style={{ cursor: 'pointer' }} onClick={() => toggleSort('stock')}>Stock{arrow('stock')}</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(p => (
              <tr key={p.sku}>
                <td><span className={styles.sku}>{p.sku}</span></td>
                <td>{p.name}</td>
                <td><span className={styles.category}>{p.category}</span></td>
                <td className={styles.price}>${p.price.toFixed(2)}</td>
                <td>{p.stock}</td>
                <td><StockBadge status={p.status} stock={p.stock} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
