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
      <div class="am_content">
        <div class="ma-1 am_img">
          <img src="../../assets/logo.png"/>
          <div class="img_title">
            <p>微型云矿机</p>
            <p>预计0.003/小时</p>
          </div>
        </div>
        <div class="ma-2">4800/4800</div>
        <div class="ma-3">3,7587</div>
        <div class="ma-4 img_status">到期</div>
        <div class="ma-5">
          <button class="am-btn am-btn-primary am-btn-xs">查看详情</button>
        </div>
      </div>
    </div>
    <div class="divTab" v-show="nowIndex===1">到期矿机</div>
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
    name: 'mine',
    components: {
      bottomNav,
      TopFooter
    },
    data() {
      return {
        selected: 'mine',
        topBatten: "我的矿机",
        tabsParam: ['正常矿机', '到期矿机'],//（这个也可以用对象key，value来实现）
        nowIndex: 0,//默认第一个tab为激活状态
      }
    },
    methods: {
      toggleTabs: function (index) {
        this.nowIndex = index;
      },
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

  .am_content {
    border-radius: 5px
  }
</style>
