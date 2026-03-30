<script setup>
import DirectorFooterComponent from 'src/components/director/DirectorFooterComponent.vue';
</script>

<template>
  <div class="container">
    <header class="director-header">

    </header>
    <router-view />
<footer class="director-footer">
  <director-footer-component />
</footer>
  </div>
</template>

<style lang="scss" scoped>
    .director-footer {
      margin-top: auto;
    }
</style>
