<template>
    <div class="machine-status">
        <div class="machine-status-title">
            <div class="machine-status-title-text font-125">
                {{title}}
            </div>
            <div class="machine-status-title-using font-125">
                qweqwe
            </div>
        </div>
        <div class="machine-status-chart" :style="{borderColor:chart_color,width:width,height:height}" ref="chart_dom">

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
import { toRefs } from 'vue'
import * as echarts from 'echarts';

interface Props {
}
export interface MachineStatusApi{
    chart_color?: string
    split_size?: number
    width?: string
    height?: string
    title?:string

}

const {alert} = useStore()
const router:Router = useRouter()
const server:string | undefined = inject('server');

const props = withDefaults(defineProps<MachineStatusApi>(), {
    chart_color: '#eea056',
    split_size:20,
    width: '300px',
    height: '200px',
    title:'Unknow',
})
let { chart_color,split_size,title,width,height } = toRefs(props)
let data:Ref<Array<number>> = ref([])
let x_data:Ref<Array<string>> = ref([])
let chart_dom:Ref<any> = ref(null)

const init_data = async ():Promise<void>=>{
    for(let index = 0; index < split_size.value; index++) {
    x_data.value.push('')
    }
    for(let index = 0; index < split_size.value; index++) {
        data.value.push(0)
    }
}

const interview_data = async (myChart:any):Promise<void>=>{
    setInterval(()=>{
        data.value.shift()
        data.value.push(Math.random()*100)
        myChart.setOption(option.value)
    },1500)
}
// 指定图表的配置项和数据
let option:ComputedRef<any> = computed(()=>{
    return {
        grid: {
            top:0,
            left:0,
            right:0,
            bottom:0,
            width:"auto", //图例宽度
            height:"100%", //图例高度
        },
        xAxis: {
            type: 'category',
            show:false,
            boundaryGap:false,
            data: x_data.value,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            show:false,
            splitLine: {
                show: false
            }
        },
        series: [
            {
                data: data.value,
                type: 'line',
                symbolSize: 0, 
                lineStyle: {
                    normal: {
                        width: 1,
                        color:chart_color.value,
                    }
                },
                areaStyle: { // 修改面积图的样式
                    color:chart_color.value,
                    opacity: 0.5 // 修改透明度
                },
                animation: false // 关闭渲染动画
            }
        ],
    }
});


onBeforeMount(()=>{
    init_data()
})
onMounted(()=>{
    let chart = echarts.init(chart_dom.value);
    chart.setOption(option.value)
    interview_data(chart)
})

const MakeMachineStatus = (val:Array<number>)=>{
    data.value = val
}
defineExpose({
    data,
    chart_color,
    MakeMachineStatus
})
</script>

<style lang="scss" scoped>
.machine-status{
    padding: 10px;
}
.machine-status-chart{
    border: 2px solid #eea056;
}
</style>

