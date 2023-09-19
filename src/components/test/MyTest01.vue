<template>
    <!--  -->
    <div>{{ message.split(',') }}</div>

    <!-- v-on -->
    <div @click="parent">
        <!-- 阻止冒泡上传, 所以parent不被触发点击事件 -->
        <div @click.stop="child">child</div>
    </div>

    <!-- v-bind -->
    <div :class="[flag ? 'active' : 'other', 'h']">12323</div>
    <div :class="cls"></div>
    <div :style="style">2222</div>

    <!-- v-model -->
    <input v-model="msg" type="text" />
    <div>{{ msg }}</div>
</template>

<script setup lang="ts">
// 导入
import {ref} from 'vue'

// 类型约束
type Cls = {
    other: boolean,
    h: boolean
}

type Style = {
    height: string,
    color: string
}

// 变量+常量
const message: string = "林, 叶, 润"
const flag: boolean = false
const cls: Cls = {  // true表示下面这个类选择器标签都有了
    other: true,
    h: true
}
const style: Style = {
    height: "300px",
    color: "blue"
}
const msg = ref<string>("哈哈")

// 函数
const parent = () => {
    console.log("parent")
}
const child = () => {
    console.log("child")
}
</script>