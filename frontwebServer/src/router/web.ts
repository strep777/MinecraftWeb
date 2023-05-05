import { createRouter, createWebHashHistory } from 'vue-router';
import { routers } from './routers.ts';
import { Store } from 'vuex';
import useStore from '@/store/store.ts';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routers,
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // const {auth,course_database} = useStore();
  
  // 使用 `as` 关键字将 `_store` 变量的类型注释为 Store<{ auth_option: { is_login: boolean } }>
  if (requiresAuth) {
    next(); // next('/login');跳转到登录页面
  } else {
    next(); // 正常跳转
  }
});

