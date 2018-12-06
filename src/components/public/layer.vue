<template>
  <div>
    <div class="am_content" v-for="item in layer_list">
      <div class="ma-1 am_img">
        <img :src="item.miner_pic"/>
        <div class="img_title">
          <p>{{item.miner_name}}</p>
          <p>预计{{item.output}}/小时</p>
        </div>
      </div>
      <div class="ma-2">{{item.dig_time}}/{{item.validity}}</div>
      <div class="ma-3">3,7587</div>
      <div class="ma-4" :class="item.status == '1'?'img_status':''">{{item.status == '1'?'到期':'正常'}}</div>
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
    border: 2px solid #b5dcef;
    border-top: 0px solid;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem .4rem;
  }

  .am_content img {
    width: 50px
  }

  .am_img {
    display: flex;
    flex-direction: row
  }

  .img_title {
    margin-left: .3rem;
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
    border-radius: 5px;
    background: #7aa1da;
 }
</style>
