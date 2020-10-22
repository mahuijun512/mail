import Vue from 'vue'
import VueRouter from 'vue-router'

const originpush = VueRouter.prototype.push
VueRouter.prototype.push=function push(location){
  return originpush.call(this,location).catch(err=>err)
}
const Home = ()=> import('@/views/Home/Home.vue')
const category = ()=> import('@/views/category/category.vue')
const cart = ()=> import('@/views/cart/cart.vue')
const profile = ()=> import('@/views/profile/profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/Home"
    // component: Home
  },
  {
    path:'/Home',
    name: 'Home',
    meta:{
      titie:'首页'
    },
    component:Home
  },
  {
    path:'/category',
    name: 'category',
    meta:{
      titie:'分类'
    },
    component:category
  },
  {
    path:'/cart',
    name: 'cart',
    meta:{
      titie:'购物车'
    },
    component:cart
  },
  {
    path:'/profile',
    name: 'profile',
    meta:{
      titie:'我的'
    },
    component:profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  // console.log()
  document.title=to.matched[0].meta.titie

  next()
})
export default router
