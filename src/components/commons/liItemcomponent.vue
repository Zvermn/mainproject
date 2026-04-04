<template>
  <div class="li-wrapper">
    <slot name='li-content'>
    </slot>
  </div>
</template>
<style lang="scss">
  @use '../../css/abstractions/' as *;

  .li-wrapper {
    border-left: 3px solid $color_primary;
    border-radius: 999;
    padding-left: $space_12;
    width: 100%;
  }

</style>
