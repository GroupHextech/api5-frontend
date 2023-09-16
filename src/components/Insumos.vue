<template>
  <div class="container">
    <h1>Controle de Insumos do Restaurante</h1>
    <div class="table-container">
      <insumos-table></insumos-table>
    </div>
  </div>
</template>


<script>
import InsumosTable from './InsumosTable.vue';

export default {
  components: {
    InsumosTable
  }
};
</script>

<style scoped]>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 5px;
  /* Defina a altura máxima para a área de rolagem */
  max-height: 500px;
  /* Adicione overflow-y para criar uma área de rolagem vertical */
  overflow-y: auto;
}

.table-container {
  /* Defina a largura máxima para a área de rolagem horizontal, se necessário */
  max-width: 100%;
}
</style>





