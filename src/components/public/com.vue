<template>
  <div class="com">
    <div class="com_con" v-for="item in com_list">
      <img :src="item.imgUrl"/>
      <p>{{item.goodsName}}</p>
      <p>{{item.goodsName}}</p>
      <p>{{item.goodsName}}</p>
      <mt-button>立即使用</mt-button>
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
  .com{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    align-items: center;
  }
  .com_con{
    flex: 1;
    float: left;
    position: relative;
    /*height: 10rem;*/
    line-height: 1.68rem;
    text-align: center;
    vertical-align: middle;
    margin-top: 0.266666rem;
    justify-content: center;
  }
.com_con img{
  display: block;
  width: 16rem;
  height: 10rem;
  line-height: 0.146666rem;
  text-align: center;
}
</style>
