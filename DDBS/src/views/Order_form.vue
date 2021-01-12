<template>
  <div id="container">
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
        <mt-cell class="pl-10" title="入住信息"></mt-cell>
        <mt-field class="pl-10" label="入住时间" placeholder="请选择入住时间" type="date"></mt-field>
        <mt-field class="pl-10" label="房间数量" placeholder="请填写房间数量" type="number"></mt-field>
        <mt-field class="pl-10" label="入住人" placeholder="请填写入住人姓名" type="text"></mt-field>
        <mt-field class="pl-10" label="手机号码" placeholder="请填写手机号码" type="tel"></mt-field>
        <mt-field class="pl-10" label="发票" placeholder="是否需要发票" type="text"></mt-field>
      </div>
      <!-- 入住信息填写结束 -->
      <!-- 优惠开始 -->
      <div class="discounts">
        <mt-cell class="pl-10" title="优惠"></mt-cell>
        <mt-cell class="pl-10 disc" title="优惠券" value="暂无优惠券可用" is-link></mt-cell>
      </div>
      <!-- 优惠结束 -->

      <!-- 权益兑换开始 -->
      <div class="benefit">
        <mt-cell class="pl-10 benefit_top" title="权益兑换"></mt-cell>
        <!-- <mt-cell title="标题文字" is-link>
          <span style="">这里是元素</span>
        </mt-cell> -->
        <div>
          <table>
            <tr>
              <td>升级房型</td>
              <td>
                <span>免费升级房型</span>
                <span>当前无可用升级房型券</span>
              </td>
            </tr>
            <tr>
              <td>延迟退房</td>
              <td>
                <span>额外延迟1小时退房</span>
                <span>当前无可用延迟退房券</span>
              </td>
            </tr>
            <tr>
              <td>安睡体验</td>
              <td>
                <span>享安睡体验服务</span>
                <span>当前无可用安睡体验券</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 权益兑换结束 -->
      <!-- 更多服务开始 -->
      <div>
        <mt-cell class="pl-10 " title="更多服务"></mt-cell>
        <div class="more">
          <span style="width:120px">优选商城券10元</span>
          <span style="width:45px">10元/张</span>
          <span></span>
          <span></span>
          <input style="height:20px" type="text" value="1">
          <span></span>
        </div>
      </div>
      <!-- 更多服务结束 -->

      <!-- 出行目的开始 -->
      <div class="purpose">
        <mt-cell class="pl-10 purpose_top" title="出行目的"></mt-cell>
        <div class="purpose_inner">
          <span>出行目的</span>
          <input id="i1" type="radio" name="purpose" value="商务"/>
          <label for="i1">商务</label>
          <input id="i2" type="radio" name="purpose" value="旅游"/>
          <label for="i2">旅游</label>
          <input id="i3" type="radio" name="purpose" value="本地休闲"/>
          <label for="i3">本地休闲</label>
        </div>
      </div>
      <!-- 出行目的结束 -->
      <!-- 会员开始 -->
      <div class="vip">
        <div>
          <span>您是</span>
          <span></span>
          <span>E会员</span>
          <span>，已为您节省<i>7</i>元</span>
        </div>
        <span>会员权益</span>
      </div>
      <!-- 会员结束 -->
      <!-- 预约提示开始 -->
      <div class="hint">
        <h3>预定提示</h3>
        <ul>
          <li>* 请于入住日中午
            <span>14:00后</span>
            办理入住，如提前到店，视酒店空房情况安排
          </li>
          <li>* 入住日18点前可取消，逾期无法取消</li>
          <li>* 预订支付成功后30分钟内可取消，逾期无法取消 </li>
        </ul>
      </div>
      <!-- 预约提示结束 -->

      <!-- 提交订单开始 -->
      <div class="submit">
        <div class="submit_left">
          <p>¥142</p>
          <a href="javascript:;">查看明细<i>&gt;</i></a>
        </div>
        <button>提交订单</button>
      </div>
      <!-- 提交订单结束 -->
    </div>
     <!-- 内容结束 -->
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.submit {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
}
.submit_left{
  float: left;
  display: flex;

}
.submit_left>p{
  width: 100px;
  text-align: center;
  color: red;
}
.submit_left>a {
  font-size: 13px;
  color: #999;
  margin-left: 30px;
}
.submit_left>a>i {
  font-size: 15px;
  margin-left: 5px;
}
.submit>button {
  float: right;
  width: 150px;
  height: 50px;
  background: linear-gradient(45deg, rgba(241, 44, 63, 1) 0%, rgba(255, 76, 100, 1) 100%);
  border: 0;outline: 0;
}
#container {
  background-color: rgb(255, 250, 250);
}
#header {
  background-color: rgb(241, 44, 63);
  height: 45px;
  line-height: 45px;
  width: 100%;
}
.inner {
  width: 100%;
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
.pl-10 {
  padding-left: 10px;
}
.benefit {
  margin: 10px 0;
  width: 100%;
}
.benefit span {
  display: block;
}
.disc {
  color: #666;
}
.benefit_top {
  border-bottom: 1px solid #ccc;
}
.benefit table {
  background-color:#fff;
  width:100%;
  height:100px;
}
.benefit tr {
  border-bottom:1px solid #ccc;
  height:60px;
  width:100%;
}
.benefit tr>td:first-child {
  width:100px; 
  text-align:center; 
  font-size:16px;
  color:#666;
  padding-top:10px
}
.benefit tr>td:last-child {
  padding-left:10px;
}
.benefit tr>td:last-child>span:first-child{
  font-size:15px;
  margin-bottom:5px;
  color:#666;
}
.benefit tr>td:last-child>span:last-child {
  font-size:12px;
  color:#999;
  margin-top: 10px;
}
.more {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-left:20px;
  font-size:16px;
  color:#333;
  display: flex;
}
.more>span,.more>input {
  display: block;
  height: 30px;
}
.more>span:first-child {
  margin-right:10px;
}
.more>span:nth-child(2) {
  font-size:12px;
  color:#666;
  margin-right:5px;
}
.more>span:nth-child(3) {
  width: 18px;height: 18px;
  background: url(../assets/order/icon-tips.png) no-repeat;
  background-size: contain; 
  margin-top: 15px;
  margin-right: 25px;
}
.more>span:nth-child(4),.more>span:last-child {
  width: 25px;
  height: 25px;
  background: url(../assets/order/reduceIcon.png) no-repeat;
  background-size: contain;
  margin-top: 12px;
}
.more>input{
  width: 20px;
  border: 0;outline: 0;
  margin: 15px 15px 0px 15px;
  text-align: center;
}
.more>span:last-child {
  background: url(../assets/order/addIcon.png) no-repeat;
  background-size: contain;
}
.purpose {
  width: 100%;
  margin: 10px 0;
}
.purpose_inner {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #555;
  font-size: 16px;
  background-color: #fff;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.purpose_inner>span{
  color: #666;
  padding-left: 20px;
}
.purpose_inner>input {
  margin-left: 30px;
}
.vip {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  background-color:#FFF5E9;
  padding-left: 20px;
  color: #444;
  margin: 10px 0;
}
.vip>div {
  display: flex;
}
.vip>div>span {
  display: block;
}
.vip>div>span:first-child {
  width: 33px;
}
.vip>div>span:nth-child(2){
  width: 20px;
  height: 20px;
  background: url(../assets/order/icon-goldMember.png) no-repeat;
  background-size: contain;
  margin-top: 15px;
}
.vip>div>span:nth-child(3){
  font-size: 15px;
  color: #AD8E6C;
}
.vip>span:nth-child(4)>i{
  color: #F12C3F;
  margin: 0 2px;
}
.vip>span{
  float: right;
  margin-top: -35px;
  width: 75px;
  height: 35px;
  line-height: 28px;
  font-size: 12px;
  color: #AD8E6C;
  background: url(../assets/order/icon-equity.png) no-repeat;
  background-size: contain;
  text-align: center;
}
.hint {
  padding-left: 20px;
  padding-right: 30px;
  margin-bottom: 70px;
}
.hint>h3 {
  margin-bottom: 7px;
}
.hint li {
  font-size: 12px;
  color: rgba(151, 152, 154, 1);
  line-height: 20px;
}
</style>