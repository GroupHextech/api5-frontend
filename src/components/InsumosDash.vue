<template>
    <div>
      <iframe
        width="1000"
        height="480"
        :src="powerBIReportEmbedUrl"
        frameborder="0"
        allowFullScreen="true">
      </iframe>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        powerBIReportEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTExZGExZWEtNTZkMy00ZGI1LTg0NGYtMjUzNzVhYjI1ZjE3IiwidCI6ImRkNDg5YTlkLTU4Y2EtNGI3Ny1iM2RkLWQ5MzYyZGJkMjdlZCJ9"
      };
    }
  };
  </script>

  
  