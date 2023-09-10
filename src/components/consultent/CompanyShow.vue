<template>
  <van-tabs v-model="active" @click="handleTab">
    <van-tab
        v-for="item in tabList"
        :title="item.name"
        :key="item">
    </van-tab>
  </van-tabs>
  <component :is="curCom"></component>
</template>

<script>
import CompanyOne from "@/components/consultent/CompanyOne";
import CompanyTwo from "@/components/consultent/CompanyTwo";
export default {
  name: "CompanyShow",
  data() {
    return {
      active: 0,
      tabList: [
        {
          name: "公司公告",
          com: "CompanyOne"
        },
        {

          name: "行业",
          com: "CompanyTwo"
        },
      ],
      curCom: "CompanyOne"
    }
  },
  components:{
    CompanyOne,
    CompanyTwo,
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
