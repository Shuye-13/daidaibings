<template>
  <!-- <div> -->
  <div style="width:376px; background-color: #d3d3d3 ;">
      <!-- 顶部banner图片开始 -->
      <div class="swiper" style="overflow: hidden;">
        <mt-swipe
          :style="{ height: swipeHeight }"
          :auto="5000"
          :speed="200"
          :show-indicators="false"
        >
          <mt-swipe-item class="swiper-item">
            <img
              src="https://images.bthhotels.com/image/254a9860-f6d3-408d-92b9-3e37ceb8270a.jpeg"
              alt=""
            />
          </mt-swipe-item>
          <mt-swipe-item class="swiper-item">
            <img
              src="https://images.bthhotels.com/image/254a9860-f6d3-408d-92b9-3e37ceb8270a.jpeg"
              alt=""
            />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 顶部banner图片结束 -->
      <!-- 酒店预订内容开始 -->
      <div class="home_box" style="background-color: #fff">
        <ul class="ul1" style="margin: 0 auto; width: 335px">
          <li class="navon" :class="fontBig1" @click="jd_click">
            酒店预订
            <span v-show="clicked == 1"></span>
          </li>
          <li class="navon" @click="sz_click" :class="fontBig2">
            时租房
            <span v-show="clicked == 2"></span>
          </li>
        </ul>
        <!-- 酒店预订/时租房下边第一部分开始 -->
        <div class="main">
          <div style="margin: 0 auto; width: 335px">
            <div
              style="border-radius: 12px; height: 45px; padding-bottom: 12px"
            >
              <!-- 左边输入框 -->
              <div class="main_left" @click="tohomeinns">
                <span class="main_jdspan">酒店名/地名</span>
              </div>
              <!-- 右边输入框 -->
              <div class="main_right">
                <span class="main_szspan"
                  >{{city}}
                  <router-link to="/index_address"><span class="fuhao">></span></router-link>
                </span>
              </div>
            </div>
            <!-- 酒店预订/时租房下边第一部分结束 -->
            <!-- 酒店预订/时租房下边第二部分开始 -->
            <div class="main2" v-if="show == 3">
              <!-- 左 -->
              <div>
                <div class="ruzhu">入住</div>
                <div class="ruzhuTime">
                  <span class="time">01月10日</span>
                  <span class="china_time">今天</span>
                </div>
              </div>
              <!-- 中 -->
              <div class="wan">
                <span>1</span>
                晚
              </div>
              <!-- 右 -->
              <div>
                <div class="lidian">离店</div>
                <div class="lidianTime">
                  <span class="time">01月11日</span>
                  <span class="china_time">周一</span>
                </div>
              </div>
            </div>
            <!-- 第三小份 -->
            <div class="main3" style="text-align: left" v-if="show == 4">
              <!-- 左 -->
              <div>
                <div class="ruzhu2">入住</div>
                <div class="ruzhuTime">
                  <span class="time">01月10日</span>
                  <b class="only"> 仅限当日8:00~20:00可订</b>
                </div>
              </div>
              <!-- 中 -->
            </div>
            <!-- 第三份结束 -->
          </div>
        </div>
      </div>

      <!-- 酒店预订/时租房下边第二部分结束 -->
      <!-- 立即预定按钮开始 -->
     <div style="background-color:#fff">
        <mt-button type="default" size="large" class="main_button"style='width:335px;margin:0 auto' @click="toroomlist">立即预定</mt-button
     </div>
      
      <!-- 立即预定按钮结束 -->
      <!-- 选项卡开始 -->
      <mt-navbar class="home_cx">
        <mt-tab-item class="dibu">
          <img
            src="https://images.bthhotels.com/webSite/home_wap/xingcheng_icon.png"
          /> 
          <router-link to="/trip"><span class="hanzi">我的行程</span></router-link>
        </mt-tab-item>
        <mt-tab-item>
          <img
            src="https://images.bthhotels.com/webSite/home_wap/dingdan_icon.png"
            alt=""
          />
          <router-link to="/order"><span class="hanzi">我的订单</span></router-link>
        </mt-tab-item>
      </mt-navbar>
      <!-- 选项卡结束 -->

      <!-- 酒店预订内容结束 -->
      <!-- 多功能导航开始 -->
      <div class="last">
        <div class="menu">
          <!-- 带跳转页面 -->
          <!-- 第一次 -->
        <router-link to="/home">
          <ul class="menu_ul">
            <li>
              <img
                src="https://images.bthhotels.com/webSite/home_wap/plane.png"
                alt=""
                class="big_img"
              />
            </li>
            <li>机票</li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/jifen_icon.png"
              alt=""
              class="small_img"
            />
          </ul>
        </router-link> 
          <!-- 第二次 -->
         <a href="#">
        <ul class="menu_ul">
          <li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/train.png"
              alt=""
              class="big_img"
            />
          </li>
          <li>火车票</li>
          <img
            src="https://images.bthhotels.com/webSite/home_wap/jifen_icon.png"
            alt=""
            class="small_img"
          />
        </ul>
      </a>
          <!-- 第三次 -->
           <a href="#">
        <ul class="menu_ul">
          <li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/new_pick.png"
              alt=""
              class="big_img"
            />
          </li>
          <li>打车</li>
          <img
            src="https://images.bthhotels.com/webSite/home_wap/new_pick_icon.png"
            alt=""
            class="small_img"
          />
        </ul>
      </a> 
          <!-- 第四次 -->
         <a href="#">
        <ul class="menu_ul">
          <li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/ticket.png"
              alt=""
              class="big_img"
            />
          </li>
          <li>景点门票</li>
          <img
            src="https://images.bthhotels.com/webSite/home_wap/jifen_icon.png"
            alt=""
            class="small_img"
          />
        </ul>
      </a>
          <!-- 第五次 -->
          <a href="#">
        <ul class="menu_ul">
          <li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/service/more_01.png"
              alt=""
              class="big_img"
            />
          </li>
          <li>企业客户</li>
          <!-- <img
            src="https://images.bthhotels.com/webSite/home_wap/jifen_icon.png"
            alt=""
            class="small_img"
          /> -->
        </ul>
      </a> 
          <!-- 第六次 -->
          <a href="#">
        <ul class="menu_ul">
          <li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/bus.png"
              alt=""
              class="big_img"
            />
          </li>
          <li>如家巴士</li>
          <!-- <img
            src="https://images.bthhotels.com/webSite/home_wap/jifen_icon.png"
            alt=""
            class="small_img"
          /> -->
        </ul>
      </a>  
          <!-- 第七次 -->
         <a href="#">
        <ul class="menu_ul">
          <li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/service/service_05.png"
              alt=""
              class="big_img"
            />
          </li>
          <li>首汽租车</li>
          <!-- <img
            src="https://images.bthhotels.com/webSite/home_wap/jifen_icon.png"
            alt=""
            class="small_img"
          /> -->
        </ul>
      </a> 
          <!-- 第八次 -->
           <a href="#">
       <ul class="menu_ul">
          <li>
            <img
              src="https://images.bthhotels.com/webSite/home_wap/more.png"
              alt=""
              class="big_img"
            />
          </li>
          <li>更多</li>
          <!-- <img
            src="https://images.bthhotels.com/webSite/home_wap/jifen_icon.png"
            alt=""
            class="small_img"
          /> -->
        </ul>
      </a> 
        </div>
      </div>

      <!-- 多功能导航结束 -->
      <!-- 酒店信息开始 -->
      <div class="city_title">
      <p>热门城市</p>
    </div>
    <div class="city_list">
      <a href="javascript:;" class="city_a">
        <div>
          <img class="city_img" src="../assets/shanghai.jpg">
        </div>
        <div>
          <p class="city_name">上海</p>
        </div>
        <div class="city_mount">
          <span style="color: red;">366</span>家酒店
        </div>
      </a>
    </div>
    <div class="city_list">
      <a href="javascript:;" class="city_a">
        <div>
          <img class="city_img" src="../assets/beijing.jpg">
        </div>
        <div>
          <p class="city_name">北京</p>
        </div>
        <div class="city_mount">
          <span style="color: red;">269</span>家酒店
        </div>
      </a>
    </div>
    <div class="city_list">
      <a href="javascript:;" class="city_a">
        <div>
          <img class="city_img" src="../assets/xian.jpg">
        </div>
        <div>
          <p class="city_name">西安</p>
        </div>
        <div class="city_mount">
          <span style="color: red;">135</span>家酒店
        </div>
      </a>
    </div>
      <!-- 酒店信息结束 -->
      <!-- 底部开始 -->
      <div class="tj">
      <span>推荐品牌</span>
      <a href="#">全部></a>
      <img
        src="https://images.bthhotels.com/webSite/home_wap/tj_banner.png"
        slot="icon"
      />

      <mt-tabbar  class="tabbar" fixed>
        <mt-tab-item id="个人中心" class="item">
          <img
            slot="icon"
            src="https://images.bthhotels.com/webSite/home_wap/person_icon.png"
            class="t1"
          />
          个人中心
        </mt-tab-item>
        <mt-tab-item id="APP下载" class="item">
          <img
            slot="icon"
            src="https://images.bthhotels.com/webSite/home_wap/app_icon.png"
            class="t1"
          />
          APP下载
        </mt-tab-item>
        <mt-tab-item id="客服" class="item">
          <img
            slot="icon"
            src="https://images.bthhotels.com/webSite/home_wap/kefu_icon.png"
            class="t1"
          />
          客服
        </mt-tab-item>
      </mt-tabbar>
      <p>版权所有 © 2018 Homeinns Co.,Ltd All Rights Reserved.</p>
    </div>
      <!-- 底部结束 -->
    </div>
    <!-- 地图开始 -->
    <div id="map_container" style="display:none"></div>
    <!-- 地图结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 定义轮播图初始高度
      swipeHeight: "135px",
      fontBig1: {},
      fontBig2: {},
      // 绑定点击时租跟酒店点击变量
      clicked: "",
      show: "3",
      city: "保定",
    };
  },
  methods: {
    // 点击酒店预订调用
    jd_click() {
      this.clicked = "1";
      this.show = "3";
      if (this.clicked) {
        this.fontBig = { fontbig: true, fontsmall: false };
      }
    },
    // 点击时租调用
    sz_click() {
      this.clicked = "2";
      this.show = "4";
      // if (this.clicked) {
      //   this.fontBig = { fontbig: true, fontsmall: false };
      // }
    },
    tohomeinns(){
      this.$router.push("/homeinns");
    },
    toroomlist(){
      this.$router.push("/roomlist");
    }
  },
  watch: {
    // 监视酒店跟时租变量的变化
    clicked() {
      let font = { fontbig: true, fontsmall: false };
      // 如果等于一代表点击了酒店
      if (this.clicked == 1) {
        this.fontBig1 = font;
        this.fontBig2 = "";
      } else {
        //否则代表点击了时租
        this.fontBig2 = font;
        this.fontBig1 = "";
      }
    },
  },
  mounted() {
    // 获取屏幕的高度
    let screenWidth = window.screen.width;
    // 图片的宽高
    let picwidth = 414;
    let picheight = 260;
    // 获取轮播图所需要的高度
    this.swipeHeight = (picheight * screenWidth) / picwidth + "px";
    // 地图开始
    // 获取地图对象
    let gl = window.navigator.geolocation;
    // 获取经纬度
    gl.getCurrentPosition(
      (res) => {
        // 绑定经纬度（经纬度保存在coords对象中）
        let coords = res.coords.longitude + "," + res.coords.latitude;
        console.log(coords);
        let divElement = document.getElementById("map_container");
        let map = new BMap.Map(divElement);
        //                             经度                 纬度
        let a = res.coords.longitude;
        let b = res.coords.latitude;
        // 开始监视地理位置的变化
        gl.watchPosition(
          (res) => {
            //如果成功了就重新改变地理位置
            a = res.coords.longitude;
            b = res.coords.latitude;
            // 设置地图中心点
            let point = new BMap.Point(a, b);
            // 绘制中心点地图
            map.centerAndZoom(point, 15);
            // 创建地图解析对象
            let Geocoder = new BMap.Geocoder().getLocation(point, (res) => {
              console.log(res.addressComponents.city);
              this.city = res.addressComponents.city;
            });
          },
          (res) => {
            console.log(res);
          },
          { timeout: 5000, enableHighAccuracy: true }
        );
        // 结束
        // let point = new BMap.Point(a, b);
        // 设置地图中心点，并设置可缩放15倍

        // 允许缩放
        // map.enableScrollWheelZoom();
      },
      (res) => {
        console.log(res);
      }
    );
    // 地图结束
  },
};
</script>
<style scoped>
  .mint-swipe-item .swiper-item{
    display: none !important;
  }
  *{
    box-sizing: border-box;
  }
/* 酒店开始 */
#map_container {
  width: 100%;
  /* width: 800px; */
  height: 480px;
  border: 2px solid #ccc;
}
.city_title {
  text-align: left;
  margin-top: 15px;
  margin-left: 20px;
  font-weight: 600;
}
.city_list {
  margin-top: 15px;
}
.city_a {
  color: #000;
  background-color: #f8f8f8;
  /* border: 1px solid #ccc; */
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
}
.city_img {
  /* widows: 90px; */
  height: 90px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.city_name {
  margin-left: 20px;
  margin-top: 35px;
  font-size: 18px;
}
.city_mount {
  margin-left: 45px;
  margin-top: 36px;
  font-size: 15px;
  font-weight: 600;
}
.city_mount > span {
  font-weight: 100;
}
.last {
  width: 360px;
  /* padding: 0 40px; */
  background-color: #fff;
}
.tj {
  padding: 15px 15px 12px 20px;
  background-color: #fff;
  padding-top: 60px;
  padding-bottom: 60px;
}
.tj span {
  float: left;
  font-size: 15px;
  line-height: 15px;
  font-weight: bold;
  color: #313336;
}
.tj a {
  float: right;
  font-size: 12px;
  color: #9b9b99;
}
.tj img {
  width: 21.7rem;
  height: 8.14rem;
  margin: 20px 0;
}
.tj .tabbar {
  background-color: #d6bfa6;
}
.tj img.t1 {
  width: 24px;
  height: 24px;
  float: left;
  margin: 0;
  padding: 0;
}
.tj p {
  font-size: 12px;
  color: #c19d74;
  text-align: center;
  /* background-color: #f5f5f5; */
}

/* 导入底部结束 */
.menu .menu_ul {
  position: relative;
  width: 25%;
  float: left;
  color: #313336;
  margin-bottom: 25px;
}
.menu .small_img {
  width: 38px;
  height: 18px;
  position: absolute;
  top: 0px;
  left: 50px;
}
.menu .big_img {
  width: 38px;
  height: 38px;
}
.menu {
  width: 100%;
  height: 160px;
  text-align: center;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid transparent;
}
.home_cx .hanzi {
  font-size: 18px;
  line-height: 23px;
  padding-left: 2px;
  color: #333;
}
.home_cx img {
  width: 24px;
  vertical-align: top;
}
.main_button {
  /* padding-top: 10px; */
  background: linear-gradient(
    40deg,
    rgba(241, 44, 63, 1) 0%,
    rgba(255, 76, 100, 1) 100%
  );
  color: #fff;
  /* padding: 10px 0; */
  height: 60px;
  border-radius: 25px;
  font-size: 18px;
}
.main3 .ruzhu2 {
  padding-bottom: 5px;
}
.main3 .only {
  font-size: 12px;
  color: #f12c3f;
  font-family: "微软雅黑";
  font-weight: normal;
  padding-left: 15px;
  height: 50px;
}
.main3 .time {
  color: #000;
  font-weight: bold;
}
.main3 {
  width: 100%;
  background-color: #f7f7f7;
  color: #d3d3d3;
  height: 45px;
  margin-top: 10px;
  border-radius: 12px;
  padding-left: 16px;
}
.main .main2 .lidianTime .china_time {
  padding-left: 15px;
}
.main .main2 .lidian {
  padding-bottom: 5px;
}
.main .main2 .lidianTime .time {
  color: #000;
  font-weight: bold;
}
.main .main2 .wan {
  width: 50px;
  height: 24px;
  line-height: 24px;
  position: relative;
  left: 25px;
  top: 13px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  color: #979797;
}
.main .main2 .ruzhu {
  padding-bottom: 5px;
}
.main .main2 .ruzhuTime .china_time {
  width: 37px;
  position: absolute;
  padding-left: 10px;
}
.main .main2 .ruzhuTime {
  position: relative;
}
.main .main2 .ruzhuTime .time {
  color: #000;
  font-weight: bold;
}
.main .main2 {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #f7f7f7;
  color: #d3d3d3;
  height: 50px;
  margin-top: 10px;
  border-radius: 12px;
  /* line-height: 45px; */
}
.swiper {
  width: 100%;
  height: 135px;
}
.swiper .swiper-item >>> img {
  width: 100%;
}
.home_box {
  width: 100%;
  margin-top: 10px;
}
.home_box .ul1 {
  display: flex;
}
.home_box .ul1 .navon {
  /* font-size: 15px; */
  width: 50%;
  text-align: center;
  padding-top: 10px;
  position: relative;
}
.home_box .ul1 .navon >>> span {
  position: absolute;
  left: 50%;
  bottom: -8px;
  margin-left: -13px;
  border-bottom: 4px solid #d6bfa6;
  border-radius: 10px;
  width: 25px;
  /* height: 8px; */
  text-align: center;
}
.home_box .ul1 .navon:focus {
  color: #000;
  font-size: 20px;
}
/* 大字号 */
.fontbig {
  font-size: 20px;
}
/* 小字号 */
.fontsmall {
  font-size: 15px;
}
.home_box .main {
  width: 100%;
  height: 125px;
  margin-top: 20px;
}
.home_box .main .main_left {
  float: left;
  width: 220px;
  border-right: 1px solid #d3d3d3;
}
.home_box .main .main_right {
  float: right;
  width: 113px;
  position: relative;
}
.home_box .main .main_left .main_jdspan {
  background-color: #f7f7f7;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  display: block;
  color: #d3d3d3;
}
.home_box .main .main_right .main_szspan {
  background-color: #f7f7f7;
  color: #333;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  display: block;
}
.home_box .main .main_right .main_szspan .fuhao {
  position: absolute;
  right: 5px;
}
</style>