import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// IMPORTAR ESTILOS - asegúrate que estas rutas existen
import './styles/index.css' // Tailwind (si existe)
import './styles/custom.css' // CSS alternativo / complementario (nosotros lo crearemos)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
