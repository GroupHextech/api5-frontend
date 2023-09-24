<script setup>
const props = defineProps(['table', 'status'])
</script>

<template>
  <div>

    <div class="mesa-card card " :class="{
      'text-bg-secondary btn-secondary': status === 'reservada',
      'text-bg-success': status === 'livre',
      'selected': table.isSelected
    }">

      <div class="card-body">
        <div class="card-title">
          <h3>{{ table.id }}</h3>
        </div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#reservationForm" class="btn stretched-link"
          :class="{ 'btn-success': status === 'livre', 'btn-secondary' : status === 'reservada' }" :data-table-id="table.id"
          :data-table-status="status"><i class="bi bi-arrow-right-circle"></i></button>
        <p v-if="reservation">Reservado para: {{ reservation.clientName }}</p>
      </div>

    </div>

  </div>
</template>

<style scoped>
.mesa-card {
  text-align: center;
  padding: 0px;
  cursor: pointer;
}

.card:hover {
  scale: 1.1;
}

.mesa-card:hover {
  background-color: #f0f0f0;
}

.selected {
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, .25);
}

#mesaStatus {
  text-transform: uppercase;
}

h3 {
  font-size: 1.2rem;
  margin: 0;
}

p {
  font-size: 1rem;
  margin: 0;
}
</style>