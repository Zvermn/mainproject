<script setup>
  import FundSupportComponent from '../../components/director/FundSupportComponent.vue'
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
  <fund-support-component/>
  <events-calendar-component/>
</template>
