import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'
import index from '@/pages/index.vue'
import product from '@/pages/product.vue'
import detail from '@/pages/detail.vue'
import cart from '@/pages/cart.vue'
import order from '@/pages/order.vue'
import orderconfirm from '@/pages/orderconfirm.vue'
import orderlist from '@/pages/orderlist.vue'
import orderpay from '@/pages/orderpay.vue'
import alipay from '@/pages/alipay.vue'
Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: index
        },
        {
          path: 'product/:id',
          component: product
        },
        {
          path: 'detail/:id',
          component: detail
        }
      ]
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/order',
      component: order,
      children: [
        {
          path: 'orderlist',
          component: orderlist
        },
        {
          path: 'orderconfirm',
          component: orderconfirm
        },
        {
          path: 'orderpay',
          component: orderpay
        },
        {
          path: 'alipay',
          component: alipay
        }
      ]
    }
  ]
})

router.beforeEach((to, form, next) => {
  next()
})

export default router
