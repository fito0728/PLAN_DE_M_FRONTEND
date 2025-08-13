<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- Encabezado -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
      <h1 class="text-4xl font-extrabold text-gray-800 tracking-tight flex items-center gap-2">
        <HomeIcon class="w-8 h-8 text-green-600" />
        Fincas Registradas
      </h1>
      <router-link
        to="/fincas/nueva"
        class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold px-6 py-2 rounded-lg shadow-md"
      >
        <PlusCircleIcon class="w-5 h-5" />
        Nueva Finca
      </router-link>
    </div>

    <!-- Lista de fincas -->
    <div v-if="fincas.length > 0" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="f in fincas"
        :key="f.id"
        class="bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-200 p-5 flex flex-col justify-between"
      >
        <!-- Info finca -->
        <div>
          <h2 class="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2">
            <MapPinIcon class="w-5 h-5 text-blue-500" />
            {{ f.nombre }}
          </h2>
          <p class="text-gray-500 text-sm flex items-center gap-2">
            <GlobeAltIcon class="w-4 h-4 text-gray-400" />
            {{ f.departamento }} — {{ f.area ?? f.hectareas }} ha
          </p>
        </div>

        <!-- Botones -->
        <div class="mt-4 flex gap-3">
          <router-link
            :to="`/fincas/${f.id}/editar`"
            class="flex-1 inline-flex items-center justify-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors px-4 py-2 rounded-lg font-medium"
          >
            <PencilSquareIcon class="w-5 h-5" />
            Editar
          </router-link>
          <button
            @click="borrar(f.id)"
            class="flex-1 inline-flex items-center justify-center gap-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 rounded-lg font-medium"
          >
            <TrashIcon class="w-5 h-5" />
            Eliminar
          </button>
        </div>
      </div>
    </div>

    <!-- Mensaje vacío -->
    <p v-else class="text-gray-500 mt-8 text-center text-lg flex items-center justify-center gap-2">
      <ExclamationCircleIcon class="w-6 h-6 text-gray-400" />
      No hay fincas registradas.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getFincas, deleteFinca } from '../services/fincasService'
import {
  HomeIcon,
  PlusCircleIcon,
  MapPinIcon,
  GlobeAltIcon,
  PencilSquareIcon,
  TrashIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/solid'

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
