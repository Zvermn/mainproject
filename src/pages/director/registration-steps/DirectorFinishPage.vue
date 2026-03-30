<script setup>
import StepsComponent from 'src/components/buttons/StepsComponent.vue';


</script>
<template>
  <steps-component :to-path="'/director/registration-steps/assistant-invite'">
    <template #step-content>
      <h2>Завершение регистрации</h2>
      <span>Добро пожаловать в семью <span>Лидия</span></span>
    </template>
 </steps-component>




  <ButtonComponent
      :title="'Продолжить'"
      :to-path="'/director/registration-steps/finish'"
      class="btn-primary"
    />



</template>
