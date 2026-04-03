<script setup>
  import InfoComponent from '../../../components/commons/InfoComponent.vue';
  import CardComponent from '../../../components/commons/CardComponent.vue';
  import ButtonComponent from '../../../components/buttons/ButtonComponent.vue';
  import GroupCardWithContactDataComponent from '../../../components/commons/group-card/ GroupCardWithContactDataComponent.vue';
</script>

<template>
  <info-component
    :left-icon-size="'md'"
    :left-icon-name="'coffee'"
    :left-icon-color="'primary'"
    :left-icon-backing-color="'surface'"
    :left-icon-backing-type="'round'"
    :right-icon-size="'md'"
    :right-icon-name="'arrows-reload'"
    :right-icon-color="'gray'"
    :system-title="'Верификация'"
    :system-msg="'В процессе проверки...'"
  />
  <card-component>
    <template #content>
      <p>Спасибо! Теперь <span>Заведующая</span> должна проверить данные, обычно это не занимает много времени.</p>
      <p><span>Добавьте приложение на главный экран,</span> чтобы мы прислали вам уведомление, когда всё будет готово.</p>
      <button-component class="btn-tetriary"
        :title="'Добавить на главный экран'"
        :icon-position="'left'"
        :icon-color="'link'"
        :icon-name="'add-plus'"
        :icon-size="'md'"
        :btn-size="'btn-md'"
      />
    </template>
  </card-component>
  <group-card-with-contact-data-component
    :group-type="'Ясельная группа'"
    :group-name="''"
    :educator-name="'Антонина Владимировна'"
    :educator-tel="'+7 (983) 123-45-67'"

  />

</template>

<style lang="scss" scoped>
  @use '../../../css/abstractions/' as *;

  .btn-tetriary {
    color: $color_text_link;
    justify-content: flex-start;
  }

  .card p:last-of-type {
    margin-bottom: $space_10;
  }
</style>
