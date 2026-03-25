<script setup>
import ErrorHintComponent from './form/ErrorHintComponent.vue';
import { ref, computed } from 'vue';

// Массив состояний заполненности
const filled = ref([false, false, false, false]);

// Состояние "идёт проверка"
const isChecking = ref(false);

// Массив для хранения ссылок на DOM-элементы
const inputs = ref([]);

// Вычисляем: все ли поля заполнены?
const allFilled = computed(() => filled.value.every(Boolean));
// Событие завершения ввода
const emit = defineEmits(['complete']);
// Обработчик ввода
const handleInput = (e, index) => {
  const input = e.target;
  const value = input.value.replace(/\D/g, '');
  input.value = value;
  filled.value[index] = !!value;

  // Вперёд — если ввели цифру
  if (value && index < 3) {
    inputs.value[index + 1]?.focus();
  }

  // Назад — если удалили и поле пустое
  if (!value && index > 0) {
    inputs.value[index - 1]?.focus();
  }
// Если все поля заполнены — включаем состояние проверки
  if (allFilled.value) {
    isChecking.value = true;
    emit('complete'); // Отправляем событие
    // Здесь можно вызвать API для проверки кода
    // checkCode();
  }

};
</script>

<template>
  <div class="input-sms-wrap">
    <p class="input-sms-label">Введите код из СМС:</p>
    <div class="input-field">
        <input
        :ref="(el) => inputs[0] = el"
        :class="{ filled: filled[0], checking: isChecking }"
        inputmode="numeric"
        maxlength="1"
        @input="(e) => handleInput(e, 0)"
      />
      <input
        :ref="(el) => inputs[1] = el"
        :class="{ filled: filled[1], checking: isChecking }"
        inputmode="numeric"
        maxlength="1"
        @input="(e) => handleInput(e, 1)"
      />
      <input
        :ref="(el) => inputs[2] = el"
        :class="{ filled: filled[2], checking: isChecking }"
        inputmode="numeric"
        maxlength="1"
        @input="(e) => handleInput(e, 2)"
      />
      <input
        :ref="(el) => inputs[3] = el"
        :class="{ filled: filled[3], checking: isChecking }"
        inputmode="numeric"
        maxlength="1"
        @input="(e) => handleInput(e, 3)"
      />
    </div>
    <div class="sms-info-block">
      <p v-if="!allFilled">Код можно запросить повторно через <span>30 </span>
        <span>секунд</span>
      </p>
      <ErrorHintComponent
        v-if="allFilled"
        :msg="'Код введен неверно. Попробуйте ещё раз'"
      />
      <p v-if="allFilled" class="verification-process">
        Идет проверка... пожалуйста подождите</p>
      <div class="loading-animation">
        <img
          v-if="allFilled"
          src="../assets/images/Animate.svg"
          width="138"
          height="128"
          class="animate"
        >
      </div>
      <p>Код не пришел? <router-Link :to="'/'">Отправить ещё раз</router-Link></p>
  </div>
  </div>
</template>
<style lang="scss">
@use '../css/abstractions/' as *;

.input-sms-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: $space-8;

  .input-sms-label {
    @include body-2;
  }
}

.input-field {
  display: flex;
  flex-direction: row;
  gap: $space-8;

  input {
    width: $space_40;
    height: $space_40;
    text-align: center;
    @include head-2;
    border-style: solid;
    border-width: $width_default;
    border-color: $color_textField_border_disabled;
    background-color: $color_textField_surface;
    border-radius: $radius_12;

    &.filled {
      border-color: $color_textField_border_primary_light;
    }
    &.checking {
      border-color: $color_textField_border_disabled;
      background-color: $color_textField_border_disabled;
    }
  }
}

.sms-info-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    @include  body-3;
    color: $color_text_secondary;
  }
  .verification-process{
    color: $color_text_black;
  }
}


</style>
