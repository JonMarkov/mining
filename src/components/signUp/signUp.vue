<template>
  <div class="signUp">
    <div class="register">
      <!--请输入手机号-->
      <div class="res-item">
        <input type="tel" placeholder="必须输入本人银行卡绑定的手机号" class="input-item my-mobile" v-model="myMobile"/>
        <i class="res-icon am-icon-phone"></i>
      </div>
      <!--请输入短信验证码-->
      <div class="res-item">
        <input type="text" placeholder="请输入短信验证码" class="input-item my-yanzheng" v-model="myYanzheng"/>
        <i class="res-icon am-icon-mobile"></i>
        <button type="button" class="yanzhengma">获取验证码</button>
      </div>
      <!--请输入姓名-->
      <div class="res-item">
        <input type="text" placeholder="必须真实姓名且填写后不可更改" class="input-item my-name" v-model="myName"/>
        <i class="res-icon am-icon-user"></i>
      </div>
      <!--请输入支付宝-->
      <div class="res-item">
        <input type="text" placeholder="必须真实支付宝且填写后不可更改" class="input-item my-pay" v-model="myPay"/>
        <i class="res-icon am-icon-paypal"></i>
      </div>
      <!--请输入登录密码-->
      <div class="res-item">
        <input type="passWord" placeholder="请输入登录密码" class="input-item my-mima" v-model="myMima">
        <i class="res-icon am-icon-check-square-o"></i>
      </div>
      <!--请确认登录密码-->
      <div class="res-item">
        <input type="passWord" placeholder="请再次输入登录密码" class="input-item my-repeatmima" v-model="myRepeatmima">
        <i class="res-icon am-icon-check-circle-o"></i>
      </div>
      <!--请输入二级密码-->
      <div class="res-item">
        <input type="passWord" placeholder="请输入二级密码" class="input-item my-two-mima" v-model="myTwoMima">
        <i class="res-icon am-icon-check-square-o"></i>
      </div>
      <!--请确认二级密码-->
      <div class="res-item">
        <input type="passWord" placeholder="请再次输入二级密码" class="input-item my-two-repeatmima" v-model="myTwoRepeatmima">
        <i class="res-icon am-icon-check-circle-o"></i>
      </div>
      <!--请输入推荐人手机号-->
      <div class="res-item">
        <input type="tel" placeholder="请输入推荐人手机号" class="input-item referee-mobile" v-model="refereeMobile">
        <i class="res-icon am-icon-phone-square"></i>
      </div>
      <blockquote>
        <b>尊敬的EPC原始矿工请认真阅读以下规则：</b><br/>
        <span>【1】年龄范围18至70周岁，不用上传手持照片，注册帐号必须是本人银行卡绑定手机号码，系统自动审核并秒发放矿机。</span><br/>
        <span>【2】平台为保证每位矿工资金安全，收款资料注册成功任何人不得篡改，真实姓名与支付宝不一致永久封号处理。</span><br/>
        <span>【3】如果支付宝帐号设置隐私导致买方查找不到无法完成打款，收款方永久封号处理。</span><br/>
        <span>【4】交易规则请严格遵照平台制度执行，2小时内完成打款，2小时内确认收款，任何一方违规将被系统临时冻结帐号处理，求助解冻请查看平台公告。</span><br/>
        <span>【5】区块链被誉为财富第九波，EPC平台完全去中心化，矿工点对点交易，所有资金不经过平台，无众筹无充值提现。零门槛，零投资，零风险，安全免费随时可卖币退出。投资自由，风险自控，请用闲散资金参与。
 我已认真阅读以上规则，同意加入EPC矿工联盟。</span><
        <div class="am-radio agreement">
          <label>
            <input type="radio" name="doc-radio" value="Selection" class="agr">
            我已经认真阅读以上规则，同意加入YUE矿工联盟
          </label>
        </div>
      </blockquote>

      <!--提交按钮-->
      <div class="res-btn">
        <button type="button" id="res-btn" class="am-btn am-btn-block" @click="goToSignUp()">注册新会员</button>
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
    name: "signUp",
    components: {
      TopFooter,
    },
    data() {
      return {
        selected: 'signUp',
        topBatten: "注册新用户",
        // 手机号
        myMobile: '',
        // 验证码
        myYanzheng: '',
        // 姓名
        myName: '',
        // 支付
        myPay: '',
        // 登录密码
        myMima: '',
        // 确认登录密码
        myRepeatmima: '',
        // 二级密码
        myTwoMima: '',
        // 确认二级密码
        myTwoRepeatmima: '',
        // 推荐人手机号
        refereeMobile: ''
      }
    },
    methods: {
      // 请求接口-注册
      async goToSignUp() {
        // 手机号判断
        if (!this.myMobile || !(/^1[34578]\d{9}$/.test(this.myMobile))) {
          alert('请输入正确的手机号')
          return
        }
        // 验证码判断
        if (!this.myYanzheng) {
          alert('请输入验证码')
          return
        }
        // 姓名输入判断
        if(!this.myName){
          alert('请填写姓名')
          return
        }
        // 支付宝输入判断
        if(!this.myPay||!(/^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d{9,11}$/.test(this.myPay))){
          alert('请填写正确的支付宝账号')
          return
        }
        // 登录密码输入判断
        if(!this.myMima||this.myMima.length>20||this.myMima.length<8||!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.myMima))){
          alert('登录密码必需大于8位小于20位且字母和数字组合')
          return
        }
        // 确认登录密码输入判断
        if(this.myRepeatmima != this.myMima){
          alert('两次二级密码输入不一致')
          return
        }
        // 二级密码输入判断
        if(!this.myTwoMima||this.myMima.length>20||this.myMima.length<8||!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.myMima))){
          alert('二级密码必需大于8位小于20位且字母和数字组合')
          return
        }
        // 确认二级密码判断输入
        if(this.myTwoMima!=this.myTwoRepeatmima){
          alert('两次二级密码输入不一致')
          return
        }
        console.log(this.myMobile)
        let param = {
          service: 'userRegister',
          login_name: this.myMobile,
          password: this.myMima,
          superior_phone:this.refereeMobile,
          real_name:this.myName,
          alipay_num:this.myPay,
          pay_password:this.myTwoMima,
          identifyCode:this.myYanzheng
        };
        let res = await api.PostHome(param);
        this.loginDes = res.data
        if(this.loginDes.result_code==0){
          this.$router.push({
            name: 'login'
          })
        }else {
          alert(this.loginDes.result_desc)
        }
        console.log(res)
      },
    }
  }
</script>

<style scoped>
  .signUp {
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

  /*客服页面*/
  .all {
    margin-bottom: 10px;
    background: #ffffff;
    padding: 12px;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .con-img {
    width: 20%;
    border: 2px solid #badeff;
    border-radius: 2px;
  }

  .con-img img {
    width: 100%;
    border-radius: 2px;
  }

  .qr-code {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .con-text {
    margin-left: 20px;
    line-height: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*align-items: center;*/
  }

  .qr-code img {
    width: 300px;
    height: 300px;
  }

  * + address, * + blockquote, * + dl, * + fieldset, * + figure, * + hr, * + ol, * + p, * + pre, * + ul {
    margin: 0 0 0 0;

  }

  .kf-text {
    color: #06122a;
  }

  .kf-text img {
    width: 14px;
    height: 14px;
  }

  .address {
    color: #9f9f9f
  }
</style>
