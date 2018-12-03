<template>
  <mt-tabbar v-model="selected" class="bottom">
    <mt-tab-item id="home">
      <font-awesome-icon slot="icon" icon="home" size="2x"/>
      首页
    </mt-tab-item>
    <mt-tab-item id="mine">
      <font-awesome-icon slot="icon" icon="database" size="2x"/>
      我的矿机
    </mt-tab-item>
    <mt-tab-item id="team">
      <font-awesome-icon slot="icon" icon="tag"   size="2x"/>
      我的团队
    </mt-tab-item>
    <mt-tab-item id="trade">
      <font-awesome-icon slot="icon" icon="user" size="2x"/>
      交易平台
    </mt-tab-item>
    <mt-tab-item id="vipcenter">
      <font-awesome-icon slot="icon" icon="user" size="2x"/>
      会员中心
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
        selected: this.select
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        this.$router.push({
          name: val
        })
      }
    }

  }
</script>

<style scoped lang="stylus">
</style>
