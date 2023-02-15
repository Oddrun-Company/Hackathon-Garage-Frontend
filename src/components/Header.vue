<template>
  <div class="header__container">
    <div class="info">
      <span class="name">{{ name }}</span>
      <div class="debt">
        <span style="padding-left: 5px">بدهی</span><div class="debt-value">{{ debt }}</div>
      </div>
    </div>
    <div class="buttons">
      <RulesButton/>
      <LogoutButton @click="logoutClick()"/>
    </div>
  </div>
</template>

<script>
import RulesButton from "@/components/RulesButton.vue";
import LogoutButton from "@/components/LogoutButton.vue";

export default {
  name: "Header",
  components: {LogoutButton, RulesButton},
  emits : ['onLogoutClick'],
  props: {
    name: {
      type: String,
      default: "اکبر بی قاعده",
    },
    debt: {
      type: Number,
      default: -133000
    }
  },
  methods: {
    logoutClick: function() {
      this.$emit('onLogoutClick');
    },
  },

};

</script>


<style scoped lang="css">
.header__container {
  width: 100%;
  height: 56px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: rgba(238, 238, 238, 0.7);
  display: flex;
  justify-content: space-between;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 8px;
}

.buttons {
  display: flex;
  padding-top: 8px;
  gap: 12px;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  text-align: right;
  letter-spacing: 0.1px;
  /* M3/sys/light/on-surface */
  color: #1B1B1F;
}

.debt {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height */
  display: flex;
  text-align: right;

  color: rgba(0, 0, 0, 0.5);
}

.debt-value {
  direction: ltr;
  color: var(--parking-dark-red);
}
</style>