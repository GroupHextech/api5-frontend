<script setup>
import ReservaCard from './ReservaCard.vue';

const props = defineProps(['groupedReservations'])

</script>

<template>
  <div>

    <h4>Lista de Reservas</h4>
    <div v-for="(dateReservations, date) in groupedReservations" :key="date">
      <h3>{{ date }}</h3>
      <div v-for="(hourReservations, hour) in dateReservations" :key="hour">
        <h4>{{ hour }}</h4>
        <div class="card-deck">
          <ReservaCard v-for="(reservation, index) in hourReservations" :key="index" :reservation="reservation" />
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card-deck {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>