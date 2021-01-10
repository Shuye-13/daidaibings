<template>
  <div>
    <mt-header title="会员注册" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <span><img src="../assets/登录注册图标-01.png" slot="icon" alt="" /></span>
    <mt-field
      class="h1"
      type="text"
      v-model="phone"
      :state="phoneState"
      @blur.native.capture="checkPhone"
      placeholder="请输入手机号码，可作为登录名使用"
      :attr="{ maxlength: 11 }"
    >
    </mt-field>

    <span><img src="../assets/登录注册图标-02.png" slot="icon" alt="" /></span>
    <mt-field
      type="text"
      v-model="username"
      :state="usernameState"
      placeholder="请输入您的真实姓名"
    >
    </mt-field>

    <span><img src="../assets/登录注册图标-03.png" slot="icon" alt="" /></span>
    <mt-field
      type="text"
      v-model="password"
      :state="passwordState"
      placeholder="登录密码，6-20位字母、数字、符号，不能含空格"
      :attr="{ maxlength: 10 }"
    >
    </mt-field>


    <span><img src="../assets/登录注册图标-03.png" slot="icon" alt="" /></span>
    <mt-field
      type="text"
      v-model="repwd"
      :state="repwdState"
      placeholder="请再次输入登录密码"
      :attr="{ maxlength: 10 }"
    >
    </mt-field>


    <span><img src="../assets/登录注册图标-04.png" slot="icon" alt="" /></span>
    <mt-field
      v-model="captcha"
      :state="captchaState"
      placeholder="请输入图片验证码"
      :attr="{ maxlength: 4 }"
    >
      <img src="../assets/GetIdentyCode.gif" height="45px" width="100px" />
    </mt-field>


    <span><img src="../assets/登录注册图标-04.png" slot="icon" alt="" /></span>
    <mt-field
      class="captchaphone"
      type="text"
      v-model="captchaphone"
      :state="captchaphoneState"
      placeholder="请输入手机验证码"
      :attr="{ maxlength: 4 }"
    >
      <a href="#" class="yzm">获取验证码</a>
      <!-- <mt-toast>获取验证码</mt-toast> -->
    </mt-field>
    <div class="agree">
      <input id="auto" type="checkbox" name="auto" checked />
      <label for="auto">同意<a href="/registersmall" class="auto">《首旅如家网络会员注册服务条款》</a></label>
    </div>

    <mt-button class="zc" size="large" @click="handle">注册</mt-button>
  </div>
</template>

<style scoped>
.mint-header {
  background-color: #c0191f;
}
.h1 {
  margin-top: 40px;
}
.zc {
  background-color: #c0191f;
  color: #ffffff;
  width: 70%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 20px;
}
.agree {
  text-align: center;
  font-size: 14px;
  color: #90704d;
  margin-top: 40px;
}
.auto {
  color: #90704d;
  text-decoration: none;
}
.captchaphone {
  border-bottom: 1px solid #d4d4d4;
}
.yzm{
	text-decoration: none;
  color: #90704d;
}
span img {
  float: left;
  width: 20px;
  height: 20px;
  padding-top: 14px;
  padding-left: 10px;
}
</style>


<script>
export default {
  data() {
    return {
      phone: "",
      phoneState: "",
      username: "",
      usernameState: "",
      password: "",
      passwordState: "",
      repwd: "",
      repwdState: "",
      captcha: "",
      captchaState: "",
      captchaphone: "",
      captchaphoneState: "",
    };
  },
  methods: {
    checkPhone() {},
    handle() {},
  },
};
</script>