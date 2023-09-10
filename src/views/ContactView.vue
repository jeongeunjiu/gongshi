<template>
  <div>
    <div class="style1"> <GuanYu/></div>
    <div class="style2"> <SwipeTop/></div>
    <AddressMy/>
  </div>
</template>

<script>
import SwipeTop from "@/components/home/SwipeTop";
import GuanYu from "@/components/home/GuanYu";
import AddressMy from "@/components/contact/Address";

export default {
name: "ContactView",
  components: {
    AddressMy,
    GuanYu,
    SwipeTop,
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
