<script setup>
import IconComponent from '../commons/IconComponent.vue';
</script>
<template>
  <div class="footer-wrap">
    <div class="footer-item active">
      <icon-component
      :size="'sm'"
      :color="'primary'"
      icon-name="home"
      />
      <span>Главная</span>
    </div>
    <div class="footer-item">
      <icon-component
      :size="'sm'"
      :color="'primary'"
      icon-name="user-groups"
      />
      <span>Главная</span>
    </div>
    <div class="footer-item">
      <icon-component
      :size="'sm'"
      :color="'primary'"
      icon-name="settings"
      />
      <span>Главная</span>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../css/abstractions/" as *;
.footer-wrap {
  background-color: $color_white;
  border-radius: $radius_full;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .footer-item {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $space_8 $space_20;
    width: 120px;
    border-radius: $radius_full;
    color: $color_text_primary;
    @include caption-1;
    &.active{
      background-color: $color_card_accident_surface;
      border-width: $width_default;
      border-style: solid;
      border-color: $color_card_accident_border;
      color: $color_text_white;
      .bg-icon-primary {
        background-color: $color_icon_light;
       }
    }
  }
}


</style>
