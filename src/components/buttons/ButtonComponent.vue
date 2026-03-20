<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

const props = defineProps({
  iconPosition: {
    type: String,
    required: false,
    default: null,
  },
  title: {
    type: String,
    required: false,
    default: 'Нажми',
  },
  toPath: {
    type: String,
    required: false,
    default: null,
  },
});

function redirect() {
  if (props.toPath) {
    router.push({
      path: props.toPath,
    });
  }
};
</script>

<template>
  <button class="btn-primary" @click="redirect()">
    <div class="icon-wrap icon-size-lg">
      <div v-if="props.iconPosition =='left'" class="icon-arrow-left-lg"></div>
    </div>
    <span>{{ props.title }}</span>
    <div class="icon-wrap icon-size-lg">
      <div v-if="props.iconPosition =='right'" class="icon-arrow-right-lg"></div>
    </div>
  </button>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;

.btn-primary {
  display: flex;
  flex-direction: row;
  gap: $unit-x10;
  justify-content: center;
  align-items: center;
    .icon-wrap div {
      min-height: 100%;
      background-color: $icon-light-color;
  }
}
</style>
