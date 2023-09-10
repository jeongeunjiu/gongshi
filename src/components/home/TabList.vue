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
import ContentOne from "@/components/my/ContentOne";
import ContentTwo from "@/components/my/ContentTwo";
export default {
  name: "TabList",
  data() {
    return {
      active: 0,
      tabList: [
        {
          name: "公司介绍",
          com: "ContentOne"
        },
        {

          name: "公司介绍",
          com: "ContentTwo"
        },
        {
          name: "公司介绍",
          com: "ContentOne"
        },
        {
          name: "公司介绍",
          com: "ContentOne"
        },
        {
          name: "公司介绍",
          com: "ContentOne"
        },
        {
          name: "公司介绍",
          com: "ContentOne"
        },
      ],
      curCom: "ContentOne"
    }
  },
  components:{
    ContentOne,
    ContentTwo,
  },
  methods: {
    handleTab(i) {
      this.curCom = this.tabList[i].com
    },
  },
}
// export default definrComponetn({
//   name:"",
//   components:{
//     ContentTwo,
//     ContentOne,
//   },
//   props:{},
//   emits:{},
//   setup(props,{arres,slots,enit,expose}){
//     const  active=ref("");
//     return{
//       active,
//       tabList:[
//           {
//                 name: "公司介绍",
//                 comName: "ContentOne"
//           },
//         {
//           name: "公司介绍",
//           comName: "ContentTwo"
//         },
//         {
//           name: "公司介绍",
//           comName: "ContentTwo"
//         },
//         {
//           name: "公司介绍",
//           comName: "ContentTwo"
//         },
//         {
//           name: "公司介绍",
//           comName: "ContentTwo"
//         },
//         {
//           name: "公司介绍",
//           comName: "ContentTwo"
//         },
//       ],
//     };
//   },
//   methods:{},
// })
</script>

<style scoped>

</style>
