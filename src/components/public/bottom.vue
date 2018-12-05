<template>
  <mt-tabbar v-model="selected" class="bottom">
    <mt-tab-item id="home">
      <div class="tab_icon">
        <img src="../../assets/home_icon.png" v-if="selected == 'home'"/>
        <img src="../../assets/home_icon_.png" v-else=""/>
        <p>首页</p>
      </div>
    </mt-tab-item>
    <mt-tab-item id="mine">
      <div class="tab_icon">
        <img src="../../assets/mine_icon.png" v-if="selected == 'mine'"/>
        <img src="../../assets/mine_icon_.png" v-else=""/>
        <p>我的矿机</p>
      </div>
    </mt-tab-item>
    <mt-tab-item id="team">
      <div class="tab_icon">
        <img src="../../assets/team_icon.png" style="width: 26px" v-if="selected == 'team'"/>
        <img src="../../assets/team_icon_.png" style="width: 26px" v-else=""/>
        <p>我的团队</p>
      </div>
    </mt-tab-item>
    <mt-tab-item id="trade">
      <div class="tab_icon">
        <img src="../../assets/trade_icon.png" v-if="selected == 'trade'"/>
        <img src="../../assets/trade_icon_.png" v-else=""/>
        <p>交易平台</p>
      </div>
    </mt-tab-item>
    <mt-tab-item id="vipcenter">
      <div class="tab_icon">
        <img src="../../assets/vip_icon.png" v-if="selected == 'vipcenter'"/>
        <img src="../../assets/vip_icon_.png" v-else=""/>
        <p>会员中心</p>
      </div>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    // 接受父组件传递来到参数
    props: {
      select: String
    },
    // 定义初始数据
    data() {
      return {
        // 获得props中的数据
        selected: this.select,
        imgVal:'home'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        this.imgVal = val
        this.$router.push({
          name: val
        })
      }
    }

  }
</script>

<style scoped lang="stylus">
  .bottom{
    color #929292
  }
  .tab_icon {
    line-height 20px;
    display flex;
    flex-direction: column;
    justify-content center;
    align-items center
  }

  .tab_icon img {
    width 20px
  }

  .mint-tabbar {
    position: fixed;
    bottom: 0px;
    z-index: 99999;
    background: #fff
    box-shadow: 0 -2px 3px -1px #ccc;
  }

  .mint-tabbar > .mint-tab-item.is-selected {
    background: rgba(0,0,0,0);
  }

  p {

  }
</style>
