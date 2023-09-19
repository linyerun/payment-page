<template>
    <!-- computed -->
    <!-- 当依赖的属性的值发生变化的时候，才会触发他的更改，
         如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。 -->
    <div>
        <input v-model="firstName" type="text">
        <input v-model="lastName" type="text">
        <div>{{name}}</div>
        <button @click="mul = 100">点击</button>
        {{price}}
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

let firstName = ref('')
let lastName = ref('')

// 函数形式
const name = computed<string>(()=>{
    return firstName.value + '----' + lastName.value
})

// 对象形式(触发条件是mul被改变了)
let price = ref<number | string>(1)
let mul = computed({
    get: () => {
        return price.value
    },
    set: (value) => {
        console.log(value)
        price.value = 'set' + value
    }
})

</script>

<style scoped>

</style>
