<template>
    <div class="text">
        <h2 class="page-title">Upload de CSV's</h2>
    </div>
    <div class="input-container">
        <i class="bi bi-cloud-upload icon"></i>
        <input class="custom-file-label" type="file" ref="fileInput" @change="selectFile" />
    <button @click="uploadFile">Enviar</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    selectFile(e) {
      this.selectedFile = e.target.files[0];
    },
    uploadFile() {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      axios
        .post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log('Arquivo enviado com sucesso', response.data);
        })
        .catch((error) => {
          console.error('Erro ao enviar o arquivo', error);
        });
    },
  },
};
</script>

<style scoped>
.input-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.488);
    position: absolute;
    top: 43%;
    left: 45%;
    padding: 1rem;
    background-color: #000000;
    color: var(--roxohex);
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

input::-webkit-file-upload-button{
    background-color: transparent;
    border: none;
    color: #fff;
}
.custom-file-input {
    display: none;
}
.custom-file-label {
    background-color: var(--roxohex); 
    color: #fff; 
    padding: 10px 20px;
    border: 2px solid #007bff;
    border-radius: 5px;
    cursor: pointer; 
}
.custom-file-label:hover {
    background-color: var(--hoxohex-claro);
}



</style>