import { Commit,Module, MutationTree,ActionTree,GetterTree } from 'vuex'
import type {State} from '../store.ts'

export interface AuthState {
    username:string,
    password:string,
    auth_role:string,
    token?:string,
    is_login:boolean,
}

const course_database_option:Module<AuthState,State> = {
    namespaced:true,
    state:{
        username:'Null',
        password:'Null',
        auth_role:'Null',
        token:'Null',
        is_login:false,
    },
    getters:{
        get_user(state:AuthState){
            return state
        },
    },
    actions:{
        auth_login_commit({ commit },val:AuthState){
            commit('auth_login_mutation',val);
        },
        auth_username_commit({ commit },val:string){
            commit('auth_username_mutation',val);
        },
        auth_password_commit({ commit },val:string){
            commit('auth_password_mutation',val);
        },
        auth_is_login_commit({ commit },val:boolean){
            commit('auth_is_login_mutation',val);
        },
    },
    mutations:{
        auth_login_mutation(state:AuthState,args:AuthState){
            state.username = args.username
            state.password = args.password
            state.auth_role = args.auth_role
            state.token = args.token
            state.is_login = args.is_login
        },
    
        auth_username_mutation(state:AuthState,args:AuthState){
            if(args){
                state.username = args.toString();
            }
        },
    
        auth_password_mutation(state:AuthState,args:AuthState){
            if(args){
                state.password = args.toString();
            }
        },
        auth_is_login_mutation(state:AuthState,args:AuthState){
            if(typeof args === 'boolean'){
                state.is_login = args;
            }
        }
    }
}

export default course_database_option;