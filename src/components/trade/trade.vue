<template>
  <div class="trade">
    <!--tab列表-->
    <ul class="tabs">
      <li class="li-tab" v-for="(item,index) in tabsParam"
          @click="toggleTabs(index)"
          :class="{active:index==nowIndex}">{{item}}
      </li>
    </ul>
    <!--交易大厅-->
    <div class="divTab" v-show="nowIndex===0">
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 交易大厅等待买入列表</p>
      </div>
      <div class="am-g am_title">
        <div class="ma-1">买入可售余额数量</div>
        <div class="ma-2">单价/美元</div>
        <div class="ma-1">合计金额/美元</div>
        <div class="ma-5">操作</div>
      </div>
      <div class="am_content" v-for="item in tradeList">
        <div class="ma-1">136****7039</div>
        <div class="ma-2">刘*东</div>
        <div class="ma-1">未认证</div>
        <div class="ma-5">
          <button class="am-btn am-btn-primary am-btn-xs">卖给他</button>
        </div>
      </div>
    </div>
    <!--买入YUE-->
    <div class="divTab" v-show="nowIndex===1">
      <!--第一栏-->
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 申请买入</p>
      </div>
      <!--第二栏-->
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 我的买入列表</p>
      </div>
      <div class="am-g am_title">
        <div class="ma-1">时间</div>
        <div class="ma-2">数量</div>
        <div class="ma-1">单价</div>
        <div class="ma-5">合计金额</div>
        <div class="ma-5">状态</div>
        <div class="ma-5">操作</div>
      </div>
      <div class="am_content" v-for="item in buy">
        <div class="ma-1">136****7039</div>
        <div class="ma-2">刘*东</div>
        <div class="ma-1">未认证</div>
        <div class="ma-5">
          <button class="am-btn am-btn-primary am-btn-xs">卖给他</button>
        </div>
      </div>
      <!--第三栏-->
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 我的买入交易列表列表</p>
      </div>
      <div class="am-g am_title">
        <div class="ma-1">时间</div>
        <div class="ma-2">数量</div>
        <div class="ma-1">单价</div>
        <div class="ma-5">合计金额</div>
        <div class="ma-5">状态</div>
        <div class="ma-5">操作</div>
      </div>
      <div class="am_content" v-for="item in buyList">
        <div class="ma-1">136****7039</div>
        <div class="ma-2">刘*东</div>
        <div class="ma-1">未认证</div>
        <div class="ma-5">
          <button class="am-btn am-btn-primary am-btn-xs">卖给他</button>
        </div>
      </div>
    </div>
    <!--卖出YUE-->
    <div class="divTab" v-show="nowIndex===2">
      <!--第一栏-->
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 交易大厅</p>
      </div>
      <div class="am-g am_title">
        <div class="ma-1">时间</div>
        <div class="ma-2">数量</div>
        <div class="ma-1">单价</div>
        <div class="ma-5">合计金额</div>
        <div class="ma-5">状态</div>
        <div class="ma-5">操作</div>
      </div>
      <div class="am_content" v-for="item in sellUp">
        <div class="ma-1">136****7039</div>
        <div class="ma-2">刘*东</div>
        <div class="ma-1">未认证</div>
        <div class="ma-5">
          <button class="am-btn am-btn-primary am-btn-xs">卖给他</button>
        </div>
      </div>
      <!--第二栏-->
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 我的出售交易列表</p>
      </div>
      <div class="am-g am_title">
        <div class="ma-1">时间</div>
        <div class="ma-2">数量</div>
        <div class="ma-1">单价</div>
        <div class="ma-5">合计金额</div>
        <div class="ma-5">状态</div>
        <div class="ma-5">操作</div>
      </div>
      <div class="am_content" v-for="item in sellUpList">
        <div class="ma-1">136****7039</div>
        <div class="ma-2">刘*东</div>
        <div class="ma-1">未认证</div>
        <div class="ma-5">
          <button class="am-btn am-btn-primary am-btn-xs">卖给他</button>
        </div>
      </div>
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
  // 引用请求后台数据的公共方法
  import api from '../../api/index'

  export default {
    name: 'trade',
    components: {
      bottomNav,
      TopFooter
    },
    data() {
      return {
        selected: 'trade',
        topBatten: "交易平台",
        // tab标签名
        tabsParam: ['交易大厅', '买入YUE', '卖出YUE'],
        // 默认选中tab
        nowIndex: 0,
        // 交易大厅数据
        tradeList: [],
        // 买入列表
        buyList: [],
        // 买入交易列表
        buy: [],
        sellUp: [],
        sellUpList: []
      }
    },
    // 进入页面开始调用 （async用于声明一个函数是异步的）
    async created() {
      // 等待异步完成调用 （await只能在async函数中使用）
      // 请求交易大厅函数执行
      await this.goToTrade()
      // 请求买入函数执行
      await this.goToBuy()
      // 请求买入列表函数执行
      await this.goToBuyList()
      // 请求卖出函数执行
      await this.goToSellUp()
      // 请求卖出列表函数执行
      await this.goToSellUpList()
    },
    methods: {
      // tab标签切换函数
      toggleTabs: function (index) {
        this.nowIndex = index;
      },
      // 请求接口-交易大厅
      async goToTrade() {
        let param = {
          service: 'goodsInfoList'
        };
        let res = await api.PostHome(param);
        this.tradeList = res.data.goodsInfoList;
        console.log(res)
      },
      // 买入列表
      async goToBuy() {
        let param = {
          service: 'goodsInfoList'
        };
        let res = await api.PostHome(param);
        this.buy = res.data.goodsInfoList;
        console.log(res)
      },
      // 买入交易列表
      async goToBuyList() {
        let param = {
          service: 'goodsInfoList'
        };
        let res = await api.PostHome(param);
        this.buyList = res.data.goodsInfoList;
        console.log(res)
      },
      // 卖出列表
      async goToSellUp() {
        let param = {
          service: 'goodsInfoList'
        };
        let res = await api.PostHome(param);
        this.sellUp = res.data.goodsInfoList;
        console.log(res)
      },
      // 卖出交易列表
      async goToSellUpList() {
        let param = {
          service: 'goodsInfoList'
        };
        let res = await api.PostHome(param);
        this.sellUpList = res.data.goodsInfoList;
        console.log(res)
      },
    }
  }
</script>
<style scoped lang="stylus">
  .home-nav
    .home-nav-link
      flex 1

  .trade {
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

  .com_title {
    padding: .3rem;
    font-size 14px;
    font-weight: bold
  }

  .com_title img {
    width: 4px;
    height: 14px;
    margin-top: -2px;
  }

  .divTab {
    width: 100%;
    font-size 12px
  }

  .am_title {
    background: #3d9ff6;
    padding 10px 0px;
    display flex;
    flex-direction: row;
    color: #fff
  }

  .am_content {
    background: #fff;
    border: 2px solid #b5dcef;
    border-top: 0px solid;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .am_content button {
    border-radius: 5px;
    background: #7aa1da;
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

</style>
