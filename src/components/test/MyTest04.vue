<template>
    <!-- toRef -->
    <!-- 将响应式对象的一个属性值变成ref修饰的 -->
    <button @click="toRefTest">toRef</button>

    <!-- toRefs -->
    <!-- 将响应式对象的所有属性值变成ref修饰的 -->
    <button @click="toRefsTest">toRefs</button>

    <!-- toRow -->
    <!-- 将响应式对象变成普通对象 -->
    <button @click="toRowTest">toRow</button>
</template>

<script setup lang="ts">
// 上面的一定要切记，是响应式对象的才行
import { reactive, toRef, toRefs, toRaw } from 'vue'

const p = reactive({name: '随风', like: 'money'})

const toRefTest = () => {
    console.log(toRef(p, "like"))
}
const toRefsTest = () => {
    console.log(toRefs(p))
}
const toRowTest = () => {
    console.log(toRaw(p))
    console.log(p)
}
</script>

<style scoped></style>
