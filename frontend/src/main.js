import { createApp } from 'vue'
import ElmentPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import 'bootstrap'; // Scripts de Bootstrap
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.use(ElmentPlus)
app.mount('#app')
