<script setup>
import { useRouter } from 'vue-router'
import IconComponent from '../IconComponent.vue'

const router = useRouter();

const props = defineProps({
  toPath: {
    type: String,
    required: false,
    default: null,
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

});

function redirect() {
  if (props.toPath) {
    router.push({
      path: props.toPath,
    });
  }
};
</script>

<template>
  <div class="step-wrap">
     <button @click="redirect()" class="btn-nav">
      <div>
        <icon-component
          :size="'lg'"
          :color="'light'"
          :icon-name="'arrow-left'"
        />
      </div>
    </button>
    <div class="step-content">
      <slot name="step-content"></slot>
    </div>

  </div>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;
.step-wrap {
  display: flex;
  flex-direction: row;
  gap: $space-16;
  align-items: center;
}

.step-wrap{
  h2{
    margin-bottom: 0;
  }
}

</style>
