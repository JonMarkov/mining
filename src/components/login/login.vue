<template>

  <div class="am-form login">
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
        <p @click="goToSignUp()">忘记密码？</p>
        <p>注册账号</p>
      </div>
      <p>
        <button type="submit" class="am-btn am-btn-default" @click="goToLogin()">提交</button>
      </p>
    </fieldset>
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
          console.log(this.loginDes)
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
      async goToSignUp(){
        this.$router.push({
          name: 'signUp'
        })
      }
    }
  }
</script>

<style scoped>
.login{
  width: 100%;
  padding: 1rem;
  margin-top: 45px;
}
  .login input{
    border-radius: .5rem;
  }
  button{
    width: 100%;
    border-radius: 0.5rem;
    width: 100%;
    border-radius: 0.5rem;
    background-color: #3d9ff6;
    color: #fff;
  }
  .login_forget{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
.login_forget p{
    margin: 0rem 1rem 1rem 0rem;
  color: #ccc;
  }
</style>
