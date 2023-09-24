<template>
  <div>
    <h2>Tabela de Insumos</h2>
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
          <th>Qtd</th>
          <th>Validade</th>
          <th>Data Compra</th>
          <th>Fornecedor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="insumo in insumosFiltrados" :key="insumo.id">
          <td>{{ insumo.id }}</td>
          <td>{{ insumo.produto.iteNome }}</td>
          <td>{{ insumo.qtd }}</td>
          <td :class="getClasseVal(insumo.validade)">{{ insumo.validade }}</td>
          <td>{{ insumo.dataCompra }}</td>
          <td>{{ insumo.fornecedor.forNome }}</td>
          <td>{{ insumo.preco }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
const dia = String(dataAtual.getDate()).padStart(2, '0'); 
const dataFormatada = `${ano}-${mes}-${dia}`;

export default {
  data() {
    return {
      insumos: [],
      search: '',
      insumosFiltrados: [],
    };
  },
  methods: {
    getClasseVal(validade) {
      return validade > dataFormatada ? '' : 'vermelho';
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
},},

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
.verde {
  background-color: #00cc0075; /* Verde para linhas de entrada */
}

.vermelho {
  background-color: #ff00005e; /* Vermelho para linhas de saída */
}

/* Estilos para a tabela */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px; /* Raio do arredondamento das bordas da tabela */
  overflow: hidden; /* Para garantir que as bordas arredondadas sejam visíveis */
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

/* Estilos para o cabeçalho da página */
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