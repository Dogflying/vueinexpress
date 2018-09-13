<template>
    <div class="jumbotron">
        <div class="container">
            <h1>Hello Student</h1>
            <p>This is our school</p>
            <p>
                <a class="btn btn-primary btn-lg">learn more</a>
            </p>
            <div class="row">
                <div class="col-md-4">
                    <p>Hello</p>
                </div>
                <div class="col-md-4">
                    <p>Hello</p>
                </div>
                <div class="col-md-4">
                    <p>Hello</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="/static/images/vue.png" alt="...">
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>...</p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">查看详情</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="/static/images/vue.png" alt="...">
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>...</p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">查看详情</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="/static/images/vue.png" alt="...">
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>...</p>
                            <p>
                                <a href="#" class="btn btn-primary" role="button">查看详情</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Index",
  created() {
    this.$http.get("user/seen").then(res => {
      alert(res.data);
    });
  }
};
</script>