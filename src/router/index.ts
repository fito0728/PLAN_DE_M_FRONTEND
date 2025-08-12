import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import FincasList from '../views/FincasList.vue'
import FincaForm from '../views/FincaForm.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
  { path: '/fincas', component: FincasList },
  { path: '/fincas/nueva', component: FincaForm },
  { path: '/fincas/:id/editar', component: FincaForm, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
