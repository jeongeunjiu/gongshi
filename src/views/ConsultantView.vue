<template>
<div>
  <div class="style1"> <GuanYu/></div>
  <div class="style2"> <SwipeTop/></div>
  <CompanyShow/>
</div>
</template>

<script>
import GuanYu from "@/components/home/GuanYu";
import SwipeTop from "@/components/home/SwipeTop";
import CompanyShow from "@/components/consultent/CompanyShow";
export default {
name: "ConsultantView",
  components:{
    CompanyShow,
  GuanYu,
    SwipeTop,
  }
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
