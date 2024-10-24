import {createRouter, createWebHistory} from 'vue-router'
import Bodegas from '../views/Bodegas/Bodegas.vue'
import Productos from '../views/Productos/Productos.vue'
import Proveedores from '../views/Proveedores/Proveedores.vue'
import Movimientos from '../views/Movimientos/Movimientos.vue'
import Categoria from '../views/Categoria/Categoria.vue'
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
    path:'/Bodegas',
    name:'Bodegas',
    component: Bodegas,
},
{
    path:'/Productos',
    name:'Productos',
    component: Productos,
},
{
    path:'/Proveedores',
    name:'Proveedores',
    component: Proveedores,
},
{
    path:'/Movimientos',
    name:'Movimientos',
    component: Movimientos,
},
{
    path:'/Categoria',
    name:'Categoria',
    component: Categoria,
}

]

const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;