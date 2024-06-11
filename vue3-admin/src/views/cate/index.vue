<template>
    <el-card style="margin-bottom: 20px">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="Approved by">
                <el-input v-model="formInline.user" placeholder="Approved by" clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </el-card>

    <el-card>
        <template #header>
            <el-button type="primary" @click="add">新增</el-button>
        </template>
        <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </el-card>

    <addAndEdit v-model="dialogVisible"></addAndEdit>

</template>
<script lang="ts" setup>
import addAndEdit from './add-and-edit.vue';
import { reactive, ref } from 'vue'

const dialogVisible = ref(false)
const add = () => {
    dialogVisible.value = true;
}

const formInline = reactive({
    user: '',
    region: '',
    date: '',
})

const onSubmit = () => {
    console.log('submit!')
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>


<style scoped></style>