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
    backingColor: {
      type: String,
      default: '',
      required: false,
    },
    backingType: {
      type: String,
      default: 'square',
      required: false,
    },

  });
  const iconBlockSize = computed(() => {
    return 'icon-block-size-' + props.size;
  });

  const iconColor = computed(() => {
    return 'bg-icon-' + props.color;
  });

  const iconName = computed(() => {
    return 'icon-' + props.iconName + '-' + props.size;
  });
  const backingColor = computed(() => {
    return 'bg-icon-' + props.backingColor;
  });


</script>

<template>
  <div
  :class="[iconBlockSize, backingColor, backingType]"
  class="backing">
    <div
      :class="[
      iconBlockSize,
      iconColor,
      iconName
      ]">
    </div>
  </div>
</template>

<style lang="scss"></style>
