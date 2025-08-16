<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-green-800 p-6"
  >
    <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-screen overflow-hidden">
      <!-- Banner -->

      <img src="/img/home-icon.png" alt="Inicio" class="w-full h-56 object-cover bg-gray-100" />

      <!-- Contenido -->
      <div class="p-8 text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-4">Bienvenido</h1>
        <p class="text-gray-600 mb-8">
          Página de inicio del proyecto. Explora las opciones y gestiona tu información.
        </p>

        <router-link
          to="/login"
          class="bg-blue-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Ir al Login
        </router-link>
      </div>
    </div>
  </div>
</template>
