<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'lg',
    required: false,
  },
  color: {
    type: String,
    default: '',
    required: false,
  },
  iconName: {
    type: String,
    default: '',
    required: false,
  },

})
const iconBlockSize = computed(() => {
  return 'icon-block-size-' + props.size;
});

const iconColor = computed(() => {
  return 'bg-icon-' + props.color;
});

const iconName = computed(() => {
  return 'icon-' + props.iconName + '-' + props.size;
});
</script>

<template>
  <div :class="[iconBlockSize, iconColor, iconName]" ></div>
</template>

<style lang="scss">


</style>
