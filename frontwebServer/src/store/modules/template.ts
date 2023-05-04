import { defineStore } from "pinia";

export interface TemplateState {
    template:string,
}

export default defineStore("temp_option",{
    state:(): { args:TemplateState } => ({
        args:{template:"template"},
    }),
    getters:{
        get_user:(state)=>{
            return state.args
        },
    },
    actions:{
        async auth_login_action(arg:TemplateState):Promise<void>{
            this.args = arg
        },
    },
    persist: true
})
