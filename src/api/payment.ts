import {request} from '../utils/request'

export function getList(id:number) {
    return request({
        url: `/purchasingGoods/get/${id}`,
        method: 'get'
    })
}

export function getContract(id:number) {
    return request({
        url: `/contract/get/${id}`,
        method: 'get'
    })
}

export function postAddress(contractId: number, address: string) {
    return request({
        url: `/purchasingList/postAddr`,
        method: 'post',
        data: {
            contractId,
            address
        }
    })
}