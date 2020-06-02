import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/views/product' //成品入库看板
import ProductDetails from '@/views/product_details'//成品入库看板详情
import Packing from '@/views/packing' //包材拉动
import MotherTray from '@/views/mother_tray' //母托盘搬运


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product,
      meta:{
        name:'成品入库看板'
      }
    },
    {
      path: '/ProductDetails',
      name: 'ProductDetails',
      component: ProductDetails,
      meta:{
        name:'成品入库看板详情'
      }
    },
    {
      path: '/Packing',
      name: 'Packing',
      component: Packing,
      meta:{
        name:'包材拉动'
      }
    },
    {
      path: '/MotherTray',
      name: 'MotherTray',
      component: MotherTray,
      meta:{
        name:'母托盘搬运'
      }
    }
  ]
})
