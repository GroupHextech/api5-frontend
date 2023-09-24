<template>
  <h3>Feedback dos clientes</h3>
  <Estrelinhas :config="computedConfig"></Estrelinhas>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" :style="{ width: calculatePercentage(5) }">{{ calculatePercentage(5) }}</div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" :style="{ width: calculatePercentage(4) }">{{ calculatePercentage(4) }}</div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" :style="{ width: calculatePercentage(3) }">{{ calculatePercentage(3) }}</div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" :style="{ width: calculatePercentage(2) }">{{ calculatePercentage(2) }}</div>
    </div>
  </p>
  <p class="line-star">
    <div>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    </div>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" :style="{ width: calculatePercentage(1) }">{{ calculatePercentage(1) }}</div>
    </div>
  </p>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Estrelinhas from "../components/Estrelinhas.vue";
import axios from 'axios'

const ratings = ref([]);
const averageRating = ref(0);

const starColor = 'var(--bs-warning)';
const emptyStarColor = 'var(--bs-secondary)';

const computedConfig = computed(() => {
  return {
    rating: averageRating.value,
    isIndicatorActive: true,
    style: {
      fullStarColor: starColor,
      emptyStarColor: emptyStarColor,
      starWidth: 20,
      starHeight: 20
    }
  };
});

const calculatePercentage = (star) => {
  const totalRatings = ratings.value.reduce((acc, [_, count]) => acc + count, 0);
  const starCount = ratings.value.find(([rating, _]) => rating === star)?.[1] || 0;

  if (totalRatings === 0) {
    return '0%';
  }

  const percentage = (starCount / totalRatings) * 100;
  return `${percentage.toFixed(2)}%`;
};

onMounted(async () => {
  try {
    // Faça uma solicitação para obter a média de desempenho do restaurante
    const responseMedia = await axios.get('/feedback/media');
    averageRating.value = responseMedia.data;

    // Faça uma solicitação para obter a quantidade de notas para cada estrela
    const responseQuantidadeNotas = await axios.get('/feedback/quantidade-notas');
    ratings.value = responseQuantidadeNotas.data;
  } catch (error) {
    console.error('Erro ao obter os dados:', error);
  }
});
</script>

<style scoped>
.line-star {
  display: flex; /* Use flexbox para alinhar elementos horizontalmente */
  align-items: center; /* Centralize verticalmente os elementos na linha */
  text-align: left;
}

.bi-star, .bi-star-fill {
  color: var(--bs-warning);
}

.progress-container {
  display: flex; /* Use flexbox para alinhar elementos horizontalmente dentro do container */
  align-items: center; /* Centralize verticalmente os elementos dentro do container */
  margin-left: 10px; /* Adicione margem à esquerda para espaçamento entre os ícones e a barra de progresso */
}

.progress {
  width: 100px; /* Largura da barra de progresso */
  margin-left: 10px; /* Adicione margem à esquerda para espaçamento entre os ícones e a barra de progresso */
  text-align: right;
}
</style>