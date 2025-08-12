<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-extrabold text-gray-800">Fincas</h1>
      <router-link
        to="/fincas/nueva"
        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
      >
        + Nueva Finca
      </router-link>
    </div>

    <ul>
      <li v-for="f in fincas" :key="f.id" class="finca-item">
        <div>
          <div style="font-weight: 600">{{ f.nombre }}</div>
          <div class="kv-muted">{{ f.departamento }} — {{ f.area ?? f.hectareas }} ha</div>
        </div>

        <div style="display: flex; gap: 8px">
          <router-link
            :to="`/fincas/${f.id}/editar`"
            class="btn-outline"
            style="text-decoration: none; padding: 8px 10px"
            >Editar</router-link
          >
          <button @click="borrar(f.id)" class="btn-primary">Eliminar</button>
        </div>
      </li>
    </ul>

    <p v-if="fincas.length === 0" class="text-gray-500 mt-6">No hay fincas registradas.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getFincas, deleteFinca } from '../services/fincasService'

const fincas = ref([])

async function fetchFincas() {
  const res = await getFincas()
  fincas.value = res.data
}

async function borrar(id) {
  const ok = confirm('¿Seguro que deseas eliminar esta finca?')
  if (!ok) return
  await deleteFinca(id)
  await fetchFincas()
}

onMounted(fetchFincas)
</script>
