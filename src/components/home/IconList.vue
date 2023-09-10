<template>
<div class="iconList">

  <div class="iconItem">
    <router-link to="/about">
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-a-013_wodetuandui"></use>
  </svg><br>
  <span>关于我们</span>
    </router-link>
</div>
<!--  <div class="iconItem"> -->
<!--    <router-link to="/product">-->
<!--    <svg class="icon" aria-hidden="true">-->
<!--      <use xlink:href="#icon-xinxingcailiao"></use>-->
<!--    </svg>-->
<!--    <span>产品介绍</span>-->
<!--      <router-link/>-->
<!--  </div>-->
  <div class="iconItem">
    <router-link to="/product">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xinxingcailiao"></use>
      </svg><br>
      <span>产品介绍</span>
    </router-link>
  </div>
  <div class="iconItem">
    <router-link to="/consultant">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gongsi"></use>
    </svg><br>
    <span>公司咨询</span>
    </router-link>
  </div>
  <div class="iconItem">
    <router-link to="/recruitemt">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon--rencaizhaopin"></use>
    </svg><br>
    <span>人才招聘</span>
    </router-link>
  </div>
  <div class="iconItem">
    <router-link to="/contact">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-a-013_dianhua"></use>
    </svg><br>
    <span>联系我们</span>
    </router-link>
  </div>
  <router-view></router-view>
</div>

</template>

<script>

export default {
  name: "IconList",
}
</script>

<style lang="less" >
.iconList{
  width: 100%;
  height: .8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconItem{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .10rem;
  }
}
</style>
