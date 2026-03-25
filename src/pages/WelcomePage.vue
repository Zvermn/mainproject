<script setup>
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue'
import LinearProgressComponent from 'src/components/LinearProgressComponent.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import { setCssVar } from 'quasar'

setCssVar('primary', '#D08467');
setCssVar('secondary', '#F6CBBA');

// Массив приветственных сообщений
const slogans = [
  'Сохраняем самые яркие моменты из жизни вашего ребёнка',
  'Маленькие моменты создают большие воспоминания',
  'Детство - это когда каждый день открываешь целый мир'
]

const loadingTexts = [
  'Загрузка данных...',
  'Собираем игрушки с пола...',
  'Подготовка альбомов...',
  'Ждём Вклеиваем новые фото...',
  'Почти готово...'
]

// Индекс текущего сообщения
const currentSloganIndex = ref(0)
const currentTextIndex = ref(0)
// ID интервала для остановки при размонтировании
let intervalId = null

// Запуск таймера
onMounted(() => {
  intervalId = setInterval(() => {
    currentSloganIndex.value = (currentSloganIndex.value + 1) % slogans.length
    currentTextIndex.value = (currentTextIndex.value + 1) % loadingTexts.length
  }, 4000) // Каждые 9 секунд
})

// Очистка при выходе
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <transition name="fade" mode="out-in">
      <h2 :key="currentSloganIndex" class="slogan-greeting">
        {{ slogans[currentSloganIndex] }}
      </h2>
  </transition>
  <div class="logo-img-wrap">
    <img class="logo-img-wrap" src="../assets/images/Animate.svg" width="210" height="195">
  </div>
  <div class="progress-bar-container">
    <linear-progress-component :finish="90"/>
    <transition name="fade" mode="out-in">
        <p :key="currentTextIndex" class="loading-msg">
          {{ loadingTexts[currentTextIndex] }}
        </p>
    </transition>
  </div>
  <button-component
    :title="'Продолжить'"
    :to-path="'/auth-phone'"
    class="btn-primary"
  />
</template>

<style lang="scss" scoped>
@use '../css/abstractions/' as *;
  .slogan-greeting {
    color: $color_text_primary;
    text-align: center;
  }
// Анимация для <transition name="fade">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-in-out;
}
.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.loading-msg {
  color: $color_text_primary;
  text-align: center;
}

.progress-bar-container{
  display: flex;
  flex-direction: column;
  gap: $space_10;
}
</style>
