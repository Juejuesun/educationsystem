<template>
    <div class="avabox">
        <div>
            <el-dropdown trigger="click">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <el-dropdown-menu slot="dropdown" style="width: 150px;">
                    <el-dropdown-item @click.native="percenter">个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        percenter() {
            this.$router.push('/percenter')
        },
        logout() {
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