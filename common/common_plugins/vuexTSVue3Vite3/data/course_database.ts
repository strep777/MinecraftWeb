import { Commit,Module, MutationTree,ActionTree,GetterTree } from 'vuex'
import type {State} from '../store.ts'

export interface CourseDatabaseState {
    course_database:Array<any>,
    course_details:CourseSetting | any,
}

const course_database_option:Module<CourseDatabaseState,State> = {
    namespaced:true,
    state:{
      course_database: [],
      course_details: {},
    },
    getters:{
      get_course_num(state:CourseDatabaseState){
        return state.course_database.length
      },
    },
    actions:{
      course_database_commit({ commit }, val: Array<CourseSetting>) {
        commit('course_database_mutation', val);
      },
      course_details_commit({ commit }, val: CourseSetting) {
        commit('course_details_mutation', val);
      },
    },
    mutations:{
      course_database_mutation(state:CourseDatabaseState,args:Array<CourseSetting>){
        if(args){
            state.course_database = args
        }
      },
      course_details_mutation(state:CourseDatabaseState,args:CourseSetting){
          if(args){
              state.course_details = args
          }
      },
    }
}

export default course_database_option;