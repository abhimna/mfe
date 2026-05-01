import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remoteA: {
          type: 'module',
          name: 'remoteA',
          entry: 'http://localhost:5174/remoteEntry.js',
        },
        remoteB: {
          type: 'module',
          name: 'remoteB',
          entry: 'http://localhost:5175/remoteEntry.js',
        },
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
      dts: false,
    }),
  ],
  build: {
    target: 'chrome89',
    minify: false,
  },
  server: {
    port: 5173,
    cors: { origin: '*' }
  },
})
