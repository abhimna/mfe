export interface Product {
  sku: string
  name: string
  category: string
  stock: number
  price: number
  status: 'in-stock' | 'low' | 'out'
}

export const products: Product[] = [
  { sku: 'A-001', name: 'Wireless Headphones',    category: 'Audio',       stock: 142, price: 89.99,  status: 'in-stock' },
  { sku: 'A-002', name: 'USB-C Hub 7-in-1',       category: 'Accessories', stock: 8,   price: 45.00,  status: 'low'      },
  { sku: 'A-003', name: 'Mechanical Keyboard',     category: 'Input',       stock: 56,  price: 129.00, status: 'in-stock' },
  { sku: 'A-004', name: 'Webcam 4K',              category: 'Video',       stock: 0,   price: 199.99, status: 'out'      },
  { sku: 'A-005', name: 'Laptop Stand Aluminium',  category: 'Accessories', stock: 73,  price: 39.95,  status: 'in-stock' },
  { sku: 'A-006', name: 'Noise-Cancel Earbuds',   category: 'Audio',       stock: 12,  price: 74.99,  status: 'low'      },
  { sku: 'A-007', name: 'Portable SSD 1TB',        category: 'Storage',     stock: 34,  price: 109.00, status: 'in-stock' },
]
