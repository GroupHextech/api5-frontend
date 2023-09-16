<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div>
    <Navbar></Navbar>
    <div class="all-content">
      <aside class="sidebar">
        <Sidebar></Sidebar>
      </aside>
      <main class="main-content">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>
<style scoped>
#hex {
  font-family: 'Bungee', cursive;
  font-size: 1.5rem;
}

#taurant {
  font-family: 'Satisfy', cursive;
  font-size: 1.2rem;
}

.d-inline-flex,
#dino {
  align-items: baseline;
}

.main-content {
  padding: 1.2rem;
  position: relative;
  top: 64px;
}

.all-content {
  padding-left: 250px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.sidebar {
  z-index: 1000;
  position: fixed;
  left: 250px;
  top: 64px;
  width: 250px;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #37474F;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
</style>
