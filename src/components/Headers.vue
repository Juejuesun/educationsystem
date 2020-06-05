<template>
    <div class="avabox">
        <div>
            <el-dropdown trigger="click">
                <el-avatar :src="userInfo.userAvatar">{{userInfo.userName}}</el-avatar>
                <el-dropdown-menu slot="dropdown" style="width: 150px;">
                    <el-dropdown-item @click.native="percenter">个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        percenter() {
            this.$router.push('/percenter')
        },
        logout() {
            let sta = window.sessionStorage.getItem('FIRSTCRT', 'true')//在线交流中使用
            console.log(typeof sta)
            if(sta == 'false') {
                let transdata = {
                    name: this.userInfo.userName
                }
                this.$socket.emit("leave",transdata);
            }
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.avabox {
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
}
</style>