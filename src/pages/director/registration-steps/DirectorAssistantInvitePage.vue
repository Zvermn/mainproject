<script setup>
import CardComponent from '../../../components/commons/CardComponent.vue';
import StepsComponent from '../../../components/buttons/StepsComponent.vue';
import ButtonComponent from '../../../components/buttons/ButtonComponent.vue';
import ToogleComponent from '../../../components/form/ToogleComponent.vue';
import PhoneInputComponent from 'src/components/form/inputs/PhoneInputComponent.vue';



</script>

<template>
  <steps-component :to-path="'/director/registration-steps/verification'">
    <template #step-content>
      <h2>Ваш заместитель</h2>
      <span>Шаг </span><span>2 </span><span>из </span><span>3</span>
    </template>
 </steps-component>
  <CardComponent>
    <template #content>
      <h2>Добавьте заместителя</h2>
      <p>Он сможет помогать вам с рутиной,
         такой как верификация воспитателей в
          системе или указание общего количества групп в саду. </p>
    </template>
  </CardComponent>
  <CardComponent>
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
  </CardComponent>
  <card-component class="actions">
    <template #content >
      <phone-input-component
        :label="'Телефон заместителя'"
        :size="'md'"
        :icon-color="'primary'"
        :icon-name="'adressbook'"
        :icon-size="'lg'"
      />
      <ButtonComponent
      :title="'Отправить приглашение'"
      :to-path="'/'"
      class="btn-primary"
      />
      <ButtonComponent
      :title="'Выбрать из контактов'"
      :to-path="'/'"
      class="btn-tetriary"
      />
      <p>Приглашение отправлено на номер:<br>
      <span>+7 (945) 456 95-95</span>
      </p>
      <ButtonComponent
      :title="'Отменить приглашение'"
      :to-path="'/'"
      class="btn-secondary"
      />

    </template>
  </card-component>
  <ButtonComponent
    :title="'Не сейчас'"
    :to-path="'/director/home'"
    class="btn-secondary"
  />
  <ButtonComponent
    :title="'Продолжить'"
    :to-path="'/director/registration-steps/set-group-count'"
    class="btn-primary"
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

</style>

