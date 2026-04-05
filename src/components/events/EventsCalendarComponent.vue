<script setup>
  import CardComponent from '../commons/CardComponent.vue';
  import IconComponent from '../commons/IconComponent.vue';
  import ChipComponent from '../commons/ChipComponent.vue';
</script>
<template>
  <card-component class="events-no">
    <template #content>
      <div class="calendar-wrap">
        <div class="calendar-header">
          <icon-component
            :icon-name="'calendar'"
            :size="'md'"
            :color="'primary'"
            :backing-color="'surface'"
          />
          <span class="title-calendar">Календарь событий</span>
          <chip-component
            :icon-availability="false"
            :on-card="true"
            :content="'март 26'"
            :icon-name="'heart'"
            :icon-size="'md'"
            :icon-color="'primary'"
            :backing-color="'surface'"
          />
        </div>
        <div class="calendar-content">
          <p>Прямо сейчас мы формируем график интереснейших событий, загляните сюда немного позже.</p>
        </div>
      </div>
    </template>
  </card-component>
  <card-component class="events-yes">
    <template #content>
      <div class="calendar-wrap">
        <div class="calendar-header"></div>
        <div class="calendar-content"></div>
      </div>
    </template>
  </card-component>
</template>
<style lang="scss">
  @use '../../css/abstractions/' as *;

  .calendar-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: $space_8;

  }

  .calendar-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: $space_10;
    justify-content: space-between;

  }

  .title-calendar {
    @include label-2;
  }

  .calendar-content {
    p {
      @include body-2;
    }
  }

</style>
