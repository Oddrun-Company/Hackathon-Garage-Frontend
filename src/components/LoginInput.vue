<template>
  <div class="login-input__container">
    <input class="login-input" :id="label" :type="type" :value="modelValue" :placeholder="placeholder" @input="updateInput" maxlength=11/>
  </div>
</template>

<script>
export default {
  name: "LoginInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [Number],
      default: "",
    },
    placeholder: {
      type: [String],
      default: "شماره بده",
    },
    type: {
      type: Number
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};

</script>

<style scoped lang="css">
.login-input {
  font-family: "Estedad", serif !important;
  font-weight: 400;
  font-size: 16px;
  color: #44464F;
  text-align: right;
  width: 280px;
  height: 56px;
  border: 1px solid #757780;
  border-radius: 4px;
  padding: 30px;
}

.login-input:focus {
  border-color: var(--parking-main-blue);
}
</style>