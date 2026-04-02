<script setup>
  import StepsComponent from 'src/components/buttons/StepsComponent.vue';
  import CardComponent from 'src/components/commons/CardComponent.vue';
  import SelectorComponent from 'src/components/form/SelectorComponent.vue';
  import TextInputComponent from 'src/components/form/inputs/TextInputComponent.vue';
  import ButtonComponent from 'src/components/buttons/ButtonComponent.vue';
  import { ref } from 'vue';

  const isChecked = ref(false);

  const nameGroup = ref('');
  const selectedGroupType = ref('');
  const selectedCount = ref('');
  const selectedGroupAge = ref('');
  const arrayGroupAge = [
    {
      value: 1,
      label: 'Ясельная группа'
    },
    {
      value: 2,
      label: 'Младшая группа'
    },
    {
      value: 3,
      label: 'Средняя группа'
    },
    {
      value: 4,
      label: 'Старшая группа'
    },
    {
      value: 5,
      label: 'Подготовительная группа'
    }
  ];
  const arrayGroupType = [
    {
      value: 1,
      label: 'Общеразвивающая'
    },
    {
      value: 2,
      label: 'Оздоровительная'
    },
    {
      value: 3,
      label: 'Компенсирующая'
    },

  ]
</script>

<template>
    <steps-component :to-path="'/educator/registration-steps/profile'">
        <template #step-content>
          <h2>Ваша группа</h2>
          <span>Последний шаг!</span>
        </template>
    </steps-component>
    <card-component>
        <template #content>
          <p>Учреждение: МУ Детское образовательное учреждение №6</p>
          <p>Заведующая:<br><span class="director-full-name">Иванова Лидия Ивановна</span></p>
        </template>
    </card-component>
    <div class="container-main-content">
      <h2>Расскажите о вашей группе:</h2>
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
          :invalid-input="isChecked && !nameGroup"
          :invalid-input-msg="'Как называется ваша группа?'"
        />
      </div>
      <selector-component v-if="selectedCount && nameGroup"
        v-model="selectedGroupAge"
        :options="arrayGroupAge"
        placeholder=""
        :label="'Возрастная группа'"
      />
          <selector-component v-if="selectedCount && nameGroup"
        v-model="selectedGroupType"
        :options="arrayGroupType"
        placeholder=""
        :label="'Тип группы'"
      />
    </div>
    <button-component class="btn-primary"
      :title="'Продолжить'"
      :to-path="nameGroup ? '/educator/registration-steps/finish' : null"
      @click="isChecked = true"
    />

</template>

<style lang="scss">
  @use "../../../css/abstractions/" as *;


  .card {
    & p:first-child {
      margin-bottom: $space_12;
    }
  }

  .director-full-name {
    @include body-2b;
  }

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

  .container-main-content {
    margin-bottom: auto;

  }
</style>

