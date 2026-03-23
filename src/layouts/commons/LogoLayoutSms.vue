<script setup>
import StepsComponent from 'src/components/nav/StepsComponent.vue';

</script>

<template>
  <div class="container">
    <steps-component
    :to-path="'/'"
    />
    <div class="logo-img">
      <img src="../../assets/images/logo.png" alt="" />
    </div>
    <router-view />
  </div>
</template>


<style lang="scss">
.logo-img {
  width: 100%;
  height: 100%;
}
</style>

