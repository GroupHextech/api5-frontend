<script setup>
import { ref, computed } from 'vue'
import DatePicker from '../components/DatePicker.vue'
import Mesas from '../components/Mesas.vue'
import ReservasList from '../components/ReservasList.vue'

const selectedDate = ref(null);
const reservations = ref({});

const onUpdateDate = (date) => {
  // Recebendo o valor emitido pelo evento 'updateDate'
  selectedDate.value = date;
};

const hasReservations = computed(() => {
  // Verificando se há reservas
  return Object.keys(reservations.value).length > 0;
});

const groupedReservations = computed(() => {
  // Agrupe as reservas por data e hora
  const grouped = {};

  for (const dateTime in reservations.value) {
    const [date, time] = dateTime.split(' ');

    if (!grouped[date]) {
      grouped[date] = {};
    }

    if (!grouped[date][time]) {
      grouped[date][time] = [];
    }

    grouped[date][time] = grouped[date][time].concat(reservations.value[dateTime]);
  }

  return grouped;
});
</script>

<template>
  <div id="reservas">
    <h2>Reservas</h2>
    <DatePicker @updateDate="onUpdateDate"></DatePicker>
    <Mesas v-if="selectedDate" :selectedDate="selectedDate" :reservations="reservations"></Mesas>
    <!-- <ReservasList v-if="hasReservations" :reservations="reservations"></ReservasList> -->
    <ReservasList v-if="hasReservations" :groupedReservations="groupedReservations">
    </ReservasList>
  </div>
</template>

<style scoped></style>