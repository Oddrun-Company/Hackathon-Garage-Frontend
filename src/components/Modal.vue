<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
          <div class="modal-header"><h4>{{ data.day }}</h4></div>
          <div class="modal-header"><h4>{{ data.price / 10000 }} تومن</h4></div>
        </div>
        <div class="modal-body">{{ data.title }}</div>
        <div class="modal-footer">
          <button class="ok_button" @click="reserve"> رزرو</button>
          &nbsp;&nbsp;
          <button class="cancel_button" @click="close"> نچ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Modal",
  props: ["data"],
  emits: ["close","reservedClick"],
  data() {
    return {}
  },
  methods: {
    close: function () {
      this.$emit('close');
    },
    reserve: function () {
      const body = {
        'price' : this.data.price,
        'date': this.data.date,
      }
      try {
        axios.post(axios.options.root + "/reserve", body,{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          }
        }).then(x => {
          console.log(x.data)
          this.$emit('reservedClick',x.data.message);

        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>

<style scoped lang="css">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 20px;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgb(0 0 0 / 33%);
  transition: all 0.3s ease;
  border-radius: 30px;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>