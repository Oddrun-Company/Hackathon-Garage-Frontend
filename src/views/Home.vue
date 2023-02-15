<template>
  <Header @onLogoutClick="onLogoutClick"></Header>
  <template v-if="reserveModalOpen">
    <Modal
        :data="reserveModalData"
        @close="modalClose"
    ></Modal>
  </template>

  <template v-if="logoutModalOpen">
    <LogoutModal
        :data="logoutModalData"
        @close="modalClose"
    ></LogoutModal>
  </template>


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
          @onReserveClick="onReserveClick"
      >
      </ReserveBox>
      <ReserveBox
          day="شنبه"
          date="1401/11/26"
          price="50"
          status="free"
          @onReserveClick="onReserveClick"
      >
      </ReserveBox>
      <ReserveBox
          day="شنبه"
          date="1401/11/26"
          price="50"
          status="filled"
          @onReserveClick="onReserveClick"
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
import Modal from "@/components/Modal.vue";
import LogoutModal from "@/components/LogoutModal.vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    LogoutModal,
    Modal,
    ReserveBox,
    SelectWeek,
    Header
  },
  data() {
    return {
      aTab: 'currentWeek',
      reserveModalOpen: false,
      reserveModalData: {},
      logoutModalOpen: false,
      logoutModalData: {},
    };
  },
  computed: {},
  methods: {
    onTabChanged(tab) {
      this.aTab = tab
    },
    onReserveClick(data) {
      // price, day, dateString, date
      this.reserveModalOpen = true;
      data.title = 'خداوکیلی مطمینی؟';
      this.reserveModalData = data;
    },
    onLogoutClick() {
      this.logoutModalOpen = true;
      this.logoutModalData = {};
    },
    modalClose() {
      this.reserveModalOpen = false;
      this.logoutModalOpen = false;
    }
  },
};
</script>

<style scoped lang="css">
.tab-container {
  padding: 20px 10px 10px;
}
</style>