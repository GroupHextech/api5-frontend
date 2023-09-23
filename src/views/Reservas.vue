<script setup>
import { ref } from 'vue'
import DatePicker from '../components/DatePicker.vue'
import Mesas from '../components/Mesas.vue'

const selectedDate = ref(null);
const reservations = ref({});

const onUpdateDate = (date) => {
  selectedDate.value = date; // Receba o valor emitido pelo evento 'updateDate'
};
</script>

<template>
  <div id="reservas">
    <h2>Reservas</h2>
    <DatePicker @updateDate="onUpdateDate"></DatePicker>
    <Mesas :selectedDate="selectedDate" :reservations="reservations"></Mesas>
  </div>
</template>

<style scoped>
</style>