<template>
  <div class="login__container">
<!--    <img src="../assets/login.png" alt="Login image" />-->
    <LoginInput
        class="login__container-input"
        type="text"
        label="Phone"

        v-model="name"
    >
    </LoginInput>
    <button @click="login" :disabled="!checkDisabled">Log in</button>
    <ReserveBox
        day="شنبه"
        date="1401/11/26"
        price="50"
        status="reserved"
    >
    </ReserveBox>
    <ReserveBox
        day="شنبه"
        date="1401/11/26"
        price="50"
        status="free"
    >
    </ReserveBox>
    <ReserveBox
        day="شنبه"
        date="1401/11/26"
        price="50"
        status="filled"
    >
    </ReserveBox>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginInput from "@/components/LoginInput.vue";
import ReserveBox from "@/components/ReserveBox.vue";
export default {
  name: "Login",
  components: {
    ReserveBox,
    LoginInput,
  },
  data() {
    return {
      name: "",
      password: "",
    };
  },
  computed: {
    checkDisabled() {
      return this.name !== "" && this.password !== "";
    },
  },
  methods: {
    login() {
      const item = localStorage.getItem(`${this.name}:${this.password}`);
      if (item) {
        localStorage.setItem("logged", `${this.name}:${this.password}`);
        this.$router.push({
          name: "logged",
          params: { name: this.name, pass: this.password },
        });
      } else {
        alert("El usuario no está logado");
      }
    },
  },
};
</script>
<style scoped lang="css">
.login__container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login__container-input {
  margin-bottom: 16px;
}
img {
  height: 70px;
  width: 70px;
  margin-bottom: 16px;
}
</style>