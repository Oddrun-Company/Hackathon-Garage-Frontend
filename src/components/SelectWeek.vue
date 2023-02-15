<template>
  <div class="topnav" id="myTopnav">
    <div
        :class="{'active': aTab==='currentWeek'}"
        @click="changeCurrentTab('currentWeek')"
    >
      <span>هفته‌ی جاری</span>
    </div>
    <div
        :class="{'active': aTab==='nextWeek'}"
        @click="changeCurrentTab('nextWeek')"
    >
      <span>هفته‌ی آتی</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectWeek",
  props: ["activeTab"],
  data() {
    return {
      aTab: this.activeTab
    }
  },
  emits: ['onTabChanged'],
  methods: {
    changeCurrentTab: function (tab) {
      this.$emit("onTabChanged", tab);
      this.aTab = tab;
    },
  }
}
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #FEFBFF;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav div {
  float: left;
  width: 50%;
  height: 48px;
  color: #44464F;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 17px;
}

.active span {
  border-bottom: 3px solid #205DB9;
  color: #205DB9;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Change the color of links on hover */
.active {
  background-color: #FEFBFF;
  color: #205DB9;
}


/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
</style>