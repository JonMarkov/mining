<template>
  <div class="com">
    <div class="com_con" v-for="item in com_list">
      <img :src="item.imgUrl"/>
      <p class="itemName">{{item.goodsName}}</p>
      <p class="itemDes">产量/每小时：{{item.createDate}}</p>
      <p class="itemPrice">价格：{{item.price}}矿池钱包</p>
      <button class="itemBtn">购买</button>
    </div>
  </div>

</template>

<script>
  export default {
    // 接收父组件传递来的数据
    props: {
      comList: {
        type: Array,
        default: function () {
          console.log('123')
          return []
        }
      }
    },
    // 定义初始数据
    data() {
      return {
        // 获得props中的数据
        com_list: this.comList,
      }
    },
  }
</script>

<style scoped>
  .com {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .com_con {
    flex: 1;
    float: left;
    position: relative;
    /*height: 10rem;*/
    line-height: 2rem;
    text-align: center;
    vertical-align: middle;
    margin-top: 0.4rem;
    justify-content: center;

  }

  .com_con img {
    display: block;
    width: 16.3rem;
    height: 10rem;
    line-height: 0.146666rem;
    text-align: center;
  }

  .itemName {
    font-weight: bold;
  }
  .itemBtn{
    width: 10rem;
    padding: 0.2rem;
    border-radius: 5px;
    background: #7AA1DA;
    box-shadow:0px 0 0px 0px #ccc
  }
</style>
