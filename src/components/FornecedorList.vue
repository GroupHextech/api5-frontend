<template>
  <ul>
    <li v-for="fornecedor in fornecedores" :key="fornecedor.id">
      <Fornecedor :fornecedor="fornecedor" />
    </li>
  </ul>
</template>

<script setup>
import { reactive } from 'vue';
import Fornecedor from './Fornecedor.vue';

const fornecedores = reactive([
  {
    nome: 'Fornecedor 1',
    endereco: 'Rua da Paz, 123',
    telefone: '(11) 99999-9999',
    email: 'fornecedor1@example.com',
  },
  {
    nome: 'Fornecedor 2',
    endereco: 'Rua da Felicidade, 456',
    telefone: '(11) 88888-8888',
    email: 'fornecedor2@example.com',
  },
]);
</script>