<template>
  <div>
    <h2 class="page-title">Fornecedores</h2>

    <div class="dash">
      <!--FornecedorList /-->
      <iframe title="Report Section" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiNGM0NjY1MWMtMGY4NS00ODQ4LThlMzQtODM5YTdhNGJlZTg5IiwidCI6ImRkNDg5YTlkLTU4Y2EtNGI3Ny1iM2RkLWQ5MzYyZGJkMjdlZCJ9" frameborder="0" allowFullScreen="true"></iframe>
    </div>

  </div>
</template>

<script setup>
import FornecedorList from '../components/FornecedorList.vue';
</script>

<style scoped>
.dash {
  height: 100%;
}
.dash, .dash iframe {
  width: 100%;
}
</style>