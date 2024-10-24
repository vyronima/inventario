import {createRouter, createWebHistory} from 'vue-router'
import Paises from '../views/paises/paises.vue'
import Cargos from '../views/cargos/cargos.vue'
import LayoutMain from '../components/LayoutMain.vue'
import Login from '../components/Login.vue'

const routes =[

{
    path:'/',
    name:'home',
    component:LayoutMain,
},
{
    path:'/login',
    name:'login',
    component:Login,
},

{
    path:'/pais',
    name:'Paises',
    component: Paises,
},
{
    path:'/cargos',
    name:'Cargos',
    component: Cargos,
}

]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;