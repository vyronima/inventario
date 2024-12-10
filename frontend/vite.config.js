<<<<<<< HEAD
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Asegúrate de que el valor sea correcto para despliegues locales
  server: {
    proxy: {
      '/productos': 'http://localhost:3000',
    },
  },
})
=======
module.exports = {
    publicPath: '/',
  };
>>>>>>> dfaa3c09dcf4b7fdd78829a8bc0215ccfa77f6fb
