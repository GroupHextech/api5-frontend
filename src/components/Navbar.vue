<script setup></script>

<template>
  <nav class="navbar fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/dino-icon-white.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <b id="hex">HEX</b><i id="taurant">taurant</i>
      </a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
}

#taurant {
  font-family: 'Satisfy', cursive;
  font-size: 1.2rem;
}
</style>