<script setup>
import { ref, onMounted } from 'vue';
import MesaCard from './MesaCard.vue';

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
});

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

  // Preencha o objeto de reserva
  reservation.value.date = props.selectedDate;
  reservation.value.tableId = selectedTable.value.id; // Use o nome da mesa
  reservation.value.status = 'reservada';

  // Atualize o status da mesa selecionada
  selectedTable.value.status = 'reservada';

  // Crie uma nova reserva com base no formulário
  const newReservation = {
    date: props.selectedDate,
    tableId: selectedTable.value.id,
    clientName: reservation.value.clientName,
    clientPhone: reservation.value.clientPhone,
    status: reservation.value.status,
  };

  const dateKey = props.selectedDate;
  if (!props.reservations[dateKey]) {
    props.reservations[dateKey] = [];
  }
  props.reservations[dateKey].push(newReservation);

  // Atualize o status da mesa selecionada para "reservada"
  selectedTable.value.status = 'reservada';

  // Limpe o formulário após a reserva
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
          <form @submit.prevent="reserveTable">

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
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="submit" class="btn btn-primary">Reservar</button>
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