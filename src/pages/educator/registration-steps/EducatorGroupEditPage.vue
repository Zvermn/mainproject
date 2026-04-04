<script setup>
  import StepsComponent from '../../../components/buttons/StepsComponent.vue';
  import CardComponent from '../../../components/commons/CardComponent.vue';
  import ButtonComponent from '../../../components/buttons/ButtonComponent.vue';
  import SelectorComponent from '../../../components/form/SelectorComponent.vue';
  import TextInputComponent from '../../../components/form/inputs/TextInputComponent.vue';
  import popUpComponent from '../../../components/commons/popUpComponent.vue';
  import liItemcomponent from '../../../components/commons/liItemcomponent.vue';
  import IconComponent from '../../../components/commons/IconComponent.vue';

  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  // === Справочники (раскомментированы!) ===
  const arrayGroupAge = [
    { value: 1, label: 'Ясельная группа' },
    { value: 2, label: 'Младшая группа' },
    { value: 3, label: 'Средняя группа' },
    { value: 4, label: 'Старшая группа' },
    { value: 5, label: 'Подготовительная группа' }
  ];

  const arrayGroupType = [
    { value: 1, label: 'Общеразвивающая' },
    { value: 2, label: 'Оздоровительная' },
    { value: 3, label: 'Компенсирующая' }
  ];

  // === Данные с сервера ===
  const initialServerData = {
    nameGroup: 'Слоны',
    selectedCount: '5',
    selectedGroupAge: 1,
    selectedGroupType: 1,
    inputName: 'Антонина',
    inputSurname: 'Владимировна'
  };

  // === Оригинальные данные (для сравнения) ===
  const initialData = ref({ ...initialServerData });

  // === Реактивные поля ===
  const nameGroup = ref(initialServerData.nameGroup);
  const selectedCount = ref(initialServerData.selectedCount);
  const selectedGroupAge = ref(initialServerData.selectedGroupAge);
  const selectedGroupType = ref(initialServerData.selectedGroupType);
  const inputName = ref(initialServerData.inputName);
  const inputSurname = ref(initialServerData.inputSurname);
  // === Флаги изменений (для шаблона) ===
  const isNameGroupModified = computed(() => nameGroup.value !== initialData.value?.nameGroup);
  const isCountModified = computed(() => selectedCount.value !== initialData.value?.selectedCount);
  const isAgeModified = computed(() => selectedGroupAge.value !== initialData.value?.selectedGroupAge);
  const isTypeModified = computed(() => selectedGroupType.value !== initialData.value?.selectedGroupType);
  const isSurnameModified = computed(() => inputSurname.value !== initialData.value?.inputSurname);
  const isNameModified = computed(() => inputName.value !== initialData.value?.inputName);


  // === Список изменений (для попапа) ===
  const changedFieldsList = computed(() => {
    const changes = [];
    const data = initialData.value;

    if (!data) return changes; // защита

    if (nameGroup.value !== data.nameGroup) {
      changes.push({
        label: 'Название группы',
        old: data.nameGroup,
        new: nameGroup.value
      });
    }

    if (selectedCount.value !== data.selectedCount) {
      changes.push({
        label: 'Количество детей',
        old: data.selectedCount,
        new: selectedCount.value
      });
    }

    if (selectedGroupAge.value !== data.selectedGroupAge) {
      const oldLabel = arrayGroupAge.find(g => g.value === data.selectedGroupAge)?.label;
      const newLabel = arrayGroupAge.find(g => g.value === selectedGroupAge.value)?.label;
      changes.push({ label: 'Возрастная группа', old: oldLabel, new: newLabel });
    }

    if (selectedGroupType.value !== data.selectedGroupType) {
      const oldLabel = arrayGroupType.find(t => t.value === data.selectedGroupType)?.label;
      const newLabel = arrayGroupType.find(t => t.value === selectedGroupType.value)?.label;
      changes.push({ label: 'Тип группы', old: oldLabel, new: newLabel });
    }

    if (inputSurname.value !== data.inputSurname) {
      changes.push({
        label: 'Фамилия воспитателя',
        old: data.inputSurname,
        new: inputSurname.value
      });
    }

    if (inputName.value !== data.inputName) {
      changes.push({
        label: 'Имя воспитателя',
        old: data.inputName,
        new: inputName.value
      });
    }

    return changes;
  });
  // === Счётчик изменений ===
  const changedFieldsCount = computed(() => changedFieldsList.value.length);
  // кнопка навигации
  const router = useRouter();
  const navigateTo = (path) => router.push(path);
  const showExitPopup = ref(false);
  const hasUnsavedChanges = computed(() => changedFieldsCount.value > 0);
  const handleBackClick = () => {
    if (hasUnsavedChanges.value) {
      showExitPopup.value = true;
    } else {
      // Если нет изменений — сразу идём назад
      navigateTo('/educator/registration-steps/waiting-verification');
    }
  };
  const confirmExit = () => {
    showExitPopup.value = false;
    navigateTo('/educator/registration-steps/waiting-verification');
  };

  // const cancelExit = () => {
  //   showExitPopup.value = false;
  // };
</script>

<template>
  <Steps-component @click="handleBackClick">
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
              :class="{ modified: isCountModified  }"
            />
            <text-input-component
              v-model="nameGroup"
              :label="'Как называется группа?'"
              placeholder=""
              :input-id="'nameGroup'"
              :invalid-input-msg="'Как называется ваша группа?'"
              :class="{ modified: isNameGroupModified }"
            />
        </div>
        <selector-component
          v-model="selectedGroupAge"
          :options="arrayGroupAge"
          placeholder=""
          :label="'Возрастная группа'"
          :class="{ modified: isAgeModified }"
        />
        <selector-component
          v-model="selectedGroupType"
          :options="arrayGroupType"
          placeholder=""
          :label="'Тип группы'"
          :class="{ modified: isTypeModified  }"
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
            :class="{ modified: isSurnameModified }"
          />
          <text-input-component
            v-model="inputName"
            :input-id="'user-name'"
            :type="'text'"
            :icon-enable="false"
            :label="'Имя'"
            :class="{ modified: isNameModified  }"
          />
        </div>
      </template>
    </card-component>
  </div>
  <div class="container-main-content">
    <span class="change-msg" v-if="changedFieldsCount > 0">Изменилось полей: {{ changedFieldsCount }}</span>
    <button-component class="btn-primary"
      :title="'Сохранить'"
      @click="confirmExit"
      :to-path="'/educator/registration-steps/waiting-verification'"
    />
  </div>
  <button-component class="btn-secondary"
    :title="'Отменить изменения'"
    :to-path="'/educator/registration-steps/waiting-verification'"
  />
 <pop-up-component
    v-if="showExitPopup"
    pop-up-img="img-Areyousure">
    <template #popUp-header-msg>Отменяем всё, что вы исправили?</template>
    <template #popUp-content>
      <li-itemcomponent>
        <template #li-content>
          <p class="changed-info">Вы внесли изменения, но не сохранили их.<br>Хотите сохранить изменения, или отменить их?</p>
          <div class="changed-block" v-for="(field, index) in changedFieldsList" :key="index">
          <span class="changed-item-old"><s>{{ field.old }}</s></span>
          <icon-component
            :size="'sm'"
            :color="'dark'"
            :icon-name="'arrow-right'"
          />
          <span class="changed-item-new">{{ field.new }}</span>

        </div>
        </template>
      </li-itemcomponent>
      <button-component
        class="btn-primary"
        :title="'Сохранить изменения'"
        @click="confirmExit"
      />
      <button-component
        class="btn-secondary"
        :title="'Отменить изменения'"
        @click="confirmExit"
      />
    </template>
  </pop-up-component>
</template>
<style lang="scss" scoped>
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

  // заполненное поле
  :deep(.input-field-wrap.filled) {
    box-shadow: none;
    border-color: $color_primary_border_light;
  }

  :deep(.selected.modified) {
    @include body-2b;
    color: $color_text_primary;
  }

  :deep(.input-field-wrap.modified) {
    @include body-2b;
    color: $color_text_primary;
  }

  .change-msg {
    @include caption-1;
    align-self: center;
  }

  .card .changed-info {
    @include caption-1;
    color: $color_text_black;
    margin-bottom: 0;
  }

  .changed-block {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    span {
      @include caption-1;
    }

    .changed-item-new {
      color: $color_text_primary;
    }
  }

</style>
