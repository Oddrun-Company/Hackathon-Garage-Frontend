<template>
  <Header></Header>
  <SelectWeek></SelectWeek>

</template>

<script>
import Header from "@/components/Header.vue";
import SelectWeek from "@/components/SelectWeek.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    SelectWeek,
    Header
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped lang="css">

</style>