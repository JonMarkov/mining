<template>
  <div class="mine">
    <ul class="tabs">
      <li class="li-tab" v-for="(item,index) in tabsParam"
          @click="toggleTabs(index)"
          :class="{active:index==nowIndex}">{{item}}
      </li>
    </ul>
    <div class="divTab" v-show="nowIndex===0">
      <div class="am-g am_title">
        <div class="ma-1">到期矿机</div>
        <div class="ma-2">运行时间</div>
        <div class="ma-3">已领取</div>
        <div class="ma-4">状态</div>
        <div class="ma-5">操作</div>
      </div>
      <!--内容-->
      <Layer :layerList="layerList" v-if="layerList.length"></Layer>
    </div>
    <div class="divTab" v-show="nowIndex===1">
      <div class="am-g am_title">
        <div class="ma-1">到期矿机</div>
        <div class="ma-2">运行时间</div>
        <div class="ma-3">已领取</div>
        <div class="ma-4">状态</div>
        <div class="ma-5">操作</div>
      </div>
      <!--内容-->
      <Layer :layerList="normaList" v-if="normaList.length"></Layer>
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
  // 列表组件
  import Layer from '../public/layer'
  // 引用请求后台数据的公共方法
  import api from '../../api/index'

  export default {
    name: 'mine',
    components: {
      bottomNav,
      TopFooter,
      Layer
    },
    data() {
      return {
        // 路由需要
        selected: 'mine',
        // 公用头部title
        topBatten: "我的矿机",
        // tab标签名
        tabsParam: ['正常矿机', '到期矿机'],
        // 默认选中tab
        nowIndex: 0,
        // 到期矿机
        layerList: [],
        // 正常矿机
        normaList: []
      }
    },
    // 进入页面开始调用 （async用于声明一个函数是异步的）
    async created() {
      // 等待异步完成调用 （await只能在async函数中使用）
      // 请求到期矿机函数执行
      await this.goToExpire()
      // 请求正常矿机函数执行
      await this.goToNormal()
    },
    methods: {
      // tab标签切换函数
      toggleTabs: function (index) {
        this.nowIndex = index;
      },
      // 请求接口-到期矿机函数定义
      async goToExpire() {
        let param = {
          service: 'goodsInfoList'
        };
        let res = await api.PostHome(param);
        this.layerList = res.data.goodsInfoList;
        console.log(res)
      },
      // 请求接口-正常矿机函数定义
      async goToNormal() {
        let param = {
          service: 'goodsInfoList'
        };
        let res = await api.PostHome(param);
        this.normaList = res.data.goodsInfoList;
        console.log(res)
      }
    }
  }
</script>
<style scoped lang="stylus">
  .home-nav
    .home-nav-link
      flex 1

  .mine {
    margin-top 50px
  }

  .tabs {
    background: #fff;
    height: 38px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    border-bottom: 3px solid #3d9ff6;
  }

  .li-tab {
    font-weight bold;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .divTab {
    width: 100%;
    font-size 12px
  }

  .am_title {
    margin-top 10px;
    background: #3d9ff6;
    padding 10px 0px;
    display flex;
    flex-direction: row
  }

  .am_content {
    background: #fff;
    border: 2px solid #3d9ff6;
    /*height: 44px;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .am_content img {
    width: 50px
  }

  .am_img {
    display: flex;
    flex-direction: row
  }

  .img_title {
    display flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }

  .ma-1 {
    width: 40%;
    display flex;
    justify-content center;
    align-items: center
  }

  .ma-2 {
    width: 20%;
    display flex;
    justify-content center;
    align-items: center
  }

  .ma-3 {
    width: 10%;
    display flex;
    justify-content center;
    align-items: center
  }

  .ma-4 {
    width: 10%;
    display flex;
    justify-content center;
    align-items: center
  }

  .ma-5 {
    width: 20%;
    display flex;
    justify-content center;
    align-items: center;
  }

  .img_status {
    color red
  }

  .am_content button {
    border-radius: 5px
  }
</style>
