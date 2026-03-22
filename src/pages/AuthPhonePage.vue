<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


import PhoneInputComponent from 'src/components/form/PhoneInputComponent.vue'
import CheckboxComponent from 'src/components/form/CheckboxComponent.vue'
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue'
import CardComponent from 'src/components/CardComponent.vue'

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
  <phone-input-component
    v-if="!isNotApproved"
    :label="'Введите номер телефона для входа'"
    />
  <checkbox-component
    v-if="!isNotApproved"
    :model-value="isCheckedPolicy"
    @update:modelValue="isCheckedPolicy = $event"
  />
  <card-component
    v-if="isNotApproved"
  >
    <template #content>
      <h2>Личные данные - это не шутки!</h2>
      <p>Чтобы вы могли использовать номер телефона для входа - нужно дать согласие на обработку данных:</p>
      <router-link :to="'/'">Прочитать соглашение</router-link>
    </template>
  </card-component>
  <button-component
    v-if="!isNotApproved"
    :icon-position="'right'"
    :title="'Продолжить'"
    class="btn-primary"
    @click="checkApproval"
  />
  <button-component
    v-if="isNotApproved"
    :icon-position="'right'"
    :title="'Хорошо, продолжить'"
    :to-path="'/auth-phone'"
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
  <p v-if="isNotApproved" class="caption-1 text-centr">
    Мы обеспечиваем полное соответствие <router-link :to="'/'">ФЗ-152 </router-link>и гарантируем защиту личных данных
  </p>
</template>

