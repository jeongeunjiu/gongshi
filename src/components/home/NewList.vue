<template>
<div class="newTop">
  <span class="size1">新闻报道</span>
  <div class="newFirst">
    <img src="@/assets/images/5.webp" class="img1">
    <span class="size2">万里河山如此多彩！每帧画面都是屏保</span>
    <div class="bottomLine"></div>
    <span class="size3">2023年8月20日</span>
  </div>
</div>
</template>

<script>
export default {
name: "NewList"
}
</script>

<style  lang="less" scoped>
.newTop{
  width: 100%;
  height: 400px;
  padding: 10px;

}
.newFirst{
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
  box-shadow: 10px 10px 10px darkgray;
  .img1{
    width: 100%;
    height: 150px;
  }
  .size2{
    font-size: 15px;
    padding: 10px;
  }
  .bottomLine{
    border: 1px solid black;
    width: 100%;
    margin: 20px 2px;
    //padding: 10px;
  }
  .size3{
    font-size: 15px;
  }
}

.size1{
  font-size: 20px;
  padding: 10px;
}

</style>
