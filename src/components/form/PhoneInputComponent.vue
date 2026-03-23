<script setup>
import ErrorHintComponent from './ErrorHintComponent.vue'
import IconComponent from '../IconComponent.vue'
import { ref } from 'vue'


const props = defineProps({
  label: {
    type: String,
    default: 'Введите номер телефона',
    required: false,
  },
})

let errorPhone = ref(false);
let errorMsg = ref(false);
let numberPhone = ref('');

</script>

<template>
  <div class="input-wrap">
    <label for="login-phone">{{ props.label }}</label>
    <div :class="{ error: errorPhone, correct: numberPhone.length == 11} " class="input-field-wrap">
      <icon-component
        :size="'lg'"
        :color="'primary'"
        :icon-name="'phone'"
      />
      <input
        v-model="numberPhone"
        type="tel"
        id="login-phone"
        class="input-tel"
        autocomplete="tel-national"
        maxlength="11"
        @input="inputPhone"
      />
      <icon-component v-if="!errorPhone"
        :size="'lg'"
        :color="''"
        :icon-name="''"
      />
      <icon-component v-if="numberPhone.length == 11"
        :size="'lg'"
        :color="'success'"
        :icon-name="'check-big'"
      />
    </div>
    <error-hint-component v-if="errorMsg" :msg="'Ведите номер телефона чтобы продолжить'" />
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
  padding: calc($unit-x2*2) $unit-x10;
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

.input-field-wrap{
  div {
    align-self: center;
    flex-shrink: 0;
  }
}

.correct.input-field-wrap {
    border-color: $brd-success-color;
    border-width: $brd-width-default;
  }

.error.input-field-wrap {
  border-color: $brd-error-color;
    border-width: $brd-width-md;
  }

</style>
