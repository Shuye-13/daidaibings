<template>
  <div>
    
    <mt-index-list>
      <mt-header class="header" fixed>
      <router-link class="left" to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link class="left" to=""  slot="right">
        <span class="span"><img class="img_1" src="../assets/index_address/sousuo.png" alt=""></span>
        <input  class="input" type="text" name="name" placeholder="城市名称">
      </router-link>
    </mt-header>
    <div class="current mt-44">
      <p>当前位置</p>
      <ul>
        <li>北京</li>
      </ul>
    </div>
    <div class="current history">
      <p>历史搜索</p>
      <ul>
        <li>北京</li>
        <li>石家庄</li>
      </ul>
    </div>
    <div class="current history hot">
      <p>热门城市</p>
      <ul>
        <li>北京</li>
        <li>上海</li>
        <li>天津</li>
        <li>重庆</li>
        <li>大连</li>
        <li>更多</li>
      </ul>
    </div>
      <mt-index-section index="A">
        <mt-cell title="安阳"></mt-cell>
        <mt-cell title="鞍山"></mt-cell>
        <mt-cell title="安丘(潍坊)"></mt-cell>
        <mt-cell title="安庆"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      ...
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.current{
  width: 100%;
  /* height: 5.5rem; */
  border-top: .7rem solid #F6F6F6;
  border-bottom: .7rem solid #F6F6F6;
  padding-left: .6rem;
  padding-top: .6rem;
}
.mt-44 {
  margin-top: 44px;
}
.current>p {
  font-size: .7rem;
  font-weight: lighter;
  margin-bottom: .5rem;
}
.current>ul {
  margin-bottom: 1rem;
}
.current>ul>li {
  width: 5.3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  font-size: .9rem;
  color: #F12C3F;
  border: 1px solid #F12C3F;
  background-color: rgba(255,245,246,1);
  border-radius: 1rem;
}
.current.history>ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.current.history>ul>li {
  margin:0 1rem .5rem 0;
  border: 1px solid #D3D3D3;
  background-color: #fff;
  color: #595757;
}
.hot {
 border: 0;
}
.header{
    background-color: #F12C3F !important;
    height: 45px !important;
    font-size: 18px !important;
    padding-right: 20px;
    margin-bottom: 50px !improtent;
  }
  .input{
    height: 2rem;
    line-height: 2rem;
    width: 17.7rem;
    border-radius: 18px;
    padding: 0 1.97rem;
    
  }
  .span{
    position: relative;
  }
  .img_1{
    position: absolute;
    top: 20%;
    left: 0.9rem;
  }
</style>