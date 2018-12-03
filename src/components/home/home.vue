<template>
  <div class="home">
    <!--头部banner图-->
    <div class="home_img">
      <img src="../../assets/ywts.jpg"/>
    </div>
    <!--频道列表-->
    <div class="home-nav">
      <mt-navbar>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="bars" size="2x"/>
            <span>我要签到</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="trophy" size="2x"/>
            <span>新闻公告</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link" @click="goToHome()">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="file-alt" size="2x"/>
            <span>推广二维码</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link" @click="goToPageMessage()">
          <mt-tab-item>
            <font-awesome-icon slot="icon" icon="comment-dots" size="2x"/>
            <span>在线客服</span>
          </mt-tab-item>
        </div>
      </mt-navbar>
    </div>
    <!--数据显示-->
    <div class="home-num">
      <p>YUE发行总量：{{number}}</p>
      <p>已开采数量：{{number}}</p>
    </div>
    <!--商品列表-->
    <div class="home-com">
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 矿机商城</p>
      </div>
      <ComHome :comList="comList"></ComHome>
    </div>
    <!--公用底部内容-->
    <bottomNav :select="selected"></bottomNav>
    <!--公用头部-->
    <TopFooter :topBatten="topBatten"></TopFooter>
  </div>
</template>
<script>
  // 引入公用底部组件
  import bottomNav from '../public/bottom'
  // 引入公用头部组件
  import TopFooter from '../public/top'
  // 引入商品组件
  import ComHome from '../public/com'
  // 引用请求后台数据的公共方法
  import api from '../../api/index'

  export default {
    name: 'home',
    components: {
      bottomNav,
      TopFooter,
      ComHome,
    },
    data() {
      return {
        selected: 'home',
        topBatten: "首页",
        comList: [
          {
            mac:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607232321,3507637558&fm=26&gp=0.jpg',
            title:'1233',
            time:'2018',
            Price:'115'
          },
          {
            mac:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607232321,3507637558&fm=26&gp=0.jpg',
            title:'1233',
            time:'2019',
            Price:'105'
          },
          {
            mac:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607232321,3507637558&fm=26&gp=0.jpg',
            title:'1233',
            time:'2019',
            Price:'105'
          },
          {
            mac:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607232321,3507637558&fm=26&gp=0.jpg',
            title:'1233',
            time:'2019',
            Price:'105'
          }
        ],
        number: 1,
      }
    },
    // 进入页面开始调用 （async用于声明一个函数是异步的）
    async created() {
      // 等待异步完成调用 （await只能在async函数中使用）
      await this.goToHome()
    },
    methods: {
      // 跳转路由
      goToPageMessage: function () {
        this.$router.push({
          name: 'message'
        })
      },
      // 请求接口
      async goToHome() {
        let param = {
          service: 'exchangeHall'
        };
        let res = await api.PostHome(param);
        console.log(res)
      }
    }
  }
</script>
<style scoped lang="stylus">
  .home-nav
    .home-nav-link
      flex 1

  .home_img {
    width 100%;
    margin-top 45px
  }

  .home_img img {
    width 100%
  }
  .home-nav{
    margin-top 10px
 }
  .home-num{
    padding 10px;
    display:flex;
    flex-direction:row;
    justify-content: center;
  }
  .home-com{
    padding 10px;
    background :#fff
  }
  .com_title img{
    width :8px;
    background :red
  }
</style>
