<script setup>
import IconComponent from '../../commons/IconComponent.vue'

const props = defineProps({
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
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text',
      'email',
      'password',
      'tel',
      'number',
      'search',
      'url',
      'date',
      'time'
    ].includes(value)
  },
  modelValue: {
    type: String,
    default: '',
  },
  // --- Дополнительно ---
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};

</script>

<template>
  <div class="input-wrap">
    <div class="input-field-wrap">
      <icon-component
        :size="props.iconSize"
        :color="props.iconColor"
        :icon-name="props.iconName"
      />
      <input
        :type="text"
        id="set-user-data"
        :value="modelValue"
        :placeholder="placeholder"
        @input="updateValue"
        class="input-text"
      />
    </div>
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
  gap: $space_10;
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

</style>
