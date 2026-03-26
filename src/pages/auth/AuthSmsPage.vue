<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import CardComponent from '../../components/commons/CardComponent.vue'
import InputSmsComponent from '../../components/form/inputs/InputSmsComponent.vue'
import { api } from 'src/boot/axios'
import { useErpAuthStore } from 'src/stores/erp-auth'
import { isSmsLoginDevMock } from 'src/utils/smsDevMock'

const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const authStore = useErpAuthStore()

const phone = ref('')
const smsInputRef = ref(null)
const busy = ref(false)

const phoneDisplay = computed(() => {
	const p = phone.value || ''
	if (p.startsWith('+7') && p.length >= 12) {
		const d = p.slice(2)
		return `+7 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8)}`
	}
	return p || '—'
})

onMounted(() => {
	const q = route.query.phone
	const fromQuery = Array.isArray(q) ? q[0] : q
	phone.value = (fromQuery && String(fromQuery)) || sessionStorage.getItem('erp_login_phone') || ''
	if (!phone.value) {
		$q.notify({
			type: 'warning',
			message: 'Сначала введите номер телефона',
		})
		router.replace('/auth/phone')
	}
})

function onCodeComplete (code) {
	if (busy.value || !phone.value) {
		return
	}
	busy.value = true

	const loginUrl = isSmsLoginDevMock()
		? '/auth/sms/dev-login'
		: '/auth/sms/login'

	api
		.post(loginUrl, { phone: phone.value, code })
		.then((res) => {
			const token = res.data?.token
			const user = res.data?.user
			if (!token) {
				throw new Error('Нет токена в ответе')
			}
			authStore.setSession(token, user)
			$q.notify({
				type: 'positive',
				message: res.data?.message || 'Вход выполнен',
			})
			router.push('/director/registration-steps/verification')
		})
		.catch((err) => {
			const status = err.response?.status
			const data = err.response?.data
			let msg = typeof data?.message === 'string' ? data.message : ''

			if (data?.errors?.phone?.[0]) {
				msg = data.errors.phone[0]
			}
			if (data?.errors?.code?.[0]) {
				msg = data.errors.code[0]
			}

			if (!msg && err.message && !err.response) {
				msg = err.message
			}

			if (!msg && isSmsLoginDevMock() && status === 404) {
				msg =
					'Dev-вход выключен в ERP: задайте SMS_LOGIN_DEV_BYPASS=true (и APP_ENV=local), затем php artisan config:clear'
			}

			if (!msg && status === 404) {
				msg = 'Метод входа не найден (404). Проверьте версию API и настройки dev-login в ERP.'
			}

			if (!msg) {
				msg = 'Неверный код или ошибка входа'
			}

			$q.notify({
				type: 'negative',
				message: msg,
			})
			smsInputRef.value?.reset?.()
			smsInputRef.value?.markInvalid?.()
		})
		.finally(() => {
			busy.value = false
		})
}
</script>

<template>
  <div class="auth-sms-page-stack">
    <card-component>
      <template #content>
        <p>На ваш телефон <strong>{{ phoneDisplay }}</strong> отправлено SMS с кодом. Введите шестизначный код:</p>
      </template>
    </card-component>
    <input-sms-component
      ref="smsInputRef"
      :digit-count="6"
      @complete="onCodeComplete"
    />
  </div>
</template>

<style scoped lang="scss">
.auth-sms-page-stack {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  gap: 12px;
}
</style>
