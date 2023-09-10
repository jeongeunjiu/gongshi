<template>
<div class="productList">
  <div class="productTop">
    <div class="title">产品展示</div>
    <div class="more">查看更多</div>
  </div>
  <div class="productcont">
    <div class="product1">
      <img src="@/assets/images/5.webp" class="img">
      <span class="content">(｡･∀･)ﾉﾞ嗨</span>
    </div>
    <div class="product2">
      <img src="@/assets/images/5.webp" class="img">
      <span class="content">(｡･∀･)ﾉﾞ嗨</span>
    </div>
    <div class="product3">
      <img src="@/assets/images/5.webp" class="img">
      <span class="content">(｡･∀･)ﾉﾞ嗨</span>
    </div>
    <div class="product4">
      <img src="@/assets/images/5.webp" class="img"><br>
      <span class="content">(｡･∀･)ﾉﾞ嗨</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "ProductList"
}
</script>

<style >

.img{
  width: 80%;
  height: 0.4rem;
  border-radius: 0.4rem;
}
.product1{
  width: 45%;
  height: 1rem;
  position: absolute;
  top: 9rem;
}
.product2{
  width: 50%;
  height: 0.6rem;
  position: absolute;
  top: 9rem;
  left: 1.8rem;
}
.product3{
  width: 50%;
  height: 0.6rem;
 position: absolute;
  top: 10rem;
  left: 0;
}
.product4{
  width: 50%;
  height: 0.6rem;
  position: absolute;
  top: 10rem;
  left: 1.8rem;
}
.content{
  font-size: 0.15rem;
}
.productList{
  width: 100%;
  height: 4rem;
  /*padding: 0.1px;*/

}
.productTop{
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
}
.title{
  font-size: 0.3rem;
  font-weight: 900;
}
.more{
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.5rem;
  padding: 0 0.2rem;
  border-radius: 0.4rem;
  font-size: 0.15rem;
}

</style>
