<script setup></script>

<template>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/">
          <i class="bi-grid"></i>
          Mesas
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">
          <i class="bi-calendar-check"></i>
          Reservas
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Satisfy&display=swap');

#sidebar {
  height: 100%;
}
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  color: #fff;
  background-color: #7b6ed6;
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
</style>