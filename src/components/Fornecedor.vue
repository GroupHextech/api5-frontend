<script setup>
const props = defineProps(['fornecedor'])
</script>

<template>
  <div class="card shadow fornecedor">
    <h5 class="page-title">{{ fornecedor.nome }}</h5>
    <p>{{ fornecedor.endereco }}</p>
    <p>{{ fornecedor.telefone }}</p>
    <p>{{ fornecedor.email }}</p>
  </div>
</template>