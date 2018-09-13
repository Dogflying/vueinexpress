<template>
    <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 col-md-offset-3" >
            <form class="well form-inline" action='' v-on:submit.prevent='submit'>
                <div class="form-group">
                    <label for="transtext"></label>
                    <input type='text' class="form-control" v-model='transtext'>

                </div>
                <div class="form-group">
                    <select name='language' class="bs-select form-control" v-model="language">
                        <option value='en'>英语</option>
                        <option value='fra'>法语</option>
                        <option value='spa'>西班牙语</option>
                        <option value='th'>泰语</option>
                        <option value='ru'>俄语</option>
                    </select>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-sm">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: "translateInput",
  data() {
    return {
      transtext: "",
      language: "en"
    };
  },
  methods: {
    submit: function() {
      if (this.transtext == "") {
        return false;
      }
      this.$emit("transingtext", this.transtext, this.language);
    }
  }
};
</script>
