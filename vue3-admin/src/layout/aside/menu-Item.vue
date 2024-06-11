<template>
    <template v-if="!menu?.meta?.hidden">
        <el-sub-menu v-if="menu.children?.length > 0 && !hasOneShowingChild(menu.children)" :key="menu.path"
            :index="menu.path">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <!-- <svg-icon :icon="menu.meta.icon"></svg-icon> -->
                <span>{{ menu.meta.title }}</span>
            </template>
            <menu-item v-for="sub in menu.children" :key="sub.path" :menu="sub" :base-path="resolvePath(sub.path)">
            </menu-item>
        </el-sub-menu>

        <el-menu-item v-else :key="menu.path + 1" :index="resolvePath(onlyOneChild.path)">
            <el-icon>
                <location />
            </el-icon>
            <!-- <svg-icon :icon="onlyOneChild.meta.icon || menu.meta.icon"></svg-icon> -->
            <template #title>{{ onlyOneChild.meta.title || menu.meta.title }}</template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
import path from 'path-browserify'
import { ref } from 'vue'

const props = defineProps({
    menu: {
        type: Object,
        required: true
    },
    basePath: {
        type: String,
        defaut: ''
    }
})

let onlyOneChild = ref({
    path: '',
    meta: {
        title: '',
        icon: '',
    }
})

/**
 * 只有一个子路由，则直接显示子路由
 */
function hasOneShowingChild(children = []) {

    const showingChildren = children.filter((item: any) => {
        if (item.meta.hidden) {
            return false
        } else {
            onlyOneChild.value = item
            return true
        }
    })

    if (showingChildren.length === 1) {
        return true
    }

    return false
}

/**
 * 路由拼接
 */
function resolvePath(routePath: any) {
    return path.resolve(props.basePath, routePath)
}

</script>