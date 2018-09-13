<template>
  <div class='container course-container'>
    <div class='row' style='margin:20px 0;'>
      <div class='col-md-6'>
        <form class='form-inline'>
          <div class="form-group">
            <label for="coursename">课程名称:</label>
            <input type="text" class="form-control" id="coursename" placeholder="课程名称">
          </div>
          <button v-on:click.stop.prevent='searchcouse' class='btn btn-primary'>搜索</button>
        </form>
      </div>
    </div>
    <div class="course-table">
      <table class='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>
              课程编号
            </th>
            <th>
              课程名称
            </th>
            <th>
              代课老师
            </th>
            <th>
              课时
            </th>
            <th>
              操作
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coursedata" :key='item.id'>
            <td scope='row'>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.teachername}}</td>
            <td>{{item.period}}课时</td>
            <td>
              <button class='btn btn-primary btn-xs'>
                <span class="glyphicon glyphicon-info-sign"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script>
export default {
  name: "Course",
  data() {
    return {
      coursedata: []
    };
  },
  computed: {},
  methods: {
    GetCourseData: function() {},
    searchcouse: function() {
      alert("ol");
    }
  },
  created() {
    this.$http.get("course/seen").then(res => {
      this.coursedata = res.data;
    });
  }
};
</script>

<style>
.course-container {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
}
.course-table {
  padding: 5px;
  box-shadow: darkgrey 0px 0px 30px 5px inset;
}

.course-table table tr th {
  text-align: center;
}
</style>

