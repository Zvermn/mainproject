<script setup>
  import IconComponent from '../../commons/IconComponent.vue'
  import ErrorHintComponent from '../ErrorHintComponent.vue';


  const props = defineProps({
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
    type: {
      type: String,
      default: 'text',
      validator: (value) => [
        'text',
        'email',
        'password',
        'tel',
        'number',
        'search',
        'url',
        'date',
        'time'
      ].includes(value)
    },
    modelValue: {
      type: String,
      default: '',
    },
    // --- Дополнительно ---
    label: {
      type: String,
      default: 'Введите данные',
    },
    placeholder: {
      type: String,
      default: '',
    },
    iconEnable: {
      type: Boolean,
      default: false,
    },
    inputId: {
      type: String,
      default: '',
    },
    requared: {
      type: Boolean,
      default: false,
    },
    invalidInputMsg: {
      type: String,
      default: '',
    },
    invalidInput: {
      type: Boolean,
      default: false,
    },
  })
  const emit = defineEmits(['update:modelValue']);

  const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
  };

  // const isError = computed(() => {
  //   if (props.requared) {
  //     if (props.modelValue.length == 0) {
  //       emit('error', true);
  //     } else {
  //       emit('error', false);
  //     }
  //   } else {
  //     emit('error', false);
  //   }
  // });

</script>

<template>
  <div class="input-wrap">
    <label :for="inputId">{{ props.label }}</label>
    <div
      v-bind="$attrs"
      :class="{filled: modelValue.length != 0,
      error: invalidInput}"
      class="input-field-wrap">
      <icon-component v-if="iconEnable"
        :size="props.iconSize"
        :color="props.iconColor"
        :icon-name="props.iconName"
      />
      <input
        :type="type"
        :id="inputId"
        :value="modelValue"
        :placeholder="placeholder"
        @input="updateValue"
        class="input-text"
      />
    </div>
    <error-hint-component
      v-if="invalidInput"
      :msg="invalidInputMsg"
    />
  </div>
</template>

<style lang="scss">
  @use '../../../css/abstractions/' as *;

  .input-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    label {
      @include body-3b;
    }
  }

  .input-field-wrap {
    padding: $space_4 $space_20;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: $space_10;
    background-color: $color_textField_surface;
    border-radius: $radius_12;
    border-width: $width_default;
    border-style: solid;
    border-color: $color_primary_border_light;
    @include body-2;

    input {
      width: 100%;
      border: 0;
    }
  }

  .input-field-wrap {
    div {
      align-self: center;
      flex-shrink: 0;
    }
  }

  .input-field-wrap.filled {
    box-shadow: 0 0 5px 0 $color_primary_shadow;
    border-color: $color_textField_border_primary;
  }

  .input-field-wrap.error {
    border-color: $color_error_border;
    border-width: $width_md;
  }

</style>
