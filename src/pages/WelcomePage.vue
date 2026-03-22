<script setup>
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue'
</script>

<template>
  <button-component
    :title="'Продолжить'"
    :to-path="'/auth-phone'"
    class="btn-primary"
  />
</template>
