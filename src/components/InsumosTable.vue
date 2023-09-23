<template>
  <div>
    <h2>Tabela de Insumos</h2>
    <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text search-icon"><i class="bi bi-search"></i></span>
  </div>
  <input type="text" class="form-control search" placeholder="Pesquisar insumo">
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
        <tr v-for="insumo in insumos" :key="insumo.id">
          <td>{{ insumo.id }}</td>
          <td>{{ insumo.produto }}</td>
          <td>{{ insumo.qtd }}</td>
          <td>{{ insumo.validade }}</td>
          <td>{{ insumo.dataCompra }}</td>
          <td>{{ insumo.fornecedor }}</td>
          <td>{{ insumo.preco }}</td>
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
      insumos: [
      
  { id: 1, produto: 'Carne Bovina', qtd: 10, validade: '2023-12-10', dataCompra: '2023-09-01', fornecedor: 'Fornecedor A', preco: 10.99 },
  { id: 2, produto: 'Frango', qtd: 20, validade: '2023-12-15', dataCompra: '2023-09-03', fornecedor: 'Fornecedor B', preco: 7.49 },
  { id: 3, produto: 'Peixe', qtd: 15, validade: '2023-12-08', dataCompra: '2023-09-02', fornecedor: 'Fornecedor C', preco: 12.99 },
  { id: 4, produto: 'Batata', qtd: 30, validade: '2023-12-20', dataCompra: '2023-09-05', fornecedor: 'Fornecedor A', preco: 2.99 },
  { id: 5, produto: 'Tomate', qtd: 25, validade: '2023-12-12', dataCompra: '2023-09-04', fornecedor: 'Fornecedor B', preco: 1.49 },
  { id: 6, produto: 'Cenoura', qtd: 35, validade: '2023-12-22', dataCompra: '2023-09-07', fornecedor: 'Fornecedor C', preco: 0.99 },
  { id: 7, produto: 'Cebola', qtd: 40, validade: '2023-12-18', dataCompra: '2023-09-06', fornecedor: 'Fornecedor A', preco: 0.79 },
  { id: 8, produto: 'Arroz', qtd: 50, validade: '2023-12-25', dataCompra: '2023-09-09', fornecedor: 'Fornecedor B', preco: 3.99 },
  { id: 9, produto: 'Feijão', qtd: 22, validade: '2023-12-28', dataCompra: '2023-09-08', fornecedor: 'Fornecedor C', preco: 2.49 },
  { id: 10, produto: 'Óleo de Cozinha', qtd: 18, validade: '2023-12-30', dataCompra: '2023-09-10', fornecedor: 'Fornecedor A', preco: 4.99 },
  { id: 11, produto: 'Leite', qtd: 40, validade: '2023-12-22', dataCompra: '2023-09-11', fornecedor: 'Fornecedor B', preco: 2.99 },
  { id: 12, produto: 'Ovos', qtd: 60, validade: '2023-12-20', dataCompra: '2023-09-12', fornecedor: 'Fornecedor C', preco: 1.89 },
  { id: 13, produto: 'Pão', qtd: 80, validade: '2023-12-15', dataCompra: '2023-09-13', fornecedor: 'Fornecedor A', preco: 3.49 },
  { id: 14, produto: 'Açúcar', qtd: 25, validade: '2023-12-28', dataCompra: '2023-09-14', fornecedor: 'Fornecedor B', preco: 2.19 },
  { id: 15, produto: 'Sal', qtd: 30, validade: '2023-12-31', dataCompra: '2023-09-15', fornecedor: 'Fornecedor C', preco: 1.29 },
  { id: 16, produto: 'Café', qtd: 12, validade: '2023-12-25', dataCompra: '2023-09-16', fornecedor: 'Fornecedor A', preco: 6.99 },
  { id: 17, produto: 'Azeite de Oliva', qtd: 10, validade: '2023-12-30', dataCompra: '2023-09-17', fornecedor: 'Fornecedor B', preco: 9.49 },
  { id: 18, produto: 'Vinho', qtd: 18, validade: '2023-12-20', dataCompra: '2023-09-18', fornecedor: 'Fornecedor C', preco: 15.99 },
  { id: 19, produto: 'Queijo', qtd: 22, validade: '2023-12-28', dataCompra: '2023-09-19', fornecedor: 'Fornecedor A', preco: 7.99 },
  { id: 20, produto: 'Manteiga', qtd: 15, validade: '2023-12-22', dataCompra: '2023-09-20', fornecedor: 'Fornecedor B', preco: 5.49 },
  { id: 21, produto: 'Macarrão', qtd: 25, validade: '2023-12-18', dataCompra: '2023-09-21', fornecedor: 'Fornecedor C', preco: 2.79 },
  { id: 22, produto: 'Molho de Tomate', qtd: 28, validade: '2023-12-12', dataCompra: '2023-09-22', fornecedor: 'Fornecedor A', preco: 2.99 },
  { id: 23, produto: 'Cerveja', qtd: 36, validade: '2023-12-25', dataCompra: '2023-09-23', fornecedor: 'Fornecedor B', preco: 4.49 },
  { id: 24, produto: 'Refrigerante', qtd: 42, validade: '2023-12-31', dataCompra: '2023-09-24', fornecedor: 'Fornecedor C', preco: 3.99 },
  { id: 25, produto: 'Biscoitos', qtd: 48, validade: '2023-12-15', dataCompra: '2023-09-25', fornecedor: 'Fornecedor A', preco: 2.29 },
  { id: 26, produto: 'Chocolate', qtd: 20, validade: '2023-12-20', dataCompra: '2023-09-26', fornecedor: 'Fornecedor B', preco: 3.99 },
  { id: 27, produto: 'Iogurte', qtd: 30, validade: '2023-12-08', dataCompra: '2023-09-27', fornecedor: 'Fornecedor C', preco: 1.99 },
  { id: 28, produto: 'Laranjas', qtd: 65, validade: '2023-12-18', dataCompra: '2023-09-28', fornecedor: 'Fornecedor A', preco: 1.09 },
  { id: 29, produto: 'Maçãs', qtd: 75, validade: '2023-12-22', dataCompra: '2023-09-29', fornecedor: 'Fornecedor B', preco: 1.29 },
  { id: 30, produto: 'Bananas', qtd: 55, validade: '2023-12-10', dataCompra: '2023-09-30', fornecedor: 'Fornecedor C', preco: 0.89 },
  { id: 31, produto: 'Morangos', qtd: 40, validade: '2023-12-15', dataCompra: '2023-10-01', fornecedor: 'Fornecedor A', preco: 2.49 },
  { id: 32, produto: 'Abacate', qtd: 20, validade: '2023-12-20', dataCompra: '2023-10-02', fornecedor: 'Fornecedor B', preco: 3.99 },
  { id: 33, produto: 'Abacaxi', qtd: 30, validade: '2023-12-25', dataCompra: '2023-10-03', fornecedor: 'Fornecedor C', preco: 2.99 },
  { id: 34, produto: 'Uvas', qtd: 25, validade: '2023-12-12', dataCompra: '2023-10-04', fornecedor: 'Fornecedor A', preco: 4.99 },
  { id: 35, produto: 'Melancia', qtd: 10, validade: '2023-12-30', dataCompra: '2023-10-05', fornecedor: 'Fornecedor B', preco: 5.99 },
  { id: 36, produto: 'Pêssego', qtd: 15, validade: '2023-12-08', dataCompra: '2023-10-06', fornecedor: 'Fornecedor C', preco: 3.49 },
  { id: 37, produto: 'Mamão', qtd: 18, validade: '2023-12-18', dataCompra: '2023-10-07', fornecedor: 'Fornecedor A', preco: 3.99 },
  { id: 38, produto: 'Kiwi', qtd: 22, validade: '2023-12-28', dataCompra: '2023-10-08', fornecedor: 'Fornecedor B', preco: 2.79 },
  { id: 39, produto: 'Limão', qtd: 28, validade: '2023-12-25', dataCompra: '2023-10-09', fornecedor: 'Fornecedor C', preco: 1.99 },
  { id: 40, produto: 'Cereais', qtd: 45, validade: '2023-12-15', dataCompra: '2023-10-10', fornecedor: 'Fornecedor A', preco: 4.49 },
  { id: 41, produto: 'Nozes', qtd: 35, validade: '2023-12-20', dataCompra: '2023-10-11', fornecedor: 'Fornecedor B', preco: 6.99 },
  { id: 42, produto: 'Amêndoas', qtd: 30, validade: '2023-12-18', dataCompra: '2023-10-12', fornecedor: 'Fornecedor C', preco: 5.99 },
  { id: 43, produto: 'Castanhas', qtd: 22, validade: '2023-12-22', dataCompra: '2023-10-13', fornecedor: 'Fornecedor A', preco: 7.49 },
  { id: 44, produto: 'Amendoim', qtd: 18, validade: '2023-12-10', dataCompra: '2023-10-14', fornecedor: 'Fornecedor B', preco: 3.99 },
  { id: 45, produto: 'Coco', qtd: 20, validade: '2023-12-12', dataCompra: '2023-10-15', fornecedor: 'Fornecedor C', preco: 2.29 },
  { id: 46, produto: 'Avelãs', qtd: 15, validade: '2023-12-08', dataCompra: '2023-10-16', fornecedor: 'Fornecedor A', preco: 8.99 },
  { id: 47, produto: 'Macadâmias', qtd: 12, validade: '2023-12-25', dataCompra: '2023-10-17', fornecedor: 'Fornecedor B', preco: 11.49 },
  { id: 48, produto: 'Pistaches', qtd: 8, validade: '2023-12-18', dataCompra: '2023-10-18', fornecedor: 'Fornecedor C', preco: 10.99 },
  { id: 49, produto: 'Sementes de Girassol', qtd: 10, validade: '2023-12-28', dataCompra: '2023-10-19', fornecedor: 'Fornecedor A', preco: 4.99 },
  { id: 50, produto: 'Sementes de Abóbora', qtd: 14, validade: '2023-12-30', dataCompra: '2023-10-20', fornecedor: 'Fornecedor B', preco: 5.49 }


      ] 
    };
  },
  mounted() {
    // Fazer uma solicitação GET para o endpoint do backend para buscar os dados dos insumos
    axios.get('/api/insumos')
      .then(response => {
        this.insumos = response.data; // Atualiza os dados com a resposta do backend
      })
      .catch(error => {
        console.error('Erro ao buscar dados de insumos:', error);
      });
  }
};
</script>
<style scoped>

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
</style>