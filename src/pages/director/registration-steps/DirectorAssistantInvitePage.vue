<script setup>
import CardComponent from '../../../components/commons/CardComponent.vue';
import StepsComponent from '../../../components/buttons/StepsComponent.vue';
import ButtonComponent from '../../../components/buttons/ButtonComponent.vue';
import ToogleComponent from '../../../components/form/ToogleComponent.vue';
</script>

<template>
  <steps-component :to-path="'/director/registration-steps/verification'">
    <template #step-content>
      <h2>Ваш заместитель</h2>
      <span>Шаг </span><span>2 </span><span>из </span><span>3</span>
    </template>
 </steps-component>
  <CardComponent>
    <template #content>
      <h2>Добавьте заместителя</h2>
      <p>Он сможет помогать вам с рутиной,
         такой как верификация воспитателей в
          системе или указание общего количества групп в саду. </p>
    </template>
  </CardComponent>
  <CardComponent>
    <template #content>
      <h2>Права доступа:</h2>
      <p>Выберите разделы, которые будут доступны заместителю:</p>
      <toogle-component
      :title="'Верификация групп'"
      />
      <toogle-component
      :title="'Раздел с финансами'"
      />
    </template>
  </CardComponent>
  <ButtonComponent
    :title="'Не сейчас'"
    :to-path="'/director/registration-steps/data-sent'"
    class="btn-secondary"
  />
</template>

<style lang="scss">
@use '../../../css/abstractions/' as *;
.card{
  p{
    margin-bottom: $space-16;
    @include body-2;
  }
  p:last-child{
    margin-bottom: 0;
  }
.director-full-name{
  @include body-2b;
}
}

</style>

