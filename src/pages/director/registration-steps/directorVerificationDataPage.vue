<script setup>
import CardComponent from 'src/components/CardComponent.vue';
import StepsComponent from 'src/components/nav/StepsComponent.vue';
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue';
</script>

<template>
  <steps-component :to-path="'/auth/phone'">
    <template #step-content>
      <h2>Вход в систему</h2>
      <span>Шаг </span><span>1 </span><span>из </span><span>3</span>
    </template>
 </steps-component>
  <CardComponent>
    <template #content>
      <p>Учреждение: МУ Детское образовательное учреждение №6</p>
      <p>Вы вошли как «Заведующая»:<br>
        <span class="director-full-name">Иванова Лидия Ивановна</span></p>
    </template>
  </CardComponent>
  <CardComponent>
    <template #content>
      <p>Реквизиты:</p>
      <p>ИНН: 234234234</p>
      <p>ОГРН: 88734564343</p>
      <p>БИК: 234-234</p>
      <p>Счёт в банке: 2342354434546</p>
    </template>
  </CardComponent>
  <ButtonComponent
    :title="'Всё верно'"
    :to-path="'/director/registration-steps/assistant-invite'"
    class="btn-primary"
  />
  <ButtonComponent
    :title="'Тут ошибка'"
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

