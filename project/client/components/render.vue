<template>
    <div>
        <tb-heading :level="1">
            <a href="#">Hello world!</a>
        </tb-heading>
        <itemss :items="items"></itemss>
        <navigation-link :url='url'>Test</navigation-link>
    </div>
</template>
<script>
var heanding = {
  name: "heanding",
  render: function(createElement) {
    return createElement(
      "h" + this.level, // tag name 标签名称
      this.$slots.default // 组件的子元素
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};

var itemss = {
  name: "itemss",
  props: ["items"],
  render: function(createElement) {
    if (this.items.length) {
      return createElement(
        "ul",
        this.items.map(function(item) {
          return createElement("li", item.name);
        })
      );
    } else {
      return createElement("p", "No items found");
    }
  }
};

var navigationLink = {
    name:'navigationlink',
    template:`<a  v-bind:href="url"><slot></slot></a>`,
    props:['url']
}
export default {
  name: "render",
  components: { "tb-heading": heanding,"itemss":itemss,"navigation-link":navigationLink },
  data(){
      return{
          items:[
            //   {
            //       name:'liuxuan'
            //   },{
            //       name:'liuhang'
            //   }
          ],url:'/Course'
      }
  }
};
</script>