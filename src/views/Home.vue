<template>
  <Header></Header>
  <SelectWeek></SelectWeek>

</template>

<script>
import Header from "@/components/Header.vue";
import SelectWeek from "@/components/SelectWeek.vue";
import {VmContainer} from "vue3-material";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    VmContainer,
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