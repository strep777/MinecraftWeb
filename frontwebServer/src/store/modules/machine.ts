import { defineStore } from "pinia";
import { ComputedRef, Ref, computed } from "vue";
import { ref,inject } from "vue";
import { request, GraphQLClient,gql } from 'graphql-request'

export default defineStore("temp_option",()=>{
    const server:string | undefined = inject('server');
    let cpu:Ref<Cpu> = ref({
    })

    const machine_cpu_action = async (args:Cpu):Promise<void>=>{
        if(args){
            cpu.value = args
        }
    }
    return {
        cpu,
        machine_cpu_action
    }


})