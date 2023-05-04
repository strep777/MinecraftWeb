import { createApp,h,nextTick,onMounted,toRefs,watch,watchEffect } from 'vue'
import {useStore,createStore,mapActions,mapState,mapGetters,mapMutations} from 'vuex'
import axios from "axios";
import mitt from 'mitt'

import App from './App.vue'
import ExamHeader from './components/common/exam_header.vue'
import ExamSider from './components/common/exam_sider.vue'
import ExamDraw from './components/common/exam_draw.vue'
import ExamCard from './components/common/exam_card.vue'

import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import {router} from './router/web.ts'

import {createPinia} from 'pinia'

import * as ElementUI from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp({
    render(){return h(App)},
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const emitter: any = mitt();

// window.addEventListener('beforeunload', () => {
//     let user = store.getters.getUser;
//     if (user) {
//         localStorage.setItem('user', JSON.stringify(user));
//     }
// });

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.provide('bus',emitter)
app.provide('server',import.meta.env.VITE_API_URL)//import.meta.env.VITE_APP_API_URL
//通用插件
app.use(ElementUI);
app.use(router);
app.use(pinia);
// 库组件
//自定义组件
app.component('ExamHeader',ExamHeader);
app.component('ExamSider',ExamSider);
app.component('ExamDraw',ExamDraw);
app.component('ExamCard',ExamCard);

app.mount('#app');