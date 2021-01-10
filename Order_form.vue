<template>
  <div>
    <!-- 头部开始 -->
    <mt-header title="订单填写" id="header">
      <div slot="left"></div>
      <router-link slot="left" to="/">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 头部结束 -->

    <!-- 内容开始 -->
    <div class="inner">
      <!-- 内容头部介绍开始 -->
     <div class="inner_top">
       <table></table>
        <div class="inner_top1"></div>
        <div class="inner_top2">
          <p>如家酒店—石家庄体育南大街怀特商城店</p>
          <p>商务大床房</p>
          <p>大床1.8m 入住2人 15-18㎡ 有窗</p>
        </div>
     </div>
      <!-- 内容头部介绍结束 -->

      <!-- 入住信息填写开始 -->
      <div id="message">
        <mt-cell title="入住信息"></mt-cell>
        <mt-field class="h" label="入住时间" placeholder="请选择入住时间" type="date"></mt-field>
        <mt-field label="房间数量" placeholder="请填写房间数量" type="number"></mt-field>
        <mt-field label="入住人" placeholder="请填写入住人姓名" type="text"></mt-field>
        <mt-field label="手机号码" placeholder="请填写手机号码" type="tel"></mt-field>
        <mt-field label="发票" placeholder="是否需要发票" type="text"></mt-field>
      </div>
      <!-- 入住信息填写结束 -->
      <div class="discounts">
        <mt-cell title="优惠"></mt-cell>

      </div>
      <!-- 优惠开始 -->

      <!-- 优惠结束 -->

    </div>
     <!-- 内容结束 -->
  </div>
</template>

<style scoped>
.h {
  height: 40px ;
}
#header {
  background-color: rgb(241, 44, 63);
  height: 45px;
  line-height: 45px;
  width: 100%;
}
.inner {
  width: 100;
  height: 800px;
}
.inner_top {
  width: 100%;
  height: 100px;
  background-color:rgb(255, 245, 250);
  position: relative;

}
.inner_top1 {
  width: 100%;
  height: 45px;
  background-color: rgb(241, 44, 63);
}
.inner_top2 {
  position: absolute;
  width: 90%;
  top: 0px;
  left: 5%;
  background-color: #fff;
  border-radius: 7px;
  padding: 14px 15px 10.5px 15px;
  box-sizing: border-box;
}
.inner_top2>p{
  font-size: 13px;
}
.inner_top2>p:first-child{
  font-size: 14px;
  color: rgba(3,3,3,1);
  font-weight: bold;
}
.inner_top2>p:nth-child(2){
  margin-top: 8px;
  color: rgba(3,3,3,1);
}
.inner_top2>p:last-child{
  color: #999;
  margin-top: 8px;
}
#message {
  color: #777;
}
.discounts {
  margin-top: 10px;
}
</style>