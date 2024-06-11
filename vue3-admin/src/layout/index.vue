<template>
    <el-container class="layout-container">
        <el-aside class="aside">
            <el-scrollbar>
                <Menu />
            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-header class="header">
                <div class="toolbar">
                    <span>管理员</span>
                </div>
            </el-header>

            <el-main class="container">
                <el-scrollbar>
                    <RouterView />
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import Menu from './aside/menu.vue'
import { RouterView } from 'vue-router'

</script>

<style scoped>
.aside {
    width: 220px;
    height: 100vh;
    background-color: blue;
}

.header {
    height: 60px;
    line-height: 60px;
    text-align: right;
    background-color: aqua;
}

.container {
    background-color: skyblue;
}
</style>