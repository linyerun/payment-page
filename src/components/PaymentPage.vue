<template>
    <!-- 填写快递单号 -->
    <div class="cls1">
        <el-input class="inp1" v-model="address" placeholder="请输入你的收货地址" />
        <el-button @click="postAddr" type="primary" round>确定提交</el-button>
    </div>

    <!-- 合同图片 -->
    <div style="text-align:center">
        <h1 style="color: red;">合同图片</h1>
        <img class="i1" :src="contract.contractPic" alt="无法显示"/>
    </div>

    <!-- 采购货物列表 -->
    <div style="text-align: center; color: blue;">
        <h1>货物列表</h1>
        <el-table :data="goodsList" border style="width: 100%">
            <el-table-column prop="goodsName" label="名称" />
            <el-table-column prop="purchasingCount" label="购买数量" />
            <el-table-column prop="unitPrice" label="购买单价" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { getList, getContract, postAddress } from '../api/payment'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

interface IContract {
    totalAmount: number
    contractPic: string
    createdAt: number[]
    clientId: number
    userId: number
}

interface IGoods {
    goodId: number
    goodsName: string
    purchasingCount: number
    purchasingGoodsId: number
    unitPrice: number
}

const contract = ref<IContract>({
    totalAmount: 0,
    contractPic: '',
    createdAt: [],
    clientId: 0,
    userId: 0
})

const goodsList = ref<IGoods[]>([])

const contractId = Number.parseInt(useRoute().params.id as string)

const address = ref<string>("")

const router = useRouter()  // 必须得先定义再进行使用

const showData = async () => {
    await getContract(contractId).then(res => {
        if (res.data) {
            contract.value = res.data as IContract
            console.log(contract)
        }
    }).catch(err => {
        console.log(err)
    })
    await getList(contractId).then(res => {
        if (res.data) {
            goodsList.value = res.data as IGoods[]
            console.log(goodsList)
        }
    }).catch(err => {
        console.log(err)
    })
}

const postAddr = () => {
    if(address.value.length === 0) {
        // 快递地址不能为空
        ElMessage.error('快递地址不能为空')
    }
    
    postAddress(contractId, address.value).then(res => {
        console.log(res)
        if(res.code === 200) {
            // 操作成功
            router.push('/success')
        }else {
            ElMessage.error('操作失败')
        }
    }).catch(err => {
        console.log(err)
        ElMessage.error('操作失败')
    })
    
}

onBeforeMount(() => {
    showData()
})

</script>

<style scoped>
.c1 {
    text-align: center;
    font-size: 60px;
}
.i1 {
    width: 70%;
    height: auto;
}
.inp1 {
    width: 500px;
    float: left;
}

.cls1 {
    width: 600px;
    margin: 0 auto;
}

.cls1 el-button {
    margin-left: 12px;
}
</style>