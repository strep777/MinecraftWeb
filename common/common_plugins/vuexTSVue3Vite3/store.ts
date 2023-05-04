import {createStore,Store,useStore as BaseUseStore} from 'vuex';
import type { InjectionKey } from 'vue';
import auth_option,{AuthState} from './data/auth.ts';
import course_database_option,{CourseDatabaseState} from './data/course_database.ts';


export interface State{
    
}
export interface StoreState extends State{
    auth_option:AuthState
    course_database_option:CourseDatabaseState
}
export const key: InjectionKey<Store<StoreState>> = Symbol()
// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return BaseUseStore(key);
}
export const store = createStore<State>({
    modules:{
        auth_option,
        course_database_option,
    }
});