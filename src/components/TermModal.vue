<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div>
          <div class="modal-header">قوانین</div>
          <div class="modal-body">
            <slot name="body">
              <span class="scroll"> تا انتهای هر هفته امکان شرکت در مزایده به جهت استفاده از پارکینگ برای هفته بعد از آن وجود دارد.
برای هر جایگاه پارکینگ هرکس پیشنهاد قیمت خود را ارایه‌ میکند. در صورت وجود پیشنهادی برای یک جایگاه فقط امکان ارائه پیشنهاد بالاتر وجود دارد. پیشنهاد پایه برای هر جایگاه ۵۰ هزارتومان است و پیشنهاد‌های بالاتر پله‌های ۱۰ هزار تومانی دارند.
جمعه ساعت ۸ شب پیشنهاد‌ها بسته شده و جایگاه به فردی که بالاترین پیشنهاد را برای آن جایگاه داده است اختصاص پیدا می‌کند.
هر کس فقط برای استفاده خودش پیشنهاد ارایه می‌کند. طبیعتا تاریخچه تغییرات گوگل‌شیت امکان بررسی خراب‌کاری‌های احتمالی موساد و سازمان‌های جاسوسی وابسته را فراهم می‌کند. :))
انتهای هر ماه هزینه‌ی پارکینگ‌های استفاده شده برای هر شخص محاسبه شده و از حقوق آن ماه کسر می‌شود.
قوانین استفاده در صورت به روز رسانی در همین برگه همواره در دسترس است.
به روز رسانی: ۱۴۰۱/۰۳/۱۸ ساعت ۱۲:۴۱
از ابتدای تیر ماه اگر فردی به هر دلیلی پارکینگ را خارج از روال مزایده استفاده کرد جریمه استفاده از پارکینگ بدون برنامه دو برابر بیشترین مبلغ ارائه شده برای پارگینگ‌ها در آن هفته خواهد بود. این پارکینگ طبیعتا به صورت مزاحم است و محل پارکی‌است که در شرکت به عنوان فضای توقف موقت عموما برای مهمان در نظر گرفته شده. بنابراین روی خالی بودن آن همیشه نمی توان حساب کرد.
به روز رسانی: ۱۴۰۱/۰۳/۳۱ ساعت ۱۱:۱۲</span>
            </slot>
          </div>
        </div>
        <div class="modal-footer">
          &nbsp;&nbsp;
          <button class="cancel_button" @click="close">گرفتم</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["data"],
  emits: ["close"],
  data() {
    return {}
  },
  methods: {
    close: function () {
      this.$emit('close');
    }
  }
};

</script>

<style scoped lang="css">
.modal-mask {
  position: absolute;
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
  padding: 20px;
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

.scroll {
  display:inline-block;
  width: 100%;
  margin:4px 4px;
  padding:2px 15px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-align:justify;
  height: 200px;
}

</style>