<template>
  <div class="home">
    <!--头部banner图-->
    <div class="home_img">
      <img src="../../assets/banner.png"/>
    </div>
    <!--频道列表-->
    <div class="home-nav">
      <mt-navbar>
        <div class="home-nav-link">
          <mt-tab-item @click.native="handleClick">
            <img src="../../assets/sign.png"/>
            <span style="margin-top: 1rem">我要签到</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link">
          <mt-tab-item>
            <img src="../../assets/news.png"/>
            <span style="margin-top: 1rem">新闻公告</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link" @click="goToHome()">
          <mt-tab-item>
            <img src="../../assets/QRcode.png"/>
            <span style="margin-top: 1rem">推广二维码</span>
          </mt-tab-item>
        </div>
        <div class="home-nav-link" @click="goToPageMessage()">
          <mt-tab-item>
            <img src="../../assets/customer.png"/>
            <span style="margin-top: 1rem">在线客服</span>
          </mt-tab-item>
        </div>
      </mt-navbar>
    </div>
    <!--数据显示-->
    <!--<div class="home-num">-->
      <!--<p>YUE发行总量：{{number}}</p>-->
      <!--<p>已开采数量：{{number}}</p>-->
    <!--</div>-->
    <!--商品列表-->
    <div class="home-com">
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 矿机商城</p>
      </div>
      <ComHome :comList="comList" v-if="comList.length"></ComHome>
    </div>
    <!--公用底部内容-->
    <bottomNav :select="selected"></bottomNav>
    <!--公用头部-->
    <TopFooter :topBatten="topBatten"></TopFooter>
    <div v-if="ma">womenwomenwomen</div>
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
        comList: [],
        number: 1,
        ma: false
      }
    },
    // 进入页面开始调用 （async用于声明一个函数是异步的）
    async created() {
      // 等待异步完成调用 （await只能在async函数中使用）
      // 请求矿机商城接口执行
      await this.goToHome()
    },
    methods: {
      handleClick: function () {
        console.log('123')
        this.ma = true
      },
      // 跳转路由-测试
      goToPageMessage: function () {
        this.$router.push({
          name: 'message'
        })
      },
      // 请求接口-矿机商城
      async goToHome() {
        let param = {
          service: 'minerInfoList'
        };
        let res = await api.PostHome(param);
        this.comList = res.data.miner_list;
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

  .home-num {
    padding 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .home-com {
    margin-top .4rem;
    padding 8px;
    background: #fff;
    margin-bottom 60px;
    display: flex;
    flex-direction: column;
  }

  .com_title img {
    width: 4px;
    height: 14px;
    margin-top: -2px;
  }
  .home-nav-link img {
    width: 3rem
  }
</style>
