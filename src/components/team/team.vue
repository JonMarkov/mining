<template>
  <div class="team">
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
    name: 'team',
    components: {
      bottomNav,
      TopFooter
    },
    data() {
      return {
        selected: 'team',
        topBatten: "我的团队",
      }
    },


  }
</script>
<style scoped lang="stylus">
  .home-nav
    .home-nav-link
      flex 1

</style>
