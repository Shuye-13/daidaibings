<template>
<div class="h_d_gorup">
    <!-- 主图 -->
    <div  class="top_banner">
        <a href="#"><img src="../assets/033501_n_5.jpg" alt="秦皇岛河北大街中段太阳城店"></a>
    </div>
    <!-- 顶部图标 -->
    <div class="top_wrap">
        <router-link to="/roomlist">
          <a href="#" class="f_l"><img src="../assets/d_back.png" alt="返回"></a>
        </router-link>
        <a href="#" class="f_r"><img src="../assets/d_tel.png" alt="电话"></a>
    </div>
    <!-- 底部图标 -->
    <div class="bottom_wrap">
        <div class="title">
            <p style="right: 0px;">如家·neo-秦皇岛河北大街中段太阳城店</p>
        </div>
        <div class="tag">
            <a href="#">
                <img src="../assets/d_pic.png" alt="图片" width="12px" height="12px">
                <span>16张</span>
            </a>
        </div>
    </div>
    <div class="info">
        <div class="location">
            <div>
                <p class="m_16">
                    <img src="../assets/d_l.png" alt="地址" width="15px" height="15px" style="margin-right:5px;margin-left:-10px;">
                    <span class="f13 tit_color block_middle">海港区新华街9号新天地广场A座6层</span>
                </p>
                <p class="f12 color_gray" id="Distance">秦皇岛火车站：3.7公里；山海关火车站：15</p>
            </div>
            <div class="map_periphery">
                <span>地图/周边</span>
                <img class="icon_arrow" src="../assets/d_arrow_r.png" alt="图标">
            </div>
        </div>
        <div class="start_other">
            <div class="group">
                <span class="score">5.0</span>
                <div class="score_pic">
                    <a href="#" class="fix">
                        <div class="start_box">
                            <div class="start_1">
                                <div class="icon"></div>
                            </div>
                        </div>
                        <p class="color_gray2 f12 remark_more">1485人点评<img class="icon_arrow" src="../assets/d_arrow_r.png" alt="图标"></p>
                    </a>
                </div>
            </div>
            <a href="#" class="fix group other">
                <p class="f13 tit_color">
                    2011-11-6开业 
                    <br>
                    商旅型酒店
                </p>
                <img class="icon_arrow" src="../assets/d_arrow_r.png" alt="图标" width="12px" height="12px">
            </a>
        </div>
        <div class="f12 service">
            <ul>
                <li><a href="#"><img src="../assets/如旅钱包.png" alt="如旅钱包"></a></li>
                <li><a href="#"><img src="../assets/自助选房.png" alt="自助选房"></a></li>
                <li><a href="#"><img src="../assets/积分抵房费.png" alt="积分抵房费"></a></li>
                <li><a href="#"><img src="../assets/Apple Pay.png" alt="Apple Pay"></a></li>
                <li><a href="#"><img src="../assets/停车场.png" alt="停车场"></a></li>
                <li><a href="#"><img src="../assets/自助洗衣.png" alt="自助洗衣"></a></li>
                <li><a href="#"><img src="../assets/专票.png" alt="专票"></a></li>
            </ul>
            <span class="color_gray2">更多服务设施</span>
            <img class="icon_arrow" src="../assets/d_arrow_r.png" alt="图标">
        </div>
    </div>
    <div class="f13 enter_time" id="h5_date">
            <div class="h5_date_in">
                <input type="hidden" readonly="" value="2021-01-13" name="s_ArrDate" time_group="one" id="s_ArrDate">
                <span class="f14 h5_fontColor start_date" data-time="2021-01-13">01月13日</span>
                <span class="f12">周三入住</span>
            </div>
            <div class="day">
                <span class="h5_fontColor"><code class="h5_arial block_middle total">1</code><span class="block_middle day_txt">晚</span></span>
            </div>
            <div class="h5_date_out">
                <input type="hidden" name="s_DepDate" readonly="" value="2021-01-14" time_group="one" id="s_DepDate">
                <span class="h5_fontColor end_date f14" data-time="2021-01-14">01月14日</span>
                <span class="f12">周四离店</span>
            </div>
    </div>
    <div class="padding host_list">
        <div class="fl">
            <img src="../assets/033501_B9.jpg" alt="商务大床房B" width="93px" height="83px">
        </div>
        <div class="fl" style="width:161.5px;height:83px;margin-right: 5px;margin-left: 5px;">
            <p class="f14">商务大床房B</p>
            <p><span class="h5_arial">大床1.8m  入住2人  12㎡</span></p>
        </div>
        <div class="fl" style="width:78.5px;height:50px;color:#f12c3f;">
            <p class="f12"><span>¥</span><span class="f15">76</span><span>起</span></p>
            <p class="price_origin">¥109</p>
            <p class="f12">房量紧张</p>
        </div>
    </div>
    
    <div class="padding host_list">
        <div class="fl">
            <img src="../assets/033501_B9.jpg" alt="商务大床房B" width="93px" height="83px">
        </div>
        <div class="fl" style="width:161.5px;height:83px;margin-right: 5px;margin-left: 5px;">
            <p class="f14">商务大床房B</p>
            <p><span class="h5_arial">大床1.8m  入住2人  12㎡</span></p>
        </div>
        <div class="fl" style="width:78.5px;height:50px;color:#f12c3f;">
            <p class="f12"><span>¥</span><span class="f15">76</span><span>起</span></p>
            <p class="price_origin">¥109</p>
            <p class="f12">房量紧张</p>
        </div>
    </div>
    <div class="padding host_list">
        <div class="fl">
            <img src="../assets/033501_B9.jpg" alt="商务大床房B" width="93px" height="83px">
        </div>
        <div class="fl" style="width:161.5px;height:83px;margin-right: 5px;margin-left: 5px;">
            <p class="f14">商务大床房B</p>
            <p><span class="h5_arial">大床1.8m  入住2人  12㎡</span></p>
        </div>
        <div class="fl" style="width:78.5px;height:50px;color:#f12c3f;">
            <p class="f12"><span>¥</span><span class="f15">76</span><span>起</span></p>
            <p class="price_origin">¥109</p>
            <p class="f12">房量紧张</p>
        </div>
    </div>
    <div class="padding host_list">
        <div class="fl">
            <img src="../assets/033501_B9.jpg" alt="商务大床房B" width="93px" height="83px">
        </div>
        <div class="fl" style="width:161.5px;height:83px;margin-right: 5px;margin-left: 5px;">
            <p class="f14">商务大床房B</p>
            <p><span class="h5_arial">大床1.8m  入住2人  12㎡</span></p>
        </div>
        <div class="fl" style="width:78.5px;height:50px;color:#f12c3f;">
            <p class="f12"><span>¥</span><span class="f15">76</span><span>起</span></p>
            <p class="price_origin">¥109</p>
            <p class="f12">房量紧张</p>
        </div>
    </div>
    <div class="padding host_list">
        <div class="fl">
            <img src="../assets/033501_B9.jpg" alt="商务大床房B" width="93px" height="83px">
        </div>
        <div class="fl" style="width:161.5px;height:83px;margin-right: 5px;margin-left: 5px;">
            <p class="f14">商务大床房B</p>
            <p><span class="h5_arial">大床1.8m  入住2人  12㎡</span></p>
        </div>
        <div class="fl" style="width:78.5px;height:50px;color:#f12c3f;">
            <p class="f12"><span>¥</span><span class="f15">76</span><span>起</span></p>
            <p class="price_origin">¥109</p>
            <p class="f12">房量紧张</p>
        </div>
    </div>
</div>

</template>
<style scoped>
.h_d_gorup{
    position: relative;
}
.top_banner img{
    width: 100%;
    height: 245px;
    vertical-align: middle;
}
.top_wrap a{
    display: block;
}
.top_wrap .f_l{
    float: left;
}
.top_wrap .f_r{
    float: right;
}
.top_wrap a img{
    width: 33px;
    height: 32.5px;
    border-radius: 50%;
}
.top_wrap{
    width: 85%;
    position: absolute;
    left: 27px;
    top: 0;
    padding-top: 15px;
    margin-left:15px ;
    margin:0 auto;
}
.bottom_wrap {
    width: 270px;
}
.bottom_wrap .title {
    color: white;
    font-size:18px;
    font-weight: bold;
    position: absolute;
    top: 195px;
    left: 15px;
    overflow: hidden;
    white-space: nowrap;
}
.bottom_wrap .title{
    width: 270px;
}
.bottom_wrap .tag {
    line-height: 1;
    font-size: 12px; 
    float: right; 
    width: 60px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 188px;
    right: 15px;
    background: rgba(0,0,0,0.4);
    border-radius:1.3rem;
}
.bottom_wrap .tag a{
    display: block;
    margin-left: 10px;
}
.bottom_wrap .tag a span{
    color: white;
}
.info {
    padding: 15px;
    margin: -1.2rem 0 0.2rem 0;
    position: relative;
    z-index: 110;
    border-radius: 1.2rem 1.2rem 0 0;
    background-color: #ffffff;
}
.info .location {
        display: flex;
        /*align-items: center;*/
        line-height: .28rem;
}
.info .tit_color {
        color: #313336
}

.info .location .location_txt {
    flex: 1;
    font-size: 0;
}
.start_other {
    display: flex;
    margin: 14.5px;
    margin-top: 35px;
}
.h_d_gorup .f13 {
    font-size:13px;
}
.h_d_gorup .f12{
    font-size: 12px;
}
.service {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.h_d_gorup .m_16{
margin-bottom: 1.16rem;
}
.info .color_gray {
        color: #ADADAF;
}
.info .location .location_txt {
        flex: 1;
        font-size: 0;
}
.map_periphery{
    margin-left: 40px;
}
.map_periphery span {
    color: #ADADAF;
    font-size: .24rem;
}
.map_periphery .icon_arrow {
    color: #ADADAF;
    font-size: .24rem;
}
.icon_arrow {
    width: 12px;
    height: 12px;
    margin-left: 7px;
}
.start_other .score {
    font-size: 1.5rem;
    color: #F12C3F;
    font-weight: bold;
    margin-right: 10px;
}
.score_pic .start_box {
    width: 1.85rem;
    margin-bottom: .1rem;
}
.score_pic .start_box .start_2 .icon {
    background-position: 0 0;
}
.score_pic .start_box .icon {
    background: url("../assets/start_h5_2.png") no-repeat;
    width: 92.5px;
    background-size: cover;
    height: 13px;
}
.score_pic .remark_more {
    position: relative;
}
.score_pic p{
    margin-top: 10px;
}
.info .color_gray2 {
    color: #97989A;
}
.start_other .group {
    display: flex;
    line-height: 24px;
    align-items: center;
}
.start_other .group {
    flex: 1;
    height: 2.7rem;
    margin: 0 .09rem;
    background-color: #F7F7F7;
    border-radius: .2rem;
    padding: .29rem;
}

.fl {
    float: left;
}
.fix {
    overflow: hidden;
    zoom: 1;
}
.serve ul{width: 244px;}
.service li{
    display: block;
    float: left;
    justify-content: space-between;
}
.service li a img{
    width: 24px;
    height: 24px;
    margin-right: 10px;
}
.enter_time {
    font-size: 0;
    display: flex;
    align-items: center;
    text-align: center;
    height: .9rem;
    background-color: #fff;
    position: relative;
    color: #ADADAF;
}
.enter_time .h5_date_in, .enter_time .h5_date_out {
    flex: 1;
    font-size: 0;
}
input {
    line-height: normal;
    outline: none;
    border: none;
}
.enter_time .h5_fontColor {
    color: #313336;
    font-weight: bold;
    font-size: .28rem;
    margin-right: .28rem;
}
.enter_time .day {
    width: .9rem;
    height: .4rem;
    display: table;
    align-items: center;
    position: relative;
}
.enter_time .day .h5_fontColor {
    position: relative;
    font-weight: 400;
    display: table-cell;
    vertical-align: middle;
    font-size: .24rem;
    margin-right: 0;
}
.enter_time .day .total {
    font-size: .24rem;
    font-family: Arial;
}
.enter_time .h5_date_out {
    flex: 1;
    font-size: 0;
}
.padding{
    padding:14.5px;
}
.h_d_gorup .f14 {
    font-size: 14px;
    font-weight: bold;
}
.h5_arial{
    font-size: 12px;
    color: #adadaf;
}
.fr{
    float:right;
}
.f15{
    font-size: 25px;
    margin-left: 5px;
    margin-right: 5px;
}
.price_origin {
    color: #C1C1C2;
    font-size: .24rem;
    text-align: center;
    text-decoration: line-through;
    margin-top: 5px;
    margin-bottom: 5px;
}
.host_list{
    width: 100%;
    height: 88.5px;
    border-bottom: 1px solid #c1c1c2;
}
</style>