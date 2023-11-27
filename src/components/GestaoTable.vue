<template>
    <div>
      <h2>Tabela Funcionários</h2>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text search-icon"><i class="bi bi-search"></i></span>
        </div>
        <input type="text" class="form-control search" placeholder="Pesquisar funcionário" v-model="search" @input="filtrarFuncionarios">
      </div>
      <table>
        <thead>
          <tr>
            <th>Funcionário</th>
            <th>Salário</th>
            <th>Contratação</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in itemsFiltrados" :key="index" :class="getClasseES(item.es)">
            <td>{{ item.funcionario }}</td>
            <td>{{ formatarSalario(item.salario) }}</td>
            <td>{{ formatarData(item.contratacao) }}</td>
            <td>{{ item.cargo }}</td>
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
      };
    },
    methods: {
        formatarData(data) {
      const dataObj = new Date(data);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return dataObj.toLocaleDateString('pt-BR', options);
    },
  
      getClasseES(es) {
        return es === 'entrada';
      },
      filtrarFuncionarios() {
        const term = this.search.toLowerCase().trim();
  
        if (term === '') {
          this.itemsFiltrados = this.items;
        } else {
          this.itemsFiltrados = this.items.filter(item => {
            return item.funcionario.toLowerCase().includes(term);
          });
        }
      },
      formatarSalario(salario) {
        return `R$ ${salario.toFixed(2)}`; // Adiciona o texto "R$" e formata o número para duas casas decimais
      },
    },
    mounted() {
      axios.get('http://localhost:8080/funcionario/all')
        .then(response => {
          this.items = response.data.map(itemData => {
            return {
              funcionario: itemData[0],
              salario: itemData[1],
              contratacao: itemData[2],
              cargo: itemData[3],
            };
          });
  
          this.itemsFiltrados = this.items;
        })
        .catch(error => {
          console.error('Erro ao buscar dados de funcionários:', error);
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