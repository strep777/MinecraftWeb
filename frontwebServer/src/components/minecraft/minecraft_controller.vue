<template>
    <div class="minecraft-controller">
        <div class="minecraft-controller-frame">
            
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
import * as echarts from 'echarts';
const {alert} = useStore()
const router:Router = useRouter()
const server:string | undefined = inject('server');
</script>

<style lang="scss" scoped>
</style>