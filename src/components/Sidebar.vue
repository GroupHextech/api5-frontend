<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()

// Função para verificar se a rota atual corresponde a uma rota específica
const isRouteActive = (path) => {
  return route.path === path;
};
</script>

<template>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/dashboard') }" aria-current="page" to="/">
          <i class="bi bi-clipboard-data"></i>
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/') }" aria-current="page" to="/">
          <i class="bi bi-grid"></i>
          Mesas
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/reservas') }" aria-current="page" to="/reservas">
          <i class="bi bi-calendar-check"></i>
          Reservas
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/receitas') }" aria-current="page" to="/receitas">
          <i class="bi bi-currency-dollar"></i>
          Receitas
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/insumos') }" aria-current="page" to="/insumos">
          <i class="bi bi-clipboard"></i>
          Insumos
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/feedback') }" aria-current="page" to="/feedback">
          <i class="bi bi-chat-right-text"></i>
          Feedback
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/funcionarios') }" aria-current="page" to="/">
          <i class="bi bi-people"></i>
          Funcionários
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/fornecedores') }" aria-current="page" to="/">
          <i class="bi bi-box-seam"></i>
          Fornecedores
        </router-link>
      </li>
      <div class="separator"></div>
      <li class="nav-item">
        <router-link :class="{ 'nav-link': true, 'active': isRouteActive('/about') }" aria-current="page" to="about">
          <i class="bi bi-info-circle"></i>
          Sobre
        </router-link>
      </li>
    </ul>     
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Satisfy&display=swap');

#sidebar {
  height: 100%;
  display: flex;
}
.nav-link{
  color: #fff;
}
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  background-color: #7b6ed6;
}

.nav-pills{
  text-align: left;
}

.navbar {
  background-color: #7b6ed6;
}

#hex {
  font-family: 'Bungee', cursive;
  font-size: 1.5rem;
}

#taurant {
  font-family: 'Satisfy', cursive;
  font-size: 1.2rem;
}

.separator {
    border-top: 1px solid #fff;
    margin: 10px;
}
</style>