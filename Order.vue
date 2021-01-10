<template>
    <div>
        <mt-header class="my_header" title="我的订单">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 导航 -->
        <mt-navbar v-model="navactive" class="nav">
            <mt-tab-item id="1">代付款</mt-tab-item>
            <mt-tab-item id="2">待出行</mt-tab-item>
            <mt-tab-item id="3">待点评</mt-tab-item>
            <mt-tab-item id="4">全部</mt-tab-item>
        </mt-navbar>
        <!-- 内容面板 -->
        <mt-tab-container class="container" v-model="tabContainerActive">
            <mt-tab-container-item id='i1' class="mianban">
                <img src="../assets/new_empty.png" alt="暂无相关订单">
                <p>暂无相关订单</p>
            </mt-tab-container-item>
            <mt-tab-container-item id='i2' class="mianban">
                <img src="../assets/new_empty.png" alt="暂无相关订单">
                <p>暂无相关订单</p>
            </mt-tab-container-item>
            <mt-tab-container-item id='i3' class="mianban">
                <img src="../assets/new_empty.png" alt="暂无相关订单">
                <p>暂无相关订单</p>
            </mt-tab-container-item>
            <mt-tab-container-item id='i4' class="mianban">
                <img src="../assets/new_empty.png" alt="暂无相关订单">
                <p>暂无相关订单</p>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部选项卡 -->
        <mt-tabbar>
            <mt-tab-item id="order">
                <img slot="icon" src="../assets/screen_icon.png">
                    筛选订单类型
            </mt-tab-item>
        </mt-tabbar>
        <div class="order_type_list" style="display: block;">
        <p>选择需要筛选的订单类</p>
        <a class="order_type_item active" href="#" ordertype="0">全部订单</a>
        <a class="order_type_item " href="#" ordertype="1">酒店</a>
        <a class="order_type_item " href="#" ordertype="3">机票</a>
        <a class="order_type_item " href="#" ordertype="2">火车票</a>
        <a class="order_type_item " href="#" ordertype="4">接送机/站</a>
        <a class="order_type_item " href="#" ordertype="5">门票</a>
        
        
    </div>
        
        
    </div>
</template>
<style scoped>
.my_header{
    background: #ffffff;
    color: #313336;
}
.nav{
    width: 100%;
    height: 2.9rem;
    line-height: 2.9rem;
    padding-left: .23rem;
    font-size: 0;
    background: rgba(255,255,255,1);
    box-shadow: 0px 0.04rem 0.1rem 0 rgba(0,0,0,0.09);
    border-top: 1px solid rgba(49,51,54,.16);
    z-index: 1;
}
.container{
    width: 400px;
    height: 517,73px;
}
.container .mianban{
    padding-top: 155px;
}
.container .mianban img{
    width: 76.8px;
    height: 76.8px;
}
.container .mianban p{
    opacity: 0.5;
}
.order_type_list{
    border-top: 1px solid #C1C1C2;
    border-bottom: .01rem solid rgba(49,51,54,.16);
    border-radius: 1.2rem 1.2rem 0 0;
    width: 100%;
    height: 157px;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 50px;
    background: #fff;
    padding: 7.6px 0 7.4px 16px;
}
.order_type_list p {
    text-align: center;
    padding-bottom: .34rem;
    color: rgba(49,51,54,.5);
    font-size: .24rem;
}
.order_type_list .order_type_item.active {
    background: rgba(255,241,240,1);
    color: #F12C3F;
}
.order_type_list .order_type_item {
    float: left;
    width: 5.57rem;
    height: 2.8rem;
    line-height: 2.8rem;
    text-align: center;
    background: #F5F5F5;
    margin-right: 0.2rem;
    margin-bottom: 0.3rem;
    border-radius: 1.38rem;
    color: rgba(49,51,54,.5);
    font-size: 0.24rem;
}
a{
    text-decoration: none;
}
</style>
<script>
export default {
  data() {
    return {
      tabContainerActive : '1',
      navactive : '1',
      navactive2 : '1'
    }
  },
  watch : {
    // 当navactive属性修改时执行该方法
    navactive(newVal, oldVal){
      this.tabContainerActive = 'i'+newVal
    }
  }
}
</script>