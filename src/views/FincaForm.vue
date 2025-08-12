<template>
  <div class="p-6 max-w-lg mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-center">
      {{ isEdit ? 'Editar Finca' : 'Nueva Finca' }}
    </h2>

    <form
      @submit.prevent="guardar"
      style="margin-top: 16px; display: flex; flex-direction: column; gap: 12px"
    >
      <div>
        <label class="kv-muted">Nombre</label>
        <input v-model="finca.nombre" class="input w-compact" required />
      </div>

      <div>
        <label class="kv-muted">Departamento</label>
        <input v-model="finca.departamento" class="input w-compact" required />
      </div>

      <div style="display: flex; gap: 12px; align-items: center">
        <div>
          <label class="kv-muted">Área (ha)</label>
          <input v-model.number="finca.area" type="number" class="input" style="width: 120px" />
        </div>
        <div style="margin-left: auto; display: flex; gap: 8px">
          <button class="btn-primary" type="submit">{{ isEdit ? 'Guardar' : 'Crear' }}</button>
          <router-link
            to="/fincas"
            class="btn-outline"
            style="text-decoration: none; padding: 10px 14px; border-radius: 8px"
            >Cancelar</router-link
          >
        </div>
      </div>
    </form>
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
