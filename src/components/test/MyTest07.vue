<template>
    <!-- watchEffect -->
    <!-- 监听 -->
    <!-- 可以在触发器调用before -->
    <!-- 返回一个stop -->
    <input type="text" v-model="name">
    <button @click="stop">停止监听</button>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const name = ref<string>('')

const stopFunc = watchEffect((onInvaliDate) => {
    console.log(name)
    onInvaliDate(()=> {
        console.log('before')
    })
})
const stop = () => {
    stopFunc()  // 调用这个函数也会执行onInvaliDate
}
</script>

<style scoped></style>
