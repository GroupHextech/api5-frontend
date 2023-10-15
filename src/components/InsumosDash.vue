<template>
    <div>
      <iframe
        width="1070"
        height="485"
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
        powerBIReportEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZmNjYWFiMGQtN2QwMS00NzBiLWFhZjAtYzM5NmM2YWM5YmY3IiwidCI6ImRkNDg5YTlkLTU4Y2EtNGI3Ny1iM2RkLWQ5MzYyZGJkMjdlZCJ9"
      };
    }
  };
  </script>

  
  