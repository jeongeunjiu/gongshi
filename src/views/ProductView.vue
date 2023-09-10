<template>
<div>
  <div class="style1"> <GuanYu/></div>
  <div class="style2"> <SwipeTop/></div>
  <ProductShow/>
</div>
</template>

<script>
import SwipeTop from "@/components/home/SwipeTop";
import GuanYu from "@/components/home/GuanYu";
import ProductShow from "@/components/product/ProductShow";
export default {
  name: "ProductView",
  components: {
    ProductShow,
    GuanYu,
    SwipeTop
  },
}
</script>

<style scoped>
.style2{
  position: relative;
}
.style1{
  position: relative;
  z-index: 1000;
}
</style>
