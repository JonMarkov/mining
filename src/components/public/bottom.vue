<template>
  <mt-tabbar v-model="selected" class="bottom">
    <mt-tab-item id="home">
      <div class="tab_icon">
        <img src="../../assets/logo.png" style="width: 10px"/>
        <p>首页</p>
      </div>

    </mt-tab-item>
    <mt-tab-item id="mine">
      <div class="tab_icon">
        <img src="../../assets/logo.png" style="width: 10px"/>
        <p>我的矿机</p>
      </div>
    </mt-tab-item>
    <mt-tab-item id="team">
      <div class="tab_icon">
        <img src="../../assets/logo.png" style="width: 10px"/>
        <p>我的团队</p>
      </div>
    </mt-tab-item>
    <mt-tab-item id="trade">
      <div class="tab_icon">
        <img src="../../assets/logo.png" style="width: 10px"/>
        <p>我的矿机</p>
      </div>
    </mt-tab-item>
    <mt-tab-item id="vipcenter">
      <div class="tab_icon">
        <img src="../../assets/logo.png" style="width: 10px"/>
        <p>我的矿机</p>
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
  .tab_icon{
    display flex;
    flex-direction:column;
    justify-content center;
    align-items center
  }
  .tab_icon img{
    width 20px
  }
</style>
