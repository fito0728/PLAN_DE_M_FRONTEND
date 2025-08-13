<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white shadow-lg rounded-2xl w-full max-w-lg p-8">
      <div class="flex items-center gap-3 mb-6">
        <!-- Ícono de finca/granja -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 21v-6a9 9 0 0118 0v6M9 21V9h6v12"
          />
        </svg>

        <h2 class="text-2xl font-bold text-gray-800">
          {{ isEdit ? 'Editar Finca' : 'Registrar Nueva Finca' }}
        </h2>
      </div>

      <form @submit.prevent="guardar" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-600">Nombre</label>
          <input
            v-model="finca.nombre"
            type="text"
            placeholder="Ej: Finca El Progreso"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600">Departamento</label>
          <input
            v-model="finca.departamento"
            type="text"
            placeholder="Ej: Cundinamarca"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-600">Área (ha)</label>
          <input
            v-model.number="finca.area"
            type="number"
            placeholder="Ej: 12"
            class="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <div class="flex justify-end gap-3 pt-4">
          <router-link
            to="/fincas"
            class="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancelar
          </router-link>
          <button
            type="submit"
            class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            {{ isEdit ? 'Guardar Cambios' : 'Crear Finca' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFinca, createFinca, updateFinca } from '../services/fincasService'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const isEdit = computed(() => !!id)

const finca = ref({
  nombre: '',
  departamento: '',
  area: 0,
})

onMounted(async () => {
  if (isEdit.value) {
    const res = await getFinca(id)
    finca.value = res.data
  }
})

async function guardar() {
  if (isEdit.value) {
    await updateFinca(id, finca.value)
  } else {
    await createFinca(finca.value)
  }
  router.push('/fincas')
}
</script>
