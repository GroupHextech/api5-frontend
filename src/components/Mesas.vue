<script setup>
import { ref, onMounted } from 'vue';
import MesaCard from './MesaCard.vue';
import axios from 'axios';

// const reservations = ref({});
const props = defineProps(['selectedDate', 'reservations']);

const tables = ref([
  { id: 1, name: 'Mesa 1', status: 'livre', isSelected: false },
  { id: 2, name: 'Mesa 2', status: 'livre', isSelected: false },
  { id: 3, name: 'Mesa 3', status: 'livre', isSelected: false },
  { id: 4, name: 'Mesa 4', status: 'livre', isSelected: false },
  { id: 5, name: 'Mesa 5', status: 'livre', isSelected: false },
  { id: 6, name: 'Mesa 6', status: 'livre', isSelected: false },
  { id: 7, name: 'Mesa 7', status: 'livre', isSelected: false },
  { id: 8, name: 'Mesa 8', status: 'livre', isSelected: false },
  { id: 9, name: 'Mesa 9', status: 'livre', isSelected: false },
  { id: 10, name: 'Mesa 10', status: 'livre', isSelected: false },
  // Adicione mais mesas conforme necessário
]);

const reservation = ref({
  date: null,
  tableId: null,
  clientName: '',
  clientPhone: '',
  status: 'livre',
  itens: [],
});

const addProductToReservation = () => {
  if (!valorSelect.value) {
    return;
  }

  const produtoId = valorSelect.value;
  const produto = pratos.value.find((prato) => prato[0] === produtoId);

  if (produto) {
    // Verifica se o produto já está na reserva
    const existingProduct = reservation.value.itens.find((item) => item.praId === produto[0]);

    if (existingProduct) {
      // Se o produto já estiver na reserva, atualiza a quantidade
      existingProduct.iteQuantidade++;
    } else {
      // Caso contrário, adiciona o produto à reserva
      reservation.value.itens.push({
        praId: produto[0],
        iteQuantidade: 1,
      });
    }
  }

  // Redefine o valor do <select> para evitar que o mesmo item seja adicionado novamente sem selecionar outro
  valorSelect.value = null;
};

const getProductName = (productId) => {
  const produto = pratos.value.find((prato) => prato[0] === productId);
  return produto ? produto[1] : '';
};

const getProductPrice = (productId) => {
  const produto = pratos.value.find((prato) => prato[0] === productId);
  return produto ? produto[2] : 0;
};

const decrementQuantity = (index) => {
  const produto = reservation.value.itens[index];
  if (produto && produto.iteQuantidade > 0) {
    produto.iteQuantidade--;
  }
};

const incrementQuantity = (index) => {
  const produto = reservation.value.itens[index];
  if (produto) {
    produto.iteQuantidade++;
  }
};

const removeProductFromReservation = (index) => {
  reservation.value.itens.splice(index, 1);
};

const calculateTotalPrice = (produto) => {
  return produto.iteQuantidade * getProductPrice(produto.praId);
};

const selectedTable = ref(null);

const selectTable = (table) => {
  selectedTable.value = table;

  // Defina isSelected como true para a mesa selecionada
  table.isSelected = true;

  // Atualize o estado de todas as outras mesas para false
  tables.value.forEach((otherTable) => {
    if (otherTable !== table) {
      otherTable.isSelected = false;
    }
  });
};

const reserveTable = () => {
  if (!props.selectedDate) {
    alert('Por favor, selecione uma data antes de reservar.');
    return;
  }

  if (!reservation.value.clientName.trim()) {
    alert('Por favor, insira o nome do cliente.');
    return;
  }

  if (!reservation.value.clientPhone.trim()) {
    alert('Por favor, insira o telefone do cliente.');
    return;
  }

  if (!selectedTable.value) {
    alert('Por favor, selecione uma mesa antes de reservar.');
    return;
  }

  // Preenche o objeto de reserva
  reservation.value.date = props.selectedDate;
  reservation.value.tableId = selectedTable.value.id; // Usa o nome da mesa
  reservation.value.status = 'reservada';

  // Atualiza o status da mesa selecionada para "reservada"
  selectedTable.value.status = 'reservada';

  // Cria uma nova reserva com base no formulário
  const newReservation = {
    date: props.selectedDate,
    tableId: selectedTable.value.id,
    clientName: reservation.value.clientName,
    clientPhone: reservation.value.clientPhone,
    status: reservation.value.status,
    itens: reservation.value.itens, // Adiciona os itens à reserva
  };

  const dateKey = props.selectedDate;
  if (!props.reservations[dateKey]) {
    props.reservations[dateKey] = [];
  }
  props.reservations[dateKey].push(newReservation);

  // Limpa o formulário após a reserva
  clearReservationForm();
};

const clearReservationForm = () => {
  reservation.value.clientName = '';
  reservation.value.clientPhone = '';
};

const getTableStatus = (table) => {
  if (!props.selectedDate || !props.reservations) {
    return 'livre'; // Se a data ou as reservas não estiverem definidas, a mesa é considerada livre
  }

  const dateKey = props.selectedDate;
  if (props.reservations[dateKey]) {
    const reservation = props.reservations[dateKey].find((reservation) => {
      return reservation.tableId === table.id;
    });

    if (reservation) {
      return 'reservada'; // A mesa está reservada para a data e hora selecionadas
    }
  }

  return 'livre'; // Se não houver reserva para a mesa na data e hora selecionadas, a mesa é livre
};

const pratos = ref([]);

const getPratos = async () => {
  try {
    const response = await axios.get("/reserva/prato");
    pratos.value = response.data;
    console.log(pratos.value)
  } catch (error) {
    console.error("Erro ao buscar pratos:", error);
  }
};

const valorSelect = ref(null);

const sendPedido = async () => {
  // Construa a estrutura de dados do pedido com base nos seus dados
  const pedidoData = {
    pedHoraPedido: new Date().toISOString(),
    pedHoraEntregue: null, // Defina a data/hora de entrega conforme necessário
    pedValorTotal: calculateTotalPriceForAllItens(), // Calcule o valor total dos itens
    resId: 5,
    itens: reservation.value.itens.map((produto) => ({
      praId: produto.praId,
      iteQuantidade: produto.iteQuantidade,
    })),
  };

  try {
    // Faz uma chamada para o endpoint do backend para criar o pedido
    const response = await axios.post('/reserva/pedidos', pedidoData);
    // Lida com a resposta do backend conforme necessário
    console.log('Pedido enviado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao enviar o pedido:', error);
  }
};

const calculateTotalPriceForAllItens = () => {
  // Inicializa uma variável para rastrear o valor total
  let totalPrice = 0;

  // Percorre todos os itens na reserva e calcula o preço total para cada item
  reservation.value.itens.forEach((produto) => {
    const quantidade = produto.iteQuantidade;
    const precoUnitario = getProductPrice(produto.praId);
    const precoTotalItem = quantidade * precoUnitario;

    // Adiciona o preço total deste item ao preço total geral
    totalPrice += precoTotalItem;
  });

  // Retorna o preço total geral
  return totalPrice;
};

onMounted(() => {
  const exampleModal = document.getElementById('reservationForm')
  exampleModal.addEventListener('show.bs.modal', event => {

    reservation.value.date = props.selectedDate;
    reservation.value.tableId = selectedTable.value.id;
    reservation.value.status = selectedTable.value.status;

    selectedTable.value.reservation = {
      date: reservation.value.date,
      clientName: reservation.value.clientName,
      clientPhone: reservation.value.clientPhone,
    };

    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-* attributes
    const tableId = button.getAttribute('data-table-id')
    const tableStatus = button.getAttribute('data-table-status')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalStatus = exampleModal.querySelector('#mesaStatus')

    modalTitle.textContent = `Mesa ${tableId}`
    modalStatus.textContent = tableStatus
  })

  getPratos();
})
</script>

<template>
  <div id="mesas">
    <ul class="cards">
      <li v-for="table in tables" :key="table.id" @click="selectTable(table)">
        <!-- Renderize os cards das mesas aqui -->
        <MesaCard :table="table" :status="getTableStatus(table)" />
      </li>
    </ul>

    <!-- Modal para reservar mesa -->

    <!-- Modal -->
    <div class="modal fade" id="reservationForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="reservationFormLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down">

        <div class="modal-content">
          <form>

            <div class="modal-header">
              <h1 class="modal-title fs-5" id="reservationFormLabel">Mesa</h1>
              <span class="badge rounded-pill text-bg-primary p-2 mx-2" id="mesaStatus"></span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>

            <div class="modal-body">
              <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Nome</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputName" v-model="reservation.clientName" required>
                </div>
              </div>
              <div class="row mb-3">
                <label for="phone" class="col-sm-2 col-form-label">Telefone</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPhone" v-model="reservation.clientPhone" required>
                </div>
              </div>

              <!-- Pedido -->
              <div style="max-height: 300px; overflow-y: auto; overflow-x: hidden;">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-12">

                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <h3 class="fw-normal mb-0 text-black">Pedido</h3>
                      <div>
                        <select class="form-select" v-model="valorSelect">
                          <option class="produto" v-for="prato in pratos" :key="prato[0]" :value="prato[0]">{{ prato[1] }}
                            R$ {{ prato[2].toFixed(2) }}</option>
                        </select>
                        <button class="btn btn-primary" @click="addProductToReservation">Adicionar</button>
                      </div>
                    </div>

                    <div class="card rounded-3 mb-3" v-for="(produto, index) in reservation.itens" :key="index">
                      <div class="card-body p-1">
                        <div class="row d-flex justify-content-between align-items-center">
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <p class="lead fw-normal mb-2">{{ getProductName(produto.praId) }}</p>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2" @click="decrementQuantity(index)">
                              <i class="bi bi-dash-lg"></i>
                            </button>
                            <input :id="'form' + index" min="0" name="quantity" v-model="produto.iteQuantidade"
                              type="number" class="form-control form-control-sm" style="width: 40px;" />
                            <button class="btn btn-link px-2" @click="incrementQuantity(index)">
                              <i class="bi bi-plus-lg"></i>
                            </button>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 class="mb-0">R$ {{ calculateTotalPrice(produto).toFixed(2) }}</h5>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-danger" @click="removeProductFromReservation(index)">
                              <i class="bi bi-trash3-fill"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>



            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-primary" @click="sendPedido">Salvar</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                @click="reserveTable">Reservar</button>
            </div>

          </form>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.cards {
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

#mesaStatus {
  text-transform: uppercase;
}
</style>