<script setup>
import ErrorHintComponent from './ErrorHintComponent.vue'
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Введите номер телефона',
    required: false,
  },
})

let errorPhone = ref(false);
let numberPhone = ref();

function inputPhone() {
  if (numberPhone.value.length !== 11) {
    errorPhone.value = true;
  } else {
    errorPhone.value = false;
  }
};
</script>

<template>
  <div :class="{ error: errorPhone }" class="input-wrap">
    <label for="login-phone">{{ props.label }}</label>
    <div class="input-field-wrap">
      <div class="input-field-icon-left"></div>
      <input
      v-model="numberPhone"
      type="tel"
      id="login-phone"
      class="input-tel"
      autocomplete="tel-national"
      @input="inputPhone"
      />
      <div class="input-field-icon-right"></div>
    </div>
    <error-hint-component v-if="errorPhone" :msg="'Ведите номер телефона чтобы продолжить'" />
  </div>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;

.input-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  label {
    @include body-3b;
  }
}

.input-field-wrap {
  padding: $unit-x10 $unit-x20 $unit-x10 $unit-x10;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: $surface-color;
  border-radius: $brd-radius-md;
  border-width: $brd-width-default;
  border-style: $brd-style-default;
  border-color: $brd-primary-color-light;
  input {
    width: 100%;
    border: 0;
    @include body-2;
  }
}

.input-field-icon-left {
  align-self: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-color: $primary-color;
  mask: url(../../assets/icons/tel-md.svg) no-repeat 50%;
}

.input-field-icon-right {
  display: none;
  align-self: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  background-color: $font-error;
  mask: url(../../assets/icons/exclamation-point.svg) no-repeat 50%;
}

.error.input-wrap {
  .input-field-icon-right {
    display: block;
  }

  .input-field-wrap {
    border-color: $brd-error-color;
    border-width: $brd-width-md;
  }
}
</style>
