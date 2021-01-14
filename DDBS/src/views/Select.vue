<template>
  <div id="app">
    <!-- 内容区域开始 -->
    <div class="list">
      <!-- 头部栏 开始-->
      <div class="topDateSelect">
         <div class="dateArrowClick">
           
           <div class="left">
               <div class="imgleft">
                 <img src="../assets/img/left.png" alt="">
               </div>
               <span class="last">前一天</span>
           </div>
           <div class="dateSelectBox">
             <div class="imgcal">
                 <img src="../assets/img/calender.png" alt="">
               </div>
             <div class="departStyle">
               <span>01-14</span>
               <span>明天</span>
             </div>
             <i class="iconbottom">
              <img src="../assets/img/botton.png" alt="">
             </i>
           </div>
           <div class="right">
              <span class="next">后一天</span>
              <div class="imgright">
                 <img src="../assets/img/right.png" alt="">
               </div>
           </div>
         </div>
      </div> 
      <!-- 头部栏 结束 -->
      <!-- 列表像开始 -->
      <div class="Fly">
          <ul class="flyInfoMarginTop flyInfo">
            <!-- 列表项 -->
            <li style="margin-top:55px" class="flyList">
              <!-- 左边  详情-->
              <div class="fleft">
                <div class="flexTop">
                  <!-- 起始时间机场 -->
                  <div class="departInfo">
                    <span class="time">21:15</span>
                    <span class="place">首都T2</span>
                  </div>
                  <!-- 飞行状态 -->
                  <div class="flystatus">
                    <div class="fly">
                      <img src="../assets/img/plain.png" alt="">
                    </div>
                  </div>
                  
                  <!--到达时间机场-->
                  <div class="returnInfo">
                    <span class="time">00:25</span>
                    <span class="place">双流T2</span>
                  </div>
                </div>
                <div class="flyBottom">
                  <div class="pic">
                    <img src="../assets/img/hangkong.png" alt="">
                  </div>
                  <div class="font">中国东方航空MU5273
                    <span>|</span>
                    789(大)
                  </div>
                </div>
              </div>
              <!-- 右边 价钱 -->
              <div class="fright">
                <span class="price">
                  <em>￥</em>
                  <em>850</em>
                </span>
                <span class="cang">经济舱</span>
              </div>
            </li>
          </ul>
      </div>
       <div class="Fly">
          <ul class="flyInfoMarginTop flyInfo">
            <!-- 列表项 -->
            <li class="flyList">
              <!-- 左边  详情-->
              <div class="fleft">
                <div class="flexTop">
                  <!-- 起始时间机场 -->
                  <div class="departInfo">
                    <span class="time">21:15</span>
                    <span class="place">首都T2</span>
                  </div>
                  <!-- 飞行状态 -->
                  <div class="flystatus">
                    <div class="fly">
                      <img src="../assets/img/plain.png" alt="">
                    </div>
                  </div>
                  
                  <!--到达时间机场-->
                  <div class="returnInfo">
                    <span class="time">00:25</span>
                    <span class="place">双流T2</span>
                  </div>
                </div>
                <div class="flyBottom">
                  <div class="pic">
                    <img src="../assets/img/hangkong.png" alt="">
                  </div>
                  <div class="font">中国东方航空MU5273
                    <span>|</span>
                    789(大)
                  </div>
                </div>
              </div>
              <!-- 右边 价钱 -->
              <div class="fright">
                <span class="price">
                  <em>￥</em>
                  <em>850</em>
                </span>
                <span class="cang">经济舱</span>
              </div>
            </li>
          </ul>
      </div>
      <!-- 列表项结束 -->
      <!-- 底部开始 -->
      <div class="footer">
        <ul >
          <li>
            <div class="shaixuan">
            <span>筛选</span>
            </div>
          </li>
          <li>
            <div class="shijian">
            <span>时间</span>
            </div>
          </li>
          <li>
            <div class="digao">
            <span>从低到高</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 底部结束 -->
    </div>
    <!-- 内容区域结束 -->
  </div>
</template>
<style scoped>
*{box-sizing: border-box;}
.list{
  height:100%;
  display:block;
}
.topDateSelect{
  width: 375px;
  height: 55px;
  position: fixed;
  top: 0px;
  left: 0px;
  background:linear-gradient(90deg,#2c7cf9,#4fb0fb);
  color: #ffffff;
  position: fixed;
  overflow: hidden;
}
.last{
  margin-left: 10px;
  margin-right: 4px;
}
.next{
  display: inline-block;
  margin-right:7px;
}
.imgleft{
  width: 23px;
  height: 13px;
  display: inline-block;
}

.imgright{
  width: 23px;
  height: 13px;
  display: inline-block;
}
.imgcal{
  width: 13px;
  height: 13px;
  margin-top: 7px;
  margin-left: 15px;
  display: inline-block;
}
.dateArrowClick{
  width: 370px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 16px;
  /* text-align: center; */
  margin-top: 14px;
  position: relative;
}
.dateSelectBox{
  width: 176px;
  height: 32px;
  top: 0px;
  border-radius: 0.3rem;
  background: #ffffff;
  color:#2c7cf9 ;
  margin-right: 10px;
  /* margin-left: 10px; */
}
.departStyle{
  font-size: 17px;
  margin-top: 7px;
  margin-left: 20px;
  text-align: center;
  display: inline-block;
}
.iconbottom img{
  margin-left: 10px;
  width:16px;
  height: 16px;
}
.footer{
 width: 100%;
  height: 50px;
  background: #ffffff;
  /* border-top: 2px solid #e6e6e6; */
  box-shadow:10px -5px 5px 0#e7e7e7;
  position: fixed;
  left: 0px;
  bottom: 0px;
  
}
.footer li{
  text-align: center;
  width: 125px;
  height:60px;
  line-height: 74px;
  display: flex;
  float: left;
  justify-content: center;
  
}
.footer span{
  margin-top:3px;
  color:#979797;
  margin-bottom:3px
}
.shaixuan{
  background: url(../assets/img/sx.png)no-repeat center;
  background-size: contain;
   height: 32px;
   margin-top: 3px;
}
.shijian{
  background: url(../assets/img/sj.png)no-repeat center;
  background-size: 100%;
  width: 32px;
   height: 30px;
   margin-top: 2px;

}
.digao{
  background: url(../assets/img/gd.png)no-repeat center;
  background-size: contain;
  margin-top: 3px;
  height: 23px;
}
.flystatus .fly img{
  width: 84px;
}
.flyList{
  width: 375px;
  height:80px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 0px;
  background: #ffffff;
  margin-bottom: 10px;
  /* margin-top: 55px; */
  padding-top: 5px;
}
.fleft{
  width: 250px;
  height:35px ;
  text-align: left;
  margin-left:20px ;
  margin-right: 0px;
  margin-top: 10px;
  display: inline-block;
}
.flexTop{
  line-height: 18px;
  display: flex;
  flex-direction: row;
  clear: both;
  margin-bottom: 3px;
}
.departInfo{
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 35px;
}
.time{
  font-family: Arial, Helvetica, sans-serif!important;
  color:#3f3d3d;
  font-weight: 700;
  font-size: 20px;
}
.place{
  color: #797979;
  font-weight: 700;
  font-size: 14px;
}
.flystatus{
  color: #797979;
  text-align: center;
  line-height: 0px;
  margin-left: 12px;
  margin-right: 12px;
}
.returnInfo{
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 35px;
}
.flyBottom{
  /* vertical-align: top; */
  height: 15px;
  display: flex;
}
.font{
  margin-top: 7px;
  height: 15px;
  font-size: 12px;
  color: #797979;
  font-weight: 700;
}
.flyBottom .pic{
  width: 15px;
  display: inline-block;
}
.flyBottom img{
width: 100%;
height: auto;
}
.flyBottom P{  
  font-size: 14px;
  margin-left: 13px;
  margin-bottom:4px ;
}
.fright{
  width:70px;
  height: 30px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: 25px;
  margin-right: 30px;
  clear: both;
}
.price{
  display: inline-block;
  color: #da343d;
  font-size: 18px;
  font-weight: 700;
}
.cang{
  color:#797979;
  font-weight: 700;
  margin-top: 17px;
  font-size:14px;
  height: 13px;
}
</style>