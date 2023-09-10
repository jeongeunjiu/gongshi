<template>
  <div class="quanzhu">
    <div class="style1"><TopNav></TopNav></div>
    <div class="style2"><SwipeTop/></div>
    <IconList/>
    <NewList/>
<!--    <ProductList/>-->
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav";
import SwipeTop from "@/components/home/SwipeTop";
import IconList from "@/components/home/IconList";
import NewList from "@/components/home/NewList";
// import ProductList from "@/components/home/ProductList";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    // ProductList,
    NewList,
    IconList,
    TopNav,
    SwipeTop,
  },
};
</script>
<style>

.quanzhu{
  background-color: aliceblue;

}

</style>
