import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/auth': 'https://q8na93x6yh.execute-api.ap-south-1.amazonaws.com/Prod',
      '/users': 'https://b2d9i0qp17.execute-api.ap-south-1.amazonaws.com/Prod',
      '/products': 'https://l3stt9u4u6.execute-api.ap-south-1.amazonaws.com/Prod',
      '/orders': 'https://c6lflq1hj2.execute-api.ap-south-1.amazonaws.com/Prod',
      '/payments': 'https://xyfg2t3fg1.execute-api.ap-south-1.amazonaws.com/Prod'
    }
  }
})
