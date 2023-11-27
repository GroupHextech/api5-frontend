const { defineStore } = require("pinia");
const axios = require("axios");
const { ref } = require("vue");

const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const token = ref(null);
  const user = ref(null);
  const loginFailed = ref(false);
  const authorization = ref(sessionStorage.getItem("authorization") || null);

  async function login(username, password) {
    try {
      const response = await axios.post("/login", {
        login: username,
        password: password,
      });
      const data = response.data;
      user.value = data.login;
      token.value = data.token;
      if (token.value) {
        loginFailed.value = false;
        sessionStorage.setItem("authToken", token.value);
      } else {
        loginFailed.value = true;
      }
      isAuthenticated.value = true;
      authorization.value = data.auth;
      sessionStorage.setItem("authorization", authorization.value || "");
      return true;
    } catch (ex) {
      alert("Failed to connect to the server");
      loginFailed.value = true;
      return false;
    }
  }

  async function logout() {
    try {
      user.value = null;
      token.value = null;
      sessionStorage.removeItem("authToken");
      sessionStorage.removeItem("authorization");
      isAuthenticated.value = false;
      loginFailed.value = false;
      authorization.value = null;
    } catch (ex) {
      alert("Logout failed!");
    }
  }

  function hasPermission(permission, authorization) {
    if (!authorization) {
      return false;
    }

    if (permission === "allowed") {
      return (
        authorization === "ROLE_EDITOR" || authorization === "ROLE_ADM"
      );
    } else if (permission === "restrict") {
      return authorization === "ROLE_ADM";
    }

    return false;
  }

  return {
    isAuthenticated,
    token,
    user,
    loginFailed,
    authorization,
    login,
    logout,
    hasPermission,
  };
});

module.exports = useAuthStore;
