import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteA',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductTable': './src/components/ProductTable',
        './StockBadge': './src/components/StockBadge',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
    }),
  ],
  server: {
    port: 5174,
    cors: true,
  },
})
