<script setup>
import CardComponent from '../../../components/commons/CardComponent.vue';
import StepsComponent from '../../../components/buttons/StepsComponent.vue';
import ButtonComponent from '../../../components/buttons/ButtonComponent.vue';
import ToogleComponent from '../../../components/form/ToogleComponent.vue';
import PhoneInputComponent from 'src/components/form/inputs/PhoneInputComponent.vue';
import { ref } from 'vue';

const assistantPhone = ref('');
const sendInvitation = ref(false);
</script>

<template>
  <steps-component :to-path="'/director/registration-steps/verification'">
    <template #step-content>
      <h2>Ваш заместитель</h2>
      <span>Шаг </span><span>2 </span><span>из </span><span>3</span>
    </template>
 </steps-component>
  <card-component>
    <template #content>
      <h2>Добавьте заместителя</h2>
      <p>Он сможет помогать вам с рутиной,
         такой как верификация воспитателей в
          системе или указание общего количества групп в саду. </p>
    </template>
  </card-component>
  <card-component>
    <template #content>
      <h2>Права доступа:</h2>
      <p>Выберите разделы, которые будут доступны заместителю:</p>
      <toogle-component
      :title="'Верификация групп'"
      />
      <toogle-component
      :title="'Раздел с финансами'"
      />
    </template>
  </card-component>
  <card-component
    :class="{hidden: sendInvitation}"
    class="actions">
    <template #content >
      <phone-input-component
        v-model="assistantPhone"
        :label="'Телефон заместителя'"
        :icon-color="'primary'"
        :icon-name="'adressbook'"
        :icon-size="'lg'"
      />
      <button-component v-if="assistantPhone.replace(/\D/g, '').length === 11"
      :title="'Отправить приглашение'"
      class="btn-primary"
      @click="sendInvitation = true"
      />
      <button-component
      :title="'Выбрать из контактов'"
      class="btn-tetriary"
      />
    </template>
  </card-component>
  <card-component v-if="sendInvitation == true" class="actions">
    <template #content >
      <p>Приглашение отправлено на номер:<br>
      <span>+7 (945) 456 95-95</span>
      </p>
      <button-component
      :title="'Отменить приглашение'"
      class="btn-secondary"
      />
    </template>
  </card-component>
  <button-component
    v-if="sendInvitation == false"
    :title="'Не сейчас'"
    :to-path="'/director/home'"
    class="btn-secondary margin-top"
  />
  <button-component
    v-if="sendInvitation == true"
    :title="'Продолжить'"
    :to-path="'/director/registration-steps/set-group-count'"
    class="btn-primary margin-top"
  />
</template>

<style lang="scss">
@use '../../../css/abstractions/' as *;
.card{
  p{
    margin-bottom: $space-16;
    @include body-2;
  }
  p:last-child{
    margin-bottom: 0;
  }
.director-full-name{
  @include body-2b;
}
}

.card.actions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: $space_8;
  p {
    margin-bottom: 0;
    span{
      @include label-2;
    }
  }
}
 .hidden{
  display: none;
 }
</style>

