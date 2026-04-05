<script setup>
  import StepsComponent from '../../components/buttons/StepsComponent.vue';

</script>

<template>
  <div class="container">
    <steps-component :to-path="'/auth/login'">
      <template #step-content>
        <h2>Регистрация</h2>
        <span>Шаг </span><span>1 </span><span>из </span><span>3</span>
      </template>
    </steps-component>
    <div class="logo-img-wrap">
      <img src="../../assets/images/logo.png" alt="" />
    </div>
    <router-view />
  </div>
</template>


