<template>
  <div id="app">
    <mt-header class="header" >
      <router-link class="left" to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link class="left" to=""  slot="right">
        <span class="span"><img class="img_1" src="../assets/common/sousuo.png" alt=""></span>
        <input  class="input" type="text" name="name" placeholder="酒店名" value="">
        <!-- <mt-field class="field"
          label="" 
          type="text"
          v-model="username"
          :state="usernameState"
          @blur.native.capture="checkUsername"
          placeholder="酒店名">
        </mt-field> -->
      </router-link>
    </mt-header>
    <div class="hotel_con">
      <div class="important_city">
        <p class="title">热门商圈</p>
        <ul>
          <li>新百</li>
          <li>北国</li>
          <li>怀特</li>
          <li class="li_4"><span>北国东尚购物中心</span></li>
          <li >南三条</li>
          <li @click="click =true"><img src="../assets/common/xiangxia.png" alt=""></li>
        </ul>
        <ul v-show="isShow">
            <li>太和电子城</li>
            <li>勒泰中心</li>
            <li>省博物馆商圈</li>
            <li>省政府</li>
            <li>石家庄客运总站</li>
            <li>北国先天下商城</li>
            <li>高校区</li>
            <li>解放广场</li>
            <li>人民商城</li>
            <li>万达</li>
            <li>银座</li>
            <li>国际博览中心</li>
            <li>红旗大街</li>
            <li>火车站</li>
            <li>军分区</li>
            <li>市政府</li>
            <li>西三教</li>
            <li>新百广场</li>
            <li>新华集贸市场</li>
            <li>南二环</li>
            <li>南二环</li>
            <li>南二环</li>

          </ul>
      </div>

      <div class="important_city">
        <p class="title">行政区</p>
        <ul>
          <li>桥西区</li>
          <li>长安区</li>
          <li>新华区</li>
          <li class="li_4">裕华区</li>
          <li>正定县</li>
          <li><img src="../assets/common/xiangxia.png" alt=""></li>
        </ul>
      </div>

      <div class="important_city">
        <p class="title">地铁站</p>
        <ul>
          <li>地铁三号线</li>
          <li>地铁一号线</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style  scoped>
  * {
    box-sizing: border-box;
    /* background: #f9f8f6; */
  }
  .header{
    background-color: #F12C3F !important;
    height: 45px !important;
    font-size: 18px !important;
    padding-right: 20px;
  }
  .input{
    height: 2.3rem;
    width: 19.7rem;
    border-radius: 20px;
    padding: 0 1.97rem;
    box-sizing: border-box;
    border: none;
    font-size: 0.88rem;
    color: #313336;
  }
  .span{
    position: relative;
    width: 20px;
    height: 20px;
  }
  .img_1{
    position: absolute;
    top: 20%;
    left: 0.7rem;
  }
  /* .mint-cell:last-child>>>div{
   height: 2.3rem;
    width: 19.7rem;
    border-radius: 15px;
    /* padding: 0 1.97rem; */
    /* box-sizing: border-box;
    border: none; */
    /* font-size: 0.88rem; */
  .hotel_con{
    padding-top: 0.72rem;
  }
  .important_city{
    padding-left: 20px;
    height: auto;
    background: #fff;
  }
  .hotel_con .important_city .title{
    text-align: left;
    padding-top: 14px;
    padding-bottom: 12px;
    font-size: 13px;
    color: #595757;
  }
  .hotel_con .important_city>ul  {
    overflow: hidden;
    padding-bottom: 1.3rem;
    display: flex;
    flex-wrap: wrap;

    
  }
  .hotel_con .important_city>ul>li {
    text-align: center;
    line-height: 2.5rem;
    width: 6.5rem;
    height: 2.3rem;
    border: 0.5px solid #D3D3D3;
    border-radius: 2rem;
    line-height: 2.2rem;
    margin-right: 0.8rem;
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    color: #595757;
  }
  .hotel_con .important_city .li_4>span{
    width: 90%;
    white-space: nowrap;
    padding-left: 0.5rem;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
<script>
export default {
  
  data(){
    return{
      isShow : false,
      message : '显示'
    }
  },
  methods: {
    click(){
      this.isShow = !this.isShow;
					if(this.isShow){
						this.message='隐藏';
					}else{
						this.message='显示';
					}

    }
  },
}
</script>