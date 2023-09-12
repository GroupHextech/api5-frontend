<script setup>
import { ref, computed } from 'vue'
import Table from './Table.vue'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref(new Date());

const reservas = [
  {
    "_id": "64ffbaf85dcde2f69731d576",
    "data": "30/09/2023",
    "tables": [
      {
        "id": 1,
        "status": "livre"
      },
      {
        "id": 2,
        "status": "livre"
      },
      {
        "id": 3,
        "status": "reservada"
      },
      {
        "id": 4,
        "status": "reservada"
      },
      {
        "id": 5,
        "status": "livre"
      },
      {
        "id": 6,
        "status": "ocupada"
      },
      {
        "id": 7,
        "status": "livre"
      },
      {
        "id": 8,
        "status": "livre"
      },
      {
        "id": 9,
        "status": "livre"
      },
      {
        "id": 10,
        "status": "livre"
      }
    ]
  },
  {
    "_id": "64ffbaf84573caa95e859e3a",
    "data": "20/09/2023",
    "tables": [
      {
        "id": 1,
        "status": "ocupada"
      },
      {
        "id": 2,
        "status": "ocupada"
      },
      {
        "id": 3,
        "status": "livre"
      },
      {
        "id": 4,
        "status": "ocupada"
      },
      {
        "id": 5,
        "status": "reservada"
      },
      {
        "id": 6,
        "status": "reservada"
      },
      {
        "id": 7,
        "status": "ocupada"
      },
      {
        "id": 8,
        "status": "reservada"
      },
      {
        "id": 9,
        "status": "reservada"
      },
      {
        "id": 10,
        "status": "ocupada"
      }
    ]
  },
  {
    "_id": "64ffbaf88e71565841c42dd7",
    "data": "15/09/2023",
    "tables": [
      {
        "id": 1,
        "status": "reservada"
      },
      {
        "id": 2,
        "status": "ocupada"
      },
      {
        "id": 3,
        "status": "livre"
      },
      {
        "id": 4,
        "status": "ocupada"
      },
      {
        "id": 5,
        "status": "livre"
      },
      {
        "id": 6,
        "status": "reservada"
      },
      {
        "id": 7,
        "status": "ocupada"
      },
      {
        "id": 8,
        "status": "reservada"
      },
      {
        "id": 9,
        "status": "ocupada"
      },
      {
        "id": 10,
        "status": "livre"
      }
    ]
  },
  {
    "_id": "64ffbaf89d1c1a0fd2f74ec5",
    "data": "11/09/2023",
    "tables": [
      {
        "id": 1,
        "status": "livre"
      },
      {
        "id": 2,
        "status": "reservada"
      },
      {
        "id": 3,
        "status": "livre"
      },
      {
        "id": 4,
        "status": "reservada"
      },
      {
        "id": 5,
        "status": "reservada"
      },
      {
        "id": 6,
        "status": "ocupada"
      },
      {
        "id": 7,
        "status": "reservada"
      },
      {
        "id": 8,
        "status": "livre"
      },
      {
        "id": 9,
        "status": "reservada"
      },
      {
        "id": 10,
        "status": "livre"
      }
    ]
  },
  {
    "_id": "64ffbaf802eb3f04fff2980d",
    "data": "04/09/2023",
    "tables": [
      {
        "id": 1,
        "status": "livre"
      },
      {
        "id": 2,
        "status": "ocupada"
      },
      {
        "id": 3,
        "status": "ocupada"
      },
      {
        "id": 4,
        "status": "reservada"
      },
      {
        "id": 5,
        "status": "livre"
      },
      {
        "id": 6,
        "status": "reservada"
      },
      {
        "id": 7,
        "status": "livre"
      },
      {
        "id": 8,
        "status": "ocupada"
      },
      {
        "id": 9,
        "status": "reservada"
      },
      {
        "id": 10,
        "status": "ocupada"
      }
    ]
  },
  {
    "_id": "64ffbaf8c0a11e3fbb466e69",
    "data": "23/09/2023",
    "tables": [
      {
        "id": 1,
        "status": "ocupada"
      },
      {
        "id": 2,
        "status": "reservada"
      },
      {
        "id": 3,
        "status": "livre"
      },
      {
        "id": 4,
        "status": "reservada"
      },
      {
        "id": 5,
        "status": "reservada"
      },
      {
        "id": 6,
        "status": "reservada"
      },
      {
        "id": 7,
        "status": "livre"
      },
      {
        "id": 8,
        "status": "ocupada"
      },
      {
        "id": 9,
        "status": "ocupada"
      },
      {
        "id": 10,
        "status": "ocupada"
      }
    ]
  }
]

const filteredTables = computed(() => {
  const selectedDate = date.value.toLocaleDateString('pt-BR')
  return reservas.filter(reserva => reserva.data === selectedDate)
})

const updateDate = () => {
  // Atualiza a lista de mesas sempre que a data é alterada
  filteredTables.value
}
</script>

<template>
  <div>
    <h2>Mesas</h2>
    <p>
      <VueDatePicker v-model="date" auto-apply :close-on-auto-apply="false" :min-date="new Date()"
        :enable-time-picker="false" week-start="0" :format="'dd/MM/yyyy'" locale="pt-BR" @update:model-value="updateDate" />
    </p>
      <div v-for="reserva in filteredTables" :key="reserva._id">
        <ul>
          <li v-for="table in reserva.tables" :key="table.id">
            <Table :table="table"></Table>
          </li>
        </ul>
      </div>
  </div>
</template>

<style scoped>
ul {
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
</style>