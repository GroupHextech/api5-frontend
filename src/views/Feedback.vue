<template>
  <h2>Feedback dos clientes</h2>
  <Estrelinhas :config="config"></Estrelinhas>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" style="width: 80%"></div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" style="width: 25%"></div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" style="width: 25%"></div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-warning" style="width: 25%"></div>
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
      <div class="progress-bar bg-warning" style="width: 25%"></div>
    </div>
  </p>
</template>

<script setup>
import Estrelinhas from "../components/Estrelinhas.vue";

const starColor = 'var(--bs-warning)';
const emptyStarColor = 'var(--bs-secondary)';

const config = {
  rating: 4.7,
  isIndicatorActive: true,
  style: {
    fullStarColor: starColor,
    emptyStarColor: emptyStarColor,
    starWidth: 20,
    starHeight: 20
  }
};
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
