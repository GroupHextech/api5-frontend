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
    },
    linkClass(table) {
      if (table.status === 'ocupada') return 'btn-danger'
      if (table.status === 'reservada') return 'btn-secondary'
      else return 'btn-success'
    }
  }
}
</script>

<template>
  <div class="card shadow" :class="cardClass(table)">
    <div class="card-body">
      <div class="card-title">{{ table.id }}</div>
      <button type="button" href="#" class="btn stretched-link" :class="linkClass(table)"><i class="bi bi-info-circle-fill"></i></button>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
  text-align: center;
}
</style>