<template>
    <div>
        <div>
          <span class="backbtn" @click="$router.back()"><i class="fa fa-long-arrow-left"></i></span>
          <span>学号：{{ $route.query.rowInfo.stuNum }} 姓名：{{$route.query.rowInfo.name}}</span>
        </div>
        <el-divider></el-divider>
        <div>
            作业内容
        </div>
    </div>
</template>

<script>
export default {

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
</style>