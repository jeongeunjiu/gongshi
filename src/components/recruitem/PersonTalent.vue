<template>
  <div class="style">
    <div class="style4">
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          class="style1"
          v-model="username"
          name="姓名"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true,  }]"
      />
      <van-field
          class="style2"
          v-model="phone"
          type="phone"
          name="phone"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ pattern, message: '请输入正确手机号' }]"
      />
      <van-field
          class="style2"
          v-model="email"
          type="email"
          name="邮箱"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="[{ validator, message: '请输入正确邮箱 ' }]"
      />
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="value" />
        </template>
      </van-field>
      <van-field label="验证码" v-model="formDatacode" placeholder="请输入验证码" >
      </van-field>
      <div class="indentfy" @click="changeCode">
        <s-identify :identifyCode="code" :contentHeight="40"/>
      </div>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit" class="style3">
        提交
      </van-button>
    </div>
  </van-form>
    </div>
    </div>
</template>

<script >
import { ref } from 'vue';
import SIdentify from "@/components/recruitem/Sldentify";

export default {
  components: {SIdentify},
  setup() {
     const code=ref("");
    const username = ref('');
    const phone = ref('');
    const email=ref("");

    const pattern = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
    const validator = (val) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val);
    const value = ref([
      { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
    ]);
   const formDatacode=ref("");
   const onSubmit = (values) => {
      console.log('submit', values);
    };
      return {
        username,
        email,
        phone,
        value,
        pattern,
        validator,
        formDatacode,
        code,
        onSubmit,
      };

  },
  methods: {
    // 获得验证码
    createCode () {
      var code = "";
      var codeLength = 4;//验证码的长度
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a',    'b', 'c', 'd', 'e', 'f', 'g',
          'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');// 随机数
      for (var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random() * 36);//取得随机数的				索引（0~35）
        code += random[index];//根据索引取得随机数加到code上
      }
      this.code = code
    },
    //点击切换验证码
    changeCode () {
      this.createCode();
    },
  },
  mounted () {
    this.changeCode() // 初始化验证码
  },
};
</script>

<style scoped>
/*.vantCell {*/
/*  position: relative;;*/
/*}*/
.indentfy {
  position: absolute;
  bottom: 0;
  right: 10px;
  height: 40px;
  vertical-align: top;
  display: inline-block;
  cursor: pointer;
}


.style{
  padding: .1rem;
}
.style4{
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 10px 10px 10px darkgray;
}
.style1{

}
.style2{

}
.style3{
  font-size: .2rem;
}
</style>
