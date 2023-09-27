<template>
  <div>
    <Bar 
      id="receitas-bar-chart" 
      :options="chartOptions" 
      :data="chartData" 
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// ------------------------------------
// PARA ATUALIZAR COM OS DADOS DO BANCO
// ------------------------------------

// const loaded = ref(false)
// const chartData = ref(null)

// const fetchData = async () => {
//   try {
//     const response = await axios.get('/api/receitas')
//     chartData.value = response.data.receitas // deve ser personalizado de acordo com o modelo comentado abaixo
//     loaded.value = true
//   } catch (error) {
//     console.error(error)
//   }
// }

// onMounted(fetchData)

const chartData = {
  labels: ['January', 'February', 'March'],
  datasets: [{
    label: 'Receita Diária',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    data: [40, 20, 12],
  }]
}

const chartOptions = {
  responsive: true,
  plugins: { 
    legend: { 
      labels: {
        font: { 
          family: 'system-ui',
          size: 14,
        }
      },
      position: 'top',
      align: 'end',
    }
  }
}
</script>