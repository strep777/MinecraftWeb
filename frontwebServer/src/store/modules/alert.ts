import { defineStore } from "pinia";
import { Ref, computed } from "vue";
import { ref } from "vue";
import { ElMessage } from 'element-plus'
import { EpPropMergeType } from "element-plus/es/utils";

export interface Alert {
    showClose?: boolean,
    message:string,
    type:EpPropMergeType<StringConstructor, "success" | "warning" | "error" | "info", unknown> | undefined,
}

export default defineStore("alert_option",()=>{
    let alert_msg:Ref<Alert> = ref({
        showClose: false,
        message:'',
        type:'error' as EpPropMergeType<StringConstructor, "success" | "warning" | "error" | "info", unknown>,
    })

    //getter=computed
    let get_alert = computed(()=>alert_msg.value)


    async function alert_action(args:Alert):Promise<void>{
        ElMessage({
            showClose: args.showClose,
            message:args.message,
            type:args.type,
        })
    }

    return {
        alert_msg,
        get_alert,
        alert_action,
    }


},{
    persist:true
})