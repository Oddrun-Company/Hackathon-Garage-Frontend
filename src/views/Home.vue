<template>
  <Header></Header>
  <SelectWeek
      activeTab="currentWeek"
      @onTabChanged="onTabChanged"
  ></SelectWeek>
  <div class="tab-container">
    <template v-if="aTab==='currentWeek'">
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
    </template>
    <template v-if="aTab==='nextWeek'">
      nextWeek
    </template>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SelectWeek from "@/components/SelectWeek.vue";
import ReserveBox from "@/components/ReserveBox.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    ReserveBox,
    SelectWeek,
    Header
  },
  data() {
    return {
      aTab: '',
    };
  },
  computed: {},
  methods: {
    onTabChanged(tab) {
      this.aTab = tab
    }
  },
};
</script>

<style scoped lang="css">
.tab-container {
  padding: 20px 10px 10px;
}
</style>