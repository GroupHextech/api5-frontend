<template>
  <div>
    <h2 class="page-title">Receitas</h2>
    <!--div class="card">
      <ReceitasBarChart />
    </div-->
    <ReceitasComp></ReceitasComp>
  </div>
</template>

<script setup>
import ReceitasBarChart from '../charts/ReceitasBarChart.vue';

import ReceitasComp from '../components/ReceitasComp.vue';
</script>

<style scoped>
</style>