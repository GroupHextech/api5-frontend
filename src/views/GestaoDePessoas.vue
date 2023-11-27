<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2 class="page-title">Gestão de pessoas</h2>
      <button @click="mostrarComponenteEntradaSaida">
        <i class='bi bi-table icone'></i>
        {{ textoBotao }}
      </button>   
    </div>
    <div class="table-container">
      <template v-if="mostrarEntradaSaida">
        <GestaoTable></GestaoTable>
      </template>
      <template v-else>
        <DashGestao></DashGestao>
      </template>
    </div>
  </div>
</template>




<script>
import GestaoTable from '../components/GestaoTable.vue';
import DashGestao from '../components/DashGestao.vue';

export default {
  data() {
    return {
      mostrarEntradaSaida: false,
      textoBotao: 'Funcionários',
    };
  },

  components: {
    GestaoTable,
    DashGestao
  },


methods: {
    mostrarComponenteEntradaSaida() {
      this.mostrarEntradaSaida = !this.mostrarEntradaSaida;
      this.textoBotao = this.mostrarEntradaSaida ? 'Dashboard' : 'Funcionários';
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