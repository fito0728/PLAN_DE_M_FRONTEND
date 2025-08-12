# Plan de Mejoramiento - ADSI

**Aprendiz:** Adolfo José González Mercado  
**Ficha:** 3066478  
**Programa:** Análisis y Desarrollo de Software - ADSI  
**Fecha:** Agosto 2025

---

## 📘 Cuestionario Técnico Vue 3

---

### 1. ¿Qué es Vue 3 y cuáles son sus principales ventajas frente a otras versiones y frameworks similares?

Vue 3 es un framework progresivo de JavaScript que permite construir interfaces de usuario dinámicas y reactivas para aplicaciones web modernas.  
A diferencia de Vue 2, Vue 3 incorpora mejoras como la **Composition API**, mejor rendimiento, menor consumo de memoria y soporte completo para TypeScript, lo que facilita la escalabilidad y el mantenimiento de proyectos.  

Comparado con frameworks como React o Angular, Vue 3 es más fácil de aprender, requiere menos código para lograr la misma funcionalidad y ofrece una curva de aprendizaje más suave, sin perder potencia ni flexibilidad.

---

### 2. ¿Qué es un componente en Vue y qué partes lo componen?

Un componente en Vue es una unidad reutilizable que representa una parte de la interfaz de usuario.  
Cada componente encapsula su propia lógica, estructura y estilos, lo que permite desarrollar aplicaciones de forma modular.  

Las partes principales de un componente son:
- **`<template>`**: define la estructura HTML que se mostrará.
- **`<script>`**: contiene la lógica y los datos del componente.
- **`<style>`**: define los estilos visuales del componente (pueden ser globales o scoped).

---

### 3. Explica la diferencia entre `ref()` y `reactive()` en Vue 3. ¿Cuándo deberías usar cada uno?

- **`ref()`**: se utiliza para crear variables reactivas que almacenan valores primitivos (números, cadenas, booleanos) o referencias simples.  
  Ejemplo:  
  ```javascript
  const contador = ref(0)
  ```
- **`reactive()`**: se usa para crear objetos o arreglos completos que necesitan reactividad profunda.  
  Ejemplo:  
  ```javascript
  const usuario = reactive({ nombre: 'Ana', edad: 25 })
  ```

**Cuándo usar cada uno:**
- Usa `ref()` para valores simples o cuando quieras acceder a `.value`.
- Usa `reactive()` para objetos o estructuras de datos complejas.

---

### 4. ¿Qué es Vue Router y cómo se implementan rutas protegidas?

**Vue Router** es la librería oficial de Vue para manejar la navegación entre páginas o vistas en una aplicación de una sola página (SPA).  

**Rutas protegidas**: son páginas que solo pueden acceder ciertos usuarios (por ejemplo, si han iniciado sesión). Se implementan usando guardias de navegación, como `beforeEnter` o `router.beforeEach()`.

Ejemplo básico:
```javascript
router.beforeEach((to, from, next) => {
  const autenticado = localStorage.getItem('token')
  if (to.meta.requiereAuth && !autenticado) {
    next('/login')
  } else {
    next()
  }
})
```

---

### 5. ¿Qué es Pinia y por qué se considera una evolución respecto a Vuex?

**Pinia** es la librería oficial de gestión de estado para Vue 3.  
Se considera una evolución de Vuex porque:
- Tiene una API más sencilla y clara.
- Soporta TypeScript de forma nativa.
- Menos código repetitivo.
- Mejor integración con Composition API.
- Es más fácil de depurar y mantener.

---

### 6. ¿Cómo se estructura un proyecto de Vue con buenas prácticas? Menciona carpetas y responsabilidades.

Una estructura recomendada es:

```
src/
│── assets/       # Imágenes, íconos y archivos estáticos
│── components/   # Componentes reutilizables
│── views/        # Vistas o páginas principales
│── router/       # Configuración de rutas (Vue Router)
│── stores/       # Gestión de estado (Pinia)
│── composables/  # Funciones reutilizables con Composition API
│── services/     # Lógica para consumo de APIs
│── App.vue       # Componente raíz
│── main.js/ts    # Punto de entrada de la app
```

---

### 7. ¿Qué es Tailwind CSS y cómo mejora el diseño y desarrollo de interfaces?

**Tailwind CSS** es un framework de utilidades CSS que permite aplicar estilos directamente en las clases HTML, sin necesidad de escribir hojas CSS largas.  

Ventajas:
- Desarrollo rápido con clases predefinidas.
- Diseño responsivo con utilidades adaptativas (`sm:`, `md:`, `lg:`).
- Fácil de personalizar mediante configuración.
- Mantiene estilos consistentes en todo el proyecto.

Ejemplo:
```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Enviar
</button>
```

---

### 8. ¿Qué pasos se deben seguir para consumir una API REST desde una aplicación Vue usando fetch() o axios?

1. **Instalar Axios** (opcional si no usas fetch):
   ```bash
   npm install axios
   ```
2. **Importar la librería**:
   ```javascript
   import axios from 'axios'
   ```
3. **Realizar la petición**:
   ```javascript
   onMounted(async () => {
     const respuesta = await axios.get('https://api.example.com/datos')
     console.log(respuesta.data)
   })
   ```
4. **Con fetch()**:
   ```javascript
   onMounted(async () => {
     const respuesta = await fetch('https://api.example.com/datos')
     const datos = await respuesta.json()
     console.log(datos)
   })
   ```
5. Manejar errores con `try...catch`.
6. Mostrar los datos en la interfaz usando variables reactivas.

---
