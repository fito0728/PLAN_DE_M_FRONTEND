// src/services/fincasService.js
import api from './api'

export const getFincas = () => api.get('/fincas')
export const getFinca = (id) => api.get(`/fincas/${id}`)
export const createFinca = (payload) => api.post('/fincas', payload)
export const updateFinca = (id, payload) => api.put(`/fincas/${id}`, payload)
export const deleteFinca = (id) => api.delete(`/fincas/${id}`)
