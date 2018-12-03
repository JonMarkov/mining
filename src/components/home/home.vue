<template>
  <div class="home">
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
    name: 'home',
    components: {
      bottomNav,
      TopFooter
    },
    data() {
      return {
        selected: 'home',
        topBatten: "首页",
        bannerList: [],
        page: 1,
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

</style>
