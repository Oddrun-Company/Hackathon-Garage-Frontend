<template>
  <div class="login-input__container">
<!--    <label :for="label">{{ label }}</label>-->
    <input :id="label" :type="type" :value="modelValue" @input="updateInput" />
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
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
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
.login-input__container {
  display: flex;
  flex-direction: column;
}
</style>