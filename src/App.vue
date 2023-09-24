<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div>
    <header class="header">
      <Navbar></Navbar>
    </header>
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

.header {
  padding: 0;
  margin: 0;
  position: sticky;
  border: 0 solid #d9d9e3;
  transform: translateY(0%); 
  top: 0px; 
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 24px 0px;
}

.main-content {
  padding: 1.2rem;

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
