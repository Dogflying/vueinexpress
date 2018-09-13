<template>
    <div>
        <h1>{{numcount}}</h1>
        <button class="btn btn-primary" @click="NUMBER_COUNT">Add</button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {};
  },
  computed: mapGetters(["numcount"]),
//   computed: {  不可行
//     ...mapState({
//       numcount: state => state.count
//     })
//   },
  methods: mapActions(["NUMBER_COUNT"])
};
</script>
