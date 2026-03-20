<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: 'Ошибка в поле',
    required: false,
  },
})
</script>

<template>
  <span class="error-msg">{{ props.msg }}</span>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;

.error-msg {
  @include caption-1;
  color: $font-error;
}
</style>
