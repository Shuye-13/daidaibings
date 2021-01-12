<template>
  <div>
    <mt-header class="payment" title="√预定成功·支付">
      <div slot="left">
        <router-link to="/">
          <mt-button>
            <img
              src="../assets/icon/white_back.png"
              height="30"
              width="30"
              slot="icon"
            />
          </mt-button>
        </router-link>
      </div>
    </mt-header>
    <div>
      <div class="order_form">
        <div class="specifications">单人间-1间</div>
        <div class="site">如家华驿系列-如家华驿易居酒店</div>
        <div class="trem_limit">
          <div class="limit_1">2021-01-10</div>
          <div class="limit_2">入住</div>
          <div class="limit_3">2021-01-11</div>
          <div class="limit_4">离店</div>
          <div class="limit_5">共一晚</div>
        </div>
      </div>
      <div class="order_price">订单总价：￥184</div>

      <!-- 支付方式 -->
      <mt-radio
        class="pay_method"
        align="right"
        title="支付方式"
        v-model="value"
        :options="options">
      </mt-radio>

      <!-- 立即支付 -->
      <mt-button class="btn_pay" type="primary" size="large"
        >立即支付</mt-button
      >
    </div>
  </div>
</template>

<style scoped>
.payment {
  background-color: #e00000;
  height: 45px;
  font-size: 16px;
}
.order_form {
  widows: 80%;
  text-align: left;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  line-height: 25px;
  font-weight: 500;
  border-bottom: 1px solid #c8c8c8;
}
.site {
  font-size: 14px;
}
.trem_limit {
  font-size: 14px;
  display: flex;
  justify-content: left;
}
.trem_limit > div + div {
  margin-left: 10px;
}
.limit_2,
.limit_4 {
  color: #505050;
  font-weight: 200;
}
.order_price {
  font-size: 20px;
  color: #e00000;
  margin-top: 20px;
  text-align:center;
}

.pay_method{
  padding-left: 0;
}

.btn_pay {
  width: 260px;
  margin: 30px auto;
  background-color: #e00000;
}
</style>


<script>
export default {
  name: "app",
  data() {
    return {
      // 存放所选选项（字符串）
      value: "",
      // radio的选项
      options: [
        {
          label: "支付宝支付"
        },
        {
          label: "如旅钱包支付"
        },
      ],
    };
  },
  mounted: function () {},
  methods: {
    check: function () {
      // console.log(this.value)
    },
  },
};
</script>

