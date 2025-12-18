import { defineConfig } from 'vite'
import react from  '@vitejs/plugin-react' 
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portofolio_prak8_Devipuspa_060/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
