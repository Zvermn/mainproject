<script setup>
import ErrorHintComponent from '../ErrorHintComponent.vue'
import IconComponent from '../../commons/IconComponent.vue'
import { ref } from 'vue'


const props = defineProps({
  label: {
    type: String,
    default: 'Введите номер телефона',
    required: false,
  },
    iconColor: {
    type: String,
    default: '',
    required: false,
  },
  iconName: {
    type: String,
    default: '',
    required: false,
  },
  iconSize: {
    type: String,
    default: '',
    required: false,
  },
  modelValue: {
    type: String,
    default: '',
    required: false,
  },
})

let errorPhone = ref(false);
let errorMsg = ref(false);
const emit = defineEmits(['update:modelValue']);
const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="input-wrap">
    <label for="login-phone">{{ props.label }}</label>
    <div
      :class="{
        error: errorPhone,
        correct: modelValue.length === 11,
        filled: modelValue.length != 0 && modelValue.length <= 10
      }"
      class="input-field-wrap">
      <icon-component
        :size="props.iconSize"
        :color="props.iconColor"
        :icon-name="props.iconName"
      />
      <input
        type="tel"
        id="login-phone"
        class="input-tel"
        autocomplete="tel-national"
        maxlength="11"
        :value="modelValue"
        @input="updateValue"
      />
      <icon-component v-if="errorPhone"
        :size="'lg'"
        :color="'error'"
        :icon-name="'circle-warning'"
      />
      <icon-component v-if="modelValue.length === 11"
        :size="'lg'"
        :color="'success'"
        :icon-name="'check-big'"
      />
    </div>
    <error-hint-component v-if="errorMsg" :msg="'Ведите номер телефона чтобы продолжить'" />
  </div>
</template>

<style lang="scss">
@use '../../../css/abstractions/' as *;

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
  padding: $space_4 $space_10;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: $color_textField_surface;
  border-radius: $radius_12;
  border-width: $width_default;
  border-style: solid;
  border-color: $color_primary_border_light;
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
    border-color: $color_success_border;
    border-width: $width_default;
  }

  .filled.input-field-wrap {
    box-shadow: 0 0 5px 0 $color_primary_shadow;
    border-color: $color_textField_border_primary;
  }

.error.input-field-wrap {
  border-color: $color_error_border;
    border-width: $width_md;
  }

</style>
