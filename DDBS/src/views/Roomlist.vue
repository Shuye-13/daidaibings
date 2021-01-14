<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- 返回上一级 -->
      <div class="header_back">
        <router-link to="/">
          <mt-button plain style="border: 0; padding: 0">
            <img
              src="../assets/icon/black_back.png"
              height="30"
              width="30"
              slot="icon"
            />
          </mt-button>
        </router-link>
      </div>
      <!-- 中间地址、事件、搜索 -->
      <div class="header_search">
        <div class="search_contiont">
          <!-- 地址 -->
          <div>
            <button class="search_address">
              <p>上海</p>
            </button>
          </div>
          <!-- 事件 -->
          <div>
            <button class="search_time">
              <div class="time">
                <div class="time_data">
                  <p>
                    <span>住</span>
                    <span>01-13</span>
                  </p>
                  <p>
                    <span>退</span>
                    <span>01-14</span>
                  </p>
                </div>
                <span class="time_count">1晚</span>
              </div>
            </button>
          </div>
          <!-- 搜索 -->
          <div>
            <button class="search_query">
              <span>
                <img src="../assets/icon/search_icon.png" alt="" />
              </span>
              <span>搜索酒店</span>
            </button>
          </div>
        </div>
      </div>
      <!-- 进入地图 -->
      <div class="header_map">
        <router-link to="/">
          <mt-button plain style="border: 0">
            <img
              src="../assets/icon/header_map.png"
              height="30"
              width="30"
              slot="icon"
            />
          </mt-button>
        </router-link>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="navtion">
      <div>
        <div class="nav_tab1">
          <div>默认推荐</div>
          <span><img src="../assets/icon/header_down.png" /></span>
        </div>
      </div>
      <div>
        <div class="nav_tab2">
          <div>档次价格</div>
          <span><img src="../assets/icon/header_down.png" /></span>
        </div>
      </div>
      <div>
        <div class="nav_tab3">
          <div>位置区域</div>
          <span><img src="../assets/icon/header_down.png" /></span>
        </div>
      </div>
      <div>
        <div class="nav_tab4">
          <div>设置服务</div>
          <span><img src="../assets/icon/header_down.png" /></span>
        </div>
      </div>
    </div>
    <!-- 胶囊选项 -->
    <div class="capsule">
      <div class="options"><p>专票立取</p></div>
      <div class="options"><p>提供早餐</p></div>
      <div class="options"><p>地铁周边</p></div>
      <div class="options"><p>智能客房</p></div>
      <div class="options"><p>亲子主题</p></div>
    </div>
    <!-- 酒店列表 -->
    <div class="room_list" @click="todetails">
      <div class="room_img">
        <img src="../assets/roomlist/0210M8_a.jpg" />
        <p class="room_assess_bottom">
          <img src="../assets/icon/lyjd_icon.png" alt="" />
        </p>
        <p class="room_assess_top">
          <img src="../assets/icon/fx_icon.png" alt="" />
        </p>
      </div>
      <div class="room_details">
        <div class="room_name"><p>和颐至尊-上海中山公园店</p></div>
        <div class="room_comments">
          <p class="comments_mark">5.0分</p>
          <span class="comments_discuss">1901条评论</span>
          <span class="comments_grade">中高端</span>
        </div>
        <div class="room_address"><p>人民路步行街商圈</p></div>
        <div class="details_bottom">
          <div class="room_compensate">
            <span>买贵赔3倍</span>
          </div>
          <div class="room_price">
            <span class="price_icon">￥</span>
            <span class="price_count">275</span>
            <span class="price_text">起</span>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      todetails(){
        this.$router.push("/details");
      }
    }
  }
</script>

<style scoped>
.header {
  float: left;
  display: flex;
  justify-content: left;
}
.header_back {
  width: 0px;
}
.header_search {
  margin-top: 6px;
  margin-left: 35px;
}

.search_contiont {
  display: flex;
}
.search_address {
  width: 75px;
  height: 30px;
  padding: 0;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 0 #ccc;
  font-size: 12px;
}
.search_address > p {
  margin-left: 15px;
}
.search_time {
  width: 130px;
  height: 30px;
  padding: 0;
  padding-left: 10px;
  border: 0;
  font-size: 12px;
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.time {
  margin-left: 15px;
  display: flex;
  justify-content: left;
}
.time_data > :first-child {
  margin-bottom: -3px;
}
.time_count {
  margin-left: 15px;
  margin-top: 5px;
}
.search_query {
  width: 80px;
  height: 30px;
  padding: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 0 #ccc;
  font-size: 12px;
}
.search_query >>> img {
  width: 15px;
  text-align: center;
}

.navtion {
  display: flex;
  margin-top: 10px;
  float: left;
}

.nav_tab1,
.nav_tab2,
.nav_tab3,
.nav_tab4 {
  display: flex;
  margin-left: 15px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
}
.nav_tab1,
.nav_tab2,
.nav_tab3 {
  border-right: 1px solid #ccc;
  width: 80px;
}
.navtion >>> img {
  width: 20px;
}

.capsule {
  height: 40px;
  width: 100%;
  margin-top: 15px;
  display: flex;
  float: left;
  border-top: 1px solid #ccc;
  box-shadow: 0px 8px 9px 4px #e6e6e6;
}
.options {
  width: 60px;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  background-color: #e0e0e0;
  margin-left: 13px;
  margin-top: 8px;
  padding-top: 5px;
  border-radius: 20px;
}
.room_list {
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding: 0.2rem 0.24rem;
  padding-bottom: 0;
}
.room_img {
  width: 80px;
  height: 130px;
  overflow: hidden;
  position: relative;
}
.room_img > img {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.room_assess_bottom{
  position: absolute;
  bottom: 1px;
  left: 0;
}
.room_assess_bottom>img{
  width: 80px;
}
.room_assess_top{
  position: absolute;
  bottom: 112px;
  left: 40px;
}
.room_assess_top>img{
  width: 35px;
}
.room_list{
  top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}
.room_name{
  padding-left: 15px;
  font-weight: 700;
}
.room_name>p{
  width: 200px;
	height: 20px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.room_comments{
  display: flex;
  margin-left: 15px;
  margin-top: 10px;
}
.comments_mark{
  font-size: 14px;
  color: red;
}
.comments_discuss{
  width: 80px;
  font-size: 13px;
  margin-left: 15px;
  margin-right: 8px;
  border-right: 1px solid #ccc;
  color: #c0c0c0;
}
.comments_grade{
  font-size: 13px;
  margin-left: 8px;
  color: #c0c0c0;
}
.room_address{
  text-align: left;
  margin-left: 15px;
  margin-top: 15px;
  font-size: 13px;
  color: #c0c0c0;
}
.details_bottom{
  display: flex;
}
.room_compensate{
  border: 1px solid #FF9900;
  width: 70px;
  height: 20px;
  margin-left: 15px;
  margin-top: 20px;
  font-size: 13px;
  color: #FF9900;
  border-radius: 3px;
  line-height: 20px;
}
.room_price{
  margin-left: 120px;
  margin-top: 20px;
}
.price_icon{
  font-size: 12px;
  color: red;
}
.price_count{
  font-size: 22px;
  font-weight: 700;
  color: red;
}
.price_text{
  font-size: 13px;
  color: #ccc;
}
</style>