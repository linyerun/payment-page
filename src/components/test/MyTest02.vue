<template>
    <!-- ref: 接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 .value property，指向该内部值。 -->
    <div>
        <button @click="changeMsg">change</button>
        <div>{{msg}}</div>
    </div>

    <!-- isRef: 返回是不是ref -->
    <!-- 为什么下面显示false, 可能是和渲染有关吧 -->
    <div>{{isRef(msg)}}</div>

    <!-- shallowRef: 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的 -->
    <!-- .value值变化了它才会变, 不要和ref混着使用 -->
    <div>
        <button @click="changeNum">changeNum</button>
        <div>{{num}}</div>
    </div>

    <!-- triggerRef 强制更新页面DOM -->
    <!-- 之所以ref和shallowRef不能混着使用就是ref底层会调用这个函数, 进而影响shallowRef -->

    <!-- customRef: 自定义ref 要求我们返回一个对象 并且实现 get 和 set  适合去做防抖之类的 -->
</template>

<script setup lang="ts">
import { isRef, Ref, ref, shallowRef, triggerRef } from 'vue'

interface INum {
    num: number
}

// 不加Ref, 类型推断也可以推断出来
let msg: Ref<string | number> = ref<string>('')
let num = shallowRef<INum>({num: 0})

const changeMsg = () => {
    msg.value += "111"
    console.log(isRef(msg))
    console.log(msg)
}
const changeNum = () => {
    num.value.num = 100
    console.log(num)
    triggerRef(num)    // 强制更新页面DOM
}
</script>