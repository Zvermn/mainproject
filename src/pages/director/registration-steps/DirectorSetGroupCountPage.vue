<script setup>
import StepsComponent from 'src/components/buttons/StepsComponent.vue';
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue';
import TextInputComponent from 'src/components/form/inputs/TextInputComponent.vue';
</script>
<template>
  <steps-component :to-path="'/director/registration-steps/assistant-invite'">
    <template #step-content>
      <h2>Почти закончили</h2>
      <span>Шаг </span><span>3 </span><span>из </span><span>3</span>
    </template>
 </steps-component>
 <div class="set-group-block">
    <p>
      <span>Лидия</span>, сколько всего групп в вашем учреждении? Впишите ответ ниже:
    </p>
    <text-input-component
        :icon-size="'lg'"
        :icon-color="'primary'"
        :icon-name="'user-groups'"
        :type="'text'"
        :placeholder="'например 17'"
    />
  </div>
  <button-component
    :title="'Продолжить'"
    :to-path="'/director/registration-steps/finish'"
    class="btn-primary"
  />

</template>
<style lang="scss" scoped>
@use "../../../css/abstractions/" as *;
    .set-group-block{
      display: flex;
      flex-direction: column;
      gap: $space_16;
      margin-top: auto;
      margin-bottom: auto;
      p{
        @include label-2;
      }
      input {
        @include body-2;
      }
    }

</style>
