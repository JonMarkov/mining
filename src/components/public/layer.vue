<template>
  <div>
    <div class="am_content" v-for="item in layer_list">
      <div class="ma-1 am_img">
        <img src="../../assets/logo.png"/>
        <div class="img_title">
          <p>123</p>
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

</template>

<script>
  export default {
    // 接收父组件传递来的数据
    props: {
      layerList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    // 定义初始数据
    data() {
      return {
        // 获得props中的数据
        layer_list: this.layerList,
      }
    },
  }
</script>

<style scoped>
  .am_content {
    background: #fff;
    border: 2px solid #3d9ff6;
    border-top: 0px solid;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }

  .ma-1 {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .ma-2 {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .ma-3 {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .ma-4 {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .ma-5 {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img_status {
    color: red
  }

  .am_content button {
    border-radius: 5px
  }
</style>
