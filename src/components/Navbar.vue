<script setup></script>

<template>
  <nav class="navbar bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/dino-icon-white.svg" alt="Logo" width="30" height="24"
          class="d-inline-block align-text-top">
        <b>HEX</b><i id="taurant">taurant</i>
      </a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

  #taurant {
    font-family: 'Satisfy', cursive;
  }
</style>