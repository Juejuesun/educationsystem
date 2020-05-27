<template>
    <el-container class="home_con">
        <!-- 侧边部分 -->
        <el-aside width="25%" style="background: #fff; box-shadow: 2px 0px 8px #C0C4CC;">
            <appcontainer class="boxinner" >
                <appheader class="headerbox">
                    <div class="classdrown">
                        <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                            六年级1班<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>六年级1班</el-dropdown-item>
                            <el-dropdown-item>三年级2班</el-dropdown-item>
                            <el-dropdown-item>四年级3班</el-dropdown-item>
                            <el-divider></el-divider>
                            <div>创建班级</div>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="outbtn">
                        <i class="fa fa-user-plus iconout"></i>
                        <span>添加成员</span>
                    </div>
                    <div class="outbtn">
                        <i class="el-icon-s-tools iconout"></i>
                        <span>班级设置</span>
                    </div>
                </appheader>
                <appmain style="padding: 0;">
                    <!-- 导航栏 -->
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                        <el-menu-item index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>授课计划</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span slot="title">作业管理</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span slot="title">作业批改</span>
                            </template>
                        </el-menu-item>
                    </el-menu>
                </appmain>
                <appfooter class="footbox">
                    <div class="footerbtn">
                        <div class="innerbtn"><i class="el-icon-s-flag iconbtn"></i>计划管理</div>
                        <div style="font-size: 28px; color: #909399;">|</div>
                        <div class="innerbtn"><i class="el-icon-s-management iconbtn"></i>班级管理</div>
                    </div>                    
                </appfooter>
            </appcontainer>
           
        </el-aside>
        <el-main class="cons">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.home_con {
    /* background: rgba(94,165,155, 1); */
    height: 100%;
}
.cons {
    height: 100%;
    padding: 0;
    margin: 0;
}
.boxinner {
    height: 100%;
    display: grid;
    grid-template-rows: 25% 60% 15%;
    /* align-content: space-around;     */
}
.footbox {
    height: 100%;
    box-shadow:0px -1px 2px #606266;
    margin-top: 10px;
    align-self: end;
}
.footerbtn {
    display: flex;
    justify-content: space-around;
    align-content: center;
    padding: 20px;
}
.innerbtn {
    padding: 10px;
    border-radius: 10px;
    background: rgba(78, 167, 255, 0.267);
}
.iconbtn {
    color: #409EFF;
    margin-right: 5px;
    font-size: 1.2em;
}

.headerbox {
    height: 100%;
}
.el-dropdown-link {
    font-size: 1.5em;
    color: black;
    cursor: pointer;
   
}
.classdrown {
    text-align: center;
    margin: 20px;
}
.iconout {
    margin-right: 5px;
    color: #F5AB3C;
}
.outbtn {
    margin: 25px;
    cursor: pointer;
}
</style>