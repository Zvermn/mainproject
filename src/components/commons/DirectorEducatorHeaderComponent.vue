<script setup>
import LinearProgressComponent from '../indicators/LinearProgressComponent.vue';
import IconComponent from './IconComponent.vue';
</script>
<template>
  <header class="director-header">
    <div class="header-info-progress">
      <span>Хороший день! Сегодня вы будете удачливее на 15%</span>
      <linear-progress-component
        :finish="'20'"
      />
    </div>
    <div class="header-info-profile">
      <div class="info-profile-data">
        <span class="post">Заведующая</span>
        <h2 class="full-name">Иванова Лидия</h2>
      </div>
      <div class="info-profile-notifications">
        <icon-component
        :size="'lg'"
        :color="'primary'"
        :icon-name="'bell-notific'"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../../css/abstractions/" as *;

.director-header {
  display: flex;
  flex-direction: column;
  gap: $space_8;
  .header-info-progress span {
    @include caption-2;
    color: $color_text_primary;
  }

  .header-info-profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: $space_16;
    .post {
      @include caption-1;
      color: $color_text_primary;
      text-transform: uppercase;
    }

    .info-profile-notifications {
      flex-shrink: 0;
    }
  }
}

</style>
