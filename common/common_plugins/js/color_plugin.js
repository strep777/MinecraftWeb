export default {
    install: (app, options) => {
        app.config.globalProperties.$fs_blue = ()=>{
            return "rgb(0, 132, 255)";
        }
        app.provide('input_options', options)
    }
}