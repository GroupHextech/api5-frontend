<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();
</script>

<template>
  <!-- 
    https://vue3datepicker.com/props/calendar-configuration/
  -->
  <VueDatePicker v-model="date" auto-apply :close-on-auto-apply="false" :min-date="new Date()" week-start="0" />
</template>

<style scoped></style>