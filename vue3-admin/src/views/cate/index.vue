<template>
    <el-card v-loading="loading" style="margin-bottom: 20px">
        <el-form ref="searchFormRef" :inline="true" :model="searchData">
            <el-form-item label="名称" prop="title">
                <el-input v-model="searchData.title" placeholder="请输入名称" clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
                <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>

    <el-card v-loading="loading" style="margin-bottom: 20px">
        <template #header>
            <el-button type="primary" @click="add">新增</el-button>
        </template>
        <el-table :data="tableData">
            <el-table-column prop="id" label="ID" width="180" />
            <el-table-column prop="title" label="名称" width="180" />
            <el-table-column prop="sort" label="排序" />
        </el-table>
    </el-card>
    <el-card v-loading="loading">
        <el-pagination :current-page="currentPage" :page-size="pageSize" background
            layout="total,sizes,prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </el-card>

    <addAndEdit v-model="dialogVisible"></addAndEdit>

</template>
<script lang="ts" setup>
import { cateList } from '@/api/cate'
import addAndEdit from './add-and-edit.vue';
import { reactive, ref, watch } from 'vue'
import { type FormInstance } from "element-plus"
import { Search, Refresh } from "@element-plus/icons-vue"

const dialogVisible = ref(false)
const add = () => {
    dialogVisible.value = true;
}

const loading = ref<boolean>(false)

let currentPage = ref(1)
let pageSize = ref(10)

let tableData = ref([])
let total = ref(0)
const getCateList = async () => {
    try {
        loading.value = true
        const res = await cateList({
            page: currentPage.value,
            pageSize: pageSize.value,
            title: searchData.title || undefined,
        })
        tableData.value = res.data.list
        total.value = res.data.total
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}

const searchFormRef = ref<FormInstance>()
const searchData = reactive({
    title: ''
})
const handleSearch = () => {
    currentPage.value === 1 ? getCateList() : (currentPage.value = 1)
}
const resetSearch = () => {
    searchFormRef.value?.resetFields()
    handleSearch()
}
/** 监听分页参数的变化 */
watch([currentPage, pageSize], getCateList, { immediate: true })

const handleSizeChange = (val: number) => {
    pageSize.value = val
}

const handleCurrentChange = (val: number) => {
    currentPage.value = val
}

</script>


<style scoped></style>