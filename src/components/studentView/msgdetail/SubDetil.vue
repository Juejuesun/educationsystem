<template>
    <div>
        <div>
          <span class="backbtn" @click="$router.back()"><i class="fa fa-long-arrow-left"></i></span>
          <span>作业号：{{ $route.query.rowInfo.id}}</span>
        </div>
        <el-divider></el-divider>
        <div>
            <p>
                提交状况 
                 <span>
                    <el-tag type="success" v-if="subInfo.subState">已提交</el-tag>
                    <el-tag type="danger" v-else>未提交</el-tag>
                 </span>
            </p>
            <p>
                作业成绩
                 <span>
                    <el-tag v-if="subInfo.checkState">{{subInfo.point}} 分</el-tag>
                    <el-tag type="warning" v-else>未批改</el-tag>
                 </span>
            </p>
            <div class="descbox">
                <div>作业评语</div> 
                <el-card shadow="hover" style="width: 500px; margin-left: 5px;">{{subInfo.desc}}</el-card>
            </div>
            <div class="subbtn">
                <el-button :disabled="subInfo.subState" type="primary" @click="subNow" plain>提交作业</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            subInfo: {
                stuNum: '1234568',
                name: '张四',
                subState: false,
                subDate: '2020-06-01',
                checkState: true,
                point: '98',
                desc: '表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！表现得很好！'
            }
        }
    },
    methods: {
        subNow() {
            this.$router.push({
                name: 'PushPaper',
                query:{ rowInfo: this.$route.query.rowInfo }
            })
        }
    }
}
</script>

<style scoped>
.backbtn {
    font-size: 1.2em;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
    width: 50px;
    color: #409EFF;
}
.descbox {
    display: flex;
    flex: 1 ;
    margin: 5px 0 5px 0;
}
.subbtn {
    margin: 40px 0 10px 0;
}
</style>