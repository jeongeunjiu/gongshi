<template >
<div>
  <div class="style1"> <GuanYu/></div>
  <div class="style2"> <SwipeTop/></div>
   <TabList/>
  </div>
</template>
<script>
import SwipeTop from "@/components/home/SwipeTop";
import GuanYu from "@/components/home/GuanYu";
import TabList from "@/components/home/TabList";

export default {
  name: "AboutView",
  components: {
    TabList,
    GuanYu,
    SwipeTop
  },
}
</script>
<style>
.style2{
  position: relative;
}
.style1{
  position: relative;
  z-index: 1000;
}
</style>
