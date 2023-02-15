<template>
  <Header
      @onLogoutClick="onLogoutClick"
      @onTermClick="onTermClick"
      :user="user"
  ></Header>
  <template v-if="reserveModalOpen">
    <Modal
        :data="reserveModalData"
        @close="modalClose"
        @reservedClick="reservedClick"
    ></Modal>
  </template>

  <template v-if="logoutModalOpen">
    <LogoutModal
        :data="logoutModalData"
        @close="modalClose"
    ></LogoutModal>
  </template>

  <template v-if="termModalOpen">
    <TermModal
        :data="termModalData"
        @close="modalClose"
    ></TermModal>
  </template>


  <SelectWeek
      activeTab="currentWeek"
      @onTabChanged="onTabChanged"
  ></SelectWeek>
  <div class="tab-container">
    <template v-if="aTab==='currentWeek'">
      <div v-for="c in current">
        <ReserveBox
            :day="c.day_label"
            :date="c.date"
            :price="c.price"
            :status="c.status"
            @onReserveClick="onReserveClick"
        >
        </ReserveBox>
      </div>
    </template>
    <template v-if="aTab==='nextWeek'">
      <div v-for="c in next">
        <ReserveBox
            :day="c.day_label"
            :date="c.date"
            :price="c.price"
            :status="c.status"
            @onReserveClick="onReserveClick"
        >
        </ReserveBox>
      </div>
    </template>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SelectWeek from "@/components/SelectWeek.vue";
import ReserveBox from "@/components/ReserveBox.vue";
import Modal from "@/components/Modal.vue";
import LogoutModal from "@/components/LogoutModal.vue";
import TermModal from "@/components/TermModal.vue";
import Toastify from 'toastify-js'

import axios from "axios";
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    TermModal,
    LogoutModal,
    Modal,
    ReserveBox,
    SelectWeek,
    Header
  },
  mounted() {
    try {
      axios.get(axios.options.root + "/info", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }).then(x => {
        this.user = x.data.user;
        this.current = x.data.current;
        this.next = x.data.next;
      });
    } catch (error) {
      console.log(error);
    }

  },
  data() {
    return {
      aTab: 'currentWeek',
      reserveModalOpen: false,
      reserveModalData: {},
      logoutModalOpen: false,
      logoutModalData: {},
      termModalOpen: false,
      termModalData: {},
      user: {},
      current: [],
      next: [],
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
    onTermClick() {
      this.termModalOpen = true;
      this.termModalData = {};
    },
    onLogoutClick() {
      this.logoutModalOpen = true;
      this.logoutModalData = {};
    },
    modalClose() {
      this.reserveModalOpen = false;
      this.logoutModalOpen = false;
      this.termModalOpen = false;
    },
    reservedClick(msg){
      this.reserveModalOpen = false;
      Toastify({
        text: msg,
        duration: 50000000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: false,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          "min-width": "250px",
          "margin-left": "-125px",
          "background-color": "#333",
          "color": "#fff",
          "text-align":" center",
          "border-radius": "2px",
          "padding": "16px",
          "position":" fixed",
          "z-index":" 1",
          "left": "50%",
          "bottom": "30px",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
  },
};
</script>

<style scoped lang="css">
.tab-container {
  padding: 20px 10px 10px;
}
</style>