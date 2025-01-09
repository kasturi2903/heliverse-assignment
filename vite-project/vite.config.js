import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow external access
    port: 3000,        // Use a different port (e.g., 3000)
    strictPort: true,  // Ensure the server only starts if the port is available
  },
})
