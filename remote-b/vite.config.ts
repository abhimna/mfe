import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteB',
      filename: 'remoteEntry.js',
      exposes: {
        './KpiCard': './src/components/KpiCard',
        './SalesChart': './src/components/SalesChart',
        './RecentOrders': './src/components/RecentOrders',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
    }),
  ],
  server: {
    port: 5175,
    cors: true,
  },
})
