<script setup>
  import EventsCalendarComponent from 'src/components/events/EventsCalendarComponent.vue';
  import DirectorEducatorHeaderComponent from '../../components/commons/DirectorEducatorHeaderComponent.vue';
  import { ref } from 'vue';

  const post = ref('Учитель');
  const fullName = ref('Иванов Иван');
</script>

<template>
    <director-educator-header-component
    :header-post="post"
    :header-full-name="fullName"
    />



    <events-calendar-component/>


</template>
