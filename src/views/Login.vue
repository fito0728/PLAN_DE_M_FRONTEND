<template>
  <div
    class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700"
  >
    <div class="bg-white rounded-xl shadow-lg flex overflow-hidden max-w-3xl w-full">
      <!-- Imagen decorativa -->
      <div class="hidden md:flex w-1/2 bg-blue-50 items-center justify-center">
        <img src="/img/Login (2).png" alt="Login" class="w-3/4 drop-shadow-md" />
      </div>

      <!-- Formulario -->
      <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <!-- Título -->
        <h1
          class="text-3xl font-extrabold text-gray-800 mb-6 flex items-center justify-center gap-2"
        >
          <LockClosedIcon class="w-7 h-7 text-blue-600" />
          Iniciar Sesión
        </h1>

        <!-- Formulario -->
        <form @submit.prevent="login" class="space-y-5">
          <!-- Campo email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <div class="relative">
              <EnvelopeIcon class="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                v-model="email"
                placeholder="Ingresa tu correo"
                class="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <!-- Campo contraseña -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div class="relative">
              <KeyIcon class="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="password"
                v-model="password"
                placeholder="Ingresa tu contraseña"
                class="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <!-- Botón -->
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-center gap-2"
          >
            <ArrowRightOnRectangleIcon class="w-5 h-5" />
            Iniciar sesión
          </button>

          <!-- Error -->
          <p v-if="error" class="text-red-500 text-sm text-center mt-2">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  LockClosedIcon,
  EnvelopeIcon,
  KeyIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/vue/24/solid'

export default {
  components: {
    LockClosedIcon,
    EnvelopeIcon,
    KeyIcon,
    ArrowRightOnRectangleIcon,
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      try {
        const res = await fetch(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`,
        )
        const data = await res.json()

        if (data.length > 0) {
          alert('✅ Login exitoso')
          this.error = ''
          this.$router.push('/fincas')
        } else {
          this.error = '❌ Usuario o contraseña incorrectos'
        }
      } catch (err) {
        console.error(err)
        this.error = 'Error al conectar con el servidor'
      }
    },
  },
}
</script>
