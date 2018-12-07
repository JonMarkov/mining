<template>
  <div class="vipcenter">
    <!--头部个人信息部分-->
    <div class="vip_center">
      <div class="center_left">
        <img src="../../assets/logo.png"/>
      </div>
      <div class="center_right">
        <p>用户姓名： {{centerList.real_name}}</p>
        <p>用户等级： {{centerList.user_rank}}级矿工</p>
        <p>直推人数： {{centerList.direct_inferiors}}</p>
      </div>
    </div>
    <!--个人信息数据部分-->
    <div class="vip_da">
      <!--个人数据信息-1-->
      <div class="vip_data">
        <div class="data_left">
          <p>{{centerList.coin_balance}}枚</p>
          <p>可售余额</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_center">
          <p>{{centerList.salable_quota}}</p>
          <p>可售额度</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_right">
          <p>{{centerList.miner_total}}</p>
          <p>累计产量</p>
        </div>
      </div>
      <!--个人数据信息-2-->
      <div class="vip_data">
        <div class="data_left">
          <p>{{centerList.reward}}枚</p>
          <p>奖金累计</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_center">
          <p>{{centerList.release_amount}}枚</p>
          <p>总收益</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_right">
          <p>{{centerList.miner_num}}台</p>
          <p>有效矿机</p>
        </div>
      </div>
      <!--个人数据信息-3-->
      <div class="vip_data">
        <div class="data_left">
          <p>{{centerList.mineral_wallet}}枚</p>
          <p>矿池钱包</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_center">
          <p>{{centerList.mineral_assets}}枚</p>
          <p>矿池资产</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_right">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
    </div>
    <!--快捷入口-->
    <div class="vip_quick">
      <div class="quick">
        <div class="quick_left">
          <img src="../../assets/signin_icon.png"/>
          <p>我要签到</p>
        </div>
        <div class="quick_center">
          <img src="../../assets/convert_icon.png"/>
          <p>兑换奖励</p>
        </div>
        <div class="quick_right">
          <img src="../../assets/pool_icon.png"/>
          <p>矿池资产</p>
        </div>
      </div>
      <div class="quick">
        <div class="quick_left">
          <img src="../../assets/pool_icon.png"/>
          <p>账户解封</p>
        </div>
        <div class="quick_center">
          <img src="../../assets/unsea_icon.png"/>
          <p>活动奖励</p>
        </div>
        <div class="quick_right">
          <img src="../../assets/finance_icon.png"/>
          <p>财务明细</p>
        </div>
      </div>
      <div class="quick">
        <div class="quick_left">
          <img src="../../assets/aut_icon.png"/>
          <p>实名认证</p>
        </div>
        <div class="quick_center">
          <img src="../../assets/data_icon.png"/>
          <p>个人资料</p>
        </div>
        <div class="quick_right">
          <img src="../../assets/system_icon.png"/>
          <p>系统公告</p>
        </div>
      </div>
    </div>
    <!--表格-->

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
    name: 'vipcenter',
    components: {
      bottomNav,
      TopFooter,
    },
    data() {
      return {
        selected: 'vipcenter',
        topBatten: "会员中心",
        centerList: {}
      }
    },
    // 进入页面开始调用 （async用于声明一个函数是异步的）
    async created() {
      // 等待异步完成调用 （await只能在async函数中使用）
      // 请求本地缓存userId函数执行
      await this.getUserId()
      // 请求个人中心函数执行
      await this.goToCenter()
    },
    methods: {
      // 获取本地缓存的user_id
      async getUserId() {
        this.userId = localStorage.getItem('user_id');
      },
      // 请求接口-到期矿机函数定义
      async goToCenter() {
        let param = {
          service: 'userCenter',
          user_id: this.userId,
        };
        let res = await api.PostHome(param);
        this.centerList = res.data;
        console.log(res)
      },
    }


  }
</script>
<style scoped lang="stylus">
  .home-nav
    .home-nav-link
      flex 1

  .vipcenter {
    margin-top: 46px
  }

  .vip_center {
    padding: 10px;
    display flex;
    flex-direction row;
    background #c8dcef
  }

  .center_left {
    width 30%;
    border-right 3px solid #fff;
    display flex;
    flex-direction row;
    justify-content center;
    align-items center;
    padding-right 10px
  }

  .center_left img {
    width 90%;
  }

  .center_right {
    padding 0px 10px;
    display flex;
    flex-direction column;
    justify-content center;
    align-items left
  }

  .vip_data {
    display flex;
    flex-direction row;
    justify-content space-around;
    background #fff;
    padding 20px;
    margin-top 5px
  }

  .data_guide {
    width 2px;
    background #ccc
  }

  .vip_quick {
    display flex;
    flex-direction column;
    background #fff;
    margin-top 5px;
    padding 10px 0px;
    line-height 10px
  }

  .quick {
    display flex;
    flex-direction row;
    width 100%;
    margin 14px 0px
  }

  .quick img {
    width 40%
  }

  .quick div {
    display flex;
    flex-direction column;
    justify-content center;
    align-items center;
    line-height 26px
  }
</style>
