<script setup>
  import IconComponent from '../commons/IconComponent.vue'
  const props = defineProps({
    content: {
      type: String,
      required: false,
      default: '',
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
    iconAvailability: {
      type: Boolean,
      default: false,
      required: false,
    },
    onCard: {
      type: Boolean,
      default: false,
      required: false,
    },
    active: {
      type: Boolean,
      default: false,
      required: false,
    },
    onBg: {
      type: Boolean,
      default: false,
      required: false,
    },
    onAccident: {
      type: Boolean,
      default: false,
      required: false,
    },
    backingColor: {
      type: String,
      default: '',
      required: false,
    },
    backingType: {
      type: String,
      default: 'round',
      required: false,
    },
  });
</script>

<template>
  <div
  :class="{onCard, active, onBg, onAccident}"
  class="chip-wrap chip">
    <icon-component
      v-if="iconAvailability"
      :size="props.iconSize"
      :color="props.iconColor"
      :icon-name="props.iconName"
      :backing-color="props.backingColor"
      :backing-type="props.backingType"
    />
    <span>{{ props.content }}</span>
  </div>
</template>

<style lang="scss">
  @use '../../css/abstractions/' as *;

  .chip-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: $space_8;
    padding: $space_2 $space_10;
  }


</style>
