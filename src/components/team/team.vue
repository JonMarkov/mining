<template>
  <div class="team">
    <!--我的直推-->
    <div class="am-g am_title">
      <div class="ma-2">会员账号</div>
      <div class="ma-3">姓名</div>
      <div class="ma-2">等级</div>
      <div class="ma-3">直推</div>
      <div class="ma-2">团队算力</div>
      <div class="ma-2">注册人数</div>
    </div>
    <div class="am_content" v-for="item in teamList">
      <div class="ma-2">{{item.login_name}}</div>
      <div class="ma-3">{{item.real_name}}</div>
      <div class="ma-2">{{item.is_authentication}}</div>
      <div class="ma-3">{{item.direct_sum}}</div>
      <div class="ma-2">{{item.team_power}}</div>
      <div class="ma-2">{{item.direct_sum}}</div>
    </div>
    <div class="mine_text" style="margin-top: 5px;margin-bottom:60px">
      <p class="text_title">共2条记录 第1页/共1页</p>
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
    name: 'team',
    components: {
      bottomNav,
      TopFooter
    },
    data() {
      return {
        selected: 'team',
        topBatten: "我的团队",
        teamList: []
      }
    },
    // 进入页面开始调用 （async用于声明一个函数是异步的）
    async created() {
      // 等待异步完成调用 （await只能在async函数中使用）
      // 请求我的直推函数执行
      await this.goToTeam()
    },
    methods: {
      // 请求接口-我的直推
      async goToTeam() {
        let param = {
          service: 'directInvitation',
          user_id:'112'
        };
        let res = await api.PostHome(param);
        this.teamList = res.data.direct_list;
        console.log(res)
      }
    }


  }
</script>
<style scoped lang="stylus">
  .team {
    margin-top 50px;
    color: #071328;
    font-size 12px
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
    border-bottom: 3px solid #a1c8ee;
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
    background: #b5dcef;
    padding 10px 0px;
    display flex;
    flex-direction: row;
    color #fff
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

  .am_content {
    background: #fff;
    border: 2px solid #b5dcef;
    border-top: 0px solid;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mine_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0rem 1.3rem;
    color: #3d9ff6
  }

  .text_title {
    font-weight: bold
  }


</style>
