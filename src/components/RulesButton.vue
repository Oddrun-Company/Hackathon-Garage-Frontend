<template>
  <svg class="rules_button" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7H9L9 5H11L11 7ZM11 15L9 15L9 9H11L11 15ZM10.01 20C15.53 20 20 15.52 20 10C20 4.48 15.53 0 10.01 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10.01 20ZM10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2Z" fill="black"/>
  </svg>
</template>
<script>
export default {
  name: 'RulesButton',
}
</script>
<style scoped>
.rules_button {
  transform: rotate(180deg);
}
</style>