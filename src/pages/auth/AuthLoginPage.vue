<script setup>
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'


  import PhoneInputComponent from '../../components/form/inputs/PhoneInputComponent.vue'
  import CheckboxComponent from '../../components/form/CheckboxComponent.vue'
  import ButtonComponent from '../../components/buttons/ButtonComponent.vue'
  import CardComponent from '../../components/commons/CardComponent.vue'
  const phoneNumber = ref('');
  const router = useRouter();
  const isNotApproved = ref(false);
  const inputStatus = ref(false);
  const isCheckedPolicy = ref(false);
  const checkApproval = () => {
    if (isCheckedPolicy.value) {
      if (phoneNumber.value.length === 11) {
        router.push('/auth/sms');
      } else {
        inputStatus.value = true;
        console.log('телефон не введен ' + inputStatus.value);
      }
    } else {
      isNotApproved.value = true;
    }
  };
  watch(phoneNumber, (newVal) => {
    if (newVal.length > 0) {
      inputStatus.value = false;
    }
  });


</script>

<template>
  <phone-input-component
    v-model="phoneNumber"
    v-if="!isNotApproved"
    :label="'Введите номер телефона для входа'"
    :icon-color="'primary'"
    :icon-name="'phone'"
    :icon-size="'lg'"
    :incorrect-input="inputStatus"
    >
  </phone-input-component>

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
    :to-path="'/auth/login'"
    :icon-color="'light'"
    :icon-name="'arrow-right'"
    class="btn-primary"
    @click="isNotApproved = false"
  />
  <button-component
    v-if="isNotApproved"
    :title="'Отменить регистрацию'"
    :to-path="'/'"
    class="btn-secondary destructive"
  />
  <p v-if="isNotApproved" class="personal-information-msg text-centr">
    Мы обеспечиваем полное соответствие <router-link :to="'/'">ФЗ-152 </router-link>и гарантируем защиту личных данных
  </p>
</template>

<style lang="scss">
  @use '../../css/abstractions/' as *;

  .personal-information-msg {
    @include caption-1;
  }
</style>
