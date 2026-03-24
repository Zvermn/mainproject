<script setup>
import CardComponent from 'src/components/CardComponent.vue';
import InputSmsComponent from 'src/components/InputSmsComponent.vue';
</script>

<template>
  <CardComponent>
    <template #content>
      <p>На ваш телефон +7 965 046 75 64 было отправлено СМС с кодом. Введите его в поле ниже:</p>
    </template>
  </CardComponent>
  <input-sms-component />
</template>

