<template>
  <div>
    <div class="container">
      <h1>Controle de Insumos do Restaurante</h1>
      <a class="nav-link btn-entra-sai" @click="mostrarComponenteEntradaSaida">
        <i class="iconeBotao"></i>
        {{ textoBotao}}
      </a>
    </div>
    <div class="table-container">
      <template v-if="mostrarEntradaSaida">
        <EntradaSaidas></EntradaSaidas>
      </template>
      <template v-else>
        <InsumosTable></InsumosTable>
      </template>
    </div>
  </div>
</template>




<script>
import InsumosTable from '../components/InsumosTable.vue';
import EntradaSaidas from '../components/EntradaSaidas.vue';

export default {
  data() {
    return {
      mostrarEntradaSaida: false,
      textoBotao: 'Entradas e Saídas',
      iconeBotao: 'bi bi-arrow-down-up',
    };
  },

  components: {
    InsumosTable,
    EntradaSaidas
  },


methods: {
    mostrarComponenteEntradaSaida() {
      this.mostrarEntradaSaida = !this.mostrarEntradaSaida;
      this.textoBotao = this.mostrarEntradaSaida ? 'Insumos' : 'Entradas e Saídas';
      this.iconeBotao = this.mostrarEntradaSaida ? 'bi bi-clipboard' : 'bi bi-arrow-down-up'
    }
  }
};
</script>

<style scoped]>
.container{
  display: flex;
  flex-direction: row;
}
.btn-entra-sai{
  margin-left: 10rem;
  padding-top: 1rem;
  padding-left: 4px;
  background-color: var(--roxohex);
  border-radius: 10px;
  width: 150px;
  box-shadow: 0 1 10px rgba(0, 0, 0, 0.525);
  cursor:pointer;
}

.table-container {
  /* Defina a largura máxima para a área de rolagem horizontal, se necessário */
  max-width: 100%;
  
}
</style>





