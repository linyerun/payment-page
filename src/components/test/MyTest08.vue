<template>
    <!-- 生命周期 -->

    <!-- less的安装 -->
    <!-- npm install less less-loader -D -->

    <div class="cls1">
        <div class="cls2">哈哈</div>
    </div>

    <!-- 什么是scoped -->
    <!-- vue通过在DOM结构以及css样式上加了唯一标记,达到样式私有化,不污染全局的作用 -->
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue"

onBeforeMount(() => {
    console.log("这个时候还没有根节点1")
})

onBeforeMount(() => {
    console.log("这个时候还没有根节点2")
})

onMounted(() => {
    console.log("这个时候已经有根节点1")
})

onMounted(() => {
    console.log("这个时候已经有根节点2")
})

</script>

<style lang="less" scoped>
.cls1 {
    .cls2 {
        color: aqua;
    }
}
</style>
