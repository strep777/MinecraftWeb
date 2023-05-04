import { defineStore } from "pinia";
import { ComputedRef, Ref, computed } from "vue";
import { ref,inject } from "vue";
import { request, GraphQLClient,gql } from 'graphql-request'

export interface TempCompositionState {
    temp:number,
}


export default defineStore("temp_option",()=>{
    const server:string | undefined = inject('server');
    let Temp:Ref<TempCompositionState> = ref({
        temp:1,
    })

    //getter=computed
    let get_temp = computed(()=>Temp.value)

    const tempadd = async (args:TempCompositionState):Promise<void>=>{
        Temp.value.temp++
      }
    return {
        Temp,
        tempadd,
    }


})