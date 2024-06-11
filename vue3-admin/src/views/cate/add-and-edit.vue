<template>
    <el-dialog v-model="visible" title="分类">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="auto" status-icon>
            <el-form-item label="名称" prop="title">
                <el-input v-model="ruleForm.title" placeholder="请输入名称" />
            </el-form-item>
            <el-form-item label="排序" prop="sort">
                <el-input-number v-model="ruleForm.sort" placeholder="请输入排序" :min="1" :max="1000"
                    style="width: 100%;" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="cancel">取消</el-button>
                <el-button type="primary" @click="submitForm">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { cateAdd } from '@/api/cate'
const visible = defineModel()
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'

interface RuleForm {
    title: string
    sort: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
    title: '',
    sort: ''
})


const rules = reactive<FormRules<RuleForm>>({
    title: [
        { required: true, message: '请输入名称', trigger: 'blur' },
    ],
    sort: [
        { required: true, message: '请输入排序', trigger: 'blur' },
    ],
})


//提交弹窗
const submitForm = async () => {
    await ruleFormRef.value?.validate(async (valid, fields) => {
        if (valid) {
            console.log('submit!')
            try {
                await cateAdd(ruleForm)
                ElMessage({
                    message: '添加成功',
                    type: 'success',
                    plain: true
                })
                cancel()
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('error submit!', fields)
        }
    })
}



//关闭弹窗
const cancel = () => {
    visible.value = false;
    ruleFormRef.value?.resetFields()
}
</script>