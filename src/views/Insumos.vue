<template>
  <div>
    <div class="container">
      <h1>Controle de Insumos do Restaurante</h1>
      <button @click="mostrarComponenteEntradaSaida">
        <i class='bi bi-table icone'></i>
        {{ textoBotao}}
      </button>   
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
    }
  }
};
</script>

<style scoped]>
.icone{
  margin-right: 10px;
}
.container{
  display: flex;
  flex-direction: row;
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





