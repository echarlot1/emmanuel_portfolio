import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PDF', '**/*.jpg', '**/*.jpeg', '**/*.png'],
  server: {
    port: 5173,
    open: true,
  },
})