<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="form">
        <div class="header">
          <img src="../assets/dino-icon-white.svg" alt="Logo" width="60" height="50"
              class="d-inline-block align-text-top">
            <b id="hex">HEX</b><i id="taurant">taurant</i>
        </div>
        <div class="form2">
          <div class="div-log">
            <input class="inputs" placeholder="Username" type="text" id="username" v-model="username" required>
          </div>

          <div class="div-log">
            <input class="inputs" type="password" placeholder="Password" id="password" v-model="password" required>
          </div>


          <button class="btn" type="submit">Login</button>
        </div>


      </div>
    
    </form>

    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };

      this.$axios.post('your-backend-endpoint/login', data)
        .then(response => {
          // Lógica de sucesso do login
          console.log('Login bem-sucedido:', response.data);
          // Redirecionar para outra página se necessário
          this.$router.push('/dashboard');
        })
        .catch(error => {
          // Exibir mensagem de erro
          this.error = 'Erro ao fazer login. Verifique seu nome de usuário e senha.';
          console.error('Erro de login:', error);
        });
    },
  },
};
</script>

<style scoped>

.container{
  background-color: #ffffff;
  width: 100%;
}
.div-log{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;

}
.header{
  padding: 5px;
  background-color: var(--roxohex);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 10px 0px 10px 0px;
}
.btn{
  background-color: var(--roxohex);
  color: #ffffff;
  font-weight: bolder;
}
.text{
  font-size: large;
  font-weight: bold;
}
.form{
    width: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 10px 0px 10px 0px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.488);
    position: absolute;
    top: 25%;
    left: 35%;
    background-color: #ffffff;
    color: var(--roxohex);
    gap: 8px;
}
.form2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
}
.inputs{
border-radius: 10px 0px 10px 0px;
background-color: #ffffff;
color: black;
font-size: larger;
width: 100%;
}
</style>