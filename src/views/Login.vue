<template>
  <div class="login_container">
    <div class="title">
      <h1 class="main_title"> گاراژ</h1>
      <h3 class="main_description"> سیستم رزرواسیون مزایده ای</h3>
    </div>


    <template v-if="sendSmsFlag">
      <div class="login_container-input">
        <LoginInput
            type="tel"
            label="phone_number"
            v-model="code"
            placeholder="کد تاییدت را وارد کن مهندس"
            @keyup.enter="verify()">
        </LoginInput>
        <button @click="verify" :class="{ 'login-button': checkDisabled , 'login-button-disable': !checkDisabled}"
                :disabled="!checkDisabled">
          <span class="login-button-text">ورود</span>
        </button>

      </div>
    </template>

    <template v-if="!sendSmsFlag">
      <div class="login_container-input">
        <LoginInput
            type="tel"
            label="phone_number"
            pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
            v-model="phone"
            @keyup.enter="login()"
        >
        </LoginInput>
        <button @click="login" :class="{ 'login-button': checkDisabled , 'login-button-disable': !checkDisabled}"
                :disabled="!checkDisabled">
          <span class="login-button-text">دریافت کد</span>
        </button>
      </div>
    </template>
    <img class="image" src="../images/login.png" alt="Login image"/>
  </div>
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
      response: "",
      code: "",
      sendSmsFlag: false,
    };
  },
  computed: {
    checkDisabled() {
      return this.phone !== "";
    },
  },
  methods: {
    async verify() {
      const body = {
        'code': this.token,
        'phone': this.phone,
      }
      try {
        const response = await axios.post(
            axios.options.root + "/auth/verify",
            body
        )
        localStorage.setItem('token', response.data.data.token)
        console.log(response.data.data.token)
        location.href = '/#/home'
      } catch (e) {
        console.log(error);
      }

    },
    async login() {
      const body = {
        'phone': this.phone
      };

      try {
        const response = await axios.post(
            axios.options.root + "/auth/request"
            , body);
        this.response = response.data;
        console.log(this.response);
        this.sendSmsFlag = true
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped lang="css">
.login_container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 24px;
  box-shadow: 0px 0px 9px 3px #78787833;
}

.image {
  width: 100%;
}

.login_container-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
}

.login-button-disable {
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
