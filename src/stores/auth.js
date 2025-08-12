// src/stores/auth.js
import { defineStore } from 'pinia'
import api from '../services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),
  getters: {
    isAuthenticated: state => !!state.token
  },
  actions: {
    async login(credentials) {
      // ejemplo: { email, password }
      const res = await api.post('/auth/login', credentials)
      this.token = res.data.token
      this.user = res.data.user
      localStorage.setItem('token', this.token)
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
