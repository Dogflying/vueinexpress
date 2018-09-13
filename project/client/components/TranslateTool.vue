<template>
    <div>
        <translateinput v-on:transingtext='TransText'></translateinput>
        <translateoutput v-bind:translatedtext='translated'></translateoutput>
    </div>
</template>

<script>
import translateinput from "./translateInput";
import translateoutput from "./translateOutput";
var crypto = require("crypto");
export default {
  name: "TranslateTool",
  data() {
    return {
      translated: ""
    };
  },
  components: {
    translateinput,
    translateoutput
  },
  methods: {
    TransText: function(text, lan) {
      let md5 = crypto.createHash("md5"); //加密
      let randint = parseInt(Math.random() * 1000);
      let signstr =
        "20180901000201623" + text + randint + "gRF7SLJZ6uPQR5nJm9l8";
      let sign = md5.update(signstr).digest("hex");
      let httpstr =
        "http://api.fanyi.baidu.com/api/trans/vip/translate?q=" +
        text +
        "&from=zh&to=" +
        lan +
        "&appid=20180901000201623&salt=" +
        randint +
        "&sign=" +
        sign;
      this.$http.jsonp(httpstr).then(
        response => {
          this.translated = JSON.parse(response.bodyText).trans_result[0].dst;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
