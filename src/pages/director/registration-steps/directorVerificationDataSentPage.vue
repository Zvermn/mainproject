<script setup>
import TextAreaComponent from 'src/components/TextAreaComponent.vue';
import StepsComponent from 'src/components/nav/StepsComponent.vue';
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue';
import { ref } from 'vue';

const isSend = ref(false);
const sendInfo = () => {
  isSend.value = true;
}
</script>

<template>
  <steps-component :to-path="'/auth-director-1'">
    <template #step-content>
      <h2>Исправление ошибки</h2>
    </template>
 </steps-component>
 <div v-if="!isSend" class="container">
    <p class="system-info">Пожалуйста напишите о том, где именно вы нашли ошибку, чтобы наши специалисты исправили её как можно скорее:</p>
    <div class="user-comment-wrap">
      <p>Ваш комментарий:</p>
      <text-area-component/>
    </div>
    <button-component
      :title="'Отправить информацию'"
      class="btn-primary"
      @click="sendInfo()"
    />
 </div>
  <div v-if="isSend" class="container">
    <p class="system-info">Спасибо за внимательность! Информация отправлена нашей службе заботы. </p>
    <p class="system-info">В скором времени мы всё перепроверим и при необходимости свяжемся с вами.</p>
    <button-component
        :title="'Спасибо, продолжить'"
        :to-path="'/auth-director-1'"
        class="btn-primary"
    />
  </div>
  </template>
<style lang="scss">
@use '../css/abstractions/' as *;
 .user-comment-wrap{
  p{
    @include body-3b;
  }
 }
 .system-info{
  @include body-2;
 }

</style>
