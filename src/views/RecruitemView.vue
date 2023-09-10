<template>
  <div>
    <div class="style1"> <GuanYu/></div>
   <div class="style2"> <SwipeTop/></div>
    <PersonTalent/>
  </div>
</template>

<script>
import SwipeTop from "@/components/home/SwipeTop";
import GuanYu from "@/components/home/GuanYu";
import PersonTalent from "@/components/recruitem/PersonTalent";
export default {
name: "RecruitemView",
  components: {
    GuanYu,
    SwipeTop,
    PersonTalent,
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
