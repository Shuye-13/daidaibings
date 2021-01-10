<template>
    <div>
         <mt-header class="my_header" title="我的行程">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="p_top">
            <img src="../assets/new_empty.png" alt="您还没有行程">
            <p>您还没有行程</p>
        </div>
        <div class="trip_tj">
            <p class="trip_tj_top f30">服务推荐
                <a href="#">
                    <span class="f24">全部</span>
                </a>
            </p>
            <ul>
                <li class="plane">
                    <a href="#"><img src="../assets/plane.png" alt="机票"></a>
                    <p>机票</p>
                    <a href="#"><img src="../assets/jifen_icon.png" alt="送积分" class="trip_tj_jifen"></a>
                </li>
                <li class="train">
                    <a href="#"><img src="../assets/train.png" alt="火车票"></a>
                    <p>火车票</p>
                    <a href="#"><img src="../assets/jifen_icon.png" alt="送积分" class="trip_tj_jifen"></a>
                </li>
                <li class="ticket">
                    <a href="#"><img src="../assets/ticket.png" alt="门票"></a>
                    <p>门票</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.my_header{
    background: #ffffff;
    color: #313336;
}
.mint-header-title{
font-size: 16px;
}
.p_top{
padding-top: 70px;
}
.p_top p{
    opacity: 0.30;
    padding-top: 16px;
}
.trip_tj{
    margin: 1.15rem 0.5rem 1.35rem 0.5rem;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1);
    border-radius: 20px;
    background: #fff;
    overflow: hidden;
    zoom: 1;
    text-align: center;
    padding-bottom: 1.06rem;
}
.trip_tj p.trip_tj_top {
    font-weight: bold;
    text-align: left;
    position: relative;
    padding: 0.34rem 0 0.74rem 0.39rem;
    color: #313336;
}
.trip_tj p.trip_tj_top span {
    position: absolute;
    right: 0.24rem;
    top: 0.36rem;
    display: inline-block;
    padding-top: 0rem;
    color: #97989A;
    font-weight: normal;
}
.f24{
    font-size: 0.24rem;
    letter-spacing: 0.01rem;
    line-height: 0.3rem;
}
ul{
    list-style: none;
}
li{
    float: left;
}
.trip_tj ul li img {
    width: 37.33px;
    height: 37.33px;
    margin-bottom: 3.2px;
}
.trip_tj ul li .trip_tj_jifen {
    position: absolute;
    right: 17.2rem;
    top: 24.91rem;
    width: 37.33px;
    height: 16px;
    z-index: 99;
}
img {
    border: 0;
    vertical-align: middle;
}
.trip_tj ul{
    padding-left: 0;
}
.trip_tj ul li {
    float: left;
    width: 33.3333%;
    font-size: 0.26rem;
    color: #313336;
    line-height: 0.35rem;
    padding-bottom: 0.46rem;
}

</style>