<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    methods:{

        showToatInfo(){
            toast.info('Pepsi - 350ml: 100 unidades, Redbull 355ml: 50 Unidades, Batatas Lavadas: 30 unidades. Contra Filé Friboi: 20kg,         Cerveja Skol - 329ml: 20 Unidades',   {});
        }
    }
}

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <div class="d-flex col-sm-12">
        <div class="me-auto p-1">
          <router-link class="navbar-brand p-0 me-0 me-lg-2" to="/">
            <img src="../assets/dino-icon-white.svg" alt="Logo" width="30" height="24"
              class="d-inline-block align-text-top">
            <b id="hex">HEX</b><i id="taurant">taurant</i>
          </router-link>
        </div>

        <div class="p-1">
          <button type="button" @click="showToatInfo()" class="btn btn-info">
            <i class="bi bi-bell"></i>
          </button>
        </div>


        
        <div class="p-1">
          <div class="nav-item dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src="../assets/hextaurant.svg" class="rounded-circle" width="25" alt="Usuário" >
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><router-link class="dropdown-item" to="/perfil">Perfil</router-link></li>
              <li><router-link class="dropdown-item" to="/configuracoes">Configurações</router-link></li>
              <li><a class="dropdown-item" href="#">Sair</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody:wght@500&family=Bubblegum+Sans&family=Bungee&family=Satisfy&display=swap');

.navbar {
  background-color: #7b6ed6;
}

#hex {
  font-family: 'Bungee', cursive;
  font-size: 1.5rem;
  color: #fff;
}

#taurant {
  font-family: 'Satisfy', cursive;
  font-size: 1.2rem;
  color: #fff;
}

.d-flex {
  display: flex !important;
  align-items: flex-end;
}
</style>