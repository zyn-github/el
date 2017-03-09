import Vue from 'vue'
import Router from 'vue-router'
import Vheader from '@/components/header/header'
import VFooter from '@/components/footer/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/header', component: Vheader},
    {path: '/footer', component: VFooter}
  ]
})
