<script setup>
import IconComponent from './IconComponent.vue';
import { ref, computed } from 'vue';


const text = ref('')
// Минимальная высота (в px)
const minHeight = 48
// Максимальная высота (в px)
const maxHeight = 200

const resize = (e) => {
  e.target.style.height = 'auto'
  const scrollHeight = e.target.scrollHeight

  // Ограничиваем максимальной высотой
  e.target.style.height = `${Math.min(scrollHeight, maxHeight)}px`
}

// Можно использовать как стилизованный min-height
const textareaHeight = computed(() => {
  return text.value ? 'auto' : `${minHeight}px`
})
</script>


<template>
  <div class="block-text-area">
    <icon-component
        :size="'lg'"
        :color="'primary'"
        :icon-name="'chat-circle-dots'"
      />
      <div class="text-area-wrap">
        <textarea
          v-model="text"
          :style="{ height: textareaHeight }"
          @input="resize"
          name="user-msg-error"
          id="user-msg-error"
        >
        </textarea>
      </div>

  </div>

</template>

<style lang="scss">
@use '../css/abstractions/' as *;
.block-text-area {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  & div:first-child{
    flex-shrink: 0;
    align-self: flex-start;
  }
}

.text-area-wrap{
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 60px;
}

.block-text-area textarea {
  width: 100%;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 0 0 0 20px;
  font: inherit; // Наследует шрифт страницы
  resize: none;        // 🔒 Нельзя тянуть вручную
  overflow-y: auto;    // Прокрутка при переполнении

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
