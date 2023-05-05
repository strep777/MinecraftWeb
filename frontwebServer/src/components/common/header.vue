<template>
  <div class="header">
    <div class="header-title">
      <div class="header-logo">
        <img :src="logo" alt="" class="logo">
      </div>
      <div class="header-title-text font-150">
        MC服务器管理
      </div>
      <div class="header-router">
        <div class="header-router-item font-125" v-for="route_item in navbar_router" @mouseup="router.push({name:route_item.name})">
          <div class="header-router-item-icon">
            <i :class="route_item.icon"></i>
          </div>
          <div class="header-router-item-text">
            {{ route_item.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="header-extra">
      <div class="header-extra-item">
        <n-popover trigger="hover" placement="bottom">
          <template #trigger>
            <n-button quaternary>打赏&nbsp;<i class="ri-qr-code-line"></i></n-button>
          </template>
          <div>
            QR
          </div>
        </n-popover>
      </div>
      <div class="header-extra-item">
        v1.0.0
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import dayjs from 'dayjs';
import { onMounted,onUpdated, onBeforeMount,onBeforeUnmount,onUnmounted,onServerPrefetch} from 'vue';
import { ref,reactive,readonly,defineComponent} from 'vue';
import { computed,watch,watchEffect} from 'vue';
import {getCurrentInstance,inject,provide} from 'vue';
import { Ref,ComputedRef} from 'vue';
import {useRouter,Router} from 'vue-router';
import useStore from '@st/store';
import {storeToRefs} from 'pinia'
import { request, GraphQLClient,gql } from 'graphql-request'

import logo from '@/assets/images/png/logo.png'

import * as echarts from 'echarts';
const {alert} = useStore()
const router:Router = useRouter()
const server:string | undefined = inject('server');

const navbar_router:Array<NavbarRouter> = [
  {
    path: '/',
    name: 'dashboard',
    title:'仪表盘',
    icon:'ri-compass-3-line',
  },
  {
    path: '/',
    name: 'index',
    title:'服务器管理',
    icon:'ri-server-line',
  },
  {
    path: '/',
    name: 'index',
    title:'资源镜像站',
    icon:'ri-database-2-line'
  },
]
</script>

<style lang="scss" scoped>
.logo{
  $size:80px;
  width: $size;
  height: $size;
}
.header{
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px rgba($color: #000000, $alpha: 0.1);
}
.header-title{
  display: flex;
  align-items: center;
}
.header-router,.header-extra{
  display: flex;
  align-items: center;
}
.header-router{
  padding: 0px 20px;
}
.header-router-item{
  margin: 0px 10px;
  cursor: pointer;
  transition: .2s;
  display: flex;
  &>*{
    margin-right: 5px;
  }
  &:hover{
    color: #2080f0;
  }
}
.header-extra{
  justify-content: end;
}
.header-extra-item{
  padding: 0px 20px;
}
</style>