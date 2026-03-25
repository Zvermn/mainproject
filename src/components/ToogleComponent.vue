<script setup>
import { ref } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
});

const statusToggle = ref (false);

const toggle = () => {
  statusToggle.value = !statusToggle.value;
  };

</script>
<template>
  <div @click="toggle" class="toggle-container" >
    <p>{{props.title}}</p>
    <div :class="{active: statusToggle}" class="toggle-wrap">
      <div :class="{active: statusToggle}" class="toggle-track"></div>
      <div :class="{ active: statusToggle }" class="toggle-thumb" ></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use '../css/abstractions/' as *;

.toggle-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;

}
.toggle-wrap {
  // position: relative;
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 15px;
  background-color: $base-gray-100;
  &.active {
  background-color: $primary-color;

  }
}

.toggle-track {
  width: 39px;
  height: 2px;
  background-color: $base-gray-300;
  border-radius: 1px;
  z-index: 1;
  &.active {
    background-color: $base-brown-700;
  }
}

.toggle-thumb {
  position: absolute;
  z-index: 2;
  width: 26px;
  height: 26px;
  background-color: $surface-color;
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;
  // Начальная позиция — слева
  transform: translateX(-14px); // (26/2) - (60-39)/2 ≈ 14px от центра track
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.active {
    transform: translateX(14px); // вправо на 28px относительно начальной
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px fade-out($primary-color, 0.7);
  }
}
</style>
