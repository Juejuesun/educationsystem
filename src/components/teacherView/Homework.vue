<template>
    <div>
        <div>
            <el-input v-model="search" style="width: 200px; margin-right: 80px;" size="mini" placeholder="输入关键字搜索"  clearable/>
        </div>        
        <el-table
        :data="homeworkList.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())|| data.desc.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%;"
        
        @cell-mouse-enter="mouseEnter"
        @cell-mouse-leave="mouseLeave"
        @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="35">
            </el-table-column>
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="作业名称：">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="截止日期：">
                    <span>{{ props.row.ddl }}</span>
                </el-form-item>             
                <el-form-item label="作业内容：">
                    <span>{{ props.row.desc }}</span>
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

            <el-table-column>
            <template slot="header" slot-scope="scope">
                <div clss="tbheaderbox">
                    <!-- <el-input v-model.trim="search" size="mini" placeholder="输入关键字搜索"  clearable/> -->
                    <span class="headerbtn" @click="addwork(scope.row)">发布作业</span>
                    <span class="headerbtn animated fadeIn" style="color: red;" v-show="toShow" @click="delThose">删除选中</span>
                </div>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="checkWork(scope.$index, scope.row)" v-show="scope.row.isShow" style="height: 20px;padding: 5px;" class="animated fadeIn">提交详情</el-button>
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)" v-show="scope.row.isShow" style="height: 20px;padding: 5px;" class="animated fadeIn">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index)" v-show="scope.row.isShow" style="height: 20px; padding: 5px;" class="animated fadeIn">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div>
            <el-dialog :visible.sync="dialogTableVisible" center :close-on-click-modal="false" :destroy-on-close="true">
                <template slot="title">
                    <div class="titlebox">发布作业</div>
                </template>
                <div>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="作业名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="作业内容">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="作业号" style="width: 50%;">
                            <el-input v-model="form.id"></el-input>
                        </el-form-item>
                        <el-form-item label="截止时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.ddl" style="width: 50%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button @click="dialogTableVisible = false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            search: '',
            multipleSelection: [],
            toShow: false,
            dialogTableVisible: false,
            form: {
                id: '12987127',
                name: '第九章作业',
                ddl: '2020-06-02',
                desc: '哈哈哈哈哈哈哈哈哈哈',
                isShow: false
            },
            tableData: [
                {
                    id: '12987122',
                    name: '第八章作业',
                    desc: '荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻',
                    ddl: '2020-05-31',
                    isShow: false
                },
                {
                    id: '12987123',
                    name: '第七章作业',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    ddl: '2020-05-30',
                    isShow: false
                },
                {
                    id: '12987125',
                    name: '第六章作业',                    
                    desc: '荷兰优质淡奶，奶香浓而不腻',                    
                    ddl: '2020-05-28',
                    isShow: false
                },
                {
                    id: '12987126',
                    name: '第五章作业',                   
                    desc: '荷兰优质淡奶，奶香浓而不腻',                   
                    ddl: '2020-04-31',
                    isShow: false
                }
            ],
            
        }
    },
    computed: {
        ...mapState([ 'homeworkList' ])
    },
    methods: {
        // openDetails (row, column, cell, event) {
        //     console.log(row)
        //     row.id = '哈哈'
        //     this.isShow = true
        // },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index) {
            console.log(index);
            this.homeworkList.splice(index, 1);
        },
        mouseEnter(row) {
            row.isShow = true
        },
        mouseLeave(row) {
            row.isShow = false
        },
        addwork(data) {
            console.log(data)
            this.dialogTableVisible = true
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        delThose() {
            // this.tableData.splice(this.multipleSelection, this.multipleSelection.length)
            //数组的批量删除，逆向循环
            for (let i = this.homeworkList.length - 1; i >= 0; i--) {
                for (let j = this.multipleSelection.length - 1; j >= 0; j--) {
                    if (this.homeworkList[i] === this.multipleSelection[j]) {
                    this.homeworkList.splice(i, 1)
                    }
                }
            }
        },
        deepClone(obj) {
            let clone = {};
            for (let key in obj) {
                clone[key] = obj[key];
            }
            return clone;
        },
        onSubmit() {
            console.log('submit!');
            let item = this.deepClone(this.form)
            this.homeworkList.splice(0,0,item)
            this.dialogTableVisible = false
        },
        checkWork(index, row) {
            console.log(index, row)
            this.$router.push({
                name: 'DetailPage',
                query:{row: row}
            })
        }
    },
    watch: {
        'multipleSelection': function(newVal) {
            if(newVal.length) {
                this.toShow = true
            }else {
                this.toShow = false
            }
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
.headerbtn {
    color: #409EFF;
    font-weight: 500;
    cursor: pointer;
    margin-right: 25px;
}
</style>