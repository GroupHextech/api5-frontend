<script setup>
import Table from './Table.vue';
</script>

<template>
  <div class="row row-cols-auto">
    <div class="col board">
      <Table></Table>
    </div>
    <div class="col board">
    <Table></Table>
    </div>
    <div class="col board">
      <Table></Table>
    </div>
    <div class="col board">
      <Table></Table>
    </div>
    <div class="col board">
      <Table></Table>
    </div>
    <div class="col board">
      <Table></Table>
    </div>
    <div class="col board">
      <Table></Table>
    </div>
    <div class="col board">
      <Table></Table>
    </div>
    <div class="col board">
      <Table></Table>
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