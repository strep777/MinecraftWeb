<template>
    <div class="index">
        <div class="index-frame">
            <div class="index-server-status-frame">
                <div class="index-server-status-cpu">
                    <MachineStatus chart_color="#eea056"></MachineStatus>
                </div>
                <div class="index-server-status-gpu">
                    <MachineStatus chart_color="#000"></MachineStatus>
                </div>
                <div class="index-server-status-memory">
                    <MachineStatus split_size="10"></MachineStatus>
                </div>
                <div class="index-server-status-disk">
                    <MachineStatus></MachineStatus>
                </div>
            </div>
            <div class="index-server-info-frame">
                <div class="index-server-info-name">

                </div>
                <div class="index-server-info-running-time">
                        <div class="index-server-info-running-time-text" v-pre>
                            服务器已经连续运行
                        </div>
                        <div class="index-server-info-running-time-status">
                            <div class="index-server-info-running-time-status-item" v-for="time in machine_time">
                                <div class="index-server-info-running-time-number">
                                    <n-number-animation
                                    :from="0"
                                    :to="365"
                                    :active="true"
                                    />
                                </div>
                                <div class="index-server-info-running-time-text">
                                    {{time.title}}
                                </div>
                            </div>
                        </div>
                </div>
                <div class="index-server-info-create-time">

                </div>
                <div class="index-server-info-system">
                    <div class="index-server-info-system-platform">

                    </div>
                </div>
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
import * as echarts from 'echarts';
const {alert} = useStore()
const router:Router = useRouter()
onMounted(()=>{

})

const machine_time:Array<any> = [
    {
        time:1000,
        title:'年'
    },
    {
        time:1000,
        title:'月'
    },
    {
        time:1000,
        title:'日'
    },
    {
        time:1000,
        title:'时'
    },
    {
        time:1000,
        title:'分'
    },
    {
        time:1000,
        title:'秒'
    }
]
</script>

<style lang="scss" scoped>
.index-server-info-running-time-status{
    display: grid;
    grid-template-columns: repeat(6,1fr);
    justify-items: center;
    padding: 30px;
    &>*{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
        align-items: center;
    }
}
.index-server-status-chart{
}
</style>