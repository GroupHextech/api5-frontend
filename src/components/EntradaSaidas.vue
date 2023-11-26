<template>
  <div>
    <h2>Tabela Fornecedor X Insumo</h2>



    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Fornecedor</th>
          <th>Categoria
              <select v-model="selectedCategoria" @change="filtrarPorCategoria" class="search">
                <option value="">Todas as categorias</option>
                <option v-for="categoria in categorias" :key="categoria" :value="categoria">
                  {{ categoria }}
                </option>
              </select>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemsFiltrados" :key="index" :class="getClasseES(item.es)">
          <td>{{ item.produto }}</td>    
          <td>{{ item.fornecedor }}</td>        
          <td>{{ item.categoria }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      search: '',
      itemsFiltrados: [],
      categorias: [], // Adicione a lista de categorias
      selectedCategoria: '', // Adicione o estado para a categoria selecionada
    };
  },
  methods: {
    getClasseES(es) {
      return es === 'entrada';
    },
    filtrarPorCategoria() {
      const term = this.search.toLowerCase().trim();
      const categoriaSelecionada = this.selectedCategoria.toLowerCase().trim();

      this.itemsFiltrados = this.items.filter(item => {
        const matchProduto = item.produto.toLowerCase().includes(term);
        const matchCategoria = categoriaSelecionada === '' || item.categoria.toLowerCase() === categoriaSelecionada;

        return matchProduto && matchCategoria;
      });
    },
  },
  mounted() {
    axios.get('http://localhost:8080/estoque/nomeProduto')
      .then(response => {
        this.items = response.data.map(itemData => {
          return {
            produto: itemData[0],
            fornecedor: itemData[1],
            categoria: itemData[2],
          };
        });

        // Obter categorias únicas usando um conjunto (Set)
        this.categorias = [...new Set(this.items.map(item => item.categoria.toLowerCase()))];

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
.search{
  background-color: #7c6ed660;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
}
.search-icon{
  background-color: #7c6ed660;
}
.search:focus {
  border: 2px solid black;
}
</style>