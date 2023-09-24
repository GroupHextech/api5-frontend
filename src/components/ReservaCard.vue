<script setup>
const props = defineProps(['reservation'])
</script>

<template>
  <div>

    <div class="card">
    <div class="card-body">
      <span class="badge rounded text-bg-secondary">{{ reservation.tableId || 'N/A' }}</span>
      <h5 class="card-title">{{ reservation.clientName || 'N/A' }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ reservation.clientPhone || 'N/A' }}</h6>
    </div>
  </div>

  </div>
</template>

<style scoped>
.card {
  padding: 0;
}
</style>