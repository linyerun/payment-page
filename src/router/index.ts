import { createRouter,createWebHistory} from "vue-router"
import PaymentPage from '../components/PaymentPage.vue'
import MyTest from '../components/test/MyTest09.vue'
import Success from '../components/Success.vue'

const routes = [
    {
        path: '/payment/:id',
        name: 'PaymentPage',
        component: PaymentPage
    },
    {
        path: '/',
        name: 'MyTest',
        component: MyTest
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router