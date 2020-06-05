<template>
    <div>
        <el-divider></el-divider>
        <div>
            <el-input v-model="search" style="width: 200px; margin-right: 80px;" size="mini" placeholder="输入关键字搜索"  clearable/>
        </div>        
        <el-table
        :data="homeworkList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())|| data.desc.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;"
        @cell-mouse-enter="mouseEnter"
        @cell-mouse-leave="mouseLeave">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" class="demo-table-expand">
                        <el-form-item label="作业名称：">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="截止日期：">
                            <span>{{ props.row.ddl }}</span>
                        </el-form-item>             
                        <el-form-item label="作业内容：">
                            <span>{{ props.row.desc }}</span>
                        </el-form-item>
                        <el-form-item label="作业图片：">
                            <!-- <span><img v-for="(img, index) in props.row.imgs" :key="index" :src="img" /></span> -->
                            <span>
                                <!-- <div class="demo-image__preview"> -->
                                <el-image
                                    v-for="(img, index) in props.row.imgs"
                                    :key="index"
                                    style="width: 100px; height: 100px; margin-right: 10px;"
                                    :src="img" 
                                    :preview-src-list="props.row.imgs">
                                </el-image>
                                <!-- </div> -->
                            </span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
            label="作业号"
            prop="id">
            </el-table-column>
            <el-table-column
            label="作业名称"
            prop="name">
            </el-table-column>
            <el-table-column
            label="截止日期"
            prop="ddl">
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="checkWork(scope.$index, scope.row)" style="height: 20px;padding: 5px;" class="animated fadeIn">提交详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            search: '',
            toShow: false,
        }
    },
    computed: {
        ...mapState([ 'homeworkList' ])
    },
    methods: {
        mouseEnter(row) {
            row.isShow = true
        },
        mouseLeave(row) {
            row.isShow = false
        },
        checkWork(index, row) {
            console.log(index, row)
            this.$router.push({
                name: 'SubDetil',
                query:{ rowInfo: row }
            })
        }
    }
}
</script>

<style scoped>
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>