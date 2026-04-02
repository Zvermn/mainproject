<script setup>
  import StepsComponent from 'src/components/buttons/StepsComponent.vue';
  import CardComponent from 'src/components/commons/CardComponent.vue';
  import TextInputComponent from 'src/components/form/inputs/TextInputComponent.vue';
  import ButtonComponent from 'src/components/buttons/ButtonComponent.vue';
  import ButtonSquareComponent from 'src/components/buttons/ButtonSquareComponent.vue';

  // Ссылка, которую нужно скопировать
  const referralLink = 'https://detstvo.ru/ref-487hgh7sA';

  // Функция копирования
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      console.log('✅ Ссылка скопирована:', referralLink);
      // Можно показать уведомление: "Скопировано!"
    } catch (err) {
      console.error('❌ Не удалось скопировать:', err);
      alert('Не удалось скопировать ссылку');
    }
  };
</script>
<template>
  <steps-component :to-path="'/director/registration-steps/set-group-count'">
    <template #step-content>
      <h2>Завершение регистрации</h2>
      <span>Добро пожаловать в семью, <span>Лидия</span>!</span>
    </template>
 </steps-component>
 <div class="container-main-content">
    <card-component>
      <template #content>
        <h2>Мы ценим ваше время!</h2>
        <p>И чтобы не нагружать вас заполнением данных о группах - просто перешлите эту ссылку вашим воспитателям.</p>
        <p>Воспитатели заполнят данные о своих группах самостоятельно. Вам останется только подтвердить данные.</p>
      </template>
    </card-component>
    <text-input-component
    :icon-enable="true"
    :icon-color="'primary'"
    :icon-name="'copy'"
    :icon-size="'lg'"
    :type="'text'"
    :model-value="referralLink"
    readonly
    />
    <div class="copy-block">
      <button-component
        :title="'Копировать ссылку'"
        @click="copyToClipboard"
        class="btn-primary"
      />
      <button-square-component
        :icon-color="'primary'"
        :icon-name="'share-android'"
        :icon-size="'lg'"
      />
    </div>
    <span>Ссылка никуда не денется и вы сможете позже найти её в личном кабинете</span>
 </div>
  <button-component
      :title="'Продолжить'"
      :to-path="'/director/home'"
      class="btn-primary"
    />



</template>

<style lang="scss">
  @use "../../../css/abstractions/" as *;

  .card {
    h2 {
      margin-bottom: $space_8;
    }
  }

  .container-main-content {
    margin: auto 0;

    &>span:last-child {
      @include caption-1;
    }
  }

  .input-field-wrap {
    border-style: solid;
    border-width: $width_default;
    border-color: $color_primary_border;
    box-shadow: 0 0 5px 0 $color_primary_shadow;
  }

  .copy-block {
    display: flex;
    flex-direction: row;
    gap: $space-16;
    align-items: center;

    div {
      flex-shrink: 0;
    }
  }

</style>
