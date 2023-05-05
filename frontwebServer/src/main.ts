import { createApp,h,nextTick,onMounted,toRefs,watch,watchEffect } from 'vue'
import {useStore,createStore,mapActions,mapState,mapGetters,mapMutations} from 'vuex'
import axios from "axios";
import mitt from 'mitt'

import App from './App.vue'
import Card from './components/common/card.vue'
import Header from './components/common/header.vue'

//machine
import MachineStatus from './components/machine/machine_status.vue'

import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import {router} from './router/web.ts'

import {createPinia} from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp({
    render(){return h(App)},
})

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
const emitter: any = mitt();

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.provide('bus',emitter)
app.provide('server',import.meta.env.VITE_API_URL)
app.provide('rcon_server',import.meta.env.VITE_RCON_SERVER)
//通用插件
app.use(router);
app.use(pinia);
// 库组件
//自定义组件
app.component('Header',Header);
app.component('Card',Card);
app.component('MachineStatus',MachineStatus);

app.mount('#app');