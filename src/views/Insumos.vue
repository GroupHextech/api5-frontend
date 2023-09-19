<template>
  <div>
    <div class="container">
      <h1>Controle de Insumos do Restaurante</h1>
      <a class="nav-link btn-entra-sai" href="insumos">
          <i class="bi bi-arrow-down-up"></i>
          Entradas e Saídas
        </a>
    </div>
    <div class="table-container">
      <insumos-table></insumos-table>
    </div>
  </div>
</template>


<script>
import InsumosTable from '../components/InsumosTable.vue';

export default {
  components: {
    InsumosTable
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
}

.table-container {
  /* Defina a largura máxima para a área de rolagem horizontal, se necessário */
  max-width: 100%;
  
}
</style>





