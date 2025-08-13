<template>
  <!-- Contenedor principal con padding, fondo gris claro y altura mínima de pantalla completa -->
  <div class="p-6 bg-gray-50 min-h-screen">
    <!-- Encabezado con título "Fincas" y botón para añadir nueva finca -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-extrabold text-gray-800">Fincas</h1>
      <!-- Enlace que redirige a la ruta de creación de nueva finca -->
      <router-link
        to="/fincas/nueva"
        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
      >
        + Nueva Finca
      </router-link>
    </div>

    <!-- Lista de fincas -->
    <ul>
      <!-- Itera sobre el array "fincas" -->
      <li v-for="f in fincas" :key="f.id" class="finca-item">
        <div>
          <!-- Nombre de la finca en negrita -->
          <div style="font-weight: 600">{{ f.nombre }}</div>
          <!-- Departamento y área/hectáreas -->
          <div class="kv-muted">{{ f.departamento }} — {{ f.area ?? f.hectareas }} ha</div>
        </div>

        <!-- Botones de acción: Editar y Eliminar -->
        <div style="display: flex; gap: 8px">
          <!-- Enlace a la ruta de edición de finca -->
          <router-link
            :to="`/fincas/${f.id}/editar`"
            class="btn-outline"
            style="text-decoration: none; padding: 8px 10px"
          >
            Editar
          </router-link>

          <!-- Botón que ejecuta la función "borrar" -->
          <button @click="borrar(f.id)" class="btn-primary">Eliminar</button>
        </div>
      </li>
    </ul>

    <!-- Mensaje cuando no hay fincas -->
    <p v-if="fincas.length === 0" class="text-gray-500 mt-6">No hay fincas registradas.</p>
  </div>
</template>

<script setup>
/* Importa funciones reactivas y eventos del ciclo de vida de Vue */
import { ref, onMounted } from 'vue'

/* Importa funciones para obtener y eliminar fincas desde el servicio */
import { getFincas, deleteFinca } from '../services/fincasService'

/* Variable reactiva que almacena la lista de fincas */
const fincas = ref([])

/**
 * Función para obtener todas las fincas desde la API
 */
async function fetchFincas() {
  const res = await getFincas()
  fincas.value = res.data
}

/**
 * Función para borrar una finca según su ID
 * - Muestra confirmación antes de eliminar
 * - Si se elimina, actualiza la lista
 */
async function borrar(id) {
  const ok = confirm('¿Seguro que deseas eliminar esta finca?')
  if (!ok) return
  await deleteFinca(id)
  await fetchFincas()
}

/* Al montar el componente, se obtienen las fincas */
onMounted(fetchFincas)
</script>
>
