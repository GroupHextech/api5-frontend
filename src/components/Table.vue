<script setup>
const props = defineProps(['table'])
</script>

<script>
export default {
  data() { },
  methods: {
    cardClass(table) {
      if (table.status === 'ocupada') return 'text-bg-danger'
      if (table.status === 'reservada') return 'text-bg-secondary'
      else return 'text-bg-success'
    }
  }
}
</script>

<template>
  <div class="card" :class="cardClass(table)">
    <div class="card-header">{{ table.id }}</div>
    <div class="card-body">
      <p class="card-text">{{ table.status }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
  text-align: center;
}
</style>