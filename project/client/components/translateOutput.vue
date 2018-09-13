<template>
    <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 col-md-offset-3" >
            <p class="alert-info" style="font-size:20px;">{{translatedtext}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: "translateOutput",
  props: ["translatedtext"]
};
</script>
