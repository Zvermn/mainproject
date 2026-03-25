<script setup>
import CardComponent from 'src/components/CardComponent.vue';
import StepsComponent from 'src/components/nav/StepsComponent.vue';
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue';
import ToogleComponent from 'src/components/ToogleComponent.vue';
</script>

<template>
  <steps-component :to-path="'/auth-director-1'">
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
      <toogle-component/>
    </template>
  </CardComponent>
  <ButtonComponent
    :title="'Не сейчас'"
    :to-path="'/error-director'"
    class="btn-secondary"
  />
</template>

<style lang="scss">
@use '../css/abstractions/' as *;
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

