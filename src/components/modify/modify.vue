<template>
<div class="modify am-form">
  <div class="register">
    <!--请输入手机号-->
    <div class="res-item">
      <input type="tel" placeholder="请输入11位手机号码" class="input-item my-mobile" v-model="myMobile"/>
      <i class="res-icon am-icon-phone"></i>
    </div>

    <!--请输入登录密码-->
    <div class="res-item">
      <input type="passWord" placeholder="请输入密码" class="input-item my-mima" v-model="myMima">
      <i class="res-icon am-icon-check-square-o"></i>
    </div>
    <!--请确认登录密码-->
    <div class="res-item">
      <input type="passWord" placeholder="请再次输入密码" class="input-item my-repeatmima" v-model="myRepeatmima">
      <i class="res-icon am-icon-check-circle-o"></i>
    </div>
    <!--请输入短信验证码-->
    <div class="res-item">
      <input type="text" placeholder="请输入短信验证码" class="input-item my-yanzheng" v-model="myYanzheng"/>
      <i class="res-icon am-icon-mobile"></i>
      <button type="button" class="yanzhengma">获取验证码</button>
    </div>


    <!--提交按钮-->
    <div class="res-btn">
      <button type="button" id="res-btn" class="am-btn am-btn-block" @click="goToSignUp()">找回密码</button>
    </div>
  </div>
  <!--公用头部-->
  <TopFooter :topBatten="topBatten"></TopFooter>
</div>
</template>

<script>
  // 引入公用头部组件
  import TopFooter from '../public/top'
  // 引用请求后台数据的公共方法
  import api from '../../api/index'
    export default {
      name: "modify",
      components: {
        TopFooter,
      },
      data(){
        return{
          selected: 'signUp',
          topBatten: "修改密码",
          myMobile:'',
          myMima:'',
          myRepeatmima:'',
          myYanzheng:''
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .modify {
    margin-top: 40px;
    padding: 1rem;
  }

  /*注册页面*/
  .register {
    /*padding: 8px 6px;*/
    font-size: 14px;
  }

  .res-item {
    position: relative;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: #fff;
  }

  .res-icon {
    position: absolute;
    left: 8px;
    top: 5px;
    z-index: 100;
    display: inline-block;
    font-size: 18px;
    color: #9c9c9c;
  }

  .res-item .input-item {
    display: inline-block;
    width: 100%;
    padding-left: 31px;
    height: 40px;
    border: none;
    font-size: inherit;
  }

  .res-item .input-item:focus {
    outline-offset: 0;
    outline: -webkit-focus-ring-color auto -2px;
    background-color: #fefffe;
    border: 1px solid #3d9ff6;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 5px #3d9ff6;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 5px #3d9ff6;
  }

  .textRed {
    color: red
  }

  .res-item .input-item:focus + .res-icon {
    color: #3d9ff6;
  }

  .yanzhengma {
    position: absolute;
    right: 10px;
    top: 5px;
    z-index: 100;
    display: inline-block;
    padding: 0.5rem 0.8rem;
    font-size: 14px;
    border: none;
    background-color: #3d9ff6;
    color: #fff;
    border-radius: 8px;
  }

  .yanzhengma:disabled {
    background-color: #ddd;
  }

  .res-btn {
    margin-top: 10px;
    padding: 0 5px;
  }

  .res-btn button {
    background-color: #3d9ff6;
    font-size: 14px;
    color: #fff;
    border-radius: 8px;
  }

  .res-btn button:focus {
    color: #fff;
  }

  blockquote {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    /*font-family: "";*/
  }

  .agreement {
    color: #a13532;
  }
</style>
