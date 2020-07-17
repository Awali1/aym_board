import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/views/product' //成品入库看板
import Packing from '@/views/packing' //包材拉动
import MotherTray from '@/views/mother_tray' //母托盘搬运
import floor from '@/views/floor' //地面连
import detail from '@/views/detail' //详情


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
    },
    {
      path: '/floor',
      name: 'floor',
      component: floor,
      meta:{
        name:'地面链'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta:{
        name:'详情'
      }
    }
  ]
})
