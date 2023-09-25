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
          <th>Produto</th>
          <th>Qtd Atual</th>
          <th>Validade</th>
          <th>Data Compra</th>
          <th>Fornecedor</th>
          <th>Preço</th>
          <th>Qtd E/S</th>
          <th>E/S
   <!--   <select v-model="filtroStatus">
          <option value="">Todos</option>
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>
          </select>                                       -->
        </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemsFiltrados" :key="index" :class="getClasseES(item.es)">
          <td>{{ item.produto }}</td>    
          <td>{{ item.qtd }}</td>        
          <td>{{ item.validade }}</td>
          <td>{{ item.dataCompra }}</td> 
          <td>{{ item.fornecedor }}</td>  
          <td>{{ item.preco }}</td>       
          <td>{{ item.qtdes }}</td>
          <td>{{ item.es }}</td>
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
      items: [],
      search: '',
      itemsFiltrados: [],
    };
  },
  methods: {
    getClasseES(es) {
      return es === 'entrada' ? 'verde' : 'vermelho';
    },
    filtrarInsumos() {
  const term = this.search.toLowerCase().trim();

  if (term === '') {
    this.itemsFiltrados = this.items;
  } else {  
    this.itemsFiltrados = this.items.filter(items => {
      return (
        items.produto.toLowerCase().includes(term)
      );
    });
  }
},},
mounted() {
  axios.get('http://localhost:8080/insumos/entradas-saidas')
    .then(response => {
      this.items = response.data.map(itemData => {
        return {
          produto: itemData[0],  
          qtd: itemData[1],        
          validade: itemData[2],    
          dataCompra: itemData[3],  
          preco: itemData[4],       
          fornecedor: itemData[5],
          qtdes: itemData[6],
          es: itemData[7]
        };
      });

      this.itemsFiltrados = this.items;
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