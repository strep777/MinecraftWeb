import { Commit,Module, MutationTree,ActionTree,GetterTree } from 'vuex'
import type {State} from '../store.ts'

interface TemplateClass{
}

export interface TemplateState {
    template:number,
}
const template_option:Module<TemplateState,State> = {
    namespaced:true,
    state:{
        template:0,
    },
    getters:{
        get_template(state:TemplateState){
            return state
        },
    },
    actions:{
        template_commit({ commit }, val:number) {
            commit('template_mutation', val);
        },
    },
    mutations:{
        template_mutation(state:TemplateState,args:number){
            if(args){
                state.template = args
            }
        },
    }
}
  export default template_option;

  