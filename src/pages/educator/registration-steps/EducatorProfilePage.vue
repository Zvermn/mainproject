<script setup>
  import StepsComponent from '../../../components/buttons/StepsComponent.vue';
  import CardComponent from '../../../components/commons/CardComponent.vue';
  import TextInputComponent from '../../../components/form/inputs/TextInputComponent.vue';
  import ButtonComponent from '../../../components/buttons/ButtonComponent.vue';
  import { ref, computed } from 'vue';

  const isChecked = ref(false);
  const inputName = ref('');
  const inputSurname = ref('');
  const isFormValid = computed(() => {
    return (inputName.value.trim() && inputSurname.value.trim()) ? true : false;
  });


</script>
<template>
    <steps-component :to-path="'/auth/login'">
        <template #step-content>
          <h2>Знакомство</h2>
          <span>Шаг </span><span>2 </span><span>из </span><span>3</span>
        </template>
    </steps-component>
    <card-component>
        <template #content>
          <p>Учреждение: МУ Детское образовательное учреждение №6</p>
          <p>Заведующая:<br><span class="director-full-name">Иванова Лидия Ивановна</span></p>
        </template>
    </card-component>
    <div class="data-input-block">
      <h2>Пожалуйста представьтесь:</h2>
        <text-input-component
          v-model="inputSurname"
          :input-id="'user-surname'"
          :type="'text'"
          :icon-enable="false"
          :label="'Фамилия'"
          :invalid-input="inputSurname.length == 0 && isChecked"
          :invalid-input-msg="'Введите фамилию'"
        />
        <text-input-component
          v-model="inputName"
          :input-id="'user-name'"
          :type="'text'"
          :icon-enable="false"
          :label="'Имя'"
          :invalid-input="inputName.length == 0 && isChecked"
          :invalid-input-msg="'Введите имя'"
        />
    </div>
    <button-component
      class="btn-primary"
      :title="'Продолжить'"
      @click="isChecked = true"
      :to-path="isFormValid ? '/educator/registration-steps/set-group' : null"
    />
</template>

<style lang="scss">
  @use "../../../css/abstractions/" as *;

  .data-input-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: $space_8;
  }

  // .card {
  //   & p:first-child {
  //     margin-bottom: $space_12;
  //   }
  // }

  .director-full-name {
    @include body-2b;
  }
</style>
