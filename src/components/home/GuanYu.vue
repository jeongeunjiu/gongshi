<template>
  <van-sticky :offset-top="0">
  <div class="my" id="topMy" :style="topMyBg">
    <van-nav-bar title="公司"  >
      <template #left >
        <div @click="$router.go(-1)" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
        </div>
      </template>
      <template #right>
        <div class="container">
          <div class="dropdown">
            <!-- 标题 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liebiao"></use>
            </svg>
            <!-- 下拉菜单内容 -->
            <div class="dropdown-content">
              <div class="dropdown-menu">
                <router-link to="/about"> <div class="menuItem">关于我们</div></router-link>
                <router-link to="/product"> <div class="menuItem">产品介绍</div></router-link>
                <router-link to="/consultant"> <div class="menuItem">公司咨询</div></router-link>
                <router-link to="/recruitemt"> <div class="menuItem">人才招聘</div></router-link>
                <router-link to="/contact"><div class="menuItem">联系我们</div></router-link>
              </div>
            </div>
            <router-view :key="key"></router-view>
          </div>
        </div>
      </template>
    </van-nav-bar>
  </div>
  </van-sticky>
</template>

<script>
export default {
  computed:{
    key(){
      return this.$route.name!==undefined?this.$route.name + +new Date() :this.$route + + new Date()
    }
  },
  data () {
    return {
      topMyBg: {
        backgroundColor: ''
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
  },
  methods: {
    // 滚动页面时触发导航变色
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 设置背景颜色的透明度
      if (scrollTop) {
        this.topMyBg.backgroundColor = `rgba(255, 255, 255,${scrollTop / (scrollTop + 40)})` // scrollTop + 多少根据自己的需求设置
      } else if (scrollTop === 0) {
        this.topMyBg.backgroundColor = 'transparent' // 设置回到顶部时，背景颜色为透明
      }
    },
    // 滚动之前重置
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  //margin: 0 5px;
  .dropdown-title {
    display: inline-block;
    position: relative;
    height: 30px;
    line-height: .5rem;
    font-size: .1rem;
    color: #fff;
    background-color: #000;
    padding: .1px;
    border-radius: 4px;
    cursor: pointer;
    // transition: all 1s ease-in-out;
  }

  .dropdown-content {
    // 定位显示局域
    position: absolute;
    visibility: hidden; // 隐藏
    opacity: 0; // 隐藏
    transition: all 0.6s ease-in-out;

    .dropdown-menu {
      margin: 4px;  // 与title制造距离
      padding: 10px 8px 15px; // 给下面多留一点距离，抵消视觉差
      color: white;
      background-color: rgba($color: #000, $alpha: 0.8);
      border-radius: 4px;
      .menuItem {
        width: 100%;  // 自适应宽度
        white-space: nowrap;
        padding: 5px 8px;
        font-size: 10px;
        color: white;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
          background-color: #ccc;
        }
      }
    }
  }

  &:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
  }
}
.my{
  width: 100%;
  height: .5rem;
  padding: 10px;
}
.icon{
  height: .4rem;
  margin-right: .2rem;
}
</style>
