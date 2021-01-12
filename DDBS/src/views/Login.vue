<template>
  <div>
    <mt-header class="header" title="会员登录">
      <router-link class="left" to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>

      <router-link class="right" slot="right" to="/register">
      注册
      </router-link>
    </mt-header>
    <mt-navbar class="navbar" v-model="selected">
      <mt-tab-item class="item" id="1">会员账号登陆</mt-tab-item>
      <mt-tab-item class="item" id="2">手机动态密码登陆</mt-tab-item>
    </mt-navbar>
    <mt-tab-container  v-model="selected">
      <mt-tab-container-item id="1">
        <span><img  src="../assets/common/login.png" slot="icon" alt=""></span>

        <mt-field class="field"
          label="" 
          type="text"
          v-model="username"
          :state="usernameState"
          @blur.native.capture="checkUsername"
          placeholder="请输入手机号码/会员卡号/邮箱">
        </mt-field>

        <span><img  src="../assets/common/password.png" slot="icon" alt=""></span>

        <mt-field 
          label="" 
          type="password"
          v-model="password"
          :state="passwordState"
          placeholder="请输入登陆密码">
        </mt-field>

        <span><img  src="../assets/common/yanzhengma.png" slot="icon" alt=""></span>

        <mt-field 
        v-model="captcha"
        :state="captchaState"
        placeholder="请输入验证码">
          <img src="../assets/common/GetIdentyCode.gif" height="45px" width="100px">
        </mt-field>
        <div class="zidingyi">
          <div class="left_1">
            <input class="checkbox" type="checkbox" id="check1" value="123" name="name">
            <label for="check1">30天内自动登录</label>
          </div>
          <div class="right_1">
            <span><a href="/resetpass">忘记密码?</a></span>
          </div>
        </div>

        <!-- <mt-cell
          title=" "
          to=""
          is-link
          value="忘记密码">
          <input type="checkbox" >
        </mt-cell> -->
        <!-- <mt-checklist
          align="left"
          v-model="value"
          :options="options">
          
        </mt-checklist> -->
        <!-- <mt-herder slot="right">
          <router-link >忘记密码</router-link>
        </mt-herder> -->
        
      </mt-tab-container-item>
    </mt-tab-container >
    
    <!-- 手机登录 -->
    <mt-tab-container  v-model="selected">
      <mt-tab-container-item class="container" id="2">
        <span><img  src="../assets/common/login.png" slot="icon" alt=""></span>

        <mt-field class="field"
          label="" 
          type="text"
          v-model="username"
          :state="usernameState"
          @blur.native.capture="checkUsername"
          placeholder="请输入手机号码">
        </mt-field>

        <span><img  src="../assets/common/password.png" slot="icon" alt=""></span>

        <mt-field 
        v-model="captcha"
        :state="captchaState"
        placeholder="请输入验证码">
          <img src="../assets/common/GetIdentyCode.gif" height="45px" width="100px">
        </mt-field>

        <span><img  src="../assets/common/yanzhengma.png" slot="icon" alt=""></span>

        <mt-field 
          label="" 
          type="password"
          v-model="password"
          :state="passwordState"
          placeholder="请输入动态密码">
          <span><a class="font_1" href="">获取验证码</a></span>
        </mt-field>  
      </mt-tab-container-item>
    </mt-tab-container >
    
    <div style="margin:0 auto; width:100%">
      <mt-button type="danger" size="normal" @click="handle">
        登录
      </mt-button>
    </div>
    <div class="bottom">
      <span>使用其他账号登陆</span>
    </div>
    <div class="bottom_2">
      <ul>
        <li><a href=""><img src="../assets/common/qq.png" alt=""></a></li>
        <li><a href=""><img src="../assets/common/zfb.png" alt=""></a></li>
        <li><a href=""><img src="../assets/common/wb.png" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  #app{
    color: #90704d !important;
    
  }
  .header{
    background-color: #c0191f !important;
    height: 45px !important;
    font-size: 18px !important;
  }
  .left{
    margin-left: 10px;
  }
  .header .right{
    font-size: 14px;
    margin-right: 10px;
  }
  span img{
    float: left;
    margin-top: 10px;
    margin-left: 10px;   
  }
  .navbar{
    margin-bottom: 30px;
  }
  
  .font_1{
    font-size: 14px;
    color: #90704d;
  }
  .container{
    height: 248px;
  }

  .mint-navbar>>>
  .mint-tab-item div{
    font-size: 15px ;
    height: 50px;
    line-height: 50px;

  }
  .mint-navbar>>> a{
    background-color: #F9F8F6;

  }
  .mint-navbar>>> a.is-selected {
    border-bottom: none;
    color: #C0191F;
    font-weight: bold;

    background-color: #ffffff;
  }
  .mint-tab-item, .mint-navbar .mint-tab-item{
    padding: 0 !important;
  }
  .mint-button--normal{
    padding: 0px 84px;
    background-color: #c0191f;
    border-radius: 10px;
    margin:0 auto;
  }

  .mint-tab-container-item>>>input{
    font-size: 14px;
    padding-left: 10px;
  }
  

  .zidingyi{
    height: 104px;
  }
  .left_1, .right_1{
    float: left;
    margin: 16px 15px;
    color: #90704d;
    font-size: 13px;

  }
  .right_1 ,.right_1>span>a{
    float: right;
    color: #90704d;

  }
  .checkbox{
    margin-right: 5px;

  }
  .bottom{
    width: 80%;
    height: 1px;
    margin: 100px 0 0 10%;
    border-bottom: 1px solid #EBEBEB;
    position: relative;
  }
  .bottom span{
    background-color: #ffffff;
    padding: 0 10px 0 10px;
    position: absolute;
    left: 27%;
    top: -7px;
  }
  .bottom_2{
    margin-top: 25px;
    padding: 0 10%;
  }
  .bottom_2>ul>li{
    display: inline-block;
    width: 33.333%;
    text-align: center;
  }
  .bottom_2>ul{
    display: flex;

  }
</style>>
  
</style>
<script>
export default {
  data() {
    return {
      username : '',
      usernameState : '',
      password : '',
      passwordState : '',
      captcha : '',
      captchaState : '',
      value : [],
      // options : [{
      //   label : '30天内自动登陆',
      //   value : '1'
      // }],
      selected: '1'
      
    }
  },
  methods:{
    checkUsername(){
      let username = this.username
      // 检验用户名
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/
      if (usernameReg.test(username)){  //符合正则表达式
        this.usernameState = 'success'
      }else{ //不符合正则表达式
        this.usernameState = 'error'
        return false;
      }
    },
    handle (){  //处理点击确认注册事件
      let username = this.username
      // 检验用户名
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/
      if (usernameReg.test(username)){  //符合正则表达式
        this.usernameState = 'success'
      }else{ //不符合正则表达式
        this.usernameState = 'error'
        return false;
      }

      // 检验密码
      let password = this.password
      let passwordReg = /^[0-9]{6}$/
      if (passwordReg.test(password)){  //符合正则表达式
        this.passwordState = 'success'
      }else{ //不符合正则表达式
        this.passwordState = 'error'
        return false;
      }

      //发送登录请求  POST
      let params = 
          `username=${this.username}&password=${this.password}`
      this.axios.post('/login', params).then(res=>{
        // res.data :  {code:0, message:ok, userInfo:{用户对象}}
        // res.data :  {code:1, message:'错误消息'}
        if(res.data.code==0){
          // 把当前登录成功的用户对象存入vuex的userInfo中
          this.$store.commit('updateUser', res.data.userInfo)
          this.$router.push('/')
        }else{
          this.$messagebox.alert(res.data.message)
        }
      })
    }
  }
}
</script>