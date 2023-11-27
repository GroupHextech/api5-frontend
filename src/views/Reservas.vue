<script setup>
import { ref, computed, onMounted } from 'vue'
import DatePicker from '../components/DatePicker.vue'
import Mesas from '../components/Mesas.vue'
import ReservasList from '../components/ReservasList.vue'
import axios from 'axios'

const selectedDate = ref(null);
const reservations = ref({});

const onUpdateDate = (date) => {
  // Recebendo o valor emitido pelo evento 'updateDate'
  selectedDate.value = date;
};

const hasReservations = computed(() => {
  // Verificando se há reservas
  return Object.keys(reservations.value).length > 0;
});

const groupedReservations = computed(() => {
  // Agrupe as reservas por data e hora
  const grouped = {};

  for (const dateTime in reservations.value) {
    const [date, time] = dateTime.split(' ');

    if (!grouped[date]) {
      grouped[date] = {};
    }

    if (!grouped[date][time]) {
      grouped[date][time] = [];
    }

    grouped[date][time] = grouped[date][time].concat(reservations.value[dateTime]);
  }

  return grouped;
});
// Fazer a solicitação HTTP ao endpoint "/reserva/por-data" e processar os dados
onMounted(async () => {
  try {
    const response = await axios.get('/reserva/reservada'); // Substitua pela URL correta do seu backend
    const data = response.data;

    // Processar os dados recebidos
    for (const item of data) {
      const [res_id, clientName, clientPhone, date, tableId] = item;
      const rawDate = new Date(date);

      // Formate a data e hora desejadas
      const formattedDate = `${rawDate.toLocaleDateString()} ${rawDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

      // Fazer a substituição de status
      //const mappedStatus = status === 'Pendente' ? 'livre' : 'reservada';

      // Criar a chave no formato desejado (data e hora)
      const dateTime = formattedDate;

      // Preencher as reservas
      if (!reservations.value[dateTime]) {
        reservations.value[dateTime] = [];
      }

      reservations.value[dateTime].push({
        res_id,
        clientName,
        clientPhone,
        //status: mappedStatus,
        date: formattedDate,
        tableId,
      });
    }
  } catch (error) {
    console.error('Erro ao buscar reservas:', error);
  }
});
</script>

<template>
  <div id="reservas">
    <h2 class="page-title">Reservas</h2>
    <DatePicker @updateDate="onUpdateDate"></DatePicker>
    <Mesas v-if="selectedDate" :selectedDate="selectedDate" :reservations="reservations"></Mesas>
    <!-- <ReservasList v-if="hasReservations" :reservations="reservations"></ReservasList> -->
    <div>
      <iframe title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNDY5YjZkZWUtYzJiZi00OGJlLWJhYWItM2Q2MDZhNGRhMTI4IiwidCI6ImRkNDg5YTlkLTU4Y2EtNGI3Ny1iM2RkLWQ5MzYyZGJkMjdlZCJ9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
    <ReservasList v-if="hasReservations" :groupedReservations="groupedReservations"></ReservasList>
  </div>
</template>

<style scoped></style>