<script setup>
  import CardComponent from '../commons/CardComponent.vue';
  import IconComponent from '../commons/IconComponent.vue';
  import LinearProgressComponent from '../indicators/LinearProgressComponent.vue';
  import { ref } from 'vue'

  const fundEnabled = ref(false)
</script>
<template>
  <div class="fund-wrap">
    <div class="fund-title">
      <h1>Фонд поддержки сада</h1>
      <icon-component
        :size="'lg'"
        :color="'primary'"
        :icon-name="'circle-help'"
      />
    </div>
    <div class="fund-content">
      <card-component v-if="fundEnabled">
        <template #content>
          <div class="fund-charge">
            <span class="fund-charge-title">Начислено за период: </span>
            <span class="fund-charge-total">8 200 ₽</span>
          </div>
          <p>Возможно улучшить результат до <span class="fund-total-target">16 400</span>  ₽, если все родители воспользуются  подпиской на «Детство»</p>
          <linear-progress-component :finish="'10'"/>
          <span>Сейчас <span class="fund-subscribed-rate">59%</span>  всех родителей подписаны</span>
        </template>
      </card-component>
      <card-component v-if="!fundEnabled">
        <template #content>
          <p>Данные о фонде обновятся <span>15 </span><span>апреля</span></p>
        </template>
      </card-component>
    </div>
  </div>
</template>

<style lang="scss">
  @use "../../css/abstractions/" as *;

  .fund-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: $space_8;

    .fund-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: $space_4;
      align-items: center;

      div {
        flex-shrink: 0;
      }
    }
  }

  .fund-content {
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: $space_8;

      .fund-charge {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: $space_8;

        .fund-charge-title {
          @include label-2;
        }

        .fund-charge-total {
          @include label-1;
          color: $color_text_primary;
        }
      }

      p {
        @include body-3;
        margin: 0;

        .fund-total-target {
          @include body-3b;
        }
      }

      span {
        @include body-3;

        .fund-subscribed-rate {
          @include body-3b;
        }
      }
    }
  }

</style>
