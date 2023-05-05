<template>
  <div class="main-app">
    <div class="mc-header">
      <Header></Header>
    </div>
    <div class="mc-main">
      <router-view /> 
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
import { onMounted,onUpdated, onBeforeMount,onBeforeUnmount,onUnmounted,onServerPrefetch, Ref} from 'vue';
import { ref,reactive,readonly} from 'vue';
import { computed,watch,watchEffect,inject,provide} from 'vue';
import {getCurrentInstance,defineComponent} from 'vue';
import useStore from '@st/store';
import {useRoute, RouteLocationNormalizedLoaded} from 'vue-router';
// 导入 dayjs 库
import dayjs from 'dayjs'
// 导入 dayjs 的时区插件
import utc from 'dayjs/plugin/utc'
// 导入 dayjs 的时区解析插件
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/zh-cn' // 导入本地化语言

// 引入时区数据
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

const store = useStore()
const route:RouteLocationNormalizedLoaded = useRoute()
const window_width:Ref<number> = ref(0);
const window_height:Ref<number> = ref(0);
  
dayjs.locale('zh-cn') // 使用本地化语言

const getWindowSize = () =>{
  window_width.value = window.innerWidth;
  window_height.value = window.innerHeight;
}

onBeforeMount(()=>{
  dayjs.extend(utc)
  dayjs.extend(timezone)

  // 设置默认语言为中文
  dayjs.locale('zh-cn')

  // 将时区设置为 "Asia/Shanghai"
  dayjs.tz.setDefault('Asia/Shanghai')
})
onMounted(() => {
  getWindowSize();
  window.addEventListener('resize', getWindowSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', getWindowSize);
});

watchEffect(() => {
  //显示侧边操作栏
  // if (route.path === '/login'||window_width.value<600) {
  //   sider_show.value = false;

  // }else{
  //   sider_show.value = true;

  // }
});



</script>

<style lang="scss">
  @import "./src/assets/scss/main.scss";
  
  .main-app{
    height: 100%;
  }
</style>