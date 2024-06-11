<template>
    <el-menu :default-active="defaultActive" router>
        <menu-item v-for="menu in constantRouterMap" :key="menu.path" :base-path="menu.path" :menu="menu">
        </menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import MenuItem from './menu-Item.vue'
import { constantRouterMap } from '@/router/router-config'

import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute()
const defaultActive = computed(() => {
    const { path } = route
    return path
})
</script>