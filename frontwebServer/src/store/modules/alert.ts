import { defineStore } from "pinia";
import { Ref, computed } from "vue";
import { ref } from "vue";
import { MessageType, useMessage } from 'naive-ui'

export default defineStore("alert_option",()=>{
    let alert_msg:Ref<Alert> = ref({
        closable: false,
        keepAliveOnHover:true,
        duration:2000,
        message:'',
        type:'default',
    })

//   'success',
//   'info',
//   'warning',
//   'error',
//   'loading'
//   'loading'

    //getter=computed
    let get_alert = computed(()=>alert_msg.value)


    const alert_action = async (args:Alert):Promise<void>=>{
        const message = useMessage()

        message.create(
            args.message,
            {
                keepAliveOnHover: args.keepAliveOnHover,
                closable: args.closable,
                duration: args.duration,
                type: args.type as MessageType,
            }
        )
       
    }

    return {
        alert_msg,
        get_alert,
        alert_action,
    }


},{
    persist:true
})