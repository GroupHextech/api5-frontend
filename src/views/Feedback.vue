<template>
  <Estrelinhas :config="config"></Estrelinhas>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-success" style="width: 25%"></div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-success" style="width: 25%"></div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-success" style="width: 25%"></div>
    </div>
  </p>
  <p class="line-star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-success" style="width: 25%"></div>
    </div>
  </p>
  <p class="line-star">
    <div>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    <i class="bi bi-star"></i>
    </div>
    <div class="progress" style="width: 100px" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar bg-success" style="width: 25%"></div>
    </div>
  </p>
</template>

<script>
import Estrelinhas from "../components/Estrelinhas.vue";
export default {
  name: "App",
  components: {
    Estrelinhas: Estrelinhas,
    Estrelinhas
},
  data() {
    return {
      config: {
        rating: 4.7,
        isIndicatorActive: true,
        style: {
          fullStarColor: "#ed8a19",
          emptyStarColor: "#737373",
          starWidth: 20,
          starHeight: 20
        }
      }
    };
  }
};
</script>

<style scoped>

.line-star{
  text-align: left;
}

.bi-star, .bi-star-fill {
  color: rgb(255, 136, 0);
}
</style>
