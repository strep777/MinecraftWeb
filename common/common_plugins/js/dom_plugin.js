import {ref} from 'vue'
export default {
    install: (app, options) => {
        app.config.globalProperties.$is_phone = (vue_obj) => {
            let obj = vue_obj
            if(obj.currentStyle){
                return parseFloat(obj.currentStyle.width.replace('px',''))<600?true:false;
            }else{
                return parseFloat(getComputedStyle(obj).width.replace('px',''))<600?true:false;
            }
        }
        app.config.globalProperties.$dom_width_get = (vue_obj) => {
            let obj = vue_obj
            if(obj.currentStyle){
                return obj.currentStyle.width;
            }else{
                return getComputedStyle(obj).width;
            }
        }
        app.config.globalProperties.$dom_height_get = (vue_obj) => {
            let obj = vue_obj
            if(obj.currentStyle){
                return obj.currentStyle.height;
            }else{
                return getComputedStyle(obj).height;
            }
        }
        app.config.globalProperties.$dom_width_num_get = (vue_obj) => {
            let obj = vue_obj
            if(obj.currentStyle){
                return parseFloat(obj.currentStyle.width.replace('px',''));
            }else{
                return parseFloat(getComputedStyle(obj).width.replace('px',''));
            }
        }
        app.config.globalProperties.$dom_height_num_get = (vue_obj) => {
            let obj = vue_obj
            if(obj.currentStyle){
                return parseFloat(obj.currentStyle.height.replace('px',''));
            }else{
                return parseFloat(getComputedStyle(obj).height.replace('px',''));
            }
        }
      app.provide('dom_options', options)
    }
}