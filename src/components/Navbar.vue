<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="d-flex col-sm-12">
        <div class="me-auto p-1">
          <router-link class="navbar-brand p-0 me-0 me-lg-2" to="/">
            <img src="../assets/dino-icon-white.svg" alt="Logo" width="30" height="24"
              class="d-inline-block align-text-top">
            <b id="hex">HEX</b><i id="taurant">taurant</i>
          </router-link>
        </div>
        <div class="p-1">
          <button type="button" class="btn btn-primary position-relative">
            <i class="bi bi-bell"></i><span
              class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
              <span class="visually-hidden">notifications</span></span>
          </button>
        </div>
        <div class="p-1">
          <div class="nav-item dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src="../assets/hextaurant.svg" class="rounded-circle" width="25" alt="Usuário" >
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><router-link class="dropdown-item" to="/perfil">Perfil</router-link></li>
              <li><router-link class="dropdown-item" to="/configuracoes">Configurações</router-link></li>
              <li><a class="dropdown-item" href="#">Sair</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Satisfy&display=swap');

.navbar {
  background-color: #7b6ed6;
}

#hex {
  font-family: 'Bungee', cursive;
  font-size: 1.5rem;
  color: #fff;
}

#taurant {
  font-family: 'Satisfy', cursive;
  font-size: 1.2rem;
  color: #fff;
}

.d-flex {
  display: flex !important;
  align-items: flex-end;
}
</style>