<template>
  <div class="login_container">
    <div class="title">
      <h1 class="main_title"> گاراژ</h1>
      <h3 class="main_description"> سیستم رزرواسیون مزایده ای</h3>
    </div>

    <div class="login_container-input">
      <LoginInput
          type="tel"
          label="phone_number"
          v-model="code"
      >
      </LoginInput>
      <button @click="login" :class="{ 'login-button': checkDisabled , 'login-button-disable': !checkDisabled}" :disabled="!checkDisabled">
        <span class="login-button-text">ورود</span>
      </button>
    </div>
  </div>
  <img class="image" src="../images/login.png" alt="Login image"/>
</template>

<script>

import LoginInput from "@/components/LoginInput.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    LoginInput,
  },
  data() {
    return {
      phone: "",
      response: ""
    };
  },
  computed: {
    checkDisabled() {
      return this.phone !== "";
    },
  },
  methods: {
    async login() {
      const body = {
        'phone' : this.phone
      };

      try {
        const response = await axios.post(
            axios.options.root + "/auth/request"
            , body);
        this.response = response.data;
        console.log(this.response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped lang="css">
.login_container {
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 56px;
}

.image {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

.login_container-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
}

.login-button-disable{
  background-color: rgba(27, 27, 31, 0.12);
  border-radius: 100px;
  width: 107px;
  height: 40px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border: none;
  margin-top: 30px;
  font-family: "Estedad", serif !important;
  color: rgba(27, 27, 31, 0.38);
}

.login-button {
  border-radius: 100px;
  width: 107px;
  height: 40px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border: none;
  margin-top: 30px;
  font-family: "Estedad", serif !important;
  background-color: rgba(32, 93, 185, 1);
  color: white;
}

</style>
