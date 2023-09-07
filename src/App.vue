<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <root>
    <Navbar></Navbar>
  </root>
  <aside>
    <Sidebar></Sidebar>
  </aside>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
