<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import PhoneInputComponent from '../../components/form/inputs/PhoneInputComponent.vue';
import CheckboxComponent from '../../components/form/CheckboxComponent.vue';
import ButtonComponent from '../../components/buttons/ButtonComponent.vue';
import CardComponent from '../../components/commons/CardComponent.vue';
import CircularProgressComponent from '../../components/indicators/CircularProgressComponent.vue';

const router = useRouter();
const isNotApproved = ref(false);
const isCheckedPolicy = ref(false);

const checkApproval = () => {
  if (isCheckedPolicy.value) {
    router.push('/auth-sms');
  } else {
    isNotApproved.value = true;
  }
};
</script>

<template>
  <circular-progress-component v-if="!isNotApproved" :current="10" :max="200" title="Семей в системе"
    footer-text="74 из 150 помогают формировать фонд" />

  <phone-input-component v-if="!isNotApproved" :label="'Введите номер телефона для входа'" />
  <checkbox-component v-if="!isNotApproved" :model-value="isCheckedPolicy"
    @update:modelValue="isCheckedPolicy = $event" />
  <card-component v-if="isNotApproved">
    <template #content>
      <h2>Личные данные - это не шутки!</h2>
      <p>
        Чтобы вы могли использовать номер телефона для входа - нужно дать согласие на обработку данных:
      </p>
      <router-link :to="'/'">Прочитать соглашение</router-link>
    </template>
  </card-component>
  <button-component v-if="!isNotApproved" :icon-position="'right'" :title="'Продолжить'" class="btn-primary"
    @click="checkApproval" />
  <button-component v-if="isNotApproved" :icon-position="'right'" :title="'Хорошо, продолжить'" :to-path="'/auth/phone'"
    :icon-color="'light'" :icon-name="'arrow-right'" class="btn-primary" @click="isNotApproved = false" />
  <button-component v-if="isNotApproved" :title="'Отменить регистрацию'" :to-path="'/'" class="btn-secondary" />
  <p v-if="isNotApproved" class="caption-1 text-centr">
    Мы обеспечиваем полное соответствие <router-link :to="'/'">ФЗ-152 </router-link>и гарантируем защиту личных данных
  </p>
</template>
