<script setup>
const props = defineProps({
  start: {
    type: Number,
    default: 0,
  },
  finish: {
    type: Number,
    default: 100,
  }
})


</script>
<template>
  <div class="progress-wrap" >
    <div class="progress-line" :style="'width:' + props.finish + '%'"></div>
  </div>
</template>
<style lang="scss">
  @use '../css/abstractions/' as *;
  .progress-wrap {
    width: 100%;
    height: 8px;
    background-color: $secondary-color;
    border-radius: 4px;
    .progress-line{
      width: 30%;
      height: 100%;
      background-color: $primary-color;
      border-radius: 4px;
      transition: width 0.7s ease-in-out;
    }
  }
</style>
