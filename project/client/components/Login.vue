<template>
  <div class="container container-mt2">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 login-col">
        <form action="" class="form-horizontal" @submit.prevent='submit'>
          <div class="form-group group-padding">
            <input type="text" id="username" class="form-control" placeholder="用户名" v-model='username'>
          </div>
          <div class="form-group group-padding" style="margin-bottom:5px;">

            <input type="password" class="form-control" placeholder="请输入密码" v-model='password'>
          </div>
          <div class="form-group group-padding">
            <button id="operabtn" type="submit" class="btn btn-primary width-complete" @click.stop.prevent="submit">{{operatyped}}</button>
          </div>
        </form>
        <div style="height:60px;font-size:20px;text-algin:center;padding-top:20px;">
          没有账号?
          <span style="color:blue;" v-on:click='regist'>{{operatype}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      operatype: "注册",
      operatyped: ""
    };
  },
  methods: {
    submit: function() {
       this.$http.get("login",{params:{
         UserName:this.username,
         PassWord:this.password
       }}).then(res => {
        alert(res.data);
      });
    },
    regist: function() {
      //注册
      if (this.operatype === "注册") {
        this.operatype = "登录";
        this.operatyped = "注册";
      } else {
        this.operatype = "注册";
        this.operatyped = "登录";
      }
    }
  },
  computed: {},
  created: function() {
    // this.operatype = this.$route.params.type == "lg" ? "登录" : "注册";
    if (this.$route.params.type == "lg") {
      this.operatype = "注册";
      this.operatyped = "登录";
    } else {
      this.operatype = "登录";
      this.operatyped = "注册";
    }
  }
};
</script>
<style>
.width-complete {
  width: 100%;
}
.container-mt2 {
  margin-top: 200px;
}
.group-padding {
  padding: 10px;
}
.login-col{
  background-color:rgb(173, 167, 167);
  border-radius:2px;
  padding:80px 80px 30px;
  border:1px solid white;
}
</style>
