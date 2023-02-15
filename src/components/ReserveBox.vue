<template>
  <div class="box">
    <div class="container">
      <div>
        <div>
          {{ day }}
        </div>
        <div style="color: #747474">
          {{ dateString }}
        </div>
      </div>
      <div>
        {{ price }} تومان
      </div>
      <div>
        <template v-if="status==='reserved'">
          <div class="reserved">
            رزور کردی
          </div>
        </template>
        <template v-if="status==='free'">
          <button @click="reserveClick(price, day, dateString, date)" class="ok_button">
            رزرو کن
          </button>
        </template>
        <template v-if="status==='filled'">
          <div class="filled">
            پر شده
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ReserveBox",
  props: ['day', 'date', 'price', 'status'],
  methods: {
    reserveClick: function (price, day, dateString, date) {
      this.$emit("onReserveClick", {'price': price, 'day': day, 'dateString': dateString, 'date': date});
    },
  },
  emits: ['onReserveClick'],
  data() {
    const tokens = this.date.split('/');
    const months = [
      {id: '01', text: 'فروردین'},
      {id: '02', text: 'اردیبهشت'},
      {id: '03', text: 'خرداد'},
      {id: '04', text: 'تیر'},
      {id: '05', text: 'مرداد'},
      {id: '06', text: 'شهریور'},
      {id: '07', text: 'مهر'},
      {id: '08', text: 'آبان'},
      {id: '09', text: 'آذر'},
      {id: '10', text: 'دی'},
      {id: '11', text: 'بهمن'},
      {id: '12', text: 'اسفند'}
    ];

    return {
      dateString: tokens[2] + ' ' + months.find(x => x.id === tokens[1]).text
    }
  },
};

</script>

<style scoped lang="css">
.box {
  direction: rtl;
  box-shadow: 0 0 3px #ccc;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px 15px;
}

.box .container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.reserved {
  color: var(--parking-main-blue);
  opacity: 50%;
}

.filled {
  color: var(--parking-main-blue);
  opacity: 50%;
}
</style>