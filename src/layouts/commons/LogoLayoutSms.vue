<script setup>
import StepsComponent from 'src/components/nav/StepsComponent.vue';

</script>

<template>
  <div class="container">
    <steps-component :to-path="'/auth-phone'">
      <template #step-content>
        <h2>Регистрация</h2>
        <span>Шаг </span><span>1 </span><span>из </span><span>3</span>
      </template>
    </steps-component>
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

