<template>

  <div class="box" :class="getBoxStatus">
    <div class="container">
      <div>
        <div>
          {{ day }}
        </div>
        <div style="color: #747474">
          {{ gregorianToJalali(date) }}
        </div>
      </div>
      <div>
        {{ getPrice(price) }}
      </div>
      <div>
        <template v-if="status===5">
          <div class="reserved">
            رزور کردی
          </div>
        </template>
        <template v-if="status===4">
          <div class="reserved">
            پر شده
          </div>
        </template>
        <template v-if="status===1">
          <div class="reserved">
            خاطره شد
          </div>
        </template>
        <template v-if="status===0">
          <div class="reserved">
            تعطیل
          </div>
        </template>
        <template v-if="status===2 || status ===3 ">
          <button @click="reserveClick(price, day, dateString, date)" class="ok_button">
            رزرو کن
          </button>
        </template>
        <template v-if="status===3">
          <div class="filled">
            پر شده
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import jalaali from 'jalaali-js'
import * as shamsi from 'shamsi';

export default {
  name: "ReserveBox",
  props: ['day', 'date', 'price', 'status'],
  computed: {
    // a computed getter
    getBoxStatus() {
      // `this` points to the component instance
      switch (this.status) {
        case 0 :
          return "holiday";
        case 1:
          return "past";
        case 2:
          return "bidable";
        case 3:
          return "bidable";
        case 4:
          return "reserved-by-others";
        case 5:
          return "reserved-by-me";
        default :
          return "past";
      }
    }
  },
  methods: {
    setBoxStatus: function (style) {
      this.boxStatus = style
    },
    reserveClick: function (price, day, dateString, date) {
      this.$emit("onReserveClick", {'price': price, 'day': day, 'dateString': dateString, 'date': date});
    },

    getPrice: function (price) {
      if (price === null){
        return ""
      }
      return price/10000 + " تومن "
    },

    gregorianToJalali: function (date) {
      const months = [
        {id: '1', text: 'فروردین'},
        {id: '2', text: 'اردیبهشت'},
        {id: '3', text: 'خرداد'},
        {id: '4', text: 'تیر'},
        {id: '5', text: 'مرداد'},
        {id: '6', text: 'شهریور'},
        {id: '7', text: 'مهر'},
        {id: '8', text: 'آبان'},
        {id: '9', text: 'آذر'},
        {id: '10', text: 'دی'},
        {id: '11', text: 'بهمن'},
        {id: '12', text: 'اسفند'}
      ];
      var arr = date.split('-');
      var month = parseInt(arr[1])
      var day = parseInt(arr[2])
      var year = parseInt(arr[0])
      var shamsiDate = shamsi.gregorianToJalali(year, month , day);
      return shamsiDate[2].toString() + ' ' + months.find(x => x.id === shamsiDate[1].toString()).text
    }
  },
  emits: ['onReserveClick'],
  data() {
    const tokens = this.date.split('-');

    const datStatus = {
      '0': 'HOLIDAY',
      '1': 'PASSED',
      '2': 'AVAILABLE',
      '3': 'RESERVED_BUT_BIDABLE',
      '4': 'RESERVED_NOT_BIDABLE',
      '5': 'RESERVED_BY_ME'
    }
    return {
      boxStatus : "holiday"
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

.holiday {
  background-color: #fff3f2;
}

.past{
  background-color: #f1f1f1;
}

.reserved-by-me{
  background-color: rgba(13,110,253,0.12) ;
}

.bidable{
  background-color: #FEFBFF ;
}

.reserved-by-others{
  background-color: #FEFBFF ;
}





</style>