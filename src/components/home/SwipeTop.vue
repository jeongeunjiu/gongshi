<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img  :src="image"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  setup() {
    const images = [
      require("@/assets/images/3.webp"),
      require("@/assets/images/4.webp"),
    ];
    return {
      images
    };
  },
}
</script>

<style lang="less" >
.van-swipe{
  width: 100%;
  .van-swipe__track{
    .van-swipe-item{
      img{
        width: 100%;
        height: 3rem;
      }

    }
;
}

}

</style>
