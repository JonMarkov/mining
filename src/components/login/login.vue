<template>

  <div class="am-form login">
    <div class="logo">
      <img src="../../assets/logo.png"/>
    </div>
    <fieldset>

      <div class="am-form-group">
        <label for="doc-ipt-email-1">用户名</label>
        <input type="email" class="" id="doc-ipt-email-1" placeholder="请输入用户编号或手机号" v-model="login_name">
      </div>

      <div class="am-form-group">
        <label for="doc-ipt-pwd-1">密码</label>
        <input type="password" class="" id="doc-ipt-pwd-1" placeholder="请输入登录密码" v-model="password">
      </div>
      <div class="login_forget">
        <p @click="goToModify()">忘记密码？</p>
        <p @click="goToSignUp()">注册账号</p>
      </div>
      <p class="login_submit">
        <button type="submit" class="am-btn am-btn-default" @click="goToLogin()">提交</button>
      </p>
    </fieldset>
    <div class="login_QR">
      <img src="../../assets/qr.png"/>
      <p>扫描下载EPC</p>
    </div>
    <!--公用头部-->
    <!--<TopFooter :topBatten="topBatten"></TopFooter>-->
  </div>

</template>

<script>
  // 引入公用头部组件
  import TopFooter from '../public/top'
  // 引用请求后台数据的公共方法
  import api from '../../api/index'

  export default {
    name: "login",
    components: {
      TopFooter
    },
    data() {
      return {
        selected: 'login',
        topBatten: "登录",
        login_name: '',
        password: ''
      }
    },
    methods: {
      // 请求接口-登录
      async goToLogin() {
        let param = {
          service: 'login',
          login_name: this.login_name,
          password: this.password
        };
        let res = await api.PostHome(param);
        this.loginDes = res.data
        if (this.loginDes.result_code == 0) {
          localStorage.setItem('user_id', this.loginDes.user_id);
          this.$router.push({
            name: 'home'
          })
        } else if (this.loginDes.result_code == -1) {
          alert('账号已冻结')
        } else {
          alert('登录名或密码错误')
        }
        console.log(res)
      },
      async goToSignUp() {
        this.$router.push({
          name: 'signUp'
        })
      },
      async goToModify() {
        this.$router.push({
          name: 'modify'
        })
      }
    }
  }
</script>

<style scoped>
  .login_submit{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_QR{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    line-height: 3rem;
  }
  .login_QR img{
    width: 150px;
  }
  .login_QR p{
    font-size: 2rem;
  }
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    width: 100%;
    background: #3d9ff6;
    height: 20rem;
    /*margin-top: 45px;*/
    display: flex;
    justify-content: center;
    /*align-items: center;*/
  }
  .logo img {
    width: 100px;
    height: 100px;
    margin-top: 50px;
  }

  .login fieldset {
    width: 90%;
    padding: 1rem;
    border-radius: 10px;
    background: #fff;
    margin-top: -60px;
    box-shadow: #3d9ff6 2px 2px 30px 2px ;
  }

  .login input {
    border-radius: .5rem;
  }

  button {
    width: 90%;
    border-radius: 1rem;
    background-color: #3d9ff6;
    color: #fff;
  }

  .login_forget {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .login_forget p {
    margin: 0rem 1rem 1rem 0rem;
    color: #ccc;
  }
</style>
