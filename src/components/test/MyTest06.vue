<template>
    <!-- watch -->
    <div>{{message}}</div>
    <button @click="message.nav.bar.name = '林叶润'">点击</button>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'

let message = ref({
    nav: {
        bar: {
            name: ''
        }
    }
})
// 使用reactive监听深层对象开启和不开启deep 效果一样
watch(message, (newVal, oldVal) => {
    console.log('新值:', newVal)
    console.log('旧值:', oldVal)
}, {
    immediate: true,    // immediate:true //是否立即调用一次
    deep: true  // 是否开启深度监听
})

</script>

<style scoped>

</style>
