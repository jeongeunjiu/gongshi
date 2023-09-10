<template>
  <van-tabs v-model="active" @click="handleTab">
    <van-tab
        v-for="item in tabList"
        :title="item.name"
        :key="item">
    </van-tab>
  </van-tabs>
  <component :is="curCom"></component>
  <!--  <component :is="item.comName"></component>-->
</template>

<script>
// import {shallowRef,definrComponetn,getCurrentInstance,reactive,ref,} from "vue";
import ProductOne from "@/components/product/ProductOne";
import ProductTwo from "@/components/product/ProductTwo";
export default {
  name: "ProductShow",
  data() {
    return {
      active: 0,
      tabList: [
        {
          name: "耐火",
          com: "ProductOne"
        },
        {

          name: "耐火",
          com: "ProductTwo"
        },
        {
          name: "耐火",
          com: "ProductOne"
        },
        {
          name: "耐火",
          com: "ProductOne"
        },
        {
          name: "耐火",
          com: "ProductOne"
        },
        {
          name: "耐火",
          com: "ProductOne"
        },
      ],
      curCom: "ProductOne"
    }
  },
  components:{
    ProductOne,
    ProductTwo,
  },
  methods: {
    handleTab(i) {
      this.curCom = this.tabList[i].com
    },
  },
}
</script>

<style scoped>

</style>
