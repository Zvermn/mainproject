<script setup>
  import StepsComponent from 'src/components/buttons/StepsComponent.vue';
  import CardComponent from '../../../components/commons/CardComponent.vue';
  import ButtonComponent from '../../../components/buttons/ButtonComponent.vue';
  import SelectorComponent from '../../../components/form/SelectorComponent.vue';
  import TextInputComponent from '../../../components/form/inputs/TextInputComponent.vue';
  import { ref } from 'vue';

  const nameGroup = ref('Слоны');
  const selectedGroupType = ref('');
  const selectedCount = ref('');
  const selectedGroupAge = ref('');
  const inputName = ref('');
  const inputSurname = ref('');
  const groupAge = [
    {
      value: 1,
      label: 'Ясельная группа'
    },
  ];
  const groupType = [1, 'Общеразвивающая']

</script>

<template>
  <Steps-component>
    <template #step-content>
      <h2>Редактирование данных</h2>
    </template>
  </Steps-component>
  <div class="container-main-content">
    <h1>Группа:</h1>
    <card-component>
      <template #content>
        <div class="group-info">
            <selector-component class="group-count"
              v-model="selectedCount"
              :count-start="1"
              :count-end="20"
              placeholder=""
              :label="'Сколько детей'"
            />
            <text-input-component
              v-model="nameGroup"
              :label="'Как называется группа?'"
              placeholder=""
              :input-id="'nameGroup'"
              :invalid-input-msg="'Как называется ваша группа?'"
            />
        </div>
        <selector-component
          v-model="selectedGroupAge"
          :options="groupAge"
          placeholder=""
          :label="'Возрастная группа'"
        />
        <selector-component
          v-model="selectedGroupType"
          :options="groupType"
          placeholder=""
          :label="'Тип группы'"
        />
      </template>
    </card-component>
  </div>
  <div class="container-main-content">
    <h1>Воспитатель:</h1>
    <card-component>
      <template #content>
        <div class="data-input-block">
          <text-input-component
            v-model="inputSurname"
            :input-id="'user-surname'"
            :type="'text'"
            :icon-enable="false"
            :label="'Фамилия'"
          />
          <text-input-component
            v-model="inputName"
            :input-id="'user-name'"
            :type="'text'"
            :icon-enable="false"
            :label="'Имя'"
          />
        </div>
      </template>
    </card-component>
  </div>
  <div class="container-main-content">
    <span></span>
    <button-component class="btn-primary"
      :title="'Сохранить'"

    />
  </div>
  <button-component class="btn-secondary"
    :title="'Отменить изменения'"

  />

</template>
<style lang="scss">
  @use "../../../css/abstractions/" as *;

  .group-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    gap: $space_12;

    .group-count {
      flex-basis: 180px;
    }
  }

  .container-main-content .card {
    display: flex;
    flex-direction: column;
    gap: $space_8;
    justify-content: flex-start;
  }

  .data-input-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: $space_8;
  }


</style>
