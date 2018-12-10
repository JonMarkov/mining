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
      <div class="am_content" v-for="item in tradeList" v-if="tradeList.length">
        <div class="ma-1">{{item.buyNum}}</div>
        <div class="ma-2">{{item.coinPrice}}</div>
        <div class="ma-1">{{item.buyNum*item.coinPrice|keepTwoNum}}</div>
        <div class="ma-5">
          <button class="am-btn am-btn-primary am-btn-xs" @click="toBuyClick(item)">卖给他</button>
        </div>
      </div>
      <div v-if="tradeList.length==0" class="noTime">暂无数据</div>
    </div>
    <!--买入YUE-->
    <div class="divTab" v-show="nowIndex===1">
      <!--第一栏-->
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 申请买入</p>
      </div>
      <div class="com_buy">
        <div class="buy_select">
          <p class="num_ma">请选择数量</p>
          <!--<select v-model="selectedE">-->
          <!--<option v-for="item in items" v-bind:value="item.value">{{item.text}}</option>-->
          <!--</select>-->
          <p><input class="am-form-field am-input-sm" type="text" placeholder="请输入购买数量"></p>
        </div>
        <div class="buy_price">
          <p class="num_ma">单价</p>
          <p>1000</p>
        </div>
      </div>

      <!--第二栏-->
      <div class="com_title">
        <p><img src="../../assets/blue.png"/> 我的买入列表</p>
      </div>
      <div class="am-g am_title">
        <div class="ma-5">时间</div>
        <div class="ma-6">数量</div>
        <div class="ma-6">单价</div>
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
        <div class="ma-5">时间</div>
        <div class="ma-6">数量</div>
        <div class="ma-6">单价</div>
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
        <div class="ma-5">时间</div>
        <div class="ma-6">数量</div>
        <div class="ma-6">单价</div>
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
        <div class="ma-5">时间</div>
        <div class="ma-6">数量</div>
        <div class="ma-6">单价</div>
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
        items: [{text: 'A', value: 'a'}, {text: 'B', value: 'b'}, {text: 'C', value: 'c'}],
        selectedE: '',
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
    filters: {
      keepTwoNum: function (value) {
        value = Number(value);
        return value.toFixed(2);
      }
    },
    methods: {
      // 获取本地缓存的user_id
      async getUserId() {
        this.userId = localStorage.getItem('user_id');
      },
      // tab标签切换函数
      toggleTabs: function (index) {
        this.nowIndex = index;
      },
      // 请求接口-交易大厅
      async goToTrade() {
        let param = {
          service: 'exchangeHall',
          user_id: this.userId
        };
        let res = await api.PostHome(param);
        this.tradeList = res.data.buyOrderList;
      },
      //卖给他请求函数
      toBuyClick(item) {
        console.log(item)
      },
      // 买入列表
      async goToBuy() {
        let param = {
          service: 'buyOrderList',
          user_id: this.userId
        };
        let res = await api.PostHome(param);
        this.buy = res.data.buyOrderList;
        console.log(123)
        console.log(res)
      },
      // 买入交易列表
      async goToBuyList() {
        let param = {
          service: 'exchangeHall'
        };
        let res = await api.PostHome(param);
        this.buyList = res.data.exchangeHall;
        console.log(res)
      },
      // 卖出列表
      async goToSellUp() {
        let param = {
          service: 'exchangeHall'
        };
        let res = await api.PostHome(param);
        this.sellUp = res.data.exchangeHall;
        console.log(res)
      },
      // 卖出交易列表
      async goToSellUpList() {
        let param = {
          service: 'exchangeHall'
        };
        let res = await api.PostHome(param);
        this.sellUpList = res.data.exchangeHall;
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

  .noTime {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
    color: #ccc;
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
    border-bottom: 3px solid #b5dcef;
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
    font-size 12px;
    margin-bottom 60px
  }

  .am_title {
    background: #b5dcef;
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

  .ma-6 {
    width 10%;
    display flex;
    justify-content center;
    align-items center
  }

  .com_buy {
    display flex;
    flex-direction column;
    background: #fff;
    padding: .6rem 1.5rem;
    line-height: 2rem;
    font-size 1rem
  }

  .buy_select {
    display flex;
    flex-direction row;
    justify-content: space-between;
    width 80%
  }

  .buy_select select {
    width: 100px;
    border-radius: 6px;
    padding: 0px 6px;
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    border: solid 1px #b5dcef;
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    /*在选择框的最右侧中间显示小箭头图片*/
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
  }

  .buy_price {
    display flex;
    flex-direction row;
    width 80%
  }

  .am-input-sm {
    font-size 0.4rem !important
  }

  .buy_select input {
    border-radius: 5px
  }

  .num_ma {
    width 50%
  }
</style>
