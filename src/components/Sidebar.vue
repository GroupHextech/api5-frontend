<script setup></script>

<template>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link class="nav-link text-white" aria-current="page" to="/">
          <i class="bi bi-clipboard-data"></i>
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/">
          <i class="bi-grid"></i>
          Mesas
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" aria-current="page" to="/">
          <i class="bi-calendar-check"></i>
          Reservas
        </router-link>
      </li>
      <li class="nav-item">

        <a class="nav-link text-white" href="insumos">
          <i class="bi bi-clipboard"></i>
          Insumos
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" aria-current="page" to="/Feedback">
          <i class="bi bi-chat-right-text"></i>
          Feedback
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" aria-current="page" to="/">
          <i class="bi bi-people"></i>
          Funcionarios
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-white" aria-current="page" to="/">
          <i class="bi bi-box-seam"></i>
          Fornecedores
        </router-link>
      </li>
      <div class="separator"></div>
      <li class="nav-item">
        <a class="nav-link text-white" href="about">
          <i class="bi bi-info-circle"></i>
          Sobre
        </a>
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
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  color: #fff;
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