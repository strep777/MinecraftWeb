<template>
    <div class="index">
        <div class="index-frame container">
            <div class="index-server-status-frame">
                <div class="index-server-status-title">
                    服务器硬件资源监控
                </div>
                <div class="index-server-status">
                    <div class="index-server-status-cpu">
                        <MachineStatus split_size="10" chart_color="#99CCFF" width="150px" height="100px" title="CPU"></MachineStatus>
                    </div>
                    <div class="index-server-status-gpu">
                        <MachineStatus split_size="10" chart_color="#99CC66" width="150px" height="100px" title="GPU"></MachineStatus>
                    </div>
                    <div class="index-server-status-memory">
                        <MachineStatus split_size="10" chart_color="#9933CC" width="150px" height="100px" title="Memory"></MachineStatus>
                    </div>
                    <div class="index-server-status-network">
                        <MachineStatus split_size="10" chart_color="#CCCC33" width="150px" height="100px" title="Network"></MachineStatus>
                    </div>
                </div>
            </div>
            <div class="index-server-main">
                <div class="index-server-main-info">
                    <div class="index-server-main-info-name">
                        <div class="index-server-main-info-name-title font-75 font-gray" v-pre>
                            服务器
                        </div>
                        <div class="index-server-main-info-name-text">
                            点此创建一个服务器
                        </div>
                    </div>
                    <div class="index-server-main-info-status">
                        <div class="index-server-main-info-status-title font-75 font-gray">
                            服务器当前状态
                        </div>
                        <div class="index-server-main-info-status-text">
                            <n-tag> 未启用 </n-tag>
                        </div>
                    </div>
                    <div class="index-server-main-info-port">
                        <div class="index-server-main-info-system-port-title font-75 font-gray">
                            服务器端口
                        </div>
                        <div class="index-server-main-info-system-port-text">
                            25565
                        </div>
                    </div>
                    <div class="index-server-main-info-running-time">
                            <div class="index-server-main-info-running-time-title font-75 font-gray" v-pre>
                                服务器已经连续运行
                            </div>
                            <div class="index-server-main-info-running-time-status">
                                <div class="index-server-main-info-running-time-status-item" v-for="time in machine_time">
                                    <div class="index-server-main-info-running-time-number">
                                        <n-number-animation
                                        :from="0"
                                        :to="time.time"
                                        :active="true"
                                        />
                                    </div>
                                    <div class="index-server-main-info-running-time-text">
                                        {{time.title}}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="index-server-main-command">
                    <div class="index-server-main-command-terminal">

                    </div>
                    <div class="index-server-main-command-sendcode">
                        <n-mention :options="codes" default-value="/" :prefix="['/']" v-model="send_code"/>
                    </div>
                </div>
            </div>
            <div class="index-server-list">
                <div class="index-server-list-item" v-for="server in servers">
                    <div class="index-server-list-item-status">
                        <div class="index-server-list-item-status-light" :style="server.status==0?{backgroundColor:'#FF6666'}:server.status==1?{backgroundColor:'#99CC66'}:server.status==2?{backgroundColor:'#FFFF66'}:{backgroundColor:'#eee'}">

                        </div>
                        {{ server.label }}
                    </div>
                    <div class="index-server-list-item-label">
                        {{ server.label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import dayjs from 'dayjs';
import { onMounted,onUpdated, onBeforeMount,onBeforeUnmount,onUnmounted,onServerPrefetch, VNodeChild} from 'vue';
import { ref,reactive,readonly,defineComponent,h} from 'vue';
import { computed,watch,watchEffect} from 'vue';
import {getCurrentInstance,inject,provide} from 'vue';
import { Ref,ComputedRef} from 'vue';
import {useRouter,Router} from 'vue-router';
 import useStore from '@st/store';
import * as echarts from 'echarts';
import { MentionOption,MenuOption } from 'naive-ui';
import { McCommands } from '@libs/custom/mc_command_lib';
const {alert} = useStore()
const router:Router = useRouter()
onMounted(()=>{

})

let send_code = ref<string>('')

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
        time:24,
        title:'时'
    },
    {
        time:60,
        title:'分'
    },
    {
        time:60,
        title:'秒'
    }
]

const codes = ref<MentionOption[]>(McCommands())  

const servers = ref<ServerMenu[]>([
    {
        label:'123',
        key: '1',
        status: 0,
        disabled: true,
    },
])
</script>

<style lang="scss" scoped>
.index-frame{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
}
//machine status
.index-server-status{
    display: grid;
    justify-items: center;
}
//status text
.index-server-status-frame{
    display: grid;
    justify-items: center;
    padding: 20px;
}
//main
.index-server-main{
    padding: 20px;
}
//info
.index-server-main-info{
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 20px;
}
.index-server-main-info-name{
    grid-column: 1/4;
}
.index-server-main-info-running-time-status{
    display: flex;
    align-items: center;
    &>*{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
        align-items: center;
    }
}

//list
.index-server-list{
    padding: 0px 20px;
    height: 80vh;
    overflow-y: scroll;
}

.index-server-list-item-status-light{
    width: 10px;
    height: 10px;
}

</style>