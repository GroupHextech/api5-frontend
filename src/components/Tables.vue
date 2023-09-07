<script setup>
import Table from './Table.vue'

const tables = [
  { id: 1, status: 'livre' },
  { id: 2, status: 'ocupada' },
  { id: 3, status: 'livre' },
  { id: 4, status: 'livre' },
  { id: 5, status: 'livre' },
  { id: 6, status: 'ocupada' },
  { id: 7, status: 'ocupada' },
  { id: 8, status: 'livre' },
  { id: 9, status: 'ocupada' },
  { id: 10, status: 'livre' }
]
</script>

<template>
  <div>
    <h2>Mesas</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-2">
      <div v-for="table in tables" class="col">
        <Table :table="table"></Table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>