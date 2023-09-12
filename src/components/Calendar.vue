<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date());

</script>

<template>
  <!-- https://vue3datepicker.com/props/calendar-configuration/ -->
  <VueDatePicker v-model="date" auto-apply :close-on-auto-apply="false" :min-date="new Date()" :enable-time-picker="false"
    week-start="0" :format="'dd/MM/yyyy'" locale="pt-BR" />
</template>

<style scoped></style>