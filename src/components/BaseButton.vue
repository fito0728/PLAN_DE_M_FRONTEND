
<template>
  <button :class="computedClass" @click="$emit('click')" :type="type">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' }
})
import { computed } from 'vue'
const computedClass = computed(() => props.variant === 'primary' ? 'btn-primary' : 'btn-outline')
</script>
