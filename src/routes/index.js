import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ProfileRouter from './config/profile-router'
import DicasRouter from './config/dicas-router'
import ReceitasRouter from './config/receitas-router'
import DepoimentosRouter from './config/depoimentos-router'
import SobreRouter from './config/sobre-router'

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        { path: '*', redirect: ProfileRouter },
        ProfileRouter,
        DicasRouter,
        ReceitasRouter,
        DepoimentosRouter,
        SobreRouter
    ]
})

export default router