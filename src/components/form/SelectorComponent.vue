<script setup>
  import { ref, computed } from 'vue';

  // Пропсы
  const props = defineProps({
    // Массив опций: [{ value: '1', label: 'Москва' }]
    options: {
      type: Array,
      default: () => [],
    },
    // Текст-заполнитель
    placeholder: {
      type: String,
      default: 'Выберите значение',
    },
    // v-model
    modelValue: {
      type: [String, Number],
      default: '',
    },
    countStart: {
      type: Number,
      default: 1,
    },
    countEnd: {
      type: Number,
      default: 20,
    },
    label: {
      type: String,
      default: '',
    },
  });

  // События
  const emit = defineEmits(['update:modelValue']);

  // Локальное состояние
  const isOpen = ref(false);

  // Выбор опции
  const selectOption = (option) => {
    emit('update:modelValue', option.value);
    isOpen.value = false;
  };

  // Закрытие при клике вне
  const closeOnOutsideClick = (event) => {
    if (!event.target.closest('.selector-wrapper')) {
      isOpen.value = false;
    }
  };

  // Открытие/закрытие по клику
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      // Закрываем при клике вне
      document.addEventListener('click', closeOnOutsideClick);
    } else {
      document.removeEventListener('click', closeOnOutsideClick);
    }
  };

  // Опция по умолчанию
  const selectedLabel = computed(() => {
    const selected = finalOptions.value.find(opt => opt.value === props.modelValue);
    return selected ? selected.label : '';
  });

  // Генерируем массив от `countStart` до `countEnd` → реактивно!
  const generatedOptions = computed(() => {
    if (props.countStart === '' || props.countEnd === '') return [];

    const start = +props.countStart;
    const end = +props.countEnd;

    if (start > end) return [];

    return Array.from({ length: end - start + 1 }, (_, i) => {
      const num = (start + i).toString();
      return { value: num, label: num };
    });
  });



  // Финальный список: приоритет: options → groupNames → count диапазон
  const finalOptions = computed(() => {
    if (props.options.length > 0) return props.options;
    return generatedOptions.value;
  });
</script>

<template>
  <div :id="selectorId" class="selector-wrapper">
    <label :for="selectorId">{{ props.label }}</label>
    <!-- Кликаемое поле -->
    <div
      class="selector-field"
      :class="{ open: isOpen }"
      @click="toggleDropdown"
    >
      <span v-if="selectedLabel" class="selected">{{ selectedLabel }}</span>
      <span v-else class="placeholder">{{ placeholder }}</span>
      <div class="arrow" :class="{ up: isOpen }"></div>
    </div>

    <!-- Список опций -->
    <ul v-show="isOpen" class="selector-options">
      <li
        v-for="option in finalOptions"
        :key="option.value"
        class="selector-option"
        :class="{ selected: modelValue === option.value }"
        @click="selectOption(option)"
      >
      <span>{{ option.label }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../css/abstractions/' as *;

  .selector-wrapper {
    position: relative;
    width: 100%;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    gap: $space_8;

    label {
      @include body-3b;
    }
  }

  .selector-field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $space_4 $space_20;
    min-height: 50px;
    border: 1px solid $color_textField_border_primary_light;
    border-radius: $radius_12;
    background-color: $color_textField_surface;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;

    &.open {
      border-color: $color_textField_border_primary;
    }

    .placeholder {
      color: $color_text_placeholder;
      @include body-2;
    }

    .selected {
      @include body-2;
      color: $color_black;
    }
  }

  .arrow {
    width: 12px;
    height: 12px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23939393' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-size: contain;
    transition: transform 0.2s;

    &.up {
      transform: rotate(180deg);
    }
  }

  .selector-options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: $space_10;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: $space_4;
    max-height: 200px;
    overflow-y: auto;
    background: $color_white;
    border: 1px solid $color_gray_100;
    border-radius: $radius_12;
    box-shadow: 0 0 0 2px $color_primary_shadow;
    z-index: 1000;
    padding: $space_4 $space_20 $space_4 $space_20;

    &::-webkit-scrollbar {
      width: 20px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      // margin-block: 10px;
      margin-inline: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: $color_scrollbar_primary;
      border-radius: 35px;
      border: 6px solid transparent; // создаёт внутренний отступ
      background-clip: content-box;
    }
  }

  .selector-option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: $space_4 $space_4 $space_4 $space_20;
    cursor: pointer;
    @include body-2;
    color: $color_black;
    min-height: $space_40;
    border: $width_default solid transparent;

    &:hover {
      background-color: $color_brown_100;
      border: $width_default solid $color_card_OnSurface_border;
      border-radius: $radius_12;
    }

    span {
      text-align: center;
    }

  }
</style>
