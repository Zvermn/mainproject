<script setup>
import InputComponent from 'components/InputComponent.vue'
import InputComponentCheckBox from 'src/components/InputComponentCheckBox.vue'
import ButtonComponent from 'src/components/ButtonComponent.vue'
</script>

<template>
  <input-component />
  <input-component-check-box />
  <button-component>
    <template #content>Продолжить</template>
  </button-component>
</template>
