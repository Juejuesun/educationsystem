<template>
    <el-container>
        <el-header height="150px" class="headerbox">
            <div class="backbtn" @click="leftback">
                <i class="fa fa-long-arrow-left" style="margin-right: 10px;"></i>
                <span>班级</span>
            </div>
            <div class="classname">六年1班</div>
        </el-header>
        <el-main class="mainbox">
            <div class="plusbtn">
                <!-- <i class="fa fa-user-plus iconclass"  @click="dialogTableVisible = true"></i> -->
                <el-button :disabled="userInfo.userRoot===1" type="primary" icon="fa fa-user-plus" circle @click="dialogTableVisible = true"></el-button>
            </div>
            <!-- 模态框 -->
            <el-dialog :visible.sync="dialogTableVisible" center :close-on-click-modal="false" :destroy-on-close="true">
                <template slot="title">
                    <div class="titlebox">添加成员</div>
                </template>
                <AddNew/>
            </el-dialog>
            <div class="overline">
                <h3>
                    班级成员
                </h3>
                <div class="overline">                
                    <div class="delBtn" @click="delmems" v-show="toShow">删除成员</div>
                    <el-input placeholder="请输入内容" v-model="search" clearable style="width: 200px; margin-right: 80px; margin-left: 20px;"></el-input>
                </div>
            </div>
            <el-divider></el-divider>
            <div style="margin-left: 50px;">
                <el-table
                ref="multipleTable"
                :data="memberList.filter(data => !search || data.studentName.toLowerCase().includes(search.toLowerCase())|| data.studentId.toLowerCase().includes(search.toLowerCase()))"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChanges">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <!-- <el-table-column label="姓名" width="120">
                        <template slot-scope="scope">{{ scope.row.studentName }}</template>
                    </el-table-column> -->
                    <el-table-column prop="studentName" label="姓名"  show-overflow-tooltip> </el-table-column>
                    <el-table-column prop="studentId" label="学号"  show-overflow-tooltip> </el-table-column>
                    <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column> -->
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import AddNew from '../components/teacherView/AddNew'
import { mapState} from 'vuex'

export default {
    components: {
        AddNew
    },
    data () {
        return {
            dialogTableVisible: false,
            tableData: [
                {
                    name: '王小虎',
                    stuNum: '031802222'
                },
                {
                    name: '张伟',
                    stuNum: '031802222'
                },
                {
                    name: '王小虎',
                    stuNum: '031802222'
                },
                {
                    name: '马大哈',
                    stuNum: '031802222'
                },
                {
                    name: '王小虎',
                    stuNum: '031802222'
                },
                {
                    name: '王小虎',
                    stuNum: '031802222'
                },
            ],
            multipleSelection: [],
            search: '',
            toShow: false
        }
    },
    computed: {
        ...mapState([ 'userInfo', 'memberList', 'teaClassInfo' ])
    },
    methods: {
        leftback() {
            this.$router.go(-1)
        },
        ssss(val) {
            console.log('val',val)
            if(val==0) {
                this.toShow = false
            }
            console.log(this.toShow)
        },
        handleSelectionChanges(val) {
            this.multipleSelection = val;
            // if(val) {
            //     this.toShow = true
            // }else {
            //     this.toShow = false
            // }
        },
        async delmems() {
            console.log(this.multipleSelection)
            let asc = {
                subjectIdOfStudnet: this.teaClassInfo.defaultInfo.subjectId,
                students: []
            }
            for(let v of this.multipleSelection){
                let s = {
                    studentId: v.studentId
                }
                asc.students.push(s)
            }
            console.log('asc',asc)
            if(this.userInfo.userRoot === 2) {
                const {data: res} = await this.$http.post('/teacher/deleteStudent', asc)
                if(res.status == 'success'){
                    this.$message({
                        message: '删除成功！',
                        type: 'warning'
                    })
                    // if(this.$route.name == 'ClassSetting') {
                        this.$store.dispatch('getClassmates')
                    // }
                }else {
                    this.$message({
                        message: '请求失败！',
                        type: 'error'
                    })
                }
            }else {

                this.$message({
                    message: '您无权限！',
                    type: 'error'
                })
                return
            }
        }
    },
    watch: {
        'multipleSelection.length': function(newVal) {
            if(newVal>0) {
                this.toShow = true
            }else {
                this.toShow = false
            }
        },
    },
    // computed: {
    //     'toShow': function() {
    //         if(this.multipleSelection.length>0) {
    //             return true
    //         }
    //     }
    // }
}
</script>

<style scoped>
.headerbox {
    min-height: 150px;
    background-color: #E4E7ED;
}
.backbtn {
    font-size: 1.5em;
    margin: 20px 0 0 20px;
    cursor: pointer;
}
.classname {
    font-size: 2em;
    text-align: center;
    padding: 30px;
}
.mainbox {
    padding-left: 60px;
    padding-right: 60px;
}
.plusbtn {
    text-align: end;
    margin: 10px;
}
.overline {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.delBtn {
    color: #F56C6C;
    cursor: pointer;
}
</style>