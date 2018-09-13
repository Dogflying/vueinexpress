<template>
  <div>
    <nav v-if='seen' class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li role="presentation" class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              工具
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" style="min-width:120px;">
              <li>
                <router-link to='/tools/translatetool'>翻译</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">课程信息</a>
          </li>
          <li>
            <router-link to='/course'>课程</router-link>
          </li>
        </ul>
        <form action="" class="navbar-form navbar-left">
          <input type="text" class="form-control" style="background-color:#333;outline:none;border:none;">
          <button class="btn btn-primary" style="background-color:#222222;outline:none;border:none;">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </form>
        <div class="navbar-right">
          <ul class="nav navbar-nav navbar-left">
            <li>
              <router-link to='/login/lg'>登录</router-link>
            </li>
            <li>
              <router-link to='/login/rg'>注册</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <!-- <div class="container" style="padding-top:50px;text-align:center;">
      <h1>在线翻译</h1>
      <h5 class="text-muted">简洁/快速</h5>
      <translateinput v-on:transingtext='translateText'></translateinput>
      <translateoutput v-bind:translatedtext='translated'></translateoutput>
      
    </div> -->
    <div style="margin-top:51px;">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
import translateinput from "./components/translateInput";
import translateoutput from "./components/translateOutput";

export default {
  name: "App",
  data() {
    return {
      translated: "",
      seen: true
    };
  },
  components: {
    translateinput,
    translateoutput
  },
  methods: {},
  created: function() {
  }
};
</script>
<style scoped>
</style>

