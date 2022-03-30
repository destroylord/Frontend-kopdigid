import {  createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home/App.vue'
import Koperasi from '../pages/koperasi/App.vue'
import Market from '../pages/market/App.vue'
import SimpanPinjam from '../pages/simpan-pinjam/App.vue'

const routes = [
    {
        path: "/",
        component: Home
    }, 
    {
        path: "/koperasi",
        component: Koperasi
    },
    {
        path: "/market",
        component: Market
    },
    {
        path: "/simpan-pinjam",
        component: SimpanPinjam
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router;