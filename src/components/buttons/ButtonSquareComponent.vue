<script setup>
import { useRouter } from 'vue-router'
import IconComponent from '../commons/IconComponent.vue'

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
  iconSize: {
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
  <div class="btn-sq-wrap">
     <button @click="redirect()" class="btn-secondary-sq">
        <icon-component
          :size="props.iconSize"
          :color="props.iconColor"
          :icon-name="props.iconName"
        />
    </button>
  </div>
</template>

<style lang="scss">
@use '../../css/abstractions/' as *;


</style>
