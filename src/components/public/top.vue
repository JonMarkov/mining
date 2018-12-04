<template>
  <header>
    <!--<i class="am-icon-angle-left back"><a href="customer.html"></a> </i>-->
    <p>{{batten}}</p>
  </header>
</template>

<script>
  export default {
    // 接收父组件传递来的数据
    props: {
      topBatten: String
    },
    // 定义初始数据
    data() {
      return {
      // 获得props中的数据
        batten: this.topBatten
      }
    },
  }
</script>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 45px;
    background-color: #3d9ff6;
    color: #fff;
  }

  header .back {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    padding-left: 5px;
    font-size: 30px;
  }

  header p {
    margin: 0;
    line-height: 49px;
    font-size: 16px;
    text-align: center;
  }
</style>
