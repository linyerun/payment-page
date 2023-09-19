<template>
    <!-- reactive -->
    <!-- 用来绑定复杂的数据类型 例如 对象 数组 -->
    <!-- 不能用于绑定普通的数据类型(绑定普通的数据类型 我们可以ref) -->
    <!-- ref调用复杂数据类型本质上调用了reactive -->
    <!-- (重要)使用reactive 去修改值无须.value -->
    <!-- (重要)使用reactive获取一个对象之后,别改变它的地址,这样改变值是无效的 -->
    <ul>
        <li v-for="item in list">{{item}}</li>
    </ul>
    <button @click="change">change</button>

    <!-- readonly -->
    <!-- 拷贝一份proxy对象将其设置为只读 -->

    <!-- shallowReactive -->
    <!-- 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图 -->
    <!-- 这个浅层是对象的对象属性变化了不渲染, 对象的属性变了渲染 -->
    <!-- 和shallowRef区别在于它是value值(值或地址)变了才变 -->
    <!-- 但是有一个对象属性变化了，应该就会像ref那样调用了triggerRef让整个数据进行渲染 -->
    <div>{{student}}</div>
    <button @click="changeStudent">changeStudent</button>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue'

interface IPerson {
    count: number
}
interface IObj {
    age: number
}
interface IStudent {
    name: string,
    obj: IObj
}

const list = reactive<string[]>([])
const person: IPerson = reactive<IPerson>({ count: 1 })
const copy = readonly(person)
const student = shallowReactive<IStudent>({name: '', obj: {age: 0}})

const change = () => {
    setTimeout(()=>{
        list.push(...['111', '222', '333', '444']) //这样是没问题的
        // list = ['111', '222', '333', '444'] // 这样就不行了,使用const修饰还可以报个错
    }, 2000)
}
const changeCopy = () => {
    // 无法分配到 "count" ，因为它是只读属性
    // copy.count = 100
    console.log(copy)
}
const changeStudent = () => {
    // student.name = '哈哈哈'
    student.obj.age = 21
    console.log(student)
}
</script>

<style scoped>
</style>
