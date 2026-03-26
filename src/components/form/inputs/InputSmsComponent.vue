<script setup>
import ErrorHintComponent from '../ErrorHintComponent.vue'
import { ref, computed } from 'vue'

const props = defineProps({
	digitCount: {
		type: Number,
		default: 6,
	},
})

const filled = ref(Array(props.digitCount).fill(false))
const inputs = ref([])
const isChecking = ref(false)
const invalidAttempt = ref(false)

const emit = defineEmits(['complete'])

const allFilled = computed(() => filled.value.every(Boolean))

function getCodeFromInputs () {
	return inputs.value
		.map((el) => String(el?.value || '').replace(/\D/g, ''))
		.join('')
}

function handleInput (e, index) {
	invalidAttempt.value = false
	const input = e.target
	const value = input.value.replace(/\D/g, '')
	input.value = value.slice(0, 1)
	filled.value[index] = !!value

	if (value && index < props.digitCount - 1) {
		inputs.value[index + 1]?.focus()
	}

	if (!value && index > 0) {
		inputs.value[index - 1]?.focus()
	}

	if (filled.value.every(Boolean)) {
		isChecking.value = true
		const code = getCodeFromInputs()
		if (code.length === props.digitCount) {
			emit('complete', code)
		}
	}
}

defineExpose({
	reset: () => {
		invalidAttempt.value = false
		filled.value = Array(props.digitCount).fill(false)
		isChecking.value = false
		inputs.value.forEach((el) => {
			if (el) el.value = ''
		})
		inputs.value[0]?.focus()
	},
	markInvalid: () => {
		invalidAttempt.value = true
		isChecking.value = false
	},
})
</script>

<template>
  <div class="input-sms-wrap">
    <p class="input-sms-label">Введите код из СМС:</p>
    <div class="input-field">
      <input
        v-for="i in digitCount"
        :key="i"
        :ref="(el) => { inputs[i - 1] = el }"
        :class="{ filled: filled[i - 1], checking: isChecking }"
        inputmode="numeric"
        maxlength="1"
        @input="(e) => handleInput(e, i - 1)"
      />
    </div>
    <div class="sms-info-block">
      <p v-if="!allFilled">
        Код можно запросить повторно через <span>30 </span>
        <span>секунд</span>
      </p>
      <ErrorHintComponent
        v-if="invalidAttempt"
        :msg="'Код введен неверно. Попробуйте ещё раз'"
      />
      <p v-if="allFilled && !invalidAttempt" class="verification-process">
        Идет проверка... пожалуйста подождите
      </p>
      <div class="loading-animation">
        <img
          v-if="allFilled"
          class="animate"
          src="../../../assets/images/Animate.svg"
          width="138"
          height="128"
          alt=""
        />
      </div>
      <p>Код не пришел?
        <router-link :to="'/auth/phone'">Отправить ещё раз</router-link>
      </p>
    </div>
  </div>
</template>
<style lang="scss">
@use '../../../css/abstractions/' as *;

.input-sms-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: $space-8;

  .input-sms-label {
    @include body-2;
  }
}

.input-field {
  display: flex;
  flex-direction: row;
  gap: $space-8;

  input {
    width: $space_40;
    height: $space_40;
    text-align: center;
    @include head-2;
    border-style: solid;
    border-width: $width_default;
    border-color: $color_textField_border_disabled;
    background-color: $color_textField_surface;
    border-radius: $radius_12;

    &.filled {
      border-color: $color_textField_border_primary_light;
    }
    &.checking {
      border-color: $color_textField_border_disabled;
      background-color: $color_textField_border_disabled;
    }
  }
}

.sms-info-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    @include  body-3;
    color: $color_text_secondary;
  }
  .verification-process{
    color: $color_text_black;
  }
}

</style>
