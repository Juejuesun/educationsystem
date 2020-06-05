<template>
    <el-container>
        <el-header height="150px" class="headerbox">
            <div class="backbtn" @click="leftback">
                <i class="fa fa-long-arrow-left" style="margin-right: 10px;"></i>
                <span>班级</span>
            </div>
            <div class="classname">{{userInfo.userName}}</div>
        </el-header>
        <el-main class="mainbox">
            <div class="overline">
                <h3>
                    个人资料
                </h3>
            </div>
            <el-divider></el-divider>
            <div class="infoBox">
                <div>
                    <el-avatar style="border: solid 1px #C0C4CC;" shape="square" :size="100" fit="fill" :src="userInfo.userAvatar">{{userInfo.userName}}</el-avatar>
                </div>
                <div>
                    <h4>姓名：<span>{{userInfo.userName}}</span></h4>                    
                </div>
                <div>
                    <h4>账号：<span>{{userInfo.userId}}</span></h4>                    
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState(['userInfo'])
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
.infoBox {
    width: 95%;
    margin-left: 5%;
}
</style>