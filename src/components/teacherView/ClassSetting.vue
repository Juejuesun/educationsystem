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
                <i class="fa fa-user-plus iconclass"  @click="dialogTableVisible = true"></i>
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
                <el-input placeholder="请输入内容" v-model="search" clearable style="width: 200px; margin-right: 80px;"></el-input>
            </div>
            <el-divider></el-divider>
            <div style="margin-left: 50px;">
                <el-table
                ref="multipleTable"
                :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())|| data.stuNum.toLowerCase().includes(search.toLowerCase()))"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="姓名" width="120">
                        <template slot-scope="scope">{{ scope.row.name }}</template>
                    </el-table-column>
                    <el-table-column prop="stuNum" label="学号"  show-overflow-tooltip> </el-table-column>
                    <!-- <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column> -->
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import AddNew from './AddNew'

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
            search: ''
        }
    },
    methods: {
        leftback() {
            this.$router.go(-1)
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
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
    font-size: 1.5em;
    color: #fff;
    
}
.iconclass {
    width: 30px;
    height: 30px;
    padding: 8px;
    background-color: #409EFF;
    border-radius: 50%;
    cursor: pointer;
}
.overline {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>