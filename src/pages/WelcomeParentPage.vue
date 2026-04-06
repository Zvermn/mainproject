<script setup>
  import ButtonComponent from 'src/components/buttons/ButtonComponent.vue';
  import IconComponent from 'src/components/commons/IconComponent.vue';
  import router from 'src/router';
  import { ref, computed } from 'vue';

  // Массив путей к изображениям
  const images = [
    '/src/assets/images/Centr-1.png',
    '/src/assets/images/Centr-1-1.png',
    '/src/assets/images/Centr-2-1.png',
    '/src/assets/images/Centr-3-1.png',
    '/src/assets/images/Centr-4-1.png',
    '/src/assets/images/Centr-5-1.png',
  ];

  const texts = [
    'Главные события  — в одном приложении! От профессиональных фотосессий до живых кадров, сделанных воспитателем в группе',
    'Мы бережно ловим искренние улыбки и настоящие эмоции малыша в привычной для него среде, забыв о скучных постановочных кадрах',
    'Вся хроника взросления вашего ребенка аккуратно разложена по событиям и надежно хранится в одном уютном месте',
    'Рисунки и первые поделки вашего маленького творца теперь никогда не потеряются, превратившись в красивое цифровое портфолио',
    'Начните собирать историю детства всего за 1 рубль, выбирая удобный тариф без скрытых сборов и навязанных покупок',
    'Скачивайте любимые фотографии в высоком качестве, чтобы мгновенно делиться радостью с друзьями и близкими в социальных сетях',
  ];

  // Текущий активный слайд (индекс)
  const currentSlide = ref(0);

  // Вычисляем, какие слайды уже были "просмотрены"
  const visited = computed(() => {
    const arr = Array(images.length).fill(false);
    for (let i = 0; i <= currentSlide.value; i++) {
      arr[i] = true;
    }
    return arr;
  });

  // Переключение слайда по клику на контроль
  const goToSlide = (index) => {
    currentSlide.value = index;
  };

  // Переход к следующему слайду по кнопке
  const goToNext = () => {
    if (currentSlide.value < images.length - 1) {
      currentSlide.value++;
    } else {
      router('/auth/login/parent');
    }
  };
</script>
<template>
  <h2>Забота о ваших воспоминаниях!</h2>
<div class="slider-container">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(img, index) in images" :key="index" class="slide">
        <img :src="img" class="slide-image" height="537px" />
        <span class="promotional-text">{{  texts[index]  }}</span>
      </div>
    </div>
  </div>
 <!-- Контролы (индикаторы) -->
  <div class="controls">
    <label
      v-for="(img, index) in images"
      :key="index"
      @click="goToSlide(index)"
    >
      <icon-component
        :size="'sm'"
        :color="visited[index] ? 'primary' : 'primary'"
        :icon-name="visited[index] ? 'cloud-checked' : 'cloud-unchecked'"
      />
    </label>
  </div>

  <button-component
  :btn-size="'btn-lg'"
  :icon-position="'right'"
  :icon-size="'lg'"
  :icon-color="'light'"
  :icon-name="'arrow-right'"
  :title="'Продолжить'"
  class="btn-primary"
  @click="goToNext"
  />
  <router-link :to="'#'">Пропустить и перейти к регистрации</router-link>

</template>
<style lang="scss">
  @use '../css/abstractions/' as *;

  h2 {
    color: $color_text_primary;
    text-align: center;
  }

  a {
    text-align: center;
  }

  .slider-container {
    background-color: $color_card_surface;
    @include body-2;
    outline: $width_default solid $color_card_border_primary_light;
    box-shadow: 0 0 5px 0 $color_primary_shadow;
    border-radius: $radius_card_big;
    overflow: hidden;
    flex-shrink: 0;
    max-width: 350px;
    height: 525px;
    align-self: center;
  }

  /* Контейнер, в котором будут находиться все слайды */
  .slides {
    display: flex;
    transition: transform 0.7s ease-in-out;
    width: 100%;
    height: 100%;
  }

  /* Каждый отдельный слайд */
  .slide {
    flex: 0 0 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-image {
    object-fit: cover;
    /* ключевое свойство — обрезает и заполняет */
    object-position: center;
    /* центрирует изображение */
    display: block;
    max-width: none;

  }

  /* Убираем отображение радиокнопок, они нужны только для управления */
  input[type="radio"] {
    display: none;
  }


  /* Контейнер для точек управления (индикаторов) */
  .controls {
    text-align: center;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 30px;

  }

  /* Стиль для точек переключения */
  .controls label {
    display: inline-block;
    cursor: pointer;
  }

  .promotional-text {
    width: 350px;
    @include caption-1;
    position: absolute;
    top: 450px;
    padding: 0 $space_20;
    color: $color_text_black;
  }
</style>
