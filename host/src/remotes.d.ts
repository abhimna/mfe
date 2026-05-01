// Type shims for Remote A's exposed modules.
// These are only used by the TypeScript compiler — at runtime the real
// components are fetched from localhost:5174.

declare module 'remoteA/ProductTable' {
  const ProductTable: React.ComponentType
  export default ProductTable
}

declare module 'remoteA/StockBadge' {
  interface Props { status: 'in-stock' | 'low' | 'out'; stock: number }
  const StockBadge: React.ComponentType<Props>
  export default StockBadge
}

declare module 'remoteB/KpiCard' {
  interface Props { label: string; value: string; trend: string; positive: boolean }
  const KpiCard: React.ComponentType<Props>
  export default KpiCard
}

declare module 'remoteB/SalesChart' {
  const SalesChart: React.ComponentType
  export default SalesChart
}

declare module 'remoteB/RecentOrders' {
  const RecentOrders: React.ComponentType
  export default RecentOrders
}
