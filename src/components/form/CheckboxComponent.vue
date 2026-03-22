<script setup>
import { computed } from 'vue'
import IconComponent from '../IconComponent.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
  }
});

const iconName = computed(() => {
  if (props.modelValue) {
    console.log(props.modelValue);
    return 'checkbox-check';
  } else {
    console.log(props.modelValue);
    return 'checkbox-uncheck';
  }
});



</script>
<template>
  <label class="check-consent-wrap">
    <input
      type="checkbox"
      class="input-check"
      @click="$emit('update:modelValue', !props.modelValue)"
    />
    <icon-component
      :size="'lg'"
      :color="'dark'"
      :icon-name="iconName"
    />
    <div class="input-check-text">
      <span>Даю </span><router-link to="/policy">согласие на обработку данных</router-link>
    </div>
  </label>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;

.check-consent-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 10px;
}
//скрыли стандартный чекбокс
.input-check {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
//оформление надписи
.input-check-text span:first-child {
  color: $font-primary-color;
}

.input-check-text {
  @include body-2;
  color: $font-link;
}
</style>
