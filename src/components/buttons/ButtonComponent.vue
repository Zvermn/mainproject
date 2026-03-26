<script setup>
import { useRouter } from 'vue-router'
import IconComponent from '../commons/IconComponent.vue'
// Кнопка работает в двух режимах: роутер, если указали ссылку (:toPath), и по событию, если указали @click
const router = useRouter();

const props = defineProps({
  iconPosition: {
    type: String,
    required: false,
    default: null,
  },
  title: {
    type: String,
    required: false,
    default: 'Нажми',
  },
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
  <button @click="redirect()">
    <div v-if="props.iconPosition">
      <icon-component
        v-if="props.iconPosition =='left'"
        :size="'lg'"
        :color="props.iconColor"
        :icon-name="props.iconName"
      />
    </div>
    <span>{{ props.title }}</span>
    <div v-if="props.iconPosition">
      <icon-component
        v-if="props.iconPosition =='right'"
        :size="'lg'"
        :color="props.iconColor"
        :icon-name="props.iconName"
      />
    </div>
  </button>
</template>

<style lang="scss">


</style>
