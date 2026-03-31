<script setup>
import DirectorEducatorHeaderComponent from '../../components/commons/DirectorEducatorHeaderComponent.vue';
import DirectorFooterComponent from '../../components/director/DirectorFooterComponent.vue';
</script>

<template>
  <div class="container">
    <director-educator-header-component />
    <router-view />
    <director-footer-component />
  </div>
</template>

<style lang="scss" scoped>
    .director-footer {
      margin-top: auto;
    }
</style>
