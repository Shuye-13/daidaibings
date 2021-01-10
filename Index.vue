<template>
  <div>
    <!-- 顶部banner图片开始 -->
    <div class="swiper">
      <mt-swipe
        :style="{ height: swipeHeight }"
        :auto="5000"
        :speed="200"
        :show-indicators="true"
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
    <div class="home_box">
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
          <div style="border-radius: 12px; overflow: hidden">
            <!-- 左边输入框 -->
            <div class="main_left">
              <span class="main_jdspan">酒店名/地名</span>
            </div>
            <!-- 右边输入框 -->
            <div class="main_right">
              <span class="main_szspan"
                >保定
                <span class="fuhao">></span>
              </span>
            </div>
          </div>
          <!-- 酒店预订/时租房下边第一部分结束 -->
          <!-- 酒店预订/时租房下边第二部分开始 -->
          <div class="main2" v-if="clicked==1">
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
          <div class="main3" style="text-align:left" v-if="clicked==2">
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
            <!-- 酒店预订/时租房下边第二部分结束 -->
            <!-- 立即预定按钮开始 -->
            <mt-button type='default' size='large' class="main_button">立即预定</mt-button>
            <!-- 立即预定按钮结束 -->
            <!-- 选项卡开始 -->
            <mt-navbar class="home_cx" >
              <mt-tab-item class="dibu"> 
                <img src="https://images.bthhotels.com/webSite/home_wap/xingcheng_icon.png">
                <span class="hanzi">我的行程</span></mt-tab-item>
               <mt-tab-item> 
                 <img src="https://images.bthhotels.com/webSite/home_wap/dingdan_icon.png" alt="">
                 <span class="hanzi">我的订单</span></mt-tab-item>
            </mt-navbar>
            <!-- 选项卡结束 -->
          </div>
          <!-- 这是半通明横线 -->
          <div style="border-bottom:5px solid #d7d7d7;opacity:.5">

          </div>
        </div> 
      </div>
    </div>
    <!-- 酒店预订内容结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 定义轮播图的个数
      // siwperItem: 2,
      // 定义轮播图初始高度
      swipeHeight: "135px",
      fontBig1: {},
      fontBig2: {},
      // 绑定点击时租跟酒店点击变量
      clicked: "",
    };
  },
  methods: {
    // 点击酒店预订调用
    jd_click() {
      this.clicked = "1";
      if (this.clicked) {
        this.fontBig = { fontbig: true, fontsmall: false };
      }
    },
    // 点击时租调用
    sz_click() {
      this.clicked = "2";
      // if (this.clicked) {
      //   this.fontBig = { fontbig: true, fontsmall: false };
      // }
    },
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
    let picwidth = 750;
    let picheight = 260;
    // 获取轮播图所需要的高度
    this.swipeHeight = (picheight * screenWidth) / picwidth + "px";
  },
};
</script>
<style scoped>
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
  margin-top: 10px;
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
  height: 166px;
  margin-top: 20px;
}
.home_box .main .main_left {
  float: left;
  width: 234px;
  border-right: 1px solid #d3d3d3;
}
.home_box .main .main_right {
  float: right;
  width: 100px;
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
  color: #d3d3d3;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
  display: block;
}
.home_box .main .main_right .main_szspan .fuhao {
  position: absolute;
  right: 20px;
}
</style>>

</style>