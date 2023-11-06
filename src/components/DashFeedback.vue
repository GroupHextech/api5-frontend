<template>
  <div class="dash">
    <iframe height="600" :src="powerBIReportEmbedUrl" frameborder="0" allowFullScreen="true">
    </iframe>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      powerBIReportEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjA3OTAzYWItMTgyMC00OGQwLTg5YmItYmZjODFmY2VlYjUzIiwidCI6ImRkNDg5YTlkLTU4Y2EtNGI3Ny1iM2RkLWQ5MzYyZGJkMjdlZCJ9"
    };
  }
};
</script>

<style scoped>
.dash {
  height: 100%;
}
.dash, .dash iframe {
  width: 100%;
}
</style>