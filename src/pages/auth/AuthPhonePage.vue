<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import PhoneInputComponent from '../../components/form/inputs/PhoneInputComponent.vue'
import CheckboxComponent from '../../components/form/CheckboxComponent.vue'
import ButtonComponent from '../../components/buttons/ButtonComponent.vue'
import CardComponent from '../../components/commons/CardComponent.vue'
import { api } from 'src/boot/axios'
import { formatPhoneForErpApi } from 'src/utils/erpPhone'
import { isSmsLoginDevMock } from 'src/utils/smsDevMock'

const router = useRouter()
const $q = useQuasar()

const isNotApproved = ref(false)
const isCheckedPolicy = ref(false)
const phoneInputRef = ref(null)
const loading = ref(false)

function checkApproval() {
  if (!isCheckedPolicy.value) {
    isNotApproved.value = true
    return
  }

  const digits = phoneInputRef.value?.getDigits?.() ?? ''
  if (digits.length !== 11) {
    $q.notify({
      type: 'negative',
      message: 'Введите 11 цифр номера телефона',
    })
    return
  }

  const phone = formatPhoneForErpApi(digits)
  if (!/^\+7\d{10}$/.test(phone)) {
    $q.notify({
      type: 'negative',
      message: 'Введите номер в формате 79…, 89… или 10 цифр с 9…',
    })
    return
  }

  loading.value = true

  if (isSmsLoginDevMock()) {
    sessionStorage.setItem('erp_login_phone', phone)
    $q.notify({
      type: 'info',
      message: 'Dev: код не запрашивался. Введите магический код на следующем шаге.',
    })
    router.push({ path: '/auth-sms', query: { phone } })
    loading.value = false

    return
  }

  api
    .post('/auth/sms/issue', { phone })
    .then((res) => {
      sessionStorage.setItem('erp_login_phone', phone)
      $q.notify({
        type: 'positive',
        message:
          res.data?.message
          || 'Если номер зарегистрирован в системе, на него уйдёт код по SMS.',
      })
      router.push({ path: '/auth-sms', query: { phone } })
    })
    .catch((err) => {
      const status = err.response?.status
      const data = err.response?.data
      let msg = typeof data?.message === 'string' ? data.message : ''

      if (!msg && data?.errors?.phone?.[0]) {
        msg = data.errors.phone[0]
      }

      if (!msg && !err.response) {
        msg =
          err.code === 'ERR_NETWORK'
            ? 'Нет ответа от сервера (сеть, CORS или неверный VITE_ERP_API_BASE_URL)'
            : 'Запрос не дошёл до сервера — проверьте адрес API и настройки CORS в ERP'
      }

      if (!msg && status === 429) {
        msg = 'Слишком частые запросы кода. Подождите минуту и попробуйте снова.'
      }

      if (!msg && status === 409) {
        msg = data?.message || 'Повторная отправка ещё недоступна (интервал между SMS).'
      }

      if (!msg && status >= 500) {
        msg = 'Ошибка на сервере при отправке SMS — см. логи ERP и настройки SMS-провайдера.'
      }

      if (!msg) {
        msg = status ? `Запрос отклонён (${status})` : 'Не удалось отправить код'
      }

      $q.notify({
        type: 'negative',
        message: msg,
      })
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <div class="auth-page-stack">
    <phone-input-component
      v-if="!isNotApproved"
      ref="phoneInputRef"
      :label="'Введите номер телефона для входа'"
    />
    <checkbox-component
      v-if="!isNotApproved"
      :model-value="isCheckedPolicy"
      @update:modelValue="isCheckedPolicy = $event"
    />
    <card-component v-if="isNotApproved">
      <template #content>
        <h2>Личные данные - это не шутки!</h2>
        <p>Чтобы вы могли использовать номер телефона для входа - нужно дать согласие на обработку данных:</p>
        <router-link :to="'/'">Прочитать соглашение</router-link>
      </template>
    </card-component>
    <button-component
      v-if="!isNotApproved"
      :icon-position="'right'"
      :title="loading ? 'Отправка…' : 'Продолжить'"
      class="btn-primary"
      :class="{ 'opacity-50': loading }"
      @click="checkApproval"
    />
    <button-component
      v-if="isNotApproved"
      :icon-position="'right'"
      :title="'Хорошо, продолжить'"
      :icon-color="'light'"
      :icon-name="'arrow-right'"
      class="btn-primary"
      @click="isNotApproved = false"
    />
    <button-component
      v-if="isNotApproved"
      :title="'Отменить регистрацию'"
      :to-path="'/'"
      class="btn-secondary"
    />
    <p
      v-if="isNotApproved"
      class="caption-1 text-centr"
    >
      Мы обеспечиваем полное соответствие <router-link :to="'/'">ФЗ-152 </router-link>и гарантируем защиту личных данных
    </p>
  </div>
</template>

<style scoped lang="scss">
.auth-page-stack {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: stretch;
  gap: 12px;
}
</style>
