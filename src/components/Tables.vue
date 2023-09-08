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
    <ul>
      <li v-for="table in tables">
        <Table :table="table"></Table>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
</style>