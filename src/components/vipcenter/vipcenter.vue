<template>
  <div class="vipcenter">
    <!--头部个人信息部分-->
    <div class="vip_center">
      <div class="center_left">
        <img src="../../assets/logo.png"/>
      </div>
      <div class="center_right">
        <p>用户编号： 13683187039</p>
        <p>用户等级： 一级矿工</p>
        <p>直推人数： 0</p>
        <p>团队人数： 0</p>
      </div>
    </div>
    <!--个人信息数据部分-->
    <div class="vip_da">
      <!--个人数据信息-1-->
      <div class="vip_data">
        <div class="data_left">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_center">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_right">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
      </div>
      <!--个人数据信息-2-->
      <div class="vip_data">
        <div class="data_left">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_center">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_right">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
      </div>
      <!--个人数据信息-3-->
      <div class="vip_data">
        <div class="data_left">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_center">
          <p>2.1980枚</p>
          <p>可售余额</p>
        </div>
        <div class="data_guide"></div>
        <div class="data_right">
          <p>2.1980枚</p>
          <p>可售余额</p>
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
    <div></div>
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

  export default {
    name: 'vipcenter',
    components: {
      bottomNav,
      TopFooter
    },
    data() {
      return {
        selected: 'vipcenter',
        topBatten: "会员中心",
      }
    },


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
