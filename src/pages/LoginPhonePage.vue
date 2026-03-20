<script setup>
import PhoneInputComponent from 'src/components/form/PhoneInputComponent.vue'
import InputComponentCheckBox from 'src/components/form/InputComponentCheckBox.vue'
import ButtonComponent from 'src/components/buttons/ButtonComponent.vue'
</script>

<template>
  <phone-input-component :label="'Введите номер телефона для входа'"/>
  <input-component-check-box />
  <button-component
    :icon-position="'left'"
    :title="'Вернуться'"
    :to-path="'/'"
  />
  <button-component
    :icon-position="'right'"
    :title="'Продолжить'"
  />
</template>

