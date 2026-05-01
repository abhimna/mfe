export const monthlySales = [
  { month: 'Oct', eu: 42, na: 31, apac: 18 },
  { month: 'Nov', eu: 58, na: 44, apac: 22 },
  { month: 'Dec', eu: 91, na: 76, apac: 38 },
  { month: 'Jan', eu: 54, na: 39, apac: 24 },
  { month: 'Feb', eu: 67, na: 51, apac: 29 },
  { month: 'Mar', eu: 78, na: 62, apac: 41 },
]

export const recentOrders = [
  { id: '#ORD-8821', customer: 'Lena Brandt',      product: 'Wireless Headphones',  amount: 89.99,  date: '2 min ago',   status: 'processing' },
  { id: '#ORD-8820', customer: 'James Park',        product: 'Mechanical Keyboard',   amount: 129.00, date: '18 min ago',  status: 'shipped'    },
  { id: '#ORD-8819', customer: 'Sofia Andrade',     product: 'Laptop Stand',          amount: 39.95,  date: '1 hr ago',    status: 'delivered'  },
  { id: '#ORD-8818', customer: 'Ravi Menon',        product: 'USB-C Hub',             amount: 45.00,  date: '3 hr ago',    status: 'delivered'  },
  { id: '#ORD-8817', customer: 'Claire Dubois',     product: 'Noise-Cancel Earbuds',  amount: 74.99,  date: '5 hr ago',    status: 'delivered'  },
]

export type OrderStatus = 'processing' | 'shipped' | 'delivered'
