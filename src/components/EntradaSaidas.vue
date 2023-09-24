<template>
  <div>
    <h2>Tabela de Entradas e Saídas</h2>
    <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text search-icon"><i class="bi bi-search"></i></span>
  </div>
  <input type="text" class="form-control search" placeholder="Pesquisar insumo" v-model="search" @input="filtrarInsumos">
  </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Qtd Atual</th>
          <th>Validade</th>
          <th>Data Compra</th>
          <th>Fornecedor</th>
          <th>Preço</th>
          <th>Qtd E/S</th>
          <th>E/S
          <select v-model="filtroStatus">
          <option value="">Todos</option>
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>

          </select>
        </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="insumo in insumosFiltrados" :key="insumo.id" :class="getClasseES(insumo.es)">
          <td>{{ insumo.id }}</td>
          <td>{{ insumo.produto.iteNome }}</td>
          <td>{{ insumo.qtd }}</td>
          <td>{{ insumo.validade }}</td>
          <td>{{ insumo.dataCompra }}</td>
          <td>{{ insumo.fornecedor.forNome }}</td>
          <td>{{ insumo.preco }}</td>
          <td>{{ insumo.qtdes }}</td>
          <td>{{ insumo.es }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

//Excluir depois
export default {
  data() {
    return {
      insumos: [],
      search: '',
      insumosFiltrados: [],
    };
  },
  methods: {
    getClasseES(es) {
      return es === 'Entrada' ? 'verde' : 'vermelho';
    },
    filtrarInsumos() {
  const term = this.search.toLowerCase().trim();

  if (term === '') {
    this.insumosFiltrados = this.insumos;
  } else {  
    this.insumosFiltrados = this.insumos.filter(insumo => {
      return (
        insumo.produto.iteNome.toLowerCase().includes(term)
      );
    });
  }
},
},

mounted() {
    axios.get('http://localhost:8080/insumos')
      .then(response => {
        this.insumos = response.data;
        this.insumosFiltrados = response.data;
      })
      .catch(error => {
        console.error('Erro ao buscar dados de insumos:', error);
      });
  },
};
</script>
<style scoped>

/* Estilos para a tabela */
.verde {
  background-color: #00cc0075; /* Verde para linhas de entrada */
}

.vermelho {
  background-color: #ff00005e; /* Vermelho para linhas de saída */
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden; 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

table th,
table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

table th {
  background-color:var(--roxohex);
  font-weight: bold;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.input-group{
  width: 20rem;
  margin: 1rem;
}
.search{
  background-color: #7c6ed660;
  border-radius: 5px;
  color: black;
}
.search-icon{
  background-color: #7c6ed660;
}
.search:focus {
  border: 2px solid var(--roxohex);
}
</style>