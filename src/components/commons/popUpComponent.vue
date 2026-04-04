<script setup>
  import CardComponent from './CardComponent.vue';
  defineProps({
    popUpImg: {
      type: String,
      default: '',
      required: false
    },
  });

</script>


<template>
  <div class="popUp-bg">
      <div class="popUp-wrap">
        <card-component>
          <template #content>
            <div class="popUp-header">
              <div class="image-container">
                <div
                  class="popUp-img"
                  v-bind="$attrs"
                  :class="popUpImg">
                </div>
              </div>
              <span class="popUp-header-msg">
                <slot name="popUp-header-msg"></slot>
              </span>
            </div>
            <slot name="popUp-content"></slot>
          </template>
      </card-component>
    </div>
  </div>
</template>

<style lang="scss">
  @use '../../css/abstractions/' as *;

  .popUp-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: flex-start; // ← выравнивание по верху
    z-index: 1000;
  }

  .popUp-wrap {
    width: 350px;
    margin-top: 80px;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: $space_20;
      align-self: center;
    }

  }

  .popUp-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 34px;
    padding-right: 20px;
    border-radius: $radius_full;
    background-color: $color_card_OnSurface;

    .image-container {
      width: 80px;
      height: 90px;
      flex-shrink: 0;
      align-self: stretch;
      position: relative;

      .popUp-img {
        position: absolute;
        bottom: 0;
      }
    }
  }

  .popUp-header-msg {
    @include body-3b;
    text-align: center;
  }
</style>
