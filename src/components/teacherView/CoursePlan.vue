<template>
    <div id="app">
        <h3>授课计划</h3>
        <el-divider></el-divider>
        <el-button @click="addVisible = true">添加</el-button>
        <vue-event-calendar
        :events="demoEvents"
        title="授课计划"
        @day-changed="handleDayChanged">
        <template scope="props">
            <el-button  @click="addVisible = true">添加</el-button>
            <div v-for="(event, index) in props.showEvents" :key="index" class="event-item" @mouseenter="event.isShow = true" @mouseleave="event.isShow = false">
                <div class="titleBox">
                    <div>{{index+1}}.{{event.title}}</div>
                    <div>{{event.date}}<i @click="delPlan(event, index)" v-show="event.isShow" class="el-icon-delete icoBtn"></i></div>
                </div>
                <hr style="FILTER:alpha(opacity=100,finishopacity=0,style=3)" width="95%" color=#E4E7ED SIZE=1/>
                <div>
                    {{event.desc}}
                </div>
            </div>
        </template>
        </vue-event-calendar>
        <div>
            <el-dialog :visible.sync="addVisible" center :close-on-click-modal="false" :destroy-on-close="true">
                <template slot="title">
                    <div class="titlebox">添加计划</div>
                </template>
                <div>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy/MM/dd" style="width: 50%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="标题">
                            <el-input v-model="form.title"></el-input>
                        </el-form-item>
                        <el-form-item label="内容">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>                        
                        <el-form-item>
                            <el-button type="primary" @click="addPlan">添加</el-button>
                            <el-button @click="addVisible = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
let today = new Date()
export default {
  name: 'app',
  data () {
    return {
        addVisible: false,
        form: {
            date: '',
            title: '',
            desc: ''
        },
      demoEvents: [{
        date: '2020/6/15',
        title: 'Title-1',
        desc: 'longlonglong description',
        isShow: false
      },
      {
        date: '2020/6/24',
        title: 'Title-2',
        isShow: false
      },{
        date: '2020/7/06',
        title: 'Title-3',
        desc: 'description',
        isShow: false
      }]
    }
  },
  methods: {
    handleDayChanged (data) {
      console.log('date-changed', data)
      this.form.date = data.date
    //   this.addVisible = true
    //   this.$EventCalendar.toDate('2020/7/10')
    },
    // handleMonthChanged (data) {
    //   console.log('month-changed', data)
    // },
    addPlan() {
        // console.log(this.form.date)
        let asc = {
            date: this.form.date,
            title: this.form.title,
            desc: this.form.desc,
            isShow: false
        }
        this.demoEvents.splice(0,0,asc)
        this.addVisible = false
        this.form.date = ''
        this.form.title = ''
        this.form.desc = ''
    },
    delPlan(row, index) {
        this.demoEvents.splice(index, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
.titleBox {
    display: flex;
    justify-content: space-between;
}
.event-item {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}
.icoBtn {
    margin-left: 5px;
    color: #F56C6C;
    cursor: pointer;
}
/* h1, h2, h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
} */
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
/* a {
  color: #42b983;
} */
/* .t-center{
  text-align: center;
  margin: 20px;
} */
/* .mt150{
  margin-top: 150px;
} */
</style>