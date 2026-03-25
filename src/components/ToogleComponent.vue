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
  p{
    @include body-2b;
  }

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
  background-color: $color_toggle_inactive_surface;
  &.active {
  background-color: $color_toggle_surface;

  }
}

.toggle-track {
  width: 39px;
  height: 2px;
  background-color: $color_toggle_inactive_onSurface;
  border-radius: 1px;
  z-index: 1;
  &.active {
    background-color: $color_toggle_onSurface;
  }
}

.toggle-thumb {
  position: absolute;
  z-index: 2;
  width: 26px;
  height: 26px;
  background-color: $color_toggle_inactive_pusher;
  border-radius: 50%;
  transition: transform 0.3s ease, background-color 0.3s ease;
  // Начальная позиция — слева
  transform: translateX(-14px); // (26/2) - (60-39)/2 ≈ 14px от центра track
  box-shadow: 4px 0px 12.5px -3px rgba(0, 0, 0, 0.45);

  &.active {
    transform: translateX(14px); // вправо на 28px относительно начальной
    background-color: $color_toggle_pusher;
    box-shadow: -4px 0px 12.5px -3px rgba(0, 0, 0, 0.45);
  }

  &:focus {
    outline: none;
  }
}
</style>
