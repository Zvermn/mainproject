<script setup>
import ButtonComponent from 'src/components/ButtonComponent.vue'
</script>

<template>
  <button-component>
    <template #content>
      <router-link to="/login">Продолжить</router-link>
    </template>
  </button-component>
</template>
