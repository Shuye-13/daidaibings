<template>
   <div id="app">
    <!-- 背景 -->
    <div class="home">
      <!-- 机票预订 -->
      <div class="box-topbar">
          机票预订
      </div>
      <!-- 内容部分开始 -->
      <div class="box_search">
        <div class="flight-train">
          <a href="javascript:;" class="item cur">
            <span>
              机票
            </span>
          </a>
          <a href="javascript:;" class="item">
            <span>
              火车票              
            </span>
          </a>
        </div>
        <div class="box-filter">
          <div class="citySelect cityLayer">
            <div class="cityBox cityStart">北京</div>
            <div class="cityTabBtn">
              <img src="../assets/img/zhuanhuan.png" alt="">
            </div>
            <div class="cityBox cityArrived">目的地</div>
          </div>
          <div class="citySelect cityDay">
            <div class="selectDay">
              <span>01月17日</span>
              <span class="weeked">周日</span>
            </div>
            <div class="line"></div>
            <div class="endDay">
              <span>返程日期 (选填)</span>
            </div>          
          </div>
          <div class="queryBtn">
              查&nbsp;&nbsp;&nbsp;询
          </div>
        </div>

      </div>
      
        <!-- 轮播内容开始 -->
         <mt-swipe class="swipe" 
          :style="{height:swipeHeight}"
          :auto="3000"
          :speed="200"
          :show-indicators="true"
          :continuous="true">
      <mt-swipe-item>
        <img src="../assets/img/swipe1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/swipe2.jpg">
      </mt-swipe-item>
    </mt-swipe>
        <!-- 轮播结束 -->
    
      <div class="serveList">
        <ul>
          <li>
            <a href="#">
              <div class="img img1"></div>
              <div class="text">酒店预订</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img img2"></div>
              <div class="text">接送机/站</div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img img3"></div>
              <div class="text">室内用车</div>
            </a>
          </li>
        </ul>
      </div> 
    </div>
    <div class="footer">
        <ul>
          <li>
            <div class="tejia">
            <span>特价机票</span>
            </div>
          </li>
          <li>
            <div class="kefu">
            <span>联系客服</span>
            </div>
          </li>
          <li>
            <div class="dingdan">
            <span>机票订单</span>
            </div>
          </li>
          <li>
            <div class="quanbao">
            <span>我的券包</span>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeHeight : '164px'
    }
  },
  mounted(){
    //屏幕的宽
    let screenWidth = window.screen.width
    //图片宽高
    let picwidth = 750;
    let picheight = 300;
    //轮播图的高度=图片高*屏幕宽/图片宽
    this.swipeHeight = (picheight * screenWidth / picwidth) + 'px'
    // console.log(picheight * screenWidth / picwidth)
  }
}
</script>
<style scoped>
#app{
  margin: 0; padding: 0;
  position: relative;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100%;
  overflow: hidden;
}
.home{
  background: url(../assets/img/banner.png) no-repeat top;
  background-size: contain;
  width: 100%;
  height: 667px;
  padding-top: 14px;
}
.box-topbar{
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  height: 48px;
  line-height: 24px;
}
.box_search{
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 1.5rem;
  width:392px;
  height: 250px;
  margin-top: 10px;
}
.box_search .flight-train{
  display: flex;
  height: 54px;
  background: #e6e6e6;
  overflow: hidden;
  border-radius: 1.5rem  1.5rem 0 0;
  line-height: 54px;
}
.flight-train .item.cur{
background: #ffffff;
font-size: 18px;
text-align: center;
text-decoration: none;
color: #434343;
position: relative;
}
.flight-train .item{
flex:1;
text-align: center;
text-decoration: none;
color: #434343;
font-size: 18px;

}
.item.cur span:after{
  content: "";
  position: absolute;
  left: 85px;
  top:40px;
  height: 4px;
  width: 28px;
  background: #1161eb;
  border-radius: 0.8rem;
}
.flight-train:after{
content: "";
position: absolute;
top: 73px;
left: 40%;
margin-left:30px;
width: 54px;
height: 54px;
background: url(../assets/img/tab.png) no-repeat top;
background-size: contain;
-webkit-background-size: contain;
}
.box-filter{
padding: 10px;
border-radius:0.8rem 0.8rem 0 0;
background: #ffffff;
height: 133px;
}
.citySelect{
  border-bottom: 1px solid #e7e7e7;
  background: #ffffff;
}
.citySelect .cityLayer{
  position: relative;
}
.citySelect{
  margin-top:10px;
  height: 76x;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.cityBox{
  width: 160px;
  height: 19px;
}
.cityStart{
  font-weight: 700;
  color: #2f2e2e;
  height: 24px;
  font-size: 20px;
  padding-left: 24px;

}
.cityTabBtn{
  width: 36px;
  height: 34px;
  margin: 0px auto;
  margin-bottom: 5px;
}
.cityTabBtn img{
  width: 100%;
  height: 32px;
}
.cityArrived{
  padding-right: 24px;
  height: 24px;
  font-size: 20px;
  font-weight: 700;
  color: #d3d3d3;
  text-align: end;
}
.cityDay{
  margin-top:10px;
  padding-top:8px ;
  text-align: center;
  vertical-align: center;
  margin-bottom: 10px;
  padding-bottom: 15px;
}
.selectDay:nth-child(1){
  font-size: 20px;
  color:#2f2e2e;
  font-weight:700;
  margin-left:18px ;
}
.weeked{
  font-size: 10px;
  color:#979797;
  padding-left: 8px;
}
.line{
  border-left: 1px solid #ebebeb;
  height: 30px;
  margin-left: 10px;
}
.endDay span{
  padding-top:3px ;
  margin-right: 54px;
  color: #979797;
  font-size:16px;
  line-height:30px;
}
.queryBtn{
  width: 364px;
  height: 50px;
  background: #0d79f2;
  border-radius: 1.9rem;
  text-align: center;
  color:#ffffff;
  font-size: 22px;
  line-height: 50px;
}
.box-banner{
  height: 130px;
}
.swipe img {
  width:95%;
  border-radius: 1.2rem;
  margin-left: 10px;}
.serveList{
  padding: 10px 15px;
  width:392px;
  position:static;
}
.serveList ul{
  display: flex;
}
.serveList ul li{
  flex: 1;
  height: 64px;
  border: 1px solid #e5e5e5;
  border-radius:0.9rem;
  background: #ffffff;
  box-sizing: content-box;
  margin-right: 10px;
}
a:hover, a:link, a:visited {
    text-decoration: none;
}
.serveList ul li .img{
  float: left;
  width: 74px;
  height: 65px;
  background: no-repeat;
  background-size: 100%; 
}
.serveList ul li .text{
  font-size: 16px;
  line-height: 22px;
  color: #434343;
  margin-top: 10px;
}
.serveList ul li .img1{
  background-image:url(../assets/img/hotel.png);
}
.serveList ul li .img2{
  background-image:url(../assets/img/jiesong.png) ;
}
.serveList ul li .img3{
  background-image:url(../assets/img/taxi.png) ;
}
.footer{
 width: 100%;
  height: 80px;
  background: #ffffff;
  padding-left: 10px;
  /* border-top: 2px solid #e6e6e6; */
  box-shadow:10px -5px 5px 0#e7e7e7;
  position: relative;
  z-index: 2;
  margin-bottom: 4px;
}
.footer li{
  text-align: center;
  height:60px;
  line-height: 74px;
  display: flex;
  float: left;
  justify-content: center;
  margin-top: 7px;
  margin-left: 20px;
  margin-right: 13px;
}
.footer span{
  margin-top:3px;
  color:#979797;
  margin-bottom:3px
}
.tejia{
  background: url(../assets/img/zhangdan.png) no-repeat center;
  background-size: contain;
   height: 27px;
}
.kefu{
  background: url(../assets/img/kefu.png) no-repeat center;
  background-size: contain;
   height: 27px;
}
.dingdan{
  background: url(../assets/img/dingdan.png) no-repeat center;
  background-size: contain;
   height: 27px;
}
.quanbao{
  background: url(../assets/img/youhuiquanbao.png)no-repeat center;
  background-size: contain;
   height: 27px;
}
</style>

