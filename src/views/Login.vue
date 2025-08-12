<template>
  <div
    class="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700"
  >
    <div class="bg-white rounded-lg shadow-lg flex overflow-hidden max-w-3xl w-full">
      <!-- Imagen decorativa -->
      <div class="hidden md:block w-1/2 bg-blue-100 flex items-center justify-center">
        <img src="/img/Login (2).png" alt="Login" class="w-3/4" />
      </div>

      <!-- Formulario -->
      <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Iniciar Sesión</h1>

        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              v-model="email"
              placeholder="Ingresa tu correo"
              class="input -compact--input--w-full"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              v-model="password"
              placeholder="Ingresa tu contraseña"
              class="input input--compact--input--w-full"
            />
          </div>

          <button type="submit" class="input input--compact--w-full">Iniciar sesión</button>

          <p v-if="error" class="text-red-500 text-sm text-center mt-2">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
