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
            <div class="plusbtn"  @click="dialogTableVisible = true">
                <i class="fa fa-user-plus iconclass"></i>
            </div>
            <!-- 模态框 -->
            <el-dialog :visible.sync="dialogTableVisible" center :close-on-click-modal="false" :destroy-on-close="true">
                <template slot="title">
                    <div class="titlebox">添加成员</div>
                </template>
                <AddNew/>
            </el-dialog>
            <h3>
                班级成员
            </h3>
            <el-divider></el-divider>
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
            dialogTableVisible: false
        }
    },
    methods: {
        leftback() {
            this.$router.go(-1)
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
    cursor: pointer;
}
.iconclass {
    width: 30px;
    height: 30px;
    padding: 8px;
    background-color: #409EFF;
    border-radius: 50%;
}
</style>