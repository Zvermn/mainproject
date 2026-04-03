<script setup>
  import CardComponent from './CardComponent.vue';
  import IconComponent from './IconComponent.vue';

  defineProps({
    leftIconSize: {
      type: String,
      default: 'md',
      required: false,
    },
    leftIconColor: {
      type: String,
      default: '',
      required: false,
    },
    leftIconName: {
      type: String,
      default: '',
      required: false,
    },
    leftIconBackingColor: {
      type: String,
      default: '',
      required: false,
    },
    leftIconBackingType: {
      type: String,
      default: '',
      required: false,
    },
    rightIconSize: {
      type: String,
      default: 'md',
      required: false,
    },
    rightIconColor: {
      type: String,
      default: '',
      required: false,
    },
    rightIconName: {
      type: String,
      default: '',
      required: false,
    },
    rightIconBackingColor: {
      type: String,
      default: '',
      required: false,
    },
    rightIconBackingType: {
      type: String,
      default: '',
      required: false,
    },
    systemTitle: {
      type: String,
      default: '',
      required: false,
    },
    systemMsg: {
      type: String,
      default: '',
      required: false,
    },
  });
</script>

<template>
  <card-component>
    <template #content>
      <div class="info-wrap">
        <icon-component
          :size="leftIconSize"
          :color="leftIconColor"
          :icon-name="leftIconName"
          :backing-color="leftIconBackingColor"
          :backing-type="leftIconBackingType"
        />
        <div class="info-content">
          <span class="system-title">{{systemTitle}}</span>
          <span class="system-msg">{{systemMsg}}</span>
        </div>
        <icon-component
          :size="rightIconSize"
          :color="rightIconColor"
          :icon-name="rightIconName"
          :backing-color="rightIconBackingColor"
          :backing-type="rightIconBackingType"
        />
      </div>
    </template>
  </card-component>
</template>

<style lang="scss" scoped>
  @use '../../css/abstractions/' as *;

  .card {
    padding: $space_6;
    border-radius: $radius_full;
  }

  .info-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: $space_10;
    padding: 0 $space_4;

    &>div:first-child {
      flex-shrink: 0;
    }

    &>div:last-child {
      flex-shrink: 0;
    }


    .info-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      gap: $space_2;

      .system-title {
        @include body-3b;
      }

      .system-msg {
        @include caption-1;
      }
    }
  }


</style>
