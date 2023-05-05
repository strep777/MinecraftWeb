import alert_option from '@st/modules/alert'
import { createPinia,Pinia } from 'pinia'
import piniaPluginPersistedstate,{createPersistedState} from 'pinia-plugin-persistedstate'


const useStore = ()=>({
    alert:alert_option(),
})


export default useStore;