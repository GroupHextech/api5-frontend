<template>
    <div class="text">
        <h1>Upload de CSV's</h1>
    </div>

  
        <div class="input-container">
            <i class="bi bi-cloud-upload icon"></i>
            <div class="text-csv">Insira seu arquivo .CSV</div>
            <div class="separator"></div>
            <input type="file">
        </div>
    

</template>
<script>
import axios from 'axios';

methods: {
  async uploadFile() {
    const formData = new FormData();
    formData.append('csvFile', this.selectedFile);

    try {
      await axios.post('/api/upload', formData);
      console.log('Arquivo enviado com sucesso');
    } catch (error) {
      console.error('Erro ao enviar o arquivo', error);
    }
  },
}
</script>

<style scoped>
.input-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 45%;
    left: 47%;
    padding: 1rem;
}

.text-csv{
    margin: 1rem;

}
.icon{
    font-size: 4rem;
}
.separator {
    border-top: 1px solid #000000;

}

</style>