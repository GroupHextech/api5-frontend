<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2 class="page-title">Fornecedores</h2>
      <button @click="mostrarComponenteEntradaSaida">
        <i class='bi bi-table icone'></i>
        {{ textoBotao }}
      </button>   
    </div>
    <div class="table-container">
      <template v-if="mostrarEntradaSaida">
        <FornecedorTable></FornecedorTable>
      </template>
      <template v-else>
        <DashFornecedor></DashFornecedor>
      </template>
    </div>
  </div>
</template>




<script>
import FornecedorTable from '../components/FornecedorTable.vue';
import DashFornecedor from '../components/DashFornecedor.vue';

export default {
  data() {
    return {
      mostrarEntradaSaida: false,
      textoBotao: 'Fornecedores',
    };
  },

  components: {
    FornecedorTable,
    DashFornecedor
  },


methods: {
    mostrarComponenteEntradaSaida() {
      this.mostrarEntradaSaida = !this.mostrarEntradaSaida;
      this.textoBotao = this.mostrarEntradaSaida ? 'Dashboard' : 'Fornecedores';
    }
  }
};
</script>

<style scoped>
.icone{
  margin-right: 10px;
}
button{
  border-radius: 10px;
  background-color: var(--roxohex);
  color: rgb(0, 0, 0);
  margin-left: 5rem;
}
button:hover {
  background-color: #7c6ed66b;
  color: #000000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.table-container {
  /* Defina a largura máxima para a área de rolagem horizontal, se necessário */
  max-width: 100%;
  
}
</style>