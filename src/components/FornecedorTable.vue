<template>
    <div>
      <h2>Tabela Forncedores</h2>
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
            <th>Fornecedor</th>
            <th>Categoria
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
        return es === 'entrada' ;
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
    axios.get('http://localhost:8080/fornecedor/all')
      .then(response => {
        this.items = response.data.map(itemData => {
          return {
            produto: itemData[0],  
            fornecedor: itemData[1],        
            categoria: itemData[2],   
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