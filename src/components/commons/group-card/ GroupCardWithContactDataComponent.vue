<script setup>
  import IconComponent from '../IconComponent.vue';
  import CardComponent from '../CardComponent.vue';
  import ButtonComponent from '../../buttons/ButtonComponent.vue';

  defineProps({
    groupType: {
      type: String,
      default: 'Ясельная группа',
      required: false,
    },
    groupName: {
      type: String,
      default: 'Кабаны',
      required: false,
    },
    educatorName: {
      type: String,
      default: '',
      required: false,
    },
    educatorTel: {
      type: String,
      default: '',
      required: false,
    },
    groupCount: {
      type: Number,
      default: 10,
      required: false,
    },
    iconGroupe: {
      type: String,
      default: 'nursery',
      required: false,
    },



  });


</script>

<template>
    <card-component>
      <template #content>
        <div class="group-card-wrap">
          <div class="header-card">
            <div class="icon-group-container">
              <div :class="iconGroupe" class="icon-groupe">
            </div>
            </div>
            <div class="title-card">
              <div class="group-type">
                <span>{{groupType}}</span>
              </div>
              <div class="group-name-wrap">
                <icon-component
                :size="'sm'"
                :color="''"
                :icon-name="'health'"
                />
                <div class="group-name">
                  <span>{{groupName}}</span>
                </div>
                <div class="group-count">
                  <span>({{ groupCount }})</span>
                </div>
              </div>
            </div>
          </div>
          <div class="main-card">
            <div class="educator-info">
              <div class="educator-info-item">
                <icon-component
                  :size="'md'"
                  :color="'primary'"
                  :icon-name="'phone'"
                  :backing-color="'surface'"
                  :backing-type="'square'"
                />
                <span class="educator-name">{{educatorName}}</span>
              </div>
              <div class="educator-info-item">
                <icon-component
                  :size="'md'"
                  :color="'primary'"
                  :icon-name="'user'"
                  :backing-color="'surface'"
                  :backing-type="'square'"
                />
                <span class="educator-tel">{{educatorTel}}</span>
              </div>
            </div>
          </div>
          <button-component class="btn-secondary"
            :title="'Изменить'"
            :btn-size="'btn-md'"
            :to-path="'/educator/registration-steps/group/edit'"
          />
        </div>
      </template>
    </card-component>
</template>

<style lang="scss">
  @use '../../../css/abstractions/' as *;

  .group-card-wrap {
    display: flex;
    flex-direction: column;
    gap: $space_16;
  }

  .educator-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: $space_4;
  }

  .educator-info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: $space_8;
    @include body-3;

    & :first-child {
      flex-shrink: 0;
    }
  }

  .header-card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .title-card {
    display: flex;
    flex-direction: column;

  }

  .group-name-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: $space_8;
  }

  .group-name {
    @include label-2;
  }

  .group-type {
    @include body-3;
    color: $color_text_gray;
  }
</style>
