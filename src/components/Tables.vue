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
  <div class="row">
    <div v-for="table in tables" class="col col-lg-1 board">
      <Table :table="table"></Table>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
  margin: 0;
  padding: 0.2rem;
}
</style>