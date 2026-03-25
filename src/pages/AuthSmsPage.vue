<script setup>
import CardComponent from 'src/components/CardComponent.vue';
import InputSmsComponent from 'src/components/InputSmsComponent.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// Флаг: код введён полностью
const isCodeFilled = ref(false);

// Таймер для отложенного перехода
let timer = null;

// Отслеживаем заполнение кода
watch(isCodeFilled, (newValue) => {
  if (newValue) {
    // Очищаем предыдущий таймер (на случай повторного ввода)
    if (timer) clearTimeout(timer);

    // Запускаем отсчёт 3 секунды
    timer = setTimeout(() => {
      router.push('/auth-director-1'); // или куда нужно
    }, 3000);
  }
});




</script>

<template>
  <CardComponent>
    <template #content>
      <p>На ваш телефон +7 965 046 75 64 было отправлено СМС с кодом. Введите его в поле ниже:</p>
    </template>
  </CardComponent>
  <input-sms-component @complete="isCodeFilled = true"/>
</template>

