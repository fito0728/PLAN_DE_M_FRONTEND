<template>
  <div class="page-center">
    <div class="card">
      <img
        src="/img/home-icon.png"
        alt="Inicio"
        style="width: 72px; display: block; margin: 0 auto 12px"
      />
      <h1 class="h-title">Bienvenido</h1>
      <p class="kv-muted">
        Página de inicio del proyecto. Explora las opciones y gestiona tu información.
      </p>

      <router-link to="/login" class="btn-primary" style="text-decoration: none"
        >ir al login</router-link
      >
    </div>
  </div>
</template>
