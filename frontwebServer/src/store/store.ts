import auth_option from '@st/modules/auth'
import course_database_option from '@/store/modules/course/course_database'
import alert_option from '@st/modules/alert'
import course_details_option from '@st/modules/course/course_details'
import questions_option from '@st/modules/course/questions'
import { createPinia,Pinia } from 'pinia'
import piniaPluginPersistedstate,{createPersistedState} from 'pinia-plugin-persistedstate'


const useStore = ()=>({
    auth:auth_option(),
    course_database:course_database_option(),
    course_details:course_details_option(),
    alert:alert_option(),
    questions:questions_option(),
})


export default useStore;